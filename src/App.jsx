import { useState } from "react";
import "./App.css";

const art = [
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85"
];
const projects = [
  ["01", "AURA DASHBOARD", "INTERFACE / REACT", "Painel web com identidade visual escura e componentes reutilizáveis.", ["React", "CSS", "UI"]],
  ["02", "AMONG US TERMO", "WEB GAME", "Jogo de palavras pensado para funcionar no celular e no computador.", ["JavaScript", "Game", "Mobile"]],
  ["03", "WEB EXPERIMENTS", "FRONT-END LAB", "Experimentos de layout, animação e interfaces em desenvolvimento.", ["HTML", "CSS", "React"]]
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState(0);
  const closeMenu = () => setMenuOpen(false);
  return <main className="portfolio">
    <div className="noise" />
    <header className="topbar">
      <a className="brand" href="#home"><span className="brand-mark">P<span>H</span></span><span>PH<span className="muted">_DEV</span></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "CLOSE −" : "MENU +"}</button>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        <a href="#about" onClick={closeMenu}>SOBRE</a><a href="#work" onClick={closeMenu}>PROJETOS</a><a href="#universe" onClick={closeMenu}>UNIVERSO</a><a className="nav-cta" href="#contact" onClick={closeMenu}>CONTATO ↗</a>
      </nav>
    </header>
    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><i /> PORTFÓLIO PESSOAL — 2026</div>
        <p className="kicker">DESENVOLVIMENTO DE SISTEMAS / FRONT-END</p>
        <h1>PEDRO<br/><span>HENRIQUE</span><b>✳</b></h1>
        <div className="hero-bottom"><p>Transformando ideias em experiências digitais.<br/>Código, criatividade e um pouco de caos.</p><a className="round-link" href="#work">↓</a></div>
        <div className="hero-meta"><span>SC / BR</span><span>BUILDING MY OWN PATH</span></div>
      </div>
      <div className="hero-art"><div className="art-frame"><img src={art[selectedArt]} alt="Arte escura de referência visual"/><span className="art-top">FIG. 001 — PERSONAL ARCHIVE</span><span className="art-bottom">NO SIGNAL / STILL LOADING...</span><span className="crosshair">+</span></div><div className="sticker">NOT<br/>JUST<br/>CODE <b>✳</b></div></div>
      <span className="vertical">EST. 200X / DIGITAL SELF</span>
    </section>
    <div className="ticker"><div>CREATIVE CODE <b>✳</b> DARK AESTHETIC <b>✳</b> FRONT-END DEV <b>✳</b> ALWAYS LEARNING <b>✳</b> PIXEL BY PIXEL <b>✳</b> CREATIVE CODE <b>✳</b> DARK AESTHETIC <b>✳</b> FRONT-END DEV <b>✳</b></div></div>
    <section className="about section" id="about">
      <div><span className="section-no">01 / ABOUT</span><h2>MAIS QUE<br/><em>UMA TELA.</em></h2></div>
      <div className="about-copy"><p className="lead">Sou estudante de Desenvolvimento de Sistemas e estou construindo meu espaço no mundo da tecnologia.</p><p className="muted">Curto criar interfaces, testar ideias e aprender fazendo. Fora do código, minhas referências vêm do anime, do skate, do streetwear e da estética digital underground.</p><div className="facts"><div><small>FOCO</small><strong>FRONT-END</strong></div><div><small>STATUS</small><strong>EM EVOLUÇÃO ↗</strong></div><div><small>BASE</small><strong>SANTA CATARINA, BR</strong></div></div></div>
    </section>
    <section className="work section" id="work"><span className="section-no">02 / SELECTED WORK</span><div className="work-heading"><h2>COISAS QUE<br/><em>EU CONSTRUO.</em></h2><p>Projetos de estudo, ideias e experiências em andamento.</p></div>
      <div className="projects">{projects.map(([n,name,type,desc,tags])=><article className="project" key={n}><span className="project-num">{n}</span><div><small>{type}</small><h3>{name}</h3><p>{desc}</p><div className="tags">{tags.map(t=><span key={t}>{t}</span>)}</div></div><span className="arrow">↗</span></article>)}</div><p className="note">* Adicione os links reais dos projetos quando estiverem publicados.</p>
    </section>
    <section className="universe section" id="universe"><span className="section-no">03 / MY UNIVERSE</span><h2>REFERÊNCIAS<br/><em>DO MEU MUNDO.</em></h2><div className="gallery"><button className="gallery-main" onClick={()=>setSelectedArt((selectedArt+1)%art.length)}><img src={art[selectedArt]} alt="Arte escura selecionada"/><span>PERSONAL ARCHIVE / CLICK TO CHANGE ↗</span></button><div className="gallery-side"><p>ANIME / MANGA<span>Contraste, sombras e personagens.</span></p><p>DIGITAL CULTURE<span>Glitch, internet antiga e estética Y2K.</span></p><p>SKATE / STREETWEAR<span>Rua, tênis e estilo próprio.</span></p><blockquote>“A identidade está nos detalhes.”<small>— PH / PERSONAL NOTE</small></blockquote></div></div></section>
    <section className="contact section" id="contact"><span className="section-no">04 / GET IN TOUCH</span><p className="kicker">TEM UM PROJETO EM MENTE?</p><h2>VAMOS FAZER<br/><em>ACONTECER.</em></h2><p className="muted">Aberto a oportunidades, freelas e ideias legais. Bora conversar.</p><a className="contact-link" href="mailto:pedtohenriquebars@gmail.com">FALAR COMIGO <span>↗</span></a><div className="contact-meta"><span>PORTFÓLIO DE PEDRO HENRIQUE</span><span>DESIGN / CODE / CURIOSITY</span></div></section>
    <footer><a className="brand" href="#home">PH<span className="muted">_DEV</span></a><span>FEITO COM CURIOSIDADE © 2026</span><a href="#home">VOLTAR AO TOPO ↑</a></footer>
  </main>;
}
export default App;