"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileText, LoaderCircle, LogOut, MapPin, UserRound } from "lucide-react";

export default function ApplicantDashboardPage() {
  const [applicant, setApplicant] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    fetch("/api/applicants/me").then(async (response) => {
      const data = await response.json();
      if (response.status === 401) { router.replace("/join-our-team/login"); return; }
      if (!response.ok) throw new Error(data.error || "Unable to load your profile.");
      setApplicant(data.applicant);
    }).catch((cause) => setError(cause.message)).finally(() => setLoading(false));
  }, [router]);
  async function logout() { await fetch("/api/applicants/logout", { method: "POST" }); router.replace("/join-our-team/login"); }

  return <main className="min-h-screen bg-[#fff9f7] px-4 pb-16 pt-32 sm:px-6 sm:pt-36"><section className="mx-auto max-w-3xl rounded-3xl bg-white p-7 shadow-xl ring-1 ring-black/5 sm:p-10">
    {loading ? <div className="flex justify-center py-16 text-[#b00000]"><LoaderCircle className="animate-spin" /></div> : error ? <div role="alert" className="text-center"><p className="text-red-700">{error}</p><Link className="mt-4 inline-block font-semibold text-[#b00000]" href="/join-our-team/login">Back to login</Link></div> : applicant && <>
      <div className="flex flex-wrap items-start justify-between gap-4"><div><span className="inline-flex rounded-full bg-red-50 p-3 text-[#b00000]"><UserRound size={22} /></span><p className="mt-5 text-sm font-semibold text-[#b00000]">Applicant dashboard</p><h1 className="mt-2 text-3xl font-bold text-gray-900">Hello, {applicant.name}</h1><p className="mt-2 text-gray-600">Your application details are shown below.</p></div><button onClick={logout} className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:border-red-200 hover:text-[#b00000]"><LogOut size={17} /> Logout</button></div>
      <dl className="mt-8 grid gap-4 sm:grid-cols-2">{[["Email address", applicant.email], ["Location", applicant.location], ["Designation", applicant.designation], ["Registered", new Date(applicant.createdAt).toLocaleDateString()]].map(([label, value]) => <div key={label} className="rounded-2xl bg-gray-50 p-5"><dt className="text-sm text-gray-500">{label}</dt><dd className="mt-1 font-semibold text-gray-900">{value}</dd></div>)}</dl>
      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-gray-100 p-5"><FileText size={21} className="text-[#b00000]" /><div><p className="text-sm font-semibold text-gray-900">{applicant.cvFileName}</p><p className="mt-1 text-xs text-gray-500">CV uploaded · {(applicant.cvFileSize / 1024).toFixed(1)} KB</p></div></div>
      <p className="mt-6 flex items-center gap-2 text-sm text-gray-500"><MapPin size={16} /> Your application has been received by Buyzaar Mart.</p>
    </>}
  </section></main>;
}
