import { useState } from 'react';
import './App.css';

interface Artwork {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  technique?: string;
  year: string;
}

const ARTWORKS_DATA: Artwork[] = [
  {
    id: 1,
    title: 'Star Wars',  
    category: 'Digital',
    imageUrl: 'images/yoda.png',     
    description: 'Screenshot do Yoda',
    year: '2024'
  },
  {
    id: 2,
    title: 'hey frank!',
    category: 'Telas',
    imageUrl: 'https://i.pinimg.com/1200x/30/7a/be/307abe52dc5ebfe5a34be1ee22314b2c.jpg',
    description: 'uma referencia a welcome home e seus amigos da vizinhança',
    year: '2023'
  },
  {
    id: 3,
    title: 'BillFord',
    category: 'Conceito',
    imageUrl: 'https://i.pinimg.com/736x/f6/1c/da/f61cda39af70463fef5bc60d594f005b.jpg',
    description: 'Sobre a descrição de O Mentor("muse") de stanford pines',
    year: '2024'
  },
  {
    id: 4,
    title: 'Sexbob-omb',
    category: 'Digital',
    imageUrl: 'https://i.pinimg.com/736x/fc/6d/b0/fc6db0922eb902a99e4c079113069726.jpg',
    description: 'o trio um tanto azarado em cartoon',
    year: '2024'
  },
  {
    id: 5,
    title: 'cyberpunk edrunners',
    category: 'Digital',
    imageUrl: 'https://i.pinimg.com/1200x/17/5a/4c/175a4c99abad81def93361478c11a7f3.jpg',
    description: 'todo o grupo ainda vivo de Night cyty',
    year: '2024'
  },
  {
    id: 6,
    title: 'O hobbit: Thorin',
    category: 'Digital',
    imageUrl: 'https://i.pinimg.com/736x/e8/06/a0/e806a03e65c9afbd7cdb64f2dedb3bc6.jpg',
    description: 'O principe dos anões e sua luta contra a avareza',
    year: '2024'
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);

  const categories = ['Todas', 'Digital', 'Telas', 'Conceito'];

  const filteredArtworks = activeCategory === 'Todas'
    ? ARTWORKS_DATA
    : ARTWORKS_DATA.filter(art => art.category === activeCategory);

  const handleWhatsappContact = (artTitle?: string) => {
    const phone = '5500000000000'; // Substitua pelo seu número real com DDD
    let text = 'Olá! Gostaria de conversar sobre seu trabalho artístico.';
    if (artTitle) {
      text = `Olá! Gostaria de saber mais informações/valores sobre a obra autoral: "${artTitle}".`;
    }
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="navbar">
        <div className="container">
          <div className="brand-logo">
            <span className="logo-cyan">Woker's</span> <span className="logo-orange">Art</span>
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#galeria">Obras</a></li>
              <li><a href="#como-funciona">Encomendas</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
          <button className="btn-contact-header" onClick={() => handleWhatsappContact()}>
            Solicitar Autoral
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Arte Visual com <span className="highlight-cyan">Identidade</span> & <span className="highlight-orange">Impacto</span>
          </h1>
          <p className="hero-subtitle">
            Explore a coleção de obras originais de Woker's Art ou solicite uma peça autoral exclusiva desenvolvida sob medida para o seu espaço.
          </p>
          <div className="hero-actions">
            <a href="#galeria" className="btn-primary">Ver Obras</a>
            <a href="#como-funciona" className="btn-secondary">Como Encomendar</a>
          </div>
        </div>
      </section>

      {/* Portfólio / Galeria */}
      <section id="galeria" className="portfolio-section">
        <div className="container">
          <h2 className="section-title">Galeria de <span className="highlight-cyan">Exemplos</span></h2>
          <p className="section-subtitle">Clique em qualquer arte para ver os detalhes técnicos e inspiração</p>

          {/* Filtros */}
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de Artes */}
          <div className="art-grid">
            {filteredArtworks.map((art) => (
              <div key={art.id} className="art-card" onClick={() => setSelectedArt(art)}>
                <div className="art-image-wrapper">
                  <img src={art.imageUrl} alt={art.title} />
                </div>
                <div className="art-info">
                  <span className="art-category">{art.category}</span>
                  <h3 className="art-title">{art.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona para Negociar Autoral */}
      <section id="como-funciona" className="how-it-works">
        <div className="container">
          <h2 className="section-title">Como Funciona uma <span className="highlight-orange">Obra Autoral</span></h2>
          <p className="section-subtitle">Processo transparente do primeiro conceito até a entrega final</p>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3 className="step-title">Briefing & Ideia</h3>
              <p className="step-desc">
                Alinhamos a ideia principal, paleta de cores, dimensões/formato desejado e o objetivo da obra.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <h3 className="step-title">Proposta & Esboço</h3>
              <p className="step-desc">
                Apresento um orçamento detalhado junto a rascunhos conceituais para aprovação do conceito visual.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <h3 className="step-title">Produção & Feedback</h3>
              <p className="step-desc">
                Desenvolvimento da arte com atualizações periódicas do progresso para validação de detalhes.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">04</div>
              <h3 className="step-title">Entrega & Certificado</h3>
              <p className="step-desc">
                Envio da obra finalizada (física ou digital em alta resolução) acompanhada do Certificado de Autoria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="contact-section">
        <div className="container">
          <div className="contact-box">
            <h2 className="section-title">Interessado em uma <span className="highlight-cyan">Arte Única</span>?</h2>
            <p className="section-subtitle" style={{ marginBottom: '30px' }}>
              Entre em contato direto para tirar dúvidas sobre preços, prazos ou pedir um orçamento personalizado.
            </p>
            <button className="btn-primary" onClick={() => handleWhatsappContact()}>
              Negociar via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Modal de Detalhes da Arte */}
      {selectedArt && (
        <div className="modal-overlay" onClick={() => setSelectedArt(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedArt(null)}>&times;</button>
            <img src={selectedArt.imageUrl} alt={selectedArt.title} className="modal-image" />
            <div className="modal-details">
              <div>
                <span className="art-category">{selectedArt.category} ({selectedArt.year})</span>
                <h3>{selectedArt.title}</h3>
                {selectedArt.technique && <p><strong>Técnica:</strong> {selectedArt.technique}</p>}
                <p>{selectedArt.description}</p>
              </div>
              <button 
                className="btn-primary" 
                onClick={() => handleWhatsappContact(selectedArt.title)}
              >
                Tenho interesse nesta obra
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Woker's Art. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}