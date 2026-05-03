"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) {
      setStatus("error");
      setErrorMsg("Please enter a valid email.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source: "tnb-homepage-native" }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          padding: "20px 24px",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          background: "#fafafa",
          maxWidth: 520,
        }}
      >
        <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 6, color: "#111" }}>
          Almost there.
        </p>
        <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.55, margin: 0 }}>
          Check your inbox for a confirmation email from Substack to finish subscribing.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 520 }}>
      <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.55, marginTop: 0, marginBottom: 18 }}>
        Weekly hot takes from Brian and thoughtful builders in the field. No fluff.
      </p>
      <form
        onSubmit={handleSubmit}
        className="subscribe-form"
        style={{ display: "flex", gap: 8, alignItems: "stretch", flexWrap: "wrap" }}
        noValidate
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@example.com"
          required
          autoComplete="email"
          aria-label="Email address"
          style={{
            flex: "1 1 280px",
            minWidth: 0,
            padding: "12px 14px",
            fontSize: 15,
            border: "1px solid #d1d5db",
            borderRadius: 8,
            background: "white",
            color: "#111",
            outline: "none",
            fontFamily: "inherit",
          }}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          style={{
            padding: "12px 22px",
            fontSize: 14,
            fontWeight: 600,
            color: "#fff",
            background: "#000",
            border: "1px solid #000",
            borderRadius: 8,
            cursor: status === "submitting" ? "default" : "pointer",
            opacity: status === "submitting" ? 0.6 : 1,
            whiteSpace: "nowrap",
            fontFamily: "inherit",
          }}
        >
          {status === "submitting" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p style={{ fontSize: 13, color: "#b91c1c", marginTop: 10, marginBottom: 0 }}>
          {errorMsg}
        </p>
      )}
      <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 12, marginBottom: 0 }}>
        Powered by Substack. Unsubscribe anytime.
      </p>
    </div>
  );
}
