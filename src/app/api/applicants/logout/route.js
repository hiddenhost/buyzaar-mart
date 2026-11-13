import { NextResponse } from "next/server";
import { APPLICANT_COOKIE } from "@/lib/applicant-session";

export async function POST() {
  const response = NextResponse.json({ message: "Signed out." });
  response.cookies.set(APPLICANT_COOKIE, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 0 });
  return response;
}
