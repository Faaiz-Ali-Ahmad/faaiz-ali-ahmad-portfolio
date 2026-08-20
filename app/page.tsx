"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const roles = [
  {
    group: "Current", title: "Web Developer", company: "Samskrita Bharati",
    focus: "Interactive Games · Front-End Development · UI/UX", date: "May 2026 — Present",
    tags: ["JavaScript", "ZIM.js", "GitHub", "Responsive Design"],
    details: [
      "Develop and port Sanskrit educational games using JavaScript and ZIM.js.",
      "Build interactive features including animations, audio, leaderboards, restart systems, and responsive controls.",
      "Improve UI consistency, accessibility, mobile compatibility, and overall user experience.",
      "Test and debug games across multiple devices and screen sizes.",
      "Integrate completed games into the organization’s main educational platform.",
      "Collaborate through GitHub, team stand-ups, technical discussions, and project demonstrations.",
    ],
  },
  {
    group: "Current", title: "Supervisor", company: "Popeyes Louisiana Kitchen",
    focus: "Team Leadership · Operations · Training", date: "[Start Month & Year] — Present",
    tags: ["Leadership", "Inventory", "Scheduling", "Training"],
    details: [
      "Supervise daily kitchen operations in a busy, high-volume restaurant.",
      "Assign responsibilities and coordinate team members during regular and peak service hours.",
      "Train new employees on kitchen procedures, food preparation, safety, and company standards.",
      "Assist with labour scheduling, inventory ordering, stock management, and food-cost control.",
      "Monitor food quality, sanitation, preparation times, and operational performance.",
      "Resolve workplace and operational issues while maintaining efficient service and a positive team environment.",
    ],
  },
  {
    group: "Previous", title: "Entrepreneurial Intern", company: "Sheridan EDGE",
    focus: "Venture Development · Product Strategy · Market Research", date: "September 2025 — December 2025",
    tags: ["Entrepreneurship", "Research", "Strategy", "CartIQ"],
    details: [
      "Completed approximately 310 hours of entrepreneurship training, venture development, project work, and EDGE events.",
      "Developed CartIQ, a self-service retail return and refund kiosk concept.",
      "Conducted customer discovery, competitor research, market analysis, and business-model development.",
      "Created customer personas, value propositions, use cases, cost estimates, and a retail pilot strategy.",
      "Explored technical features including barcode scanning, weight sensors, image verification, automated decisions, and digital refunds.",
      "Participated in the Thrive program, workshops, mentorship sessions, assignments, and project presentations.",
    ],
  },
  {
    group: "Previous", title: "Junior Tester & Front-End Developer", company: "Skill Squirrel",
    focus: "Quality Assurance · Accessibility · Front-End Development", date: "January 2025 — April 2025",
    tags: ["React", "Playwright", "JavaScript", "Jira"],
    details: [
      "Tested web applications using Playwright and Chromium-based browser tools.",
      "Identified functional defects, usability concerns, responsive-design problems, and accessibility issues.",
      "Implemented interface improvements using React, JavaScript, HTML, and CSS.",
      "Conducted accessibility reviews and verified fixes across browsers and screen sizes.",
      "Documented defects, test results, and development tasks through Jira and GitHub.",
      "Collaborated remotely with developers and project stakeholders to improve application quality.",
    ],
  },
];

