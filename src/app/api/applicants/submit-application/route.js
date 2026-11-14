import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const maxDuration = 60;

const GMAIL_USER = process.env.GMAIL_USER || "chandansaini480@gmail.com";
const GMAIL_PASS = process.env.GMAIL_APP_PASS || "zokfozmmwiiqwnhl";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const location = String(formData.get("location") || "").trim();
    const designation = String(formData.get("designation") || "").trim();
    const requiredStaff = String(formData.get("requiredStaff") || "1").trim();
    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const file = formData.get("cv");

    if (!name || !email || !phone || !location || !designation) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!file || !(file instanceof File) || file.size === 0) {
      return NextResponse.json(
        { error: "Please attach a valid CV file." },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const originalFileName = file.name || "candidate-cv.pdf";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #b00000, #800000); padding: 24px; color: #ffffff; text-align: center;">
          <h1 style="margin: 0; font-size: 22px; font-weight: bold; letter-spacing: 0.5px;">New Job Application Received</h1>
          <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.9;">Buyzaar Mart Careers Portal</p>
        </div>
        
        <div style="padding: 24px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151; width: 40%;">Candidate Name</td>
              <td style="padding: 12px 8px; color: #111827;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6; background: #fafafa;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Contact Number</td>
              <td style="padding: 12px 8px; color: #111827;"><a href="tel:${phone}" style="color: #b00000; text-decoration: none; font-weight: 600;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Email Address</td>
              <td style="padding: 12px 8px; color: #111827;"><a href="mailto:${email}" style="color: #b00000; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6; background: #fafafa;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Applied Location</td>
              <td style="padding: 12px 8px; color: #111827; font-weight: 600;">${location}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Applied Role / Designation</td>
              <td style="padding: 12px 8px; color: #111827; font-weight: 600;">${designation}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6; background: #fafafa;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Staff Requirement</td>
              <td style="padding: 12px 8px; color: #111827;">${requiredStaff} Position(s)</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Attached CV File</td>
              <td style="padding: 12px 8px; color: #059669; font-weight: bold;">📎 ${originalFileName} (Attached Below)</td>
            </tr>
            <tr style="background: #fafafa;">
              <td style="padding: 12px 8px; font-weight: bold; color: #374151;">Submission Date & Time</td>
              <td style="padding: 12px 8px; color: #6b7280;">${submittedAt}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 14px; background: #fef2f2; border: 1px solid #fee2e2; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-size: 13px; color: #991b1b; font-weight: 600;">
              📎 Candidate's CV document is attached directly with this email. You can preview or download it below.
            </p>
          </div>
        </div>

        <div style="background: #f9fafb; padding: 14px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
          The Buyzaar Mart Careers Portal System · Sent to ${GMAIL_USER}
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Buyzaar Mart Careers" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: email,
      subject: `New Job Application: ${designation} - ${location} (${name})`,
      text: `New Application Received:\n\nCandidate: ${name}\nPhone: ${phone}\nEmail: ${email}\nRole: ${designation}\nLocation: ${location}\nTime: ${submittedAt}\n\n(CV Attached: ${originalFileName})`,
      html: htmlContent,
      attachments: [
        {
          filename: originalFileName,
          content: fileBuffer,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Application and CV delivered successfully.",
    });
  } catch (error) {
    console.error("Nodemailer send error:", error);
    return NextResponse.json(
      { error: "Could not send application email. Please try again later." },
      { status: 500 }
    );
  }
}
