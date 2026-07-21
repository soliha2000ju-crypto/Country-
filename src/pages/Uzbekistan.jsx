import React from "react";

const Uzbekistan = () => {
  return (
    <div className="country-page uzbekistan">

      <section className="hero">
        <div>
          <h1>Uzbekistan 🇺🇿</h1>
          <p>
            Markaziy Osiyodagi qadimiy tarix va boy madaniyatga ega davlat.
          </p>
          <button>Learn More</button>
        </div>

        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Registan_Square_Samarkand.jpg"
          alt="Uzbekistan"
        />
      </section>


      <section className="info">
        <h2>About Uzbekistan</h2>

        <p>
          O‘zbekiston qadimiy Buyuk Ipak yo‘li joylashgan,
          tarixiy shaharlari va mehmondo‘st xalqi bilan mashhur.
        </p>


        <div className="cards">

          <div className="small-card">
            <h3>🏙 Poytaxt</h3>
            <p>Toshkent</p>
          </div>


          <div className="small-card">
            <h3>👥 Aholi</h3>
            <p>36 milliondan ortiq</p>
          </div>


          <div className="small-card">
            <h3>🗣 Til</h3>
            <p>O‘zbek tili</p>
          </div>

        </div>
      </section>


      <section className="places">

        <h2>Mashhur joylar</h2>

        <div className="cards">

          <div className="small-card">
            <h3>Registon</h3>
            <p>Samarqanddagi tarixiy majmua</p>
          </div>


          <div className="small-card">
            <h3>Buxoro</h3>
            <p>Qadimiy shahar</p>
          </div>


          <div className="small-card">
            <h3>Xiva</h3>
            <p>Ichan qal'a shahri</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Uzbekistan;
