import { useEffect, useState } from "react";
import "./App.css";

const artworks = [
  { title: "AFTER DARK", code: "ARCHIVE_001", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=90", note: "quiet minds / loud ideas" },
  { title: "NO SIGNAL", code: "ARCHIVE_002", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=90", note: "somewhere in the static" },
  { title: "VOID WALKER", code: "ARCHIVE_003", image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1400&q=90", note: "find your own frequency" },
];
const projects = [
  { n: "01", name: "AURA DASHBOARD", kind: "DASHBOARD / UI", desc: "Uma interface de painel com visual dark, organização clara e componentes reutilizáveis.", stack: ["React", "CSS", "UI Design"], status: "STUDY PROJECT", symbol: "◈" },
  { n: "02", name: "AMONG US TERMO", kind: "BROWSER GAME", desc: "Um jogo de palavras com tentativas limitadas, feedback visual e foco em experiência mobile.", stack: ["JavaScript", "Game Logic", "Responsive"], status: "WEB EXPERIMENT", symbol: "⌁" },
  { n: "03", name: "PH / WEB LAB", kind: "CREATIVE DEVELOPMENT", desc: "Experimentos com layouts, animações, microinterações e novas ideias para a web.", stack: ["HTML", "CSS", "React"], status: "ONGOING", symbol: "✳" },
];
const skills = [
  { name: "HTML", level: "01", desc: "Estrutura e semântica" },
  { name: "CSS", level: "02", desc: "Layout, responsividade e motion" },
  { name: "JAVASCRIPT", level: "03", desc: "Lógica e interatividade" },
  { name: "REACT", level: "04", desc: "Componentes e interfaces" },
  { name: "GIT / GITHUB", level: "05", desc: "Versionamento e colaboração" },
  { name: "UI THINKING", level: "06", desc: "Detalhes que fazem diferença" },
];
const steps = [
  ["01", "OBSERVAR", "Entender o problema, a ideia e quem vai usar."],
  ["02", "RASCUNHAR", "Organizar a estrutura e definir a direção visual."],
  ["03", "CONSTRUIR", "Transformar o plano em código, uma parte por vez."],
  ["04", "POLIR", "Testar, ajustar e cuidar dos detalhes."],
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [artIndex, setArtIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const filters = ["ALL", "INTERFACE", "GAME", "EXPERIMENT"];
  const visibleProjects = projects.filter((p) => activeFilter === "ALL" || (activeFilter === "INTERFACE" && p.kind.includes("UI")) || (activeFilter === "GAME" && p.kind.includes("GAME")) || (activeFilter === "EXPERIMENT" && p.kind.includes("CREATIVE")));
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    const clock = () => setTime(new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" }).format(new Date()));
    clock();
    const timer = window.setInterval(clock, 30000);
    return () => { window.removeEventListener("scroll", update); window.clearInterval(timer); };
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <main className="portfolio" id="top">
    <div className="noise" aria-hidden="true" />
    <header className={scrolled ? "topbar topbar-scrolled" : "topbar"}>
      <a className="brand" href="#top" aria-label="Pedro Henrique, início"><span className="brand-mark">P<span>H</span></span><span>PH<span className="muted">_DEV</span></span></a>
      <div className="header-status"><i /> AVAILABLE TO BUILD <span>{time || "SC / BR"}</span></div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? "CLOSE −" : "MENU +"}</button>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        <a href="#about" onClick={closeMenu}>SOBRE</a><a href="#skills" onClick={closeMenu}>SKILLS</a><a href="#work" onClick={closeMenu}>PROJETOS</a><a href="#universe" onClick={closeMenu}>UNIVERSO</a><a className="nav-cta" href="#contact" onClick={closeMenu}>CONTATO ↗</a>
      </nav>
    </header>
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <div className="eyebrow"><i /> DIGITAL PORTFOLIO <span>VOL. 001 / 2026</span></div>
        <p className="kicker">ESTUDANTE DE DESENVOLVIMENTO DE SISTEMAS</p>
        <h1><span className="hero-line">PEDRO</span><span className="hero-line outline">HENRIQUE<span className="hero-star">✳</span></span></h1>
        <p className="hero-description">Eu transformo ideias em experiências digitais.<br/><span>Código limpo. Visual marcante. Curiosidade sem fim.</span></p>
        <div className="hero-actions"><a className="button-primary" href="#work">EXPLORAR PROJETOS <span>↘</span></a><a className="text-link" href="#about">CONHECER O DEV <span>↗</span></a></div>
        <div className="hero-meta"><span>SC / BRAZIL</span><span>FRONT-END IN PROGRESS</span><span>SCROLL TO EXPLORE ↓</span></div>
      </div>
      <div className="hero-art">
        <div className="art-frame"><img src={artworks[artIndex].image} alt={artworks[artIndex].title + " — arte de referência escura"} /><div className="art-overlay" /><span className="art-top">{artworks[artIndex].code} / PERSONAL ARCHIVE</span><span className="art-center">PH<span>®</span></span><span className="art-bottom">{artworks[artIndex].note}</span><span className="scanline" /></div>
        <div className="sticker">STAY<br/>STRANGE <b>✳</b></div><div className="art-index"><span>SELECT VISUAL</span>{artworks.map((art, i) => <button key={art.code} className={i === artIndex ? "art-dot active" : "art-dot"} onClick={() => setArtIndex(i)} aria-label={"Mostrar arte " + (i + 1)}>{String(i + 1).padStart(2, "0")}</button>)}</div>
        <span className="vertical">DESIGN IS A POINT OF VIEW / 2026</span>
      </div>
      <span className="hero-scroll" aria-hidden="true">↓</span>
    </section>
    <div className="ticker"><div>CREATIVE CODE <b>✳</b> DARK AESTHETIC <b>✳</b> FRONT-END DEV <b>✳</b> ALWAYS LEARNING <b>✳</b> BUILT DIFFERENT <b>✳</b> CREATIVE CODE <b>✳</b> DARK AESTHETIC <b>✳</b> FRONT-END DEV <b>✳</b></div></div>
    <section className="intro section" id="about">
      <div className="section-top"><span className="section-no">01 / THE PERSON</span><span className="section-side">BEHIND THE PIXELS</span></div>
      <div className="intro-grid"><h2>MAIS QUE<br/><em>UMA TELA.</em></h2><div className="intro-copy"><p className="lead">Sou o Pedro — estudante de Desenvolvimento de Sistemas, curioso por tecnologia e apaixonado por criar coisas com identidade.</p><p className="muted">Tô construindo meu caminho na programação na prática: testando ideias, errando, aprendendo e melhorando cada projeto. Gosto de interfaces com personalidade, detalhes bem pensados e aquela estética dark que mistura internet antiga com o futuro.</p><div className="signature">PEDRO HENRIQUE <span>↗</span></div></div></div>
      <div className="facts"><div><small>01 / FOCO</small><strong>FRONT-END</strong><span>Interfaces e experiências web</span></div><div><small>02 / MINDSET</small><strong>ALWAYS LEARNING</strong><span>Aprender fazendo</span></div><div><small>03 / BASE</small><strong>SANTA CATARINA</strong><span>Brasil · UTC−3</span></div><div><small>04 / CURRENT MODE</small><strong>BUILDING</strong><span>Um projeto por vez</span></div></div>
    </section>
    <section className="skills section" id="skills">
      <div className="section-top"><span className="section-no">02 / TOOLKIT</span><span className="section-side">TOOLS I USE TO CREATE</span></div>
      <div className="skills-heading"><h2>APRENDENDO.<br/><em>CONSTRUINDO.</em></h2><p>Minha caixa de ferramentas está sempre evoluindo. Essas são as tecnologias e habilidades que fazem parte da minha jornada.</p></div>
      <div className="skill-grid">{skills.map((skill) => <article className="skill-card" key={skill.name}><div className="skill-card-top"><span>{skill.level}</span><span className="skill-symbol">↗</span></div><h3>{skill.name}</h3><p>{skill.desc}</p><div className="skill-line"><span /></div></article>)}</div>
      <div className="learning-note"><span className="pulse-dot" /> <p><strong>STATUS: EM EVOLUÇÃO</strong><br/>Não preciso saber tudo hoje. Preciso continuar aprendendo amanhã.</p><span className="note-symbol">∞</span></div>
    </section>
    <section className="work section" id="work">
      <div className="section-top"><span className="section-no">03 / SELECTED WORK</span><span className="section-side">MADE WITH CURIOSITY</span></div>
      <div className="work-heading"><h2>IDEIAS VIRANDO<br/><em>COISAS REAIS.</em></h2><p>Projetos de estudo e experiências que mostram o que estou aprendendo na prática.</p></div>
      <div className="filter-row"><span>FILTER BY TYPE</span><div>{filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? "filter active" : "filter"}>{filter}</button>)}</div></div>
      <div className="projects">{visibleProjects.map((project) => <article className="project" key={project.n}><div className="project-number">{project.n}</div><div className="project-symbol">{project.symbol}</div><div className="project-content"><div className="project-meta"><span>{project.kind}</span><span>{project.status}</span></div><h3>{project.name}</h3><p>{project.desc}</p><div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="project-arrow">↗</span></article>)}</div>
      <p className="project-disclaimer">PROJETOS DE ESTUDO / DESCRIÇÕES ILUSTRATIVAS — LINKS SERÃO ADICIONADOS QUANDO DISPONÍVEIS.</p>
    </section>
    <section className="process section">
      <div className="section-top"><span className="section-no">04 / HOW I WORK</span><span className="section-side">SMALL STEPS. REAL PROGRESS.</span></div>
      <div className="process-heading"><h2>DO ZERO<br/><em>AO DETALHE.</em></h2><p>Não é só fazer funcionar. É pensar em como cada parte se conecta e como a pessoa vai sentir usando aquilo.</p></div>
      <div className="steps">{steps.map(([n, title, desc]) => <article className="step" key={n}><span className="step-number">{n}</span><div className="step-marker">✳</div><h3>{title}</h3><p>{desc}</p></article>)}</div>
    </section>
    <section className="universe section" id="universe">
      <div className="section-top"><span className="section-no">05 / PERSONAL ARCHIVE</span><span className="section-side">THINGS THAT SHAPE MY TASTE</span></div>
      <h2>MEU MUNDO.<br/><em>MINHAS REFERÊNCIAS.</em></h2>
      <p className="universe-intro">Um pouco das referências que inspiram meu olhar — do visual que curto até as coisas que me tiram da frente do computador.</p>
      <div className="gallery"><button className="gallery-main" onClick={() => setArtIndex((artIndex + 1) % artworks.length)}><img src={artworks[artIndex].image} alt={artworks[artIndex].title + " — referência visual"}/><span className="gallery-label">PERSONAL ARCHIVE / CLICK TO CHANGE ↗</span><span className="gallery-caption">{artworks[artIndex].title}<small>{artworks[artIndex].code}</small></span></button><div className="gallery-side"><article><span>01 / ANIME & MANGA</span><h3>CONTRASTE.<br/>PERSONALIDADE.</h3><p>Personagens, sombras, painéis em preto e branco e histórias que ficam na cabeça.</p></article><article><span>02 / Y2K & INTERNET CULTURE</span><h3>GLITCH, NOISE<br/>& DIGITAL CHAOS.</h3><p>Interfaces experimentais, texturas, tipografia forte e aquele futuro imaginado no passado.</p></article><article><span>03 / SKATE & STREETWEAR</span><h3>RUA, MOVIMENTO<br/>& IDENTIDADE.</h3><p>Estilo pessoal, tênis, skate e referências que não precisam seguir um padrão.</p></article><blockquote>“A identidade está nos detalhes.”<small>— PH / PERSONAL NOTE</small></blockquote></div></div>
    </section>
    <section className="manifesto"><span className="manifesto-label">A NOTE TO MY FUTURE SELF</span><p>“Não precisa estar perfeito.<br/>Precisa estar <em>em movimento.</em>”</p><div><span>KEEP BUILDING.</span><span>KEEP BECOMING. ↗</span></div><div className="manifesto-orbit orbit-one" /><div className="manifesto-orbit orbit-two" /></section>
    <section className="contact section" id="contact">
      <div className="section-top"><span className="section-no">06 / CONTACT</span><span className="section-side">THE NEXT THING STARTS HERE</span></div>
      <p className="kicker">TEM UMA IDEIA? PRECISA DE UM SITE?</p><h2>VAMOS FAZER<br/><em>ACONTECER.</em></h2><p className="contact-description">Aberto a oportunidades, projetos freelance e ideias que valem a pena tirar do papel. Se tu curtiu o que viu, bora conversar.</p>
      <div className="contact-actions"><a className="button-primary" href="https://github.com/shy-word1" target="_blank" rel="noreferrer">ME CHAMA NO GITHUB <span>↗</span></a><a className="text-link" href="https://github.com/shy-word1" target="_blank" rel="noreferrer">GITHUB <span>↗</span></a></div>
      <div className="contact-meta"><span>PORTFÓLIO DE PEDRO HENRIQUE</span><span>DESIGN / CODE / CURIOSITY</span><span>SC, BR — {time || "UTC−3"}</span></div>
    </section>
    <footer><a className="brand" href="#top"><span className="brand-mark">P<span>H</span></span><span>PH<span className="muted">_DEV</span></span></a><span>FEITO COM CURIOSIDADE © 2026</span><a href="#top">VOLTAR AO TOPO ↑</a></footer>
    <a className="back-top" href="#top" aria-label="Voltar ao topo">↑</a>
  </main>;
}
export default App;