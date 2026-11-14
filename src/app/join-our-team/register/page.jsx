"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  FileText,
  LoaderCircle,
  UploadCloud,
  UserRound,
  CheckCircle2,
  Users,
  Eye,
  EyeOff,
} from "lucide-react";
import {
  applicantLocations,
  locationStaffingMap,
  allDesignations,
  getTotalRequiredCountForDesignation,
  getRequiredStaffCount,
  validApplicantJob,
} from "@/lib/applicant-jobs";

const WEB3FORMS_ACCESS_KEY = "60caa47f-091a-4c7e-8676-e70c5acda1ea";

const inputClass =
  "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#b00000] focus:ring-4 focus:ring-red-100";

function Field({ label, hint, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800">
        {label}
        <span className="ml-1 text-[#b00000]">*</span>
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}

export default function ApplicantRegistrationPage() {
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const fileInput = useRef(null);

  // Available roles for the currently selected location
  const availableRoles = location ? locationStaffingMap[location] || [] : [];

  // Required count for the currently selected designation
  const requiredCount =
    location && designation
      ? getRequiredStaffCount(location, designation)
      : designation
        ? getTotalRequiredCountForDesignation(designation)
        : null;

  function handleFile(selected) {
    setError("");
    setSuccess("");
    if (!selected) {
      setFile(null);
      return;
    }
    if (!/\.(pdf|doc|docx|jpg|jpeg|png)$/i.test(selected.name)) {
      setFile(null);
      if (fileInput.current) fileInput.current.value = "";
      setError("Choose a PDF, DOC, DOCX, JPG, or PNG file.");
      return;
    }
    if (selected.size > 2 * 1024 * 1024) {
      setFile(null);
      if (fileInput.current) fileInput.current.value = "";
      setError("Your CV must be 2 MB or smaller.");
      return;
    }
    setFile(selected);
  }

  async function submit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!file) {
      setError("Upload your CV to continue.");
      return;
    }
    if (!validApplicantJob(location, designation)) {
      setError("Select a valid location and designation.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
      return;
    }

    const passwordVal = form.password.value;
    if (passwordVal.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(passwordVal)) {
      setError("Password must contain at least one uppercase letter, one lowercase letter, and one number.");
      return;
    }

    const nameVal = form.name.value.trim();
    const emailVal = form.email.value.trim().toLowerCase();
    const phoneVal = phone.trim();
    const requiredStaff = getRequiredStaffCount(location, designation) || 1;
    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    setLoading(true);
    setProgress(30);

    try {
      // Direct FormSubmit.co submission with file attachment (100% Free file uploads)
      const formData = new FormData();
      formData.append(
        "_subject",
        `New Job Application: ${designation} - ${location} (${nameVal})`
      );
      formData.append("_template", "table");
      formData.append("_captcha", "false");
      formData.append("Applicant Name", nameVal);
      formData.append("Contact Number", phoneVal);
      formData.append("Email Address", emailVal);
      formData.append("Applied Location", location);
      formData.append("Applied Role", designation);
      formData.append("Staff Requirement", `${requiredStaff} Open Position(s)`);
      formData.append("Submission Time", submittedAt);
      // Attach the CV file directly (FormSubmit supports free file attachments up to 10MB)
      formData.append("attachment", file, file.name);

      setProgress(60);

      // Submit to main endpoint https://formsubmit.co/chandansaini480@gmail.com
      // (The /ajax/ endpoint only accepts JSON and strips attachments; the main endpoint with Accept: application/json handles attachments properly)
      const emailResponse = await fetch("https://formsubmit.co/chandansaini480@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const emailResult = await emailResponse.json();

      setProgress(100);

      if (emailResponse.ok && (emailResult.success === "true" || emailResult.success === true || emailResult.message || emailResult.ok)) {
        setSuccess(
          "Your application and CV have been successfully submitted! Our HR team will review your application and contact you shortly."
        );
        form.reset();
        setLocation("");
        setDesignation("");
        setPhone("");
        setFile(null);
        if (fileInput.current) fileInput.current.value = "";
      } else {
        throw new Error(
          emailResult.message || "Could not submit application. Please try again."
        );
      }
    } catch (err) {
      setError(
        err.message ||
        "We could not complete your registration. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#fff9f7] px-4 pb-20 pt-32 sm:px-6 sm:pt-36">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-[0_25px_80px_-35px_rgba(60,20,20,.3)] ring-1 ring-black/5">
        <div className="grid lg:grid-cols-[.78fr_1.22fr]">
          <aside className="relative overflow-hidden bg-[#b00000] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
            <div className="relative">
              <span className="inline-flex rounded-full bg-white/15 p-3">
                <UserRound size={22} />
              </span>
              <p className="mt-8 text-sm font-bold uppercase tracking-[.18em] text-red-100">
                Careers at Buyzaar Mart
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Build your career with us
              </h1>
              <p className="mt-5 leading-7 text-red-50">
                Join our growing retail team and help us make everyday shopping better across
                Haridwar and Noida. Explore our current store openings and apply below.
              </p>
              <div className="mt-9 space-y-4 text-sm text-red-50">
                <p className="flex items-center gap-3">
                  <CheckCircle2 size={18} /> 3 Active Store Locations
                </p>
                <p className="flex items-center gap-3">
                  <CheckCircle2 size={18} /> 18 Immediate Staff Openings
                </p>

                <p className="flex items-center gap-3">
                  <CheckCircle2 size={18} /> Fast CV Screening & Response
                </p>
              </div>

              {/* Quick glance card */}
              <div className="mt-10 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-red-200">
                  Total Staff Needed
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white">18</span>
                  <span className="text-sm text-red-100">positions across 13 store roles</span>
                </div>
                <div className="mt-3 border-t border-white/15 pt-3 text-xs text-red-100 space-y-1">
                  <p>• Haridwar: 7 roles (12 staff)</p>
                  <p>• Noida Sec-44: 3 roles (3 staff)</p>
                  <p>• Noida Sec-126: 3 roles (3 staff)</p>
                </div>
              </div>
            </div>
          </aside>

          <section className="p-6 sm:p-9 lg:p-11">
            <div>
              <p className="text-sm font-semibold text-[#b00000]">Applicant registration</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Join Our Team
              </h2>

            </div>

            <form className="mt-7 space-y-5" onSubmit={submit} encType="multipart/form-data">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name">
                  <input
                    className={inputClass}
                    type="text"
                    name="name"
                    autoComplete="name"
                    minLength={2}
                    maxLength={120}
                    placeholder="Your full name"
                    required
                  />
                </Field>
                <Field label="Email Address">
                  <input
                    className={inputClass}
                    type="email"
                    name="email"
                    autoComplete="email"
                    maxLength={254}
                    placeholder="you@example.com"
                    required
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Contact Number" hint="10-digit mobile number (starts with 6, 7, 8, or 9)">
                  <input
                    className={inputClass}
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setPhone(val);
                    }}
                    autoComplete="tel"
                    inputMode="numeric"
                    maxLength={10}
                    pattern="[6-9][0-9]{9}"
                    title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
                    placeholder="Enter 10-digit mobile number"
                    required
                  />
                </Field>

                <Field
                  label="Password"
                  hint="Min. 8 characters with uppercase, lowercase & number"
                >
                  <div className="relative">
                    <input
                      className={`${inputClass} pr-12`}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="new-password"
                      minLength={8}
                      maxLength={72}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
                      placeholder="Enter a strong password"
                      required
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-gray-500 hover:text-gray-800"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Location Dropdown */}
                <Field label="Location">
                  <div className="relative">
                    <select
                      className={inputClass}
                      value={location}
                      onChange={(event) => {
                        setLocation(event.target.value);
                      }}
                      required
                    >
                      <option value="">Select location</option>
                      {applicantLocations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </Field>

                {/* Designation Dropdown */}
                <Field label="Designation / Role">
                  <div className="relative">
                    <select
                      className={inputClass}
                      value={designation}
                      onChange={(event) => setDesignation(event.target.value)}
                      required
                    >
                      <option value="">Select a role</option>
                      {location && availableRoles.length > 0 ? (
                        availableRoles.map((role) => (
                          <option key={role.designation} value={role.designation}>
                            {role.designation} ({role.requiredCount} Required)
                          </option>
                        ))
                      ) : (
                        allDesignations.map((roleName) => {
                          const totalCount = getTotalRequiredCountForDesignation(roleName);
                          return (
                            <option key={roleName} value={roleName}>
                              {roleName} ({totalCount} Required)
                            </option>
                          );
                        })
                      )}
                    </select>
                  </div>
                </Field>
              </div>

              {/* Informational Staffing Requirement Box */}
              {designation && requiredCount !== null && (
                <div
                  aria-live="polite"
                  className="rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-4 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#b00000] p-2 text-white">
                      <Users size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#b00000]">
                          Staffing Requirement Details
                        </span>
                        {location && (
                          <span className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-bold text-[#b00000] shadow-sm">
                            {location}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-base font-bold text-gray-900">
                        Role: {designation}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#b00000]">
                        Staffing Requirement: {requiredCount}{" "}
                        {requiredCount === 1 ? "Employee" : "Employees"}
                      </p>

                    </div>
                  </div>
                </div>
              )}

              <Field
                label="Upload your CV"
                hint="PDF, DOC, DOCX, JPG, or PNG · Maximum size 2 MB"
              >
                <input
                  ref={fileInput}
                  className="sr-only"
                  id="cv-upload"
                  name="attachment"
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png"
                  onChange={(event) => handleFile(event.target.files?.[0])}
                />
                <label
                  htmlFor="cv-upload"
                  className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-5 text-center transition hover:border-[#b00000] hover:bg-red-50/40"
                >
                  <UploadCloud size={23} className="text-[#b00000]" />
                  <span className="mt-2 text-sm font-semibold text-gray-800">
                    Choose a CV file
                  </span>
                  <span className="mt-1 text-xs text-gray-500">
                    PDF, DOC or DOCX (up to 1 MB)
                  </span>
                </label>
                {file && (
                  <div className="mt-3 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-3">
                    <FileText size={20} className="shrink-0 text-green-700" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-800">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(1)} KB · Ready to upload
                      </p>
                    </div>
                    <CheckCircle2 size={18} className="text-green-700" />
                  </div>
                )}
                {loading && (
                  <div className="mt-3">
                    <div className="mb-1 flex justify-between text-xs text-gray-600">
                      <span>Uploading CV & Submitting to info@thebuyzaarmart.com…</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-[#b00000] transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </Field>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
                >
                  {error}
                </p>
              )}
              {success && (
                <div
                  role="status"
                  className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800 space-y-1"
                >
                  <p className="font-bold flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-600" />
                    Application Submitted Successfully!
                  </p>
                  <p>{success}</p>
                </div>
              )}
              <button
                disabled={loading}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#b00000] px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-[#8f0000] disabled:cursor-wait disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <LoaderCircle className="animate-spin" size={18} /> Submitting Application…
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
