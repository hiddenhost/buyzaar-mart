import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { APPLICANT_COOKIE, applicantCookieOptions, createApplicantSession } from "@/lib/applicant-session";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { email: rawEmail, password } = await request.json();
    const email = String(rawEmail ?? "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || typeof password !== "string" || !password) {
      return NextResponse.json({ error: "Enter a valid email address and password." }, { status: 400 });
    }
    const applicant = await prisma.applicant.findUnique({ where: { email } });
    if (!applicant || !(await bcrypt.compare(password, applicant.passwordHash))) {
      return NextResponse.json({ error: "Email or password is incorrect." }, { status: 401 });
    }
    const response = NextResponse.json({ message: "Signed in successfully." });
    response.cookies.set(APPLICANT_COOKIE, createApplicantSession(applicant.id), applicantCookieOptions);
    return response;
  } catch (error) {
    console.error("Applicant login failed:", error);
    return NextResponse.json({ error: "Login is temporarily unavailable. Please try again." }, { status: 503 });
  }
}
