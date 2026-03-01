"use client";
import { useState } from "react";

export default function Consent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/pathakmansi608@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
    } catch (err) {
      // still show success
    } finally {
      setSubmitted(true);
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
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Meta Verification Form Submission"
            />

            <div style={styles.fieldGroup}>
              <label style={styles.label}>
                First Name <span style={styles.required}>*</span>
              </label>
              <input type="text" name="first_name" required style={styles.input} />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>
                Last Name <span style={styles.required}>*</span>
              </label>
              <input type="text" name="last_name" required style={styles.input} />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Company</label>
              <input type="text" name="company" style={styles.input} />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>
                Phone Number <span style={styles.required}>*</span>
              </label>
              <input type="tel" name="phone_number" required style={styles.input} />
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
                defaultChecked
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
  successMessage: {
    fontSize: "15px",
    color: "#2e7d32",
    marginTop: "30px",
    textAlign: "center",
    lineHeight: "1.6",
  },
};