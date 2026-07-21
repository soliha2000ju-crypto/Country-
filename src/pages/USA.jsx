import React from "react";

const USA = () => {
  return (
<div className="country-page usa">


      <section className="hero">

        <div>

          <h1>USA 🇺🇸</h1>

          <p>
            Amerika Qo‘shma Shtatlari dunyodagi eng rivojlangan
            davlatlardan biridir.
          </p>

          <button>
            Learn More
          </button>

        </div>


        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="USA"
        />

      </section>



      <section className="info">

        <h2>About USA</h2>

        <p>
          AQSh texnologiya, biznes, kino va innovatsiyalari
          bilan mashhur.
        </p>


        <div className="cards">


          <div className="small-card">
            <h3>🏙 Poytaxt</h3>
            <p>Washington D.C.</p>
          </div>


          <div className="small-card">
            <h3>👥 Aholi</h3>
            <p>340 milliondan ortiq</p>
          </div>


          <div className="small-card">
            <h3>🗣 Til</h3>
            <p>English</p>
          </div>


        </div>


      </section>



      <section className="places">

        <h2>Mashhur joylar</h2>


        <div className="cards">


          <div className="small-card">
            <h3>Statue of Liberty</h3>
            <p>Nyu-Yorkdagi mashhur haykal</p>
          </div>


          <div className="small-card">
            <h3>Grand Canyon</h3>
            <p>Buyuk tabiiy manzara</p>
          </div>


          <div className="small-card">
            <h3>Hollywood</h3>
            <p>Kino sanoati markazi</p>
          </div>


        </div>

      </section>


    </div>
  );
};

export default USA;
