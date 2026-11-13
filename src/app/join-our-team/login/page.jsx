"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, LoaderCircle, UserRound } from "lucide-react";

export default function ApplicantLoginPage() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event) {
    event.preventDefault(); setError(""); setLoading(true);
    const form = event.currentTarget;
    try {
      const response = await fetch("/api/applicants/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: form.email.value, password: form.password.value }) });
      const result = await response.json();
      if (!response.ok) setError(result.error || "Unable to sign in. Please check your details.");
      else window.location.href = "/join-our-team/dashboard";
    } catch { setError("Network error. Check your connection and try again."); }
    finally { setLoading(false); }
  }

  return <main className="min-h-screen bg-[#fff9f7] px-4 pb-16 pt-32 sm:px-6 sm:pt-36"><section className="mx-auto max-w-md rounded-3xl bg-white p-7 shadow-xl ring-1 ring-black/5 sm:p-10">
    <span className="inline-flex rounded-full bg-red-50 p-3 text-[#b00000]"><UserRound size={23} /></span><p className="mt-6 text-sm font-semibold text-[#b00000]">Applicant portal</p><h1 className="mt-2 text-3xl font-bold text-gray-900">Welcome back</h1><p className="mt-2 text-sm leading-6 text-gray-600">Sign in to view your Buyzaar Mart application details.</p>
    <form className="mt-8 space-y-5" onSubmit={submit}>
      <div><label className="text-sm font-semibold text-gray-800" htmlFor="email">Email address</label><input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#b00000] focus:ring-4 focus:ring-red-100" id="email" name="email" type="email" autoComplete="email" required /></div>
      <div><label className="text-sm font-semibold text-gray-800" htmlFor="password">Password</label><div className="relative"><input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 outline-none focus:border-[#b00000] focus:ring-4 focus:ring-red-100" id="password" name="password" type={visible ? "text" : "password"} autoComplete="current-password" required /><button type="button" aria-label={visible ? "Hide password" : "Show password"} onClick={() => setVisible(!visible)} className="absolute right-3 top-1/2 mt-1 -translate-y-1/2 p-1 text-gray-500">{visible ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></div>
      {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>}
      <button disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#b00000] px-5 py-3.5 font-semibold text-white transition hover:bg-[#8f0000] disabled:opacity-70">{loading ? <><LoaderCircle className="animate-spin" size={18} /> Signing in…</> : "Login"}</button>
    </form>
    <p className="mt-6 text-center text-sm text-gray-600">Don&apos;t have an account? <Link className="font-semibold text-[#b00000] hover:underline" href="/join-our-team/register">Register Now</Link></p>
  </section></main>;
}