const projects = [
  { title: "Spring Cloud Microservices Platform", description: "A full-stack system demonstrating service discovery, inter-service communication, and centralized API routing across independently deployed services.", tech: ["Java", "Spring Boot", "Spring Cloud", "Eureka", "Feign", "Angular"], actions: ["GitHub ↗", "Live Demo ↗", "View Case Study →"], caseStudy: true },
  { title: "ZIM.js Educational Games", description: "A collection of interactive Sanskrit learning games modernized with responsive controls, animations, audio, leaderboards, and a consistent user experience.", tech: ["JavaScript", "ZIM.js", "HTML5 Canvas", "Responsive Design", "GitHub"], actions: ["View Project ↗", "View Case Study →"], caseStudy: true },
  { title: "CartIQ — Self-Service Return System", badge: "Concept Project", description: "A proposed retail kiosk that streamlines product returns using receipt scanning, product verification, automated decisions, and digital refund processing.", tech: ["Product Strategy", "System Design", "Market Research", "REST API Concept", "Cloud Architecture"], actions: ["View Concept ↗", "View Case Study →"], caseStudy: true },
  { title: "Android Room Database Application", description: "A native Android application that allows users to create, view, update, and delete records through a modern interface backed by local persistent storage.", tech: ["Kotlin", "Jetpack Compose", "Room Database", "KSP", "Android Studio"], actions: ["GitHub ↗", "View Details →"] },
  { title: "iOS Pizza Ordering Application", description: "A native iOS ordering application that lets customers customize a pizza, select order preferences, and review their choices through a responsive mobile interface.", tech: ["Swift", "UIKit", "Storyboard", "Auto Layout", "Xcode"], actions: ["GitHub ↗", "View Details →"] },
  { title: "Hotel Management System", description: "A database-driven application for managing user authentication, room availability, reservations, customer information, billing, and hotel records.", tech: ["Python", "MySQL", "SQL", "Authentication", "CRUD Operations"], actions: ["GitHub ↗", "View Details →"] },
  { title: "Airline Booking System", description: "A reservation application that allows users to search available flights, select seats, manage passenger information, and complete flight bookings.", tech: ["Python", "SQL", "Database Design", "Search", "Reservation Management"], actions: ["GitHub ↗", "View Details →"] },
  { title: "Space Fighter Game", description: "A browser-based arcade game featuring responsive player movement, enemy collisions, scoring, timed gameplay, increasing difficulty, and restart functionality.", tech: ["JavaScript", "HTML5", "CSS3", "Game Logic", "Collision Detection"], actions: ["GitHub ↗", "Play Game ↗", "View Details →"] },
];

const education = [
  {
    number: "01", status: "IN PROGRESS",
    title: "COMPUTER SYSTEMS TECHNOLOGY —\nSOFTWARE DEVELOPMENT & NETWORK ENGINEERING",
    credential: "Ontario College Advanced Diploma · Co-op",
    school: "Sheridan College · Davis Campus, Brampton",
    dates: "September 2025 — Expected December 2026",
    gpa: "Cumulative GPA: 3.70 / 4.00",
    summary: "Continued into the advanced diploma after completing the Computer Programming diploma, expanding my knowledge in advanced software development, cloud computing, mobile applications, networking, databases, and cybersecurity.",
    topics: ["Spring Boot", "Microservices", "Cloud Architecture", "Android & iOS", "Big Data", "Networking", "Cybersecurity"],
  },
  {
    number: "02", status: "COMPLETED",
    title: "COMPUTER PROGRAMMING",
    credential: "Ontario College Diploma",
    school: "Sheridan College · Davis Campus, Brampton",
    dates: "September 2023 — September 2025",
    summary: "Completed a hands-on programming diploma focused on software development, web and mobile applications, databases, operating systems, computer networks, and software-engineering fundamentals.",
    topics: ["Java", "Python", "C#", "JavaScript", "Web Development", "SQL", "Linux", "Networking", "Data Structures & Algorithms"],
  },
];

const mysterySequence: Array<{
  kind: "mission" | "belief" | "closing" | "final";
  text?: string;
  lines?: Array<[string, string]>;
}> = [
  { kind: "mission", lines: [["MISSION", "Build useful things."], ["FUEL", "Curiosity."], ["UNINVITED PASSENGERS", "Bugs."]] },
  { kind: "belief", text: "I believe the best technology feels simple, even when the code behind it definitely wasn’t." },
  { kind: "belief", text: "I build things people can actually use, not just projects that look impressive in a README." },
  { kind: "belief", text: "I ask a lot of questions because “it works” and “it makes sense” are not always the same thing." },
  { kind: "belief", text: "I use AI to move faster, but I still bring the brain." },
  { kind: "belief", text: "I care about accessibility because “works on my machine” is not a user strategy." },
  { kind: "belief", text: "I choose progress over perfection, although I may still spend twenty minutes fixing one pixel." },
  { kind: "belief", text: "I share credit, ask for help, and try to be the kind of teammate people genuinely enjoy working with." },
  { kind: "belief", text: "I keep learning because technology changes fast, and pretending to know everything ages terribly." },
  { kind: "closing", text: "The goal is simple: useful products, reliable code, happy users, and fewer mysterious errors at 3 a.m." },
  { kind: "closing", text: "And if an idea feels a little too ordinary?" },
  { kind: "final", text: "I keep pushing until it isn’t." },
];

