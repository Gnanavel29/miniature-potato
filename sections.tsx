"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ── SVGs ── */
const MeditationSVG = () => (
  <Image
    src="/meditation.jpeg"
    alt="Meditation"
    width={350}
    height={450}
  />
);

const FounderSVG = () => (
  <Image
    src="/founder.jpeg"
    alt="Founder"
    width={300}
    height={350}
  />
);

/* ── Navbar ── */
const NAV = [
 
  { label: "About", href: "#about" },
  
];

export function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.3 }
    );
    NAV.map((l) => l.href.slice(1)).forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav>
      <a href="#hero" style={{ textDecoration: "none" }}>
        <span className="brand-name">Prince Nandagopal</span>
        <span className="brand-sub">Yoga &amp; Stress Reset</span>
      </a>

      <ul className="nav-links">
        {NAV.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={active === l.href.slice(1) ? "active" : ""}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <a href="#guide" className="btn-ghost">Free Guide</a>
        <a href="#book" className="btn-primary">Book Session ₹369</a>
      </div>

      <button className="hamburger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>

      {open && (
        <div className="mobile-menu">
          {NAV.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
          <div className="mobile-actions">
            <a href="#guide" className="btn-ghost" onClick={() => setOpen(false)}>Free Guide</a>
            <a href="#book" className="btn-primary" onClick={() => setOpen(false)}>Book Session ₹369</a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ── Hero ── */
export function Hero() {
  return (
    <section className="hero" id="hero">
      <div>
        <p className="eyebrow">The Digital Reset</p>
        <h1>Your mind doesn&apos;t stop even after work?</h1>
        <p>You close your laptop, but your brain keeps running. That&apos;s not normal. That&apos;s a burnout.</p>
        <a href="#book" className="btn-primary" style={{ padding: "12px 28px" }}>Fix My Stress Now</a>
      </div>
      <div>
        <div className="meditation-img">
                   <MeditationSVG/>
          <div className="quote-badge">&ldquo;Your output is a reflection of your internal clarity.&rdquo;</div>
        </div>
      </div>
    </section>
  );
}

/* ── Why Section ── */
export function WhySection() {
  return (
    <section className="why" id="about">
      <h2 className="section-title">Why I started this</h2>
      <div className="why-grid">
        <div className="founder-img"><FounderSVG /></div>
        <div className="why">
          <p>Years spent debugging complex architectures taught me something fundamental: a fragmented mind cannot produce elegant solutions. I lived the 90-hour weeks, the constant cognitive load, and the persistent hum of burnout.</p>
          <p>I found yoga not as an escape, but as a framework. Like clean code, the Yoga Sutras provide a logic for the internal state. I started The Sanctuary to give my fellow engineers the tools I wish I had — practical, non-dogmatic protocols for nervous system regulation.</p>
          <div className="signature">
            <div className="sig-bar" />
            <span className="sig-name">Prince Nandagopal</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Pillars ── */
const PILLARS = [
  {
    title: "Logic-Based Yoga",
    desc: "Map each asana to its neurological outcome. Understand the reason-pathway behind long-focus and deep rest. No mysticism — just systems.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8841A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  },
  {
    title: "Cognitive Refactoring",
    desc: "Mind-level techniques that function like garbage collection for the brain — clearing stale loops, circular thinking, and compile-time anxiety.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8841A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 01-9 9"/><path d="M3 12a9 9 0 019-9"/><path d="M12 7v5l3 3"/></svg>,
  },
  {
    title: "Uptime Management",
    desc: "Breathwork protocols that reset your sympathetic nervous system during high-stakes deployments and late-night incidents.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8841A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>,
  },
];

export function PillarsSection() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      }),
      { threshold: 0.15 }
    );
    refs.current.forEach((el) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity .5s ease, transform .5s ease";
        obs.observe(el);
      }
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="pillars" id="services">
      <h2 className="section-title">Ancient wisdom. Modern problems.</h2>
      <p className="pillars-sub">We translate the Yoga Sutras into a language that operates with the developer mind.</p>
      <div className="pillars-grid">
        {PILLARS.map((p, i) => (
          <div key={p.title} className="card" ref={(el) => { refs.current[i] = el; }}>
            <div className="card-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Quote ── */
export function QuoteSection() {
  return (
    <section className="quote-section">
      <blockquote>&ldquo;Yogas chitta vritti nirodhah&rdquo;</blockquote>
      <p>Yoga is the resolution of the agitations of the mind.</p>
    </section>
  );
}

/* ── Impact ── */
const STATS = [
  { val: 500, suffix: "+", label: "Engineers Guided" },
  { val: 40,  suffix: "%", label: "Avg Stress Reduction" },
  { val: 12,  suffix: "",  label: "Tech Partnerships" },
];

function StatCard({ val, suffix, label }: { val: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let n = 0;
      const step = val / (1200 / 16);
      const t = setInterval(() => {
        n += step;
        if (n >= val) { setCount(val); clearInterval(t); }
        else setCount(Math.floor(n));
      }, 16);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [val]);

  return (
    <div className="stat" ref={ref}>
      <div className="stat-num">{count}{suffix}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}

export function ImpactSection() {
  return (
    <section className="impact">
      <div className="impact-layout">
        <div>
          <h3>Our Impact</h3>
          <p>Measurable wellness metrics — the same precision you apply to your build metrics.</p>
        </div>
        <div className="stats-grid">
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
export function CtaSection() {
  return (
    <section className="cta-section" id="guide">
      <div className="cta-box">
        <h2>Start your journey to a calmer mind</h2>
        <p>Download our exclusive &ldquo;Developer&apos;s Guide to Ancient Wisdom&rdquo; and learn 3 micro-practices you can do at your desk today.</p>
        <p className="cta-tag">Start your stress-free life now</p>
        <div className="cta-btns">
          <a href="#download" className="btn-primary">↓&nbsp; Download Free Guide</a>
          <a href="#programs" className="btn-secondary">View All Programs</a>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
export function Footer() {
  return (
    <footer id="contact">
      <div className="foot-grid">
        <div className="foot-brand">
          <span className="foot-brand-name">Prince Nandagopal</span>
          <span className="foot-brand-sub">Yoga &amp; Stress Reset</span>
          <p>Elevating the mental wellbeing of the hardest-working minds in tech — one breath at a time.</p>
        </div>
        <div className="foot-col">
          <h4>Explore</h4>
          <ul>
            {[["About", "#about"], ["Wellness Guide", "#guide"], ["Support", "#contact"]].map(([l, h]) => (
              <li key={l}><a href={h}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="foot-col">
          <h4>Legal</h4>
          <ul>
            {[["Privacy Policy", "#"], ["Terms of Service", "#"]].map(([l, h]) => (
              <li key={l}><a href={h}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="foot-col">
          <h4>Follow</h4>
          <div className="socials">
            <a href="#" className="soc-btn" aria-label="Share">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </a>
            <a href="#" className="soc-btn" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="foot-bottom">© 2024 Prince Nandagopal Wellness</div>
    </footer>
  );
}