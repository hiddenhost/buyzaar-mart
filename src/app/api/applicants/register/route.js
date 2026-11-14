import { randomUUID } from "node:crypto";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import { validApplicantJob, getRequiredStaffCount } from "@/lib/applicant-jobs";

export const runtime = "nodejs";
export const maxDuration = 60;
const MAX_CV_SIZE = 2 * 1024 * 1024; // 2 MB
const EXTENSIONS = new Set(["pdf", "doc", "docx", "jpg", "jpeg", "png"]);

function validFileSignature(extension, bytes) {
  if (extension === "pdf") return bytes.subarray(0, 5).toString("ascii") === "%PDF-";
  if (extension === "doc") return bytes.subarray(0, 8).equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]));
  if (extension === "docx") return bytes.subarray(0, 2).toString("ascii") === "PK";
  if (extension === "jpg" || extension === "jpeg") return bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  if (extension === "png") return bytes.length >= 8 && bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  return false;
}

function uploadToCloudinary(buffer, publicId, extension) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        resource_type: "raw",
        folder: "buyzaar/applicant-cvs",
        public_id: `${publicId}.${extension}`,
        overwrite: true,
      },
      (error, result) => (error ? reject(error) : resolve(result))
    ).end(buffer);
  });
}

export async function POST(request) {
  try {
    const form = await request.formData();
    const name = String(form.get("name") ?? "").trim().replace(/\s+/g, " ");
    const email = String(form.get("email") ?? "").trim().toLowerCase();
    const phone = String(form.get("phone") ?? "").trim();
    const location = String(form.get("location") ?? "");
    const designation = String(form.get("designation") ?? "");
    const file = form.get("cv");

    if (name.length < 2 || name.length > 120) {
      return NextResponse.json({ error: "Enter a valid name (2–120 characters)." }, { status: 400 });
    }
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json({ error: "Enter a valid 10-digit mobile number." }, { status: 400 });
    }
    if (!validApplicantJob(location, designation)) {
      return NextResponse.json({ error: "Select a valid location and designation." }, { status: 400 });
    }
    if (!(file instanceof File) || !file.size) {
      return NextResponse.json({ error: "Upload your CV to continue." }, { status: 400 });
    }
    if (file.size > MAX_CV_SIZE) {
      return NextResponse.json({ error: "Your CV must be 2 MB or smaller." }, { status: 400 });
    }

    const originalFileName = file.name.replace(/[\\/\r\n]/g, "_").slice(0, 255);
    const extension = originalFileName.split(".").pop()?.toLowerCase();
    if (!EXTENSIONS.has(extension)) {
      return NextResponse.json({ error: "Upload a PDF, DOC, DOCX, JPG, or PNG file." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    if (!validFileSignature(extension, buffer)) {
      return NextResponse.json({ error: "The file content does not match a valid document or image file." }, { status: 400 });
    }

    // 1. Upload CV to Cloudinary to generate a direct download URL
    const publicId = `applicant-${Date.now()}-${randomUUID().slice(0, 8)}`;
    const cloudResult = await uploadToCloudinary(buffer, publicId, extension);
    const cvViewUrl = cloudResult.secure_url;
    // Add fl_attachment flag so clicking triggers immediate file download
    const cvDownloadUrl = cvViewUrl.includes("/raw/upload/")
      ? cvViewUrl.replace("/raw/upload/", "/raw/upload/fl_attachment/")
      : cvViewUrl;
    const requiredStaff = getRequiredStaffCount(location, designation) || 1;

    // 2. Return success with payload for client-side Web3Forms submission to info@thebuyzaarmart.com
    return NextResponse.json({
      success: true,
      message: "Application uploaded successfully.",
      applicantData: {
        name,
        email,
        phone: phone || "Not Provided",
        location,
        designation,
        requiredStaff,
        cvFileName: originalFileName,
        cvUrl: cvViewUrl,
        cvDownloadUrl,
        submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      },
    });
  } catch (error) {
    console.error("Application processing error:", error);
    return NextResponse.json(
      { error: "Could not process your CV upload. Please check Cloudinary configuration or try again." },
      { status: 500 }
    );
  }
}
