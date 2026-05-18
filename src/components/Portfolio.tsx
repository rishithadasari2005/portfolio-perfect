import { ArrowUpRight, Github, Linkedin, Mail, Phone, Trophy, Code2, GraduationCap, Briefcase, Sparkles, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import projTerrain from "@/assets/project-terrain.jpg";
import projCrop from "@/assets/project-crop.jpg";
import projPoll from "@/assets/project-poll.jpg";

const skills = [
  "C", "C++", "Java", "Python", "C#", "JavaScript", "HTML", "CSS",
  "React", "Node.js", "Express.js", "SQL", "MongoDB", "Git", "GitHub", "VS Code",
];

const projects = [
  {
    title: "Terrain Visualization System",
    period: "Jun 2025 – Aug 2025",
    description: "A web application for lunar terrain visualization with interactive features for terrain data display and responsive interface components.",
    tags: ["React", "Visualization", "Web"],
    image: projTerrain,
  },
  {
    title: "Smart Crop Yield Prediction",
    period: "Jun 2025 – Jul 2025",
    description: "Web application for crop yield analysis with features for displaying crop-related information, results, and responsive usability.",
    tags: ["React", "Data", "Analytics"],
    image: projCrop,
  },
  {
    title: "Poll Generation Platform",
    period: "May 2025 – Jul 2025 · IIT Ropar",
    description: "Web application for poll generation and management with interactive UI features that improved engagement and frontend responsiveness.",
    tags: ["React", "Node.js", "UI/UX"],
    image: projPoll,
  },
];

const achievements = [
  { title: "Flipkart GRID 7.0 Semi-Finalist", detail: "Advanced among 150,000+ participants through multiple technical elimination rounds." },
  { title: "TCS CodeVita 2025 Round 2 Qualifier", detail: "Selected among top performers in the global coding competition." },
  { title: "McKinsey Forward Program 2025", detail: "Selected for a competitive global program on structured problem-solving and leadership." },
  { title: "Infosys Springboard Pragati Cohort 5", detail: "Chosen among top candidates nationwide for intensive technical training." },
  { title: "NPTEL Java Topper (Top 5%)", detail: "Ranked in the top percentile through IIT-conducted proctored examinations." },
  { title: "Accenture Go for Gold Recognition", detail: "Recognized for dedication to continuous learning and professional development." },
];

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-lg">
            rishitha<span className="text-primary">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:dasaririshithapatel.6@gmail.com"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Let's talk <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs text-muted-foreground mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for internships & collaborations
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hi, I'm Rishitha —<br />
            <span className="text-gradient">a developer</span> who builds<br />
            with intent.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Computer Science student at Vasavi College of Engineering. I design and ship
            web applications, solve algorithmic problems, and turn complex ideas into
            delightful interfaces.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              View my work <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/40 font-medium hover:bg-card transition">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Marquee skills */}
      <section className="py-10 border-y border-border/50 bg-card/20 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className="mx-8 text-2xl md:text-3xl font-display font-medium text-muted-foreground/70 flex items-center gap-8">
              {s} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-sm font-mono text-primary mb-3">/ 01 — about</p>
            <h2 className="text-4xl md:text-5xl font-bold">A glimpse<br />into me.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm currently pursuing my B.E. in Computer Science at <span className="text-foreground font-medium">Vasavi College of Engineering</span> with
              a CGPA of <span className="text-primary font-mono">9.23</span>. I love turning ideas
              into web experiences — from terrain visualization tools to data-driven dashboards.
            </p>
            <p>
              Beyond code, I serve as <span className="text-foreground font-medium">Campus Mantri at GeeksforGeeks</span>,
              helping fellow students grow through tech communities and competitive programming.
              I'm passionate about clean UI, strong fundamentals, and shipping work that matters.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
              <Stat value="9.23" label="CGPA" />
              <Stat value="6+" label="Awards" />
              <Stat value="150K+" label="GRID Rank" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-28 px-6 bg-card/20 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-mono text-primary mb-3">/ 02 — experience</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Where I've worked.</h2>

          <div className="space-y-8">
            <TimelineItem
              icon={<Briefcase className="w-5 h-5" />}
              title="Web Development Intern"
              org="IIT Ropar"
              period="May 2025 – July 2025"
              bullets={[
                "Developed a web application for poll generation and management.",
                "Implemented interactive UI features to improve user experience and engagement.",
                "Improved frontend responsiveness for smoother user interactions.",
              ]}
            />
            <TimelineItem
              icon={<Sparkles className="w-5 h-5" />}
              title="Campus Mantri"
              org="GeeksforGeeks · Vasavi College of Engineering"
              period="Apr 2025 – Present"
              bullets={[
                "Leading the GfG student chapter on campus.",
                "Organizing technical events, contests, and learning circles.",
              ]}
            />
            <TimelineItem
              icon={<GraduationCap className="w-5 h-5" />}
              title="B.E. Computer Science Engineering"
              org="Vasavi College of Engineering"
              period="2023 – 2027 · CGPA 9.23"
              bullets={[
                "Core: Data Structures & Algorithms, OOPs, DBMS, Operating Systems.",
                "Active in coding competitions and technical communities.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-mono text-primary mb-3">/ 03 — projects</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Selected work.</h2>

          <div className="space-y-24">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card glow-border glow-border-hover">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-2">{p.period}</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-28 px-6 bg-card/20 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-mono text-primary mb-3">/ 04 — achievements</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Recognitions.</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="p-6 rounded-2xl border border-border bg-card glow-border glow-border-hover transition"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-mono text-primary mb-3">/ 05 — contact</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Let's <span className="text-gradient">create</span><br />something great.
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            I'm open to internships, collaborations, and interesting problems to solve.
          </p>
          <a
            href="mailto:dasaririshithapatel.6@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <Mail className="w-5 h-5" /> dasaririshithapatel.6@gmail.com
          </a>

          <div className="mt-10 flex items-center justify-center gap-4">
            <SocialLink href="https://github.com/" icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialLink href="https://linkedin.com/" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialLink href="tel:+916302621712" icon={<Phone className="w-5 h-5" />} label="Phone" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Rishitha Dasari. Crafted with care.</p>
          <p className="font-mono">v1.0 — built in Lovable</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-display font-bold text-gradient">{value}</div>
      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function TimelineItem({
  icon, title, org, period, bullets,
}: { icon: React.ReactNode; title: string; org: string; period: string; bullets: string[] }) {
  return (
    <div className="grid md:grid-cols-12 gap-6 p-6 md:p-8 rounded-2xl border border-border bg-card glow-border glow-border-hover transition">
      <div className="md:col-span-4 flex md:flex-col gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="font-display font-semibold text-foreground">{org}</p>
          <p className="text-xs font-mono text-muted-foreground mt-1">{period}</p>
        </div>
      </div>
      <div className="md:col-span-8">
        <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
        <ul className="space-y-2 text-muted-foreground">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <Code2 className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition"
    >
      {icon}
    </a>
  );
}
