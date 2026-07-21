const Japan = () => (
  <div
    className="theme-wrap"
    style={{
      '--card-bg-from': '#ffffff',
      '--card-bg-to': '#fce4ec',
      '--card-border': '#BC002D',
      '--heading-color': '#880E4F',
      '--text-color': '#3a2a2a',
      '--tag-bg': 'rgba(188,0,45,0.08)',
      '--tag-text': '#BC002D',
      '--nav-bg-from': '#BC002D',
      '--nav-bg-to': '#e53935',
      '--nav-link-hover': '#FFD700',
      '--nav-team-hover-text': '#BC002D',
      '--nav-shadow': 'rgba(188,0,45,0.35)',
      '--hero-bg': 'linear-gradient(160deg, #BC002D 0%, #880E4F 50%, #4a0020 100%)',
      '--hero-accent': '#FFD700',
      '--accent': '#BC002D',
    }}
  >
    <nav className="navbar">
      <div className="logo">
        <span className="logo__flag">🇯🇵</span>
        日本 Nihon
      </div>
      <ul className="nav-links">
        <li><a href="#">Uy</a></li>
        <li><a href="#">Madaniyat</a></li>
        <li><a href="#">Tarix</a></li>
        <li><a href="#">Aloqa</a></li>
      </ul>
      <div className="team">
        <span>Tanaka</span>
        <span>Yuki</span>
      </div>
    </nav>

    <div className="hero">
      <h1>Sakura <span>chiqish</span> mavsumi</h1>
      <p>Yaponiya — ming yillik an'analar va zamonaviy texnologiyalar uyg'unligi. Har bahor butun mamlakat gullab-yashnaydi.</p>
    </div>

    <div className="card">
      <h1>桜 — Sakura</h1>
      <p>Har yili mart—aprel oylarida Yaponiya bo'ylab millionlab odamlar hanami (gullash tomoshasi) qilish uchun yig'iladi. Daraxtlar atrofida piknik qilish, sake ichish va bahorning qisqa go'zalligidan huzur olish — bu yapon madaniyatining ajralmas qismi.</p>
      <span className="card__tag">🌸 Tabiat</span>
    </div>

    <div className="card">
      <h1>侍 — Samurai</h1>
      <p>Bushido kodeksi — sha'n, sodiqlik va jasorat. Samurai yo'li hali ham yapon jamiyatining asosini tashkil qiladi. Katana pichog'i dunyodagi eng sifatli qurollardan biri sifatida tan olingan.</p>
      <span className="card__tag">⚔️ Tarix</span>
    </div>

    <div className="card">
      <h1>富士山 — Fuji-san</h1>
      <p>3 776 metr balandlikdagi bu vulkan Yaponiyaning eng baland cho'qqisi hisoblanadi. Har yili 300 mingdan ortiq sayyoh cho'qqiga chiqishga urinadi. Bu yer — yaponlarning muqaddas joyi.</p>
      <span className="card__tag">🗻 Geografiya</span>
    </div>
  </div>
)

export default Japan