function Projects() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    let frame = 0;
    const watch = () => { setVisible((window as any).__journey?.section === 2); frame = requestAnimationFrame(watch); };
    frame = requestAnimationFrame(watch); return () => cancelAnimationFrame(frame);
  }, []);
  const goToCaseStudies = () => {
    const journey = (window as any).__journey;
    const destination = journey?.stops?.[5] ?? 5 / 8;
    if (journey?.el) journey.el.scrollTo({ top: destination * (journey.el.scrollHeight - journey.el.clientHeight), behavior: "smooth" });
    setOpen(null);
  };
  return <section className={`projects-ui ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
    <div className="projects-heading"><span>02 / Selected work</span><h2>Projects in motion</h2><p>Select a project to inspect</p></div>
    <div className="project-field">
      <div className="project-ghost" aria-hidden="true">PROJECTS</div>
      <div className="project-core" aria-hidden="true"><span>08</span><small>PROJECT<br />ORBITS</small></div>
      <div className="project-satellite satellite-one" aria-hidden="true">✦</div>
      <div className="project-satellite satellite-two" aria-hidden="true">+</div>
      {projects.map((project, index) => <button className="project-float" style={{ "--i": index } as React.CSSProperties} onClick={() => setOpen(index)} key={project.title}>
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        {project.badge && <i>{project.badge}</i>}
        <strong>{project.title}</strong>
        <small>{project.tech.slice(0, 3).join(" · ")}</small>
        <em>EXPLORE +</em>
      </button>)}
    </div>
    {open !== null && <div className="project-backdrop" onClick={() => setOpen(null)}>
      <article className="project-dialog" role="dialog" aria-modal="true" aria-label={projects[open].title} onClick={event => event.stopPropagation()}>
        <button className="details-close" onClick={() => setOpen(null)} aria-label="Close project details">✕</button>
        <span className="details-kicker">PROJECT {String(open + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
        {projects[open].badge && <i className="project-badge">{projects[open].badge}</i>}
        <h3>{projects[open].title}</h3><p>{projects[open].description}</p>
        <div className="project-tech">{projects[open].tech.map(item => <span key={item}>{item}</span>)}</div>
        <div className="project-actions">{projects[open].actions.map(action => action.includes("Case Study") ? <button key={action} onClick={goToCaseStudies}>{action}</button> : <span title="Add the project URL to activate this link" key={action}>{action}</span>)}</div>
      </article>
    </div>}
  </section>;
}

function Experience() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    let frame = 0;
    const watch = () => { setVisible((window as any).__journey?.section === 3); frame = requestAnimationFrame(watch); };
    frame = requestAnimationFrame(watch); return () => cancelAnimationFrame(frame);
  }, []);
  return <section className={`experience-ui ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
    <div className="experience-panel">
      <div className="experience-heading"><h2>Experience</h2><span>Click a role to expand</span></div>
      <div className="experience-list">
        {["Current", "Previous"].map(group => <div className="experience-group" key={group}>
          <h3>{group}</h3>
          {roles.map((role, index) => role.group === group && <article className={`role-card ${open === index ? "open" : ""}`} key={role.title}>
            <button onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}>
              <span className="role-star">✦</span><span className="role-summary"><strong>{role.title} <em>@ {role.company}</em></strong><time>{role.date}</time></span><span className="role-toggle">{open === index ? "CLOSE −" : "VIEW +"}</span>
            </button>
            {open === index && <div className="details-backdrop" onClick={() => setOpen(null)}>
              <div className="details-dialog" role="dialog" aria-modal="true" aria-label={`${role.title} at ${role.company}`} onClick={event => event.stopPropagation()}>
                <button className="details-close" onClick={() => setOpen(null)} aria-label="Close experience details">✕</button>
                <span className="details-kicker">{role.group} · {role.date}</span>
                <h4>{role.title}</h4><h5>@ {role.company}</h5><p>{role.focus}</p>
                <div className="details-tags">{role.tags.map(tag => <i key={tag}>{tag}</i>)}</div>
                <ul>{role.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
              </div>
            </div>}
          </article>)}
        </div>)}
      </div>
    </div>
  </section>;
}

