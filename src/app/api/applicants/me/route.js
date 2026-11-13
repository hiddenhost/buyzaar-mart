import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { APPLICANT_COOKIE, verifyApplicantSession } from "@/lib/applicant-session";

export const runtime = "nodejs";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const applicantId = verifyApplicantSession(cookieStore.get(APPLICANT_COOKIE)?.value);
    if (!applicantId) return NextResponse.json({ error: "Please sign in to continue." }, { status: 401 });
    const applicant = await prisma.applicant.findUnique({
      where: { id: applicantId },
      select: { name: true, email: true, location: true, designation: true, cvUrl: true, cvFileName: true, cvFileSize: true, createdAt: true },
    });
    if (!applicant) return NextResponse.json({ error: "Applicant account not found." }, { status: 404 });
    return NextResponse.json({ applicant });
  } catch (error) {
    console.error("Applicant profile lookup failed:", error);
    return NextResponse.json({ error: "Profile is temporarily unavailable." }, { status: 503 });
  }
}
