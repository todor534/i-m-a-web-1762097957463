import { FormEvent, useId, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
  // simple honeypot
  company?: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const styles: Record<string, React.CSSProperties> = {
  section: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "48px 16px",
  },
  wrapper: {
    display: "grid",
    gap: 24,
  },
  heading: {
    fontSize: 28,
    fontWeight: 700,
    margin: 0,
    color: "#111827",
    letterSpacing: "-0.02em",
  },
  subtext: {
    marginTop: 8,
    color: "#6B7280",
    fontSize: 16,
    lineHeight: 1.6,
  },
  card: {
    background: "#ffffff",
    border: "1px solid #E5E7EB",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  },
  form: {
    display: "grid",
    gap: 16,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  field: {
    display: "grid",
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    color: "#111827",
  },
  helpText: {
    color: "#6B7280",
    fontSize: 12,
  },
  errorText: {
    color: "#B91C1C",
    fontSize: 12,
  },
  inputBase: {
    appearance: "none",
    width: "100%",
    padding: "12px 14px",
    borderRadius: 8,
    border: "1px solid #D1D5DB",
    background: "#F9FAFB",
    color: "#111827",
    fontSize: 16,
    outline: "none",
    transition: "border-color 150ms, box-shadow 150ms, background 150ms",
  },
  inputFocus: {
    borderColor: "#6366F1",
    background: "#FFFFFF",
    boxShadow: "0 0 0 4px rgba(99,102,241,0.08)",
  },
  textarea: {
    minHeight: 140,
    resize: "vertical",
    lineHeight: 1.5,
  },
  actions: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 12,
    flexWrap: "wrap",
  },
  button: {
    background: "#111827",
    color: "#FFFFFF",
    borderRadius: 9999,
    padding: "12px 18px",
    border: "1px solid transparent",
    fontWeight: 600,
    fontSize: 16,
    cursor: "pointer",
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  successText: {
    color: "#065F46",
    fontSize: 14,
  },
  hiddenHoneypot: {
    position: "absolute",
    left: "-10000px",
    top: "auto",
    width: 1,
    height: 1,
    overflow: "hidden",
  },
};

function merge<T extends object, U extends object>(a: T, b?: U): T & U {
  return { ...(a as any), ...(b || ({} as any)) };
}

export default function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const msgId = useId();
  const helpId = useId();

  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validate = (v: FormValues): FieldErrors => {
    const e: FieldErrors = {};
    if (!v.name?.trim()) e.name = "Please enter your name.";
    if (!v.email?.trim()) {
      e.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.email.trim())
    ) {
      e.email = "Please enter a valid email.";
    }
    if (!v.message?.trim() || v.message.trim().length < 10) {
      e.message = "Please enter at least 10 characters.";
    }
    // silently drop if honeypot filled (we also block submission below)
    return e;
  };

  const onChange =
    (key: keyof FormValues) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((s) => ({ ...s, [key]: ev.target.value }));
      if (errors[key]) setErrors((s) => ({ ...s, [key]: undefined }));
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccess(null);

    // bot trap: if company is filled, pretend success but do nothing
    if (values.company && values.company.trim().length > 0) {
      setSuccess("Thanks! We'll be in touch.");
      return;
    }

    const vErrors = validate(values);
    setErrors(vErrors);
    if (Object.keys(vErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error(`Server responded ${res.status}`);
      }

      setSuccess("Message sent! I’ll reply to you shortly.");
      setValues({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setErrors((s) => ({
        ...s,
        message:
          "Something went wrong sending your message. Please try again in a moment.",
      }));
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = (focused: boolean, errored: boolean) =>
    merge(
      styles.inputBase,
      merge(
        focused ? styles.inputFocus : undefined,
        errored
          ? { borderColor: "#B91C1C", boxShadow: "0 0 0 4px rgba(185,28,28,0.08)", background: "#FFF" }
          : undefined
      )
    );

  return (
    <section style={styles.section}>
      <div style={styles.wrapper}>
        <header>
          <h2 style={styles.heading}>Contact</h2>
          <p style={styles.subtext}>
            Tell me a bit about your project and how I can help.
          </p>
        </header>

        <div style={styles.card}>
          <form style={styles.form} onSubmit={onSubmit} noValidate>
            {/* Honeypot */}
            <div aria-hidden="true" style={styles.hiddenHoneypot}>
              <label>
                Company
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company}
                  onChange={onChange("company")}
                />
              </label>
            </div>

            <div style={styles.row}>
              <div style={styles.field}>
                <label htmlFor={nameId} style={styles.label}>
                  Name
                </label>
                <input
                  id={nameId}
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={values.name}
                  onChange={onChange("name")}
                  onFocus={() => setFocus((s) => ({ ...s, name: true }))}
                  onBlur={() => setFocus((s) => ({ ...s, name: false }))}
                  style={inputStyle(focus.name, !!errors.name)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? helpId : undefined}
                  autoComplete="name"
                />
                {errors.name ? (
                  <span id={helpId} style={styles.errorText} role="alert">
                    {errors.name}
                  </span>
                ) : (
                  <span style={styles.helpText}>So I know what to call you.</span>
                )}
              </div>

              <div style={styles.field}>
                <label htmlFor={emailId} style={styles.label}>
                  Email
                </label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={onChange("email")}
                  onFocus={() => setFocus((s) => ({ ...s, email: true }))}
                  onBlur={() => setFocus((s) => ({ ...s, email: false }))}
                  style={inputStyle(focus.email, !!errors.email)}
                  aria-invalid={!!errors.email}
                  autoComplete="email"
                />
                {errors.email ? (
                  <span style={styles.errorText} role="alert">
                    {errors.email}
                  </span>
                ) : (
                  <span style={styles.helpText}>
                    I’ll only use this to reply to you.
                  </span>
                )}
              </div>
            </div>

            <div style={styles.field}>
              <label htmlFor={msgId} style={styles.label}>
                Message
              </label>
              <textarea
                id={msgId}
                name="message"
                placeholder="What are you building? Timelines? Budget? Links?"
                value={values.message}
                onChange={onChange("message")}
                onFocus={() => setFocus((s) => ({ ...s, message: true }))}
                onBlur={() => setFocus((s) => ({ ...s, message: false }))}
                style={merge(
                  inputStyle(focus.message, !!errors.message),
                  styles.textarea
                )}
                aria-invalid={!!errors.message}
              />
              {errors.message ? (
                <span style={styles.errorText} role="alert">
                  {errors.message}
                </span>
              ) : (
                <span style={styles.helpText}>
                  The more detail, the better. Minimum 10 characters.
                </span>
              )}
            </div>

            <div style={styles.actions}>
              <button
                type="submit"
                style={merge(
                  styles.button,
                  submitting ? styles.buttonDisabled : undefined
                )}
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Send message"}
              </button>

              {success && (
                <span style={styles.successText} role="status" aria-live="polite">
                  {success}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
