import { useState } from "react";
import {
  Building2,
  FileText,
  Shield,
  Award,
  Calculator,
  BarChart2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  Star,
  ArrowRight,
  MessageCircle,
  Linkedin,
  Twitter,
  Facebook,
  Users,
  Zap,
  Eye,
  UserCheck,
  Sparkles,
} from "lucide-react";

// ── Color constants ──────────────────────────────────────────────
const NAVY = "#0f2557";
const NAVY_DARK = "#0a1a3a";
const NAVY_MEDIUM = "#1a3a8f";
const GOLD = "#f59e0b";
const WHITE = "#ffffff";
const LIGHT_GRAY = "#f8fafc";
const TEXT_DARK = "#1e293b";
const TEXT_MUTED = "#64748b";

// ── Types ────────────────────────────────────────────────────────
interface FAQItem {
  question: string;
  answer: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  text: string;
}

// ── Data ─────────────────────────────────────────────────────────
const services: Service[] = [
  {
    icon: <Building2 size={28} />,
    title: "Company & Startup Registration",
    description:
      "Private Limited, LLP, OPC, Partnership & more. We handle MCA filings end-to-end so you can focus on building.",
  },
  {
    icon: <FileText size={28} />,
    title: "GST Registration & Compliance",
    description:
      "GST registration, monthly/quarterly returns, reconciliation & notices handled by certified professionals.",
  },
  {
    icon: <Shield size={28} />,
    title: "Trademark & Copyright",
    description:
      "Protect your brand identity. Trademark search, application, objections & renewals managed end-to-end.",
  },
  {
    icon: <Award size={28} />,
    title: "MSME, ISO & FSSAI",
    description:
      "Udyam registration, ISO certification support, FSSAI food license & renewals for your business.",
  },
  {
    icon: <Calculator size={28} />,
    title: "Income Tax & ROC Compliance",
    description:
      "ITR filing, tax planning, ROC annual filings & director compliance — all under one roof.",
  },
  {
    icon: <BarChart2 size={28} />,
    title: "CMA Reports & Project Reports",
    description:
      "Bankable project reports, CMA data, loan projections for MSME & business loans.",
  },
];

const whyItems: WhyItem[] = [
  {
    icon: <Users size={22} />,
    title: "Expert Professionals",
    description:
      "Chartered Accountants, Company Secretaries & Legal experts with 10+ years of combined experience.",
  },
  {
    icon: <CheckCircle2 size={22} />,
    title: "End-to-End Support",
    description:
      "From documentation to government approval, we handle everything so nothing falls through the cracks.",
  },
  {
    icon: <Eye size={22} />,
    title: "Transparent Pricing",
    description:
      "No hidden charges. You know exactly what you pay before we begin. Zero surprises, ever.",
  },
  {
    icon: <UserCheck size={22} />,
    title: "Dedicated Consultant",
    description:
      "A single point of contact for all your needs — one expert who knows your business inside out.",
  },
  {
    icon: <Zap size={22} />,
    title: "Fast Processing",
    description:
      "We prioritize speed without compromising on accuracy. Your time is your most valuable asset.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Rahul Sharma",
    role: "Founder",
    company: "TechStart Solutions",
    location: "Delhi",
    text: "We registered our Private Limited company within 7 days. The team was professional, responsive, and handled everything without us worrying about paperwork.",
  },
  {
    name: "Priya Menon",
    role: "Director",
    company: "Menon Exports",
    location: "Kochi",
    text: "GST registration and first return filing — all done correctly the first time. No corrections, no notices. Highly recommend Vidha for any compliance work.",
  },
  {
    name: "Amit Verma",
    role: "Proprietor",
    company: "Verma Foods",
    location: "Mumbai",
    text: "Got our FSSAI and Udyam registration done together. Very transparent about the process and pricing. We'll use them for all future compliance needs.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "How long does GST registration take?",
    answer:
      "GST registration typically takes 7–10 working days after submission of complete documents. In some cases, it can be faster if all documents are in order and the ARN is processed without queries.",
  },
  {
    question: "What are the benefits of Startup/Company Registration?",
    answer:
      "A registered company gains legal identity, limited liability protection, easier access to funding, credibility with clients and vendors, and eligibility for government schemes like Startup India and MSME benefits.",
  },
  {
    question: "How does the Trademark registration process work?",
    answer:
      "We conduct a thorough trademark search to ensure availability, file your application with the Trademark Registry, handle any examination reports or objections received, and keep you updated at every step until registration is complete.",
  },
  {
    question: "Is pricing transparent? Are there hidden charges?",
    answer:
      "Yes, completely transparent. We provide a full cost breakdown including government fees and professional charges before starting any work. No surprise fees at any stage of the process.",
  },
  {
    question: "Can I get all compliance services under one roof?",
    answer:
      "Absolutely. We handle company registration, GST, Income Tax, ROC annual filings, MSME, trademarks, FSSAI, and more — all managed by a single dedicated team. No need to juggle multiple vendors.",
  },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// ── Helpers ────────────────────────────────────────────────────────

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3">
      {["s1", "s2", "s3", "s4", "s5"].map((k) => (
        <Star key={k} size={16} fill={GOLD} color={GOLD} />
      ))}
    </div>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
      style={{ backgroundColor: `${GOLD}20`, color: NAVY, letterSpacing: "0.12em" }}
    >
      {children}
    </span>
  );
}

