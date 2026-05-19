"use client";
import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "60caa47f-091a-4c7e-8676-e70c5acda1ea";

export default function Consent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    phone_number: "",
    sms_consent: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const payload = {
      access_key:   WEB3FORMS_ACCESS_KEY,
      botcheck:     false,
      subject:      "New Meta Verification Form Submission",
      first_name:   formData.first_name,
      last_name:    formData.last_name,
      company:      formData.company || "Not provided",
      phone_number: formData.phone_number,
      sms_consent:  formData.sms_consent ? "Yes" : "No",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Web3Forms response:", result); // visible in browser console

      if (result.success) {
        setSubmitted(true);
      } else {
        // Show the actual error from web3forms
        setErrorMsg(result.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>Meta Business Verification</h2>
        <p style={styles.subtitle}>
          Complete the form below to apply for Meta Business Verification. Our
          team will review your details and get in touch shortly.
        </p>

        {submitted ? (
          <p style={styles.successMessage}>
            ✅ Your form has been submitted successfully. We'll be in touch soon!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>

            {errorMsg && (
              <div style={styles.errorBanner}>
                ⚠️ {errorMsg}
              </div>
            )}

            <div style={styles.fieldGroup}>
              <label style={styles.label}>
                First Name <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="first_name"
                required
                value={formData.first_name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>
                Last Name <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="last_name"
                required
                value={formData.last_name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>
                Phone Number <span style={styles.required}>*</span>
              </label>
              <input
                type="tel"
                name="phone_number"
                required
                value={formData.phone_number}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <p style={styles.termsText}>
              By clicking Sign Up, you agree to our{" "}
              <a href="#" style={styles.link}>Terms of Service</a> and that you
              have read our <a href="#" style={styles.link}>Privacy Policy</a>.
            </p>

            <div style={styles.checkboxRow}>
              <input
                type="checkbox"
                name="sms_consent"
                id="sms_consent"
                required
                checked={formData.sms_consent}
                onChange={handleChange}
                style={styles.checkbox}
              />
              <label htmlFor="sms_consent" style={styles.checkboxLabel}>
                I hereby authorize to send notifications on SMS/ Messages/Promotional
                /informational messages
              </label>
            </div>

            <div style={styles.buttonWrapper}>
              <button type="submit" style={styles.button} disabled={loading}>
                {loading ? "Submitting..." : "Sign up"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    minHeight: "100vh",
    boxSizing: "border-box",
  },
  container: {
    width: "100%",
    maxWidth: "520px",
    backgroundColor: "#fff",
    padding: "30px 20px",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#000",
  },
  subtitle: {
    fontSize: "13px",
    color: "#666",
    marginBottom: "24px",
    lineHeight: "1.6",
  },
  fieldGroup: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    fontSize: "13px",
    color: "#333",
    marginBottom: "4px",
  },
  required: {
    color: "red",
  },
  input: {
    width: "100%",
    padding: "8px 10px",
    border: "1px solid #ccc",
    borderRadius: "2px",
    fontSize: "14px",
    boxSizing: "border-box",
    outline: "none",
  },
  termsText: {
    textAlign: "center",
    fontSize: "13px",
    color: "#888",
    marginTop: "20px",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  link: {
    color: "#4a9fd4",
    textDecoration: "none",
  },
  checkboxRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "24px",
    fontSize: "14px",
    color: "#333",
  },
  checkbox: {
    marginTop: "2px",
    width: "16px",
    height: "16px",
    flexShrink: 0,
    cursor: "pointer",
  },
  checkboxLabel: {
    fontSize: "14px",
    color: "#333",
    lineHeight: "1.5",
    cursor: "pointer",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#222",
    color: "#fff",
    border: "none",
    padding: "10px 36px",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "2px",
    letterSpacing: "0.5px",
  },
  errorBanner: {
    backgroundColor: "#fff3f3",
    border: "1px solid #ffcccc",
    color: "#cc0000",
    padding: "10px 14px",
    borderRadius: "4px",
    fontSize: "13px",
    marginBottom: "16px",
    lineHeight: "1.5",
  },
  successMessage: {
    fontSize: "15px",
    color: "#2e7d32",
    marginTop: "30px",
    textAlign: "center",
    lineHeight: "1.6",
  },
};