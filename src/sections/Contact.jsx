import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.honeypot) {
      setSubmitted(true);
      return;
    }

    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.company.trim()) newErrors.company = "Company name is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  const sectionStyle = {
    width: "100%",
    background: "#0E1E30",
    padding: "80px 0",
  };

  const containerStyle = {
    maxWidth: 560,
    margin: "0 auto",
    padding: "0 24px",
  };

  const headlineStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(28px, 3.5vw, 44px)',
    fontWeight: 700,
    color: "#E2E8F0",
    textAlign: "center",
    margin: 0,
  };

  const subheadingStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 16,
    color: "rgba(226, 232, 240, 0.6)",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 1.6,
    marginBottom: 0,
  };

  const labelStyle = {
    display: "block",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    color: "rgba(226, 232, 240, 0.45)",
    marginBottom: 6,
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: 12,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: "#E2E8F0",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };

  const errorStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    color: "#E53E3E",
    marginTop: 4,
  };

  const fieldWrapperStyle = {
    position: "relative",
    marginBottom: 20,
  };

  const fields = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Work Email", type: "email" },
    { name: "company", label: "Company Name", type: "text" },
  ];

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headlineStyle}>Let's Talk.</h2>
        <p style={subheadingStyle}>
          A single conversation can change your launch trajectory. Request a
          free consultation.
        </p>

        {submitted ? (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              style={{ display: "block", margin: "0 auto" }}
            >
              <defs>
                <linearGradient id="check-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2D6A4F" />
                  <stop offset="100%" stopColor="#3EBF70" />
                </linearGradient>
              </defs>
              <circle cx="30" cy="30" r="30" fill="url(#check-grad)" />
              <path
                d="M18 30L26 38L42 22"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                color: "#E2E8F0",
                textAlign: "center",
                marginTop: 20,
                maxWidth: 360,
                margin: "20px auto 0",
                lineHeight: 1.4,
              }}
            >
              Thank you. We'll be in touch within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginTop: 40 }} noValidate>
            {fields.map((field) => (
              <div key={field.name} style={fieldWrapperStyle}>
                <label htmlFor={field.name} style={labelStyle}>
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  value={form[field.name]}
                  onChange={handleChange}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(62, 191, 112, 0.4)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(62, 191, 112, 0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    e.target.style.boxShadow = "none";
                  }}
                  style={inputStyle}
                />
                {errors[field.name] && (
                  <div style={errorStyle}>{errors[field.name]}</div>
                )}
              </div>
            ))}

            {/* Honeypot */}
            <div
              style={{ position: "absolute", left: -9999 }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.honeypot}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, honeypot: e.target.value }))
                }
              />
            </div>

            <button
              type="submit"
              className="btn-glass-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
            >
              Start the Conversation
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