// ── Navbar ────────────────────────────────────────────────────────

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
      style={{ backgroundColor: WHITE, borderBottom: `3px solid ${GOLD}` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Go to top"
          >
            <img
              src="/assets/generated/logo-icon-transparent.dim_200x200.png"
              alt="Vidha Logo"
              className="h-9 w-9 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-base md:text-lg" style={{ color: NAVY }}>
                Vidha Corporate Services
              </span>
              <span className="font-body font-semibold text-xs" style={{ color: GOLD }}>
                LLP
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="font-body font-medium text-sm transition-colors duration-200 hover:text-amber-500"
                style={{ color: TEXT_DARK }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-1.5 text-sm font-body font-semibold transition-opacity hover:opacity-80"
              style={{ color: NAVY }}
            >
              <Phone size={14} />
              +91 99999 99999
            </a>
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="px-4 py-2 rounded font-body font-bold text-sm transition-all hover:shadow-lg"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Get Free Consultation
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} style={{ color: NAVY }} /> : <Menu size={24} style={{ color: NAVY }} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="lg:hidden pb-4 border-t"
            style={{ borderColor: `${NAVY}15` }}
          >
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-2 py-2.5 text-sm font-body font-medium rounded transition-colors hover:bg-slate-50"
                  style={{ color: TEXT_DARK }}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="mt-2 px-4 py-2.5 rounded font-body font-bold text-sm"
                style={{ backgroundColor: GOLD, color: NAVY }}
              >
                Get Free Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// ── Hero Section ──────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center"
      style={{ minHeight: "100svh" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1920x900.jpg')" }}
      />
      {/* Navy Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: `${NAVY}CC` }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 animate-fade-in"
            style={{
              backgroundColor: `${GOLD}25`,
              border: `1px solid ${GOLD}60`,
              color: GOLD,
            }}
          >
            <Sparkles size={14} className="shrink-0" />
            <span className="text-xs font-body font-semibold tracking-widest uppercase">
              India&apos;s Trusted Corporate Services Partner
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-display font-extrabold leading-tight mb-4 animate-fade-in-up"
            style={{ color: WHITE, fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Register.{" "}
            <span style={{ color: GOLD }}>Comply.</span>{" "}
            Grow.
          </h1>

          {/* Sub H1 */}
          <p
            className="font-display font-normal mb-5 animate-fade-in-up animation-delay-100"
            style={{
              color: "rgba(255,255,255,0.92)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            }}
          >
            Your Business Deserves Expert Legal &amp; Compliance Support
          </p>

          {/* Body */}
          <p
            className="font-body text-base md:text-lg leading-relaxed mb-8 max-w-2xl animate-fade-in-up animation-delay-200"
            style={{ color: "rgba(255,255,255,0.80)" }}
          >
            From company registration to GST, trademark &amp; beyond — we handle the complexity
            so you can focus on building your business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in-up animation-delay-300">
            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded font-body font-bold text-base transition-all hover:scale-105"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Get Free Consultation
              <ArrowRight size={16} />
            </button>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20help%20with%20corporate%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded font-body font-bold text-base transition-all hover:bg-white/10"
              style={{
                color: WHITE,
                border: `2px solid ${WHITE}80`,
              }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          {/* Trust Strip */}
          <div
            className="inline-flex flex-wrap gap-x-5 gap-y-1 animate-fade-in-up animation-delay-400"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            {[
              "500+ Businesses Served",
              "99% Compliance Accuracy",
              "10+ Years Experience",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm font-body">
                <CheckCircle2 size={13} style={{ color: GOLD }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} style={{ color: `${WHITE}60` }} />
      </div>
    </section>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────────

const statsData = [
  { value: "500+", label: "Businesses Registered" },
  { value: "10+", label: "Years of Expertise" },
  { value: "99%", label: "Compliance Accuracy" },
  { value: "100%", label: "Confidential & Secure" },
];

function StatsBar() {
  return (
    <section className="relative z-10 -mt-8 mx-4 sm:mx-6 md:mx-10 max-w-5xl lg:mx-auto">
      <div
        className="rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 overflow-hidden"
        style={{ backgroundColor: WHITE }}
      >
        {statsData.map((stat, i) => (
          <div
            key={stat.value}
            className={`flex flex-col items-center justify-center py-6 px-4 text-center ${
              i < statsData.length - 1 ? "border-r border-b md:border-b-0" : ""
            } ${i === 1 ? "border-b md:border-b-0" : ""}`}
            style={{ borderColor: "#e2e8f0" }}
          >
            <span
              className="font-display font-extrabold leading-none mb-1"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: NAVY }}
            >
              {stat.value}
            </span>
            <span className="text-xs md:text-sm font-body font-medium" style={{ color: TEXT_MUTED }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Services Section ──────────────────────────────────────────────

function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ backgroundColor: LIGHT_GRAY }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionBadge>What We Do</SectionBadge>
          <h2
            className="font-display font-bold gold-underline gold-underline-center mx-auto"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: NAVY }}
          >
            Our Core Services
          </h2>
          <p
            className="mt-6 font-body text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: TEXT_MUTED }}
          >
            End-to-end corporate, legal &amp; compliance solutions tailored for Indian businesses
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card bg-white rounded-xl p-6 relative overflow-hidden"
              style={{ boxShadow: "0 2px 12px rgba(15,37,87,0.07)", borderTop: `3px solid ${NAVY}` }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                style={{ backgroundColor: `${NAVY}0F`, color: NAVY }}
              >
                {service.icon}
              </div>

              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: NAVY }}
              >
                {service.title}
              </h3>
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>
                {service.description}
              </p>
              <button
                type="button"
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center gap-1 text-sm font-body font-semibold transition-colors hover:opacity-80"
                style={{ color: NAVY_MEDIUM }}
              >
                Learn More <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>

        {/* Mid CTA */}
        <div
          className="mt-14 rounded-xl py-8 px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MEDIUM} 100%)`,
          }}
        >
          <div>
            <p className="font-display font-semibold text-xl md:text-2xl" style={{ color: WHITE }}>
              Ready to get started?
            </p>
            <p className="font-body text-sm mt-1" style={{ color: "rgba(255,255,255,0.70)" }}>
              Talk to an expert today — no commitment required.
            </p>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="shrink-0 px-6 py-3 rounded font-body font-bold text-sm transition-all hover:scale-105"
            style={{ backgroundColor: GOLD, color: NAVY }}
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Why Choose Us ─────────────────────────────────────────────────

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MEDIUM} 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionBadge>Our Strengths</SectionBadge>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: WHITE }}
          >
            Why Businesses{" "}
            <span style={{ color: GOLD }}>Trust Vidha</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyItems.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-xl p-6 transition-all hover:scale-105 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-full mb-4"
                style={{ backgroundColor: `${GOLD}25`, color: GOLD }}
              >
                {item.icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2" style={{ color: WHITE }}>
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 3-Step Process ────────────────────────────────────────────────

const processSteps = [
  {
    num: "01",
    title: "Free Consultation",
    description:
      "Share your requirements with our expert. We assess your needs & recommend the right service — no commitment required.",
  },
  {
    num: "02",
    title: "Documentation",
    description:
      "Submit documents via WhatsApp or email. Our team handles all filing, paperwork & government portals.",
  },
  {
    num: "03",
    title: "Approval & Delivery",
    description:
      "We track your application and deliver your certificates & documents directly to you, on time.",
  },
];

function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28" style={{ backgroundColor: LIGHT_GRAY }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionBadge>Simple & Efficient</SectionBadge>
          <h2
            className="font-display font-bold gold-underline gold-underline-center mx-auto"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: NAVY }}
          >
            How It Works
          </h2>
          <p className="mt-6 font-body text-base max-w-lg mx-auto" style={{ color: TEXT_MUTED }}>
            Three clear steps — from first conversation to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (desktop) */}
          <div
            className="hidden md:block absolute top-12 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5"
            style={{ borderTop: `2px dashed ${GOLD}60` }}
          />

          {processSteps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center relative">
              <div
                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MEDIUM} 100%)`,
                  border: `3px solid ${GOLD}`,
                }}
              >
                <span
                  className="font-display font-bold text-lg"
                  style={{ color: GOLD }}
                >
                  {step.num}
                </span>
              </div>

              <div className="bg-white rounded-xl p-6 w-full shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-display font-semibold text-lg mb-3" style={{ color: NAVY }}>
                  Step {i + 1}: {step.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28" style={{ backgroundColor: WHITE }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionBadge>Client Stories</SectionBadge>
          <h2
            className="font-display font-bold gold-underline gold-underline-center mx-auto"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: NAVY }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow relative"
              style={{
                boxShadow: "0 4px 20px rgba(15,37,87,0.08)",
                borderLeft: `4px solid ${GOLD}`,
              }}
            >
              <div
                className="font-display font-extrabold text-6xl leading-none mb-2 -mt-2"
                style={{ color: `${GOLD}30` }}
              >
                &ldquo;
              </div>

              <StarRating />

              <p
                className="font-body text-sm leading-relaxed italic mb-5"
                style={{ color: TEXT_DARK }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="border-t pt-4" style={{ borderColor: "#e2e8f0" }}>
                <p className="font-body font-bold text-sm" style={{ color: NAVY }}>
                  {t.name}
                </p>
                <p className="font-body text-xs" style={{ color: TEXT_MUTED }}>
                  {t.role}, {t.company} &middot; {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ Section ───────────────────────────────────────────────────

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 md:py-28" style={{ backgroundColor: LIGHT_GRAY }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionBadge>FAQs</SectionBadge>
          <h2
            className="font-display font-bold gold-underline gold-underline-center mx-auto"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: NAVY }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="bg-white rounded-xl overflow-hidden transition-shadow"
              style={{ boxShadow: openIndex === i ? "0 4px 20px rgba(15,37,87,0.10)" : "0 1px 4px rgba(0,0,0,0.06)" }}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-50"
                aria-expanded={openIndex === i}
              >
                <span
                  className="font-body font-semibold text-sm md:text-base pr-4"
                  style={{ color: NAVY }}
                >
                  {faq.question}
                </span>
                <span className="shrink-0" style={{ color: GOLD }}>
                  {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openIndex === i && (
                <div
                  className="px-6 pb-5 font-body text-sm leading-relaxed animate-fade-in"
                  style={{ color: TEXT_MUTED }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA / Contact Section ─────────────────────────────────────────

const serviceOptions = [
  { value: "company-registration", label: "Company Registration" },
  { value: "gst-registration", label: "GST Registration" },
  { value: "trademark-registration", label: "Trademark Registration" },
  { value: "msme-fssai-iso", label: "MSME / FSSAI / ISO" },
  { value: "income-tax-roc", label: "Income Tax / ROC Compliance" },
  { value: "cma-project-report", label: "CMA / Project Report" },
  { value: "other", label: "Other" },
];

interface FormState {
  name: string;
  phone: string;
  service: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
}

function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", service: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[\d\s+\-()]{8,15}$/.test(form.phone.trim()))
      e.phone = "Enter a valid phone number";
    if (!form.service) e.service = "Please select a service";
    return e;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg border font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all";

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ background: `linear-gradient(135deg, ${NAVY_DARK} 0%, ${NAVY} 50%, ${NAVY_MEDIUM} 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <SectionBadge>Start Today</SectionBadge>
            <h2
              className="font-display font-bold leading-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: WHITE }}
            >
              Get Your Free{" "}
              <span style={{ color: GOLD }}>Consultation</span> Today
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Talk to an expert. No commitment required. We&apos;ll assess your needs and give you
              a clear roadmap — completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20help%20with%20corporate%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-body font-bold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: "#25d366", color: WHITE }}
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href="tel:+919999999999"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-body font-bold text-sm transition-all hover:scale-105"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: WHITE,
                  border: `1px solid rgba(255,255,255,0.25)`,
                }}
              >
                <Phone size={18} />
                Call Now: +91 99999 99999
              </a>
            </div>

            <div className="flex flex-col gap-2">
              {[
                "Response within 2 working hours",
                "100% confidential & secure",
                "No hidden charges or commitments",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={15} style={{ color: GOLD, flexShrink: 0 }} />
                  <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: WHITE, boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${GOLD}15` }}
                >
                  <CheckCircle2 size={32} style={{ color: GOLD }} />
                </div>
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: NAVY }}>
                  Thank You!
                </h3>
                <p className="font-body text-sm" style={{ color: TEXT_MUTED }}>
                  We&apos;ve received your request. Our team will call you within 2 working hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", service: "" });
                  }}
                  className="mt-6 text-sm font-body font-semibold underline"
                  style={{ color: NAVY }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display font-semibold text-xl mb-6" style={{ color: NAVY }}>
                  Request Free Consultation
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-body font-semibold mb-1.5"
                      style={{ color: TEXT_MUTED }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, name: e.target.value }));
                        setErrors((p) => ({ ...p, name: undefined }));
                      }}
                      className={inputBase}
                      style={{ borderColor: errors.name ? "#ef4444" : "#e2e8f0", color: TEXT_DARK }}
                    />
                    {errors.name && (
                      <p className="text-xs mt-1 font-body" style={{ color: "#ef4444" }}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-body font-semibold mb-1.5"
                      style={{ color: TEXT_MUTED }}
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, phone: e.target.value }));
                        setErrors((p) => ({ ...p, phone: undefined }));
                      }}
                      className={inputBase}
                      style={{ borderColor: errors.phone ? "#ef4444" : "#e2e8f0", color: TEXT_DARK }}
                    />
                    {errors.phone && (
                      <p className="text-xs mt-1 font-body" style={{ color: "#ef4444" }}>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-body font-semibold mb-1.5"
                      style={{ color: TEXT_MUTED }}
                    >
                      Service Required *
                    </label>
                    <select
                      id="contact-service"
                      value={form.service}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, service: e.target.value }));
                        setErrors((p) => ({ ...p, service: undefined }));
                      }}
                      className={inputBase}
                      style={{
                        borderColor: errors.service ? "#ef4444" : "#e2e8f0",
                        color: TEXT_DARK,
                        backgroundColor: WHITE,
                      }}
                    >
                      <option value="">Select a service…</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-xs mt-1 font-body" style={{ color: "#ef4444" }}>
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg font-body font-bold text-base transition-all hover:scale-[1.02] mt-1"
                    style={{ backgroundColor: GOLD, color: NAVY }}
                  >
                    Request Free Consultation →
                  </button>

                  <p className="text-center text-xs font-body" style={{ color: TEXT_MUTED }}>
                    We&apos;ll call you within 2 working hours. Your data is 100% confidential.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Company Registration",
  "GST Compliance",
  "Trademark Registration",
  "MSME / FSSAI",
  "Income Tax & ROC",
  "CMA Reports",
];

const socialIcons = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Facebook, label: "Facebook" },
];

function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY_DARK }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/generated/logo-icon-transparent.dim_200x200.png"
                alt="Vidha Logo"
                className="h-9 w-9 object-contain"
              />
              <div className="leading-none">
                <div className="font-display font-bold text-sm" style={{ color: WHITE }}>
                  Vidha Corporate Services
                </div>
                <div className="font-body font-semibold text-xs" style={{ color: GOLD }}>
                  LLP
                </div>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.60)" }}>
              Your trusted partner for company registration, GST, trademark, and compliance in India.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                  style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.70)" }}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-body font-bold text-sm uppercase tracking-widest mb-5" style={{ color: GOLD }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="font-body text-sm transition-colors hover:text-amber-400 text-left"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-body font-bold text-sm uppercase tracking-widest mb-5" style={{ color: GOLD }}>
              Our Services
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => scrollToSection("#services")}
                    className="font-body text-sm transition-colors hover:text-amber-400 text-left"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-body font-bold text-sm uppercase tracking-widest mb-5" style={{ color: GOLD }}>
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} style={{ color: GOLD, flexShrink: 0, marginTop: 2 }} />
                <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  New Delhi, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} style={{ color: GOLD, flexShrink: 0 }} />
                <a
                  href="tel:+919999999999"
                  className="font-body text-sm transition-colors hover:text-amber-400"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  +91 99999 99999
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} style={{ color: GOLD, flexShrink: 0 }} />
                <a
                  href="mailto:info@vidhacorporate.in"
                  className="font-body text-sm transition-colors hover:text-amber-400"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  info@vidhacorporate.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={15} style={{ color: GOLD, flexShrink: 0 }} />
                <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Mon–Sat: 9:00 AM – 7:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            &copy; 2026 Vidha Corporate Services LLP. All rights reserved.
          </p>
          <p className="font-body text-xs max-w-lg" style={{ color: "rgba(255,255,255,0.35)" }}>
            Legal Disclaimer: Information on this website is for general awareness only and does not constitute legal advice.
          </p>
          <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>
            Built with ❤️ using{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-amber-400 transition-colors"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Floating Action Buttons ────────────────────────────────────────

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-50 md:hidden">
      <a
        href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20help%20with%20corporate%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: "#25d366", color: WHITE, width: 52, height: 52 }}
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="tel:+919999999999"
        className="rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: NAVY_MEDIUM, color: WHITE, width: 52, height: 52 }}
        aria-label="Call"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}

// ── App ────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen font-body" style={{ color: TEXT_DARK }}>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