function Education() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  useEffect(() => {
    let frame = 0;
    const watch = () => {
      const journey = (window as any).__journey;
      const position = journey?.position ?? (journey?.offset ?? 0) * 8;
      setVisible(position >= 5.5 && position < 6.55);
      setActive(position >= 6.18 ? 1 : 0);
      frame = requestAnimationFrame(watch);
    };
    frame = requestAnimationFrame(watch);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <section className={`education-ui ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
    <header className="education-heading">
      <span>06 / Academic journey</span>
      <h2>Education</h2>
      <p>Learning in motion</p>
    </header>
    <div className="education-ghost" aria-hidden="true">LEARN</div>
    <i className="education-orbit orbit-a" aria-hidden="true">✦</i>
    <i className="education-orbit orbit-b" aria-hidden="true">+</i>
    <div className="education-field">
      {education.map((item, index) => <article className={`education-float education-${index + 1} ${index === active ? "is-current" : index < active ? "is-past" : "is-next"}`} style={{ "--i": index } as React.CSSProperties} key={item.number}>
        <div className="education-status"><b>{item.number}</b><span>— {item.status}</span></div>
        <h3>{item.title}</h3>
        <div className="education-meta">
          <strong>{item.credential}</strong>
          <span>{item.school}</span>
          <time>{item.dates}</time>
          {item.gpa && <em>{item.gpa}</em>}
        </div>
        <p>{item.summary}</p>
        <div className="education-topics">{item.topics.map(topic => <span key={topic}>{topic}</span>)}</div>
      </article>)}
    </div>
  </section>;
}

function Mystery() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  useEffect(() => {
    let frame = 0;
    const watch = () => {
      const journey = (window as any).__journey;
      const position = journey?.position ?? (journey?.offset ?? 0) * 8;
      const readingProgress = Math.max(0, Math.min(.78, position - 7));
      const next = Math.min(mysterySequence.length - 1, Math.floor(readingProgress / (.78 / mysterySequence.length)));
      setVisible(position >= 6.62 && position < 7.81);
      setActive(next);
      frame = requestAnimationFrame(watch);
    };
    frame = requestAnimationFrame(watch);
    return () => cancelAnimationFrame(frame);
  }, []);

  const item = mysterySequence[active];
  return <section className={`mystery-ui ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
    <header className="mystery-heading">
      <span>07 / Flight manifest</span>
      <strong>{String(active + 1).padStart(2, "0")} / {String(mysterySequence.length).padStart(2, "0")}</strong>
    </header>
    <div className="mystery-stage">
      <div className="mystery-ghost" aria-hidden="true">?</div>
      <i className="mystery-star star-left" aria-hidden="true">✦</i>
      <i className="mystery-star star-right" aria-hidden="true">+</i>
      <article className={`mystery-entry is-${item.kind}`} key={active}>
        {item.kind === "mission" ? <div className="mission-stack">
          {item.lines?.map(([label, value]) => <p key={label}><b>{label}</b><span>{value}</span></p>)}
        </div> : <p>{item.text}</p>}
      </article>
    </div>
    <footer className="mystery-progress" aria-hidden="true">
      <span>BEGIN</span>
      <div>{mysterySequence.map((_, index) => <i className={index === active ? "active" : index < active ? "passed" : ""} key={index} />)}</div>
      <span>CONTACT</span>
    </footer>
  </section>;
}

function Contact() {
  const [visible, setVisible] = useState(false);
  const [sendStatus, setSendStatus] = useState("");
  useEffect(() => {
    let frame = 0;
    const watch = () => {
      const journey = (window as any).__journey;
      const position = journey?.position ?? (journey?.offset ?? 0) * 8;
      setVisible(position >= 7.8);
      frame = requestAnimationFrame(watch);
    };
    frame = requestAnimationFrame(watch);
    return () => cancelAnimationFrame(frame);
  }, []);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const replyTo = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim() || "Portfolio enquiry";
    const message = String(data.get("message") ?? "").trim();
    const body = [
      "Hello Faaiz,",
      "",
      message,
      "",
      `From: ${name}`,
      `Reply to: ${replyTo}`,
    ].join("\n");

    setSendStatus("Opening your email app…");
    window.location.href = `mailto:faaizaliahmad05@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return <section className={`contact-ui ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
    <span className="contact-kicker">08 / Final transmission</span>
    <div className="contact-orbit orbit-one" aria-hidden="true" />
    <div className="contact-orbit orbit-two" aria-hidden="true" />
    <i className="contact-star contact-star-left" aria-hidden="true">✦</i>
    <i className="contact-star contact-star-right" aria-hidden="true">+</i>
    <div className="contact-content">
      <div className="contact-intro">
        <span className="contact-eyebrow"><i />OPEN TO NEW OPPORTUNITIES</span>
        <h2>LET’S BUILD <em>SOMETHING</em></h2>
        <p className="contact-lead">Have an opportunity, an ambitious idea,<br />or a stubborn bug that needs backup?</p>
        <div className="contact-availability">
          <i aria-hidden="true" />
          <p>AVAILABLE FOR SOFTWARE DEVELOPMENT,<br />CLOUD &amp; FULL-STACK OPPORTUNITIES</p>
        </div>
      </div>
      <aside className="contact-panel">
        <div className="contact-form-header">
          <div>
            <span>DIRECT TRANSMISSION</span>
            <small>COMPOSE A MESSAGE</small>
          </div>
          <a href="mailto:faaizaliahmad05@gmail.com">faaizaliahmad05@gmail.com ↗</a>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <label>
            <span>YOUR NAME</span>
            <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" required />
          </label>
          <label>
            <span>YOUR EMAIL</span>
            <input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
          </label>
          <label className="field-wide">
            <span>SUBJECT</span>
            <input name="subject" type="text" placeholder="Project opportunity" />
          </label>
          <label className="field-wide">
            <span>MESSAGE</span>
            <textarea name="message" rows={4} placeholder="Tell me a little about the opportunity or idea…" required />
          </label>
          <div className="contact-form-submit field-wide">
            <button type="submit">SEND EMAIL <b aria-hidden="true">↗</b></button>
            <small aria-live="polite">{sendStatus || "Opens in your email app"}</small>
          </div>
        </form>
        <div className="contact-panel-bottom">
          <span>BRAMPTON, ONTARIO · EARTH</span>
          <nav className="contact-actions" aria-label="Professional links">
            <a href="https://github.com/Faaiz-Ali-Ahmad" target="_blank" rel="noreferrer">GITHUB ↗</a>
            <a href="https://www.linkedin.com/in/faaiz-ali-ahmad/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
            <span title="Add your résumé file to activate this link">RÉSUMÉ ↗</span>
          </nav>
        </div>
      </aside>
    </div>
    <footer className="contact-footer"><strong className="contact-signature">FAAIZ ALI AHMAD</strong><span>BRAMPTON · ONTARIO · CANADA</span></footer>
  </section>;
}

function Atmosphere() {
  const frameRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const moveWeather = () => {
      const element = frameRef.current;
      const journey = (window as any).__journey;
      if (element && journey) {
        const position = journey.position ?? journey.offset * 8;
        element.dataset.scene = String(Math.round(position));
        element.style.setProperty("--weather-x", `${Math.sin(position * 1.18) * 5.5}vw`);
        element.style.setProperty("--weather-y", `${Math.cos(position * .83) * 4}vh`);
        element.style.setProperty("--weather-turn", `${Math.sin(position * .62) * 4}deg`);
        element.style.setProperty("--weather-density", String(.9 + Math.sin(position * Math.PI) * .07));
      }
      frame = requestAnimationFrame(moveWeather);
    };
    frame = requestAnimationFrame(moveWeather); return () => cancelAnimationFrame(frame);
  }, []);
  return <div ref={frameRef} className="atmosphere-frame" data-scene="0" aria-hidden="true"><div className="weather-stage"><i className="edge-mist mist-left" /><i className="edge-mist mist-right" /><i className="edge-mist mist-bottom" /><i className="edge-mist mist-middle" /><i className="edge-mist mist-top" /><span className="mist-halo" /></div></div>;
}

export default function Home() {
  return <><div id="root" /><Atmosphere /><Projects /><Experience /><Education /><Mystery /><Contact /><Script id="dungyov-experience" src="/assets/site.js" type="module" strategy="afterInteractive" /></>;
}
