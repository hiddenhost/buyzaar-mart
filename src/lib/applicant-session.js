import { createHmac, timingSafeEqual } from "node:crypto";

export const APPLICANT_COOKIE = "buyzaar_applicant_session";
const SESSION_SECONDS = 60 * 60 * 24 * 7;

function secret() {
  const value = process.env.APPLICANT_SESSION_SECRET;
  if (!value || value.length < 32) throw new Error("APPLICANT_SESSION_SECRET must be set to a random value of at least 32 characters.");
  return value;
}

function sign(value) {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

export function createApplicantSession(applicantId) {
  const payload = Buffer.from(JSON.stringify({ sub: applicantId, exp: Math.floor(Date.now() / 1000) + SESSION_SECONDS })).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifyApplicantSession(token) {
  if (!token || typeof token !== "string") return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;
  const expected = Buffer.from(sign(payload));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return null;
  try {
    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return decoded.sub && decoded.exp > Math.floor(Date.now() / 1000) ? decoded.sub : null;
  } catch {
    return null;
  }
}

export const applicantCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: SESSION_SECONDS,
};
