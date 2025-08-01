import React, { useRef } from "react";

const Experience = () => {
  let card = useRef(null);
  let button = useRef(null);

  const flipCard = () => {
    card.current.classList.toggle("is-flipped");
  };

  return (
    <div className="cardContainer">
      <div className="xpQualifs" ref={card} onClick={flipCard}>
        <div className="card-face experience">
          <h3>Expériences</h3>
          <div className="exp-1">
            <h4>Stage Développeur Web - EUROCONTROL LUXEMBOURG</h4>
            <h5>30/04/25 - 31/05/25</h5>
            <p>
              Analyse et révision de repositories GitHub, création de
              documentations et développement d'un nouveau template de cours en
              React.
            </p>
          </div>
          <div className="exp-2">
            <h4>Titre professionnel Développeur Web et Web Mobile</h4>
            <h5>2024 - 2025</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolores eius accusamus. Error eos excepturi modi adipisci!
              Reiciendis unde qui nihil magni labore ullam consectetur ut culpa,
              dolorem in ipsam!
            </p>
          </div>
          <div className="toQualifications" ref={button}>
            <i className="fas fa-arrow-right"></i>
            <span>Qualifications</span>
          </div>
        </div>
        <div className="card-face qualifications">
          <h3>Qualifications</h3>
          <div className="qual-1">
            <h4>Titre professionnel Développeur Web et Web Mobile</h4>
            <h5>2024 - 2025</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolores eius accusamus. Error eos excepturi modi adipisci!
              Reiciendis unde qui nihil magni labore ullam consectetur ut culpa,
              dolorem in ipsam!
            </p>
          </div>
          <div className="qual-2">
            <h4>Titre professionnel Développeur Web et Web Mobile</h4>
            <h5>2024 - 2025</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolores eius accusamus. Error eos excepturi modi adipisci!
              Reiciendis unde qui nihil magni labore ullam consectetur ut culpa,
              dolorem in ipsam!
            </p>
          </div>
          <div className="toQualifications">
            <i className="fas fa-arrow-right"></i>
            <span>Expériences</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
