"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const YT_CHANNEL = "https://www.youtube.com/@the_new_builder";
const LINKEDIN = "https://www.linkedin.com/in/brianhecht/";
const CONTACT = "mailto:brian@thenewbuilder.ai";
const RIVERSIDE_EPISODE_URL = `https://share.riverside.fm/episode/7e6dc792-8a90-443d-bcbb-28090ed39313`;

const CARDS = [
  {
    label: "Podcast",
    desc: "Weekly conversations with founders and builders navigating the AI era.",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    desc: "20K subscribers. Podcast companion and original content.",
    href: YT_CHANNEL,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    label: "Newsletter",
    desc: "Weekly hot takes from Brian and thoughtful builders in the field.",
    href: "#subscribe",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "The War Room",
    desc: "A premium mastermind for founders who want to go deeper with real-time peer learning.",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Meetups",
    desc: "No pitches, no agenda, just AI builders socializing and sharing notes.",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    label: "Curated Events",
    desc: "Invite-only roundtables and dinners for a smaller group of builders going deeper.",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [latestVideoId, setLatestVideoId] = useState("bKFXxGx6JhI");
  const [latestVideoTitle, setLatestVideoTitle] = useState("Latest Episode");

  useEffect(() => {
    fetch("/api/latest-video")
      .then((r) => r.json())
      .then(({ videoId, title }) => {
        if (videoId) setLatestVideoId(videoId);
        if (title) setLatestVideoTitle(title);
      })
      .catch(() => {});
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ flex: 1, width: "100%", maxWidth: 1060, margin: "0 auto", padding: "48px 8% 64px" }}>

        {/* Nav */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 80 }}>
          <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            The New Builder
          </span>
          {/* Nav: full set on desktop, just Glossary on mobile (other links
              remain reachable via the footer). */}
          <div className="nav-links" style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="/glossary" className="nav-link-primary" style={{ fontSize: 14, fontWeight: 500, color: "#9ca3af" }}
               onMouseEnter={e => (e.currentTarget.style.color = "#000")}
               onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}>
              Glossary
            </a>
            <a href={YT_CHANNEL} target="_blank" rel="noopener noreferrer" className="nav-link-secondary" style={{ fontSize: 14, fontWeight: 500, color: "#9ca3af" }}
               onMouseEnter={e => (e.currentTarget.style.color = "#000")}
               onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}>
              YouTube
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="nav-link-secondary" style={{ fontSize: 14, fontWeight: 500, color: "#9ca3af" }}
               onMouseEnter={e => (e.currentTarget.style.color = "#000")}
               onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}>
              LinkedIn
            </a>
            <a href={CONTACT} className="nav-link-secondary" style={{ fontSize: 14, fontWeight: 500, color: "#9ca3af" }}
               onMouseEnter={e => (e.currentTarget.style.color = "#000")}
               onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}>
              Contact
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero-section" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 64 }}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              id="brian-photo"
              src="/images/brian.png"
              alt="Brian Hecht"
            />
          </div>
          <div>
            <h1 style={{ fontSize: "clamp(48px, 7vw, 86px)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.02em" }}>
              Navigating<br />the AI era.<br />Together.
            </h1>
            <p style={{ fontSize: 22, lineHeight: 1.5, color: "#6b7280", marginTop: 28, maxWidth: 480 }}>
              Bringing founders together to rethink how companies get built, with AI as the foundation, not just a tool.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", marginBottom: 64 }} />

        {/* Story */}
        <section style={{ marginBottom: 64, maxWidth: 720 }}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 28 }}>
            Why I&apos;m building this.
          </h2>
          <div style={{ fontSize: 18, lineHeight: 1.7, color: "#374151" }}>
            <p style={{ marginBottom: 20 }}>
              I&apos;ve been a founder and investor for 30+ years. I never wrote a line of code. Then I started building with AI, and couldn&apos;t stop.
            </p>
            <p style={{ marginBottom: 20 }}>
              Every serious conversation I was having about startups had shifted to the same question: what does it actually mean to build a company now that the rules have changed?
            </p>
            <p>
              The people who figure it out will be the ones building right now and comparing notes, not reading about it from the sidelines. The New Builder is where that happens, through content, conversations, and community.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", marginBottom: 64 }} />

        {/* Cards */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, marginBottom: 32 }}>
            Builders Figuring it Out. Together.
          </h2>
          <div className="cards-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {CARDS.map((card) => {
              const inner = (
                <>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#4b5563" }}>
                    {card.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{card.label}</div>
                    <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.5 }}>{card.desc}</div>
                  </div>
                </>
              );
              const cardStyle: React.CSSProperties = {
                display: "flex",
                flexDirection: "column",
                gap: 12,
                padding: 24,
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                cursor: card.href ? "pointer" : "default",
              };
              return card.href ? (
                <a key={card.label} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined} style={cardStyle}>
                  {inner}
                </a>
              ) : (
                <div key={card.label} style={cardStyle}>
                  {inner}
                </div>
              );
            })}
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", marginBottom: 64 }} />

        {/* Glossary band */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }} className="glossary-band">
            <div style={{ flex: 1, minWidth: 280 }}>
              <h2 style={{ fontSize: "clamp(20px, 2.4vw, 26px)", fontWeight: 800, marginBottom: 8, lineHeight: 1.2 }}>
                New AI words coming at you fast?
              </h2>
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.55, maxWidth: 560 }}>
                The Glossary has plain-English definitions of the terms builders are using right now. Updated weekly.
              </p>
            </div>
            <a href="/glossary"
               style={{ display: "inline-block", padding: "12px 22px", border: "1px solid #000", borderRadius: 8, fontSize: 14, fontWeight: 600, color: "#000", whiteSpace: "nowrap", flexShrink: 0 }}
               onMouseEnter={e => { e.currentTarget.style.background = "#000"; e.currentTarget.style.color = "#fff"; }}
               onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#000"; }}>
              Browse the Glossary →
            </a>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", marginBottom: 64 }} />

        {/* Latest Episode */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, marginBottom: 28 }}>
            Latest Episode
          </h2>
          <div style={{ position: "relative", paddingBottom: "56.25%", width: "100%", maxWidth: 800, borderRadius: 12, overflow: "hidden", background: "#000" }}>
            <iframe
              src={`https://www.youtube.com/embed/${latestVideoId}`}
              title={latestVideoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <div style={{ marginTop: 20, textAlign: "center", maxWidth: 800 }}>
            <a
              href={YT_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", padding: "12px 22px", background: "#FF0000", border: "1px solid #FF0000", borderRadius: 8, fontSize: 14, fontWeight: 600, color: "#fff" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#cc0000"; e.currentTarget.style.borderColor = "#cc0000"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#FF0000"; e.currentTarget.style.borderColor = "#FF0000"; }}
            >
              View Channel →
            </a>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", marginBottom: 64 }} />

        {/* Subscribe */}
        <section id="subscribe" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 800, marginBottom: 10 }}>
            Stay in the loop
          </h2>
          <iframe
            src="https://thenewbuilder.substack.com/embed"
            title="Subscribe to The New Builder"
            width="480"
            height="320"
            style={{ border: "1px solid #EEE", background: "white", display: "block" }}
            frameBorder={0}
          />
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", marginBottom: 64 }} />

        {/* Bio */}
        <section style={{ marginBottom: 64, maxWidth: 720 }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, marginBottom: 20 }}>
            About Brian
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#374151", marginBottom: 16 }}>
            Brian Hecht is a 4x exited founder and former Managing Director of ERA, New York&apos;s top startup accelerator, where he spent a decade coaching 2,500+ pitches and investing in early-stage companies.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#374151" }}>
            He now spends most of his time building with AI, advising founders, and hosting live events in NYC. The New Builder is where all of that comes together.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ width: "100%", borderTop: "1px solid #e5e7eb", padding: "24px 8%" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }} className="footer-inner">
          <span style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af" }}>
            &copy; 2026 The New Builder
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/glossary" style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af" }}
               onMouseEnter={e => (e.currentTarget.style.color = "#000")}
               onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}>
              Glossary
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af" }}
               onMouseEnter={e => (e.currentTarget.style.color = "#000")}
               onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}>
              LinkedIn
            </a>
            <a href={YT_CHANNEL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af" }}
               onMouseEnter={e => (e.currentTarget.style.color = "#000")}
               onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}>
              YouTube
            </a>
            <a href={CONTACT} style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af" }}
               onMouseEnter={e => (e.currentTarget.style.color = "#000")}
               onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}>
              Email
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        #brian-photo {
          width: 360px !important;
          height: 360px !important;
          border-radius: 50% !important;
          object-fit: cover !important;
          display: block !important;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          /* Hide secondary links on mobile but keep Glossary visible — main nav
             targets are footer-redundant; Glossary is the unique discovery hop. */
          .nav-link-secondary { display: none !important; }
          .hero-section { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-section > div:first-child { justify-content: center !important; }
          #brian-photo { width: 280px !important; height: 280px !important; }
          .cards-grid { grid-template-columns: 1fr 1fr !important; }
          .subscribe-form { flex-direction: column !important; }
          .subscribe-form input[type="text"] { width: 100% !important; }
          .footer-inner { flex-direction: column !important; gap: 12px !important; text-align: center !important; }
        }
        @media (max-width: 480px) {
          main { padding: 32px 6% 48px !important; }
          #brian-photo { width: 220px !important; height: 220px !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
