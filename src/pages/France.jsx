const France = () => (
  <div
    className="theme-wrap"
    style={{
      '--card-bg-from': '#ffffff',
      '--card-bg-to': '#e8edf5',
      '--card-border': '#002395',
      '--heading-color': '#1a1a5e',
      '--text-color': '#2d2d3a',
      '--tag-bg': 'rgba(0,35,149,0.07)',
      '--tag-text': '#002395',
      '--nav-bg-from': '#002395',
      '--nav-bg-to': '#0033aa',
      '--nav-link-hover': '#ED2939',
      '--nav-team-hover-text': '#002395',
      '--nav-shadow': 'rgba(0,35,149,0.35)',
      '--hero-bg': 'linear-gradient(160deg, #002395 0%, #1a1a5e 50%, #0d0d30 100%)',
      '--hero-accent': '#ED2939',
      '--accent': '#002395',
    }}
  >
    <nav className="navbar">
      <div className="logo">
        <span className="logo__flag">🇫🇷</span>
        France
      </div>
      <ul className="nav-links">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Culture</a></li>
        <li><a href="#">Histoire</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="team">
        <span>Pierre</span>
        <span>Marie</span>
      </div>
    </nav>

    <div className="hero">
      <h1>Liberté, <span>Égalité</span>, Fraternité</h1>
      <p>Fransiya — inqilob, san'at va gastronomiya mamlakati. Parij har doim dunyoning yuragi bo'lib qoladi. Séne daryosi bo'yida yurish — hayotning o'zi.</p>
    </div>

    <div className="card">
      <h1>🗼 Tour Eiffel</h1>
      <p>1889-yilda Gustave Eiffel tomonidan qurilgan bu po'lat inshoot dastlab Jahon ko'rgazmasi uchun yaratilgan. 330 metr balandlikdagi bu minora endi butun dunyoga taniqli ramzga aylangan. Har yili 7 milliondan ortiq kishi tashrif buyuradi.</p>
      <span className="card__tag">🏛️ Arxitektura</span>
    </div>

    <div className="card">
      <h1>🎨 Musée du Louvre</h1>
      <p>Dunyodagi eng katta san'at muzeyi — 380 000 dan ortiq asar, jumladan Leonardo da Vincining mashhur "Mona Liza"si. Muqaddas binoning o'zi ham me'morchilik durdonasi hisoblanadi.</p>
      <span className="card__tag">🖼️ San'at</span>
    </div>

    <div className="card">
      <h1>🥐 Gastronomie</h1>
      <p>Fransiya oshxonasining nomi dunyo bo'ylab shinam. Kruassan, brioche, ratatuy, boeuf bourguignon — bu faqat boshlanish. UNESCO fransuz gastronomiyasini insoniyat nomoddiy merosiga kiritgan.</p>
      <span className="card__tag">🧀 Taom</span>
    </div>
  </div>
)

export default France
