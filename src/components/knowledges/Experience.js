import React, { useRef } from "react";

const Experience = () => {
  let card = useRef(null);
  let button = useRef(null);

  const flipCard = () => {
    card.current.classList.toggle("is-flipped");
  };

  return (
    <div className="cardContainer">
      <div className="xpQualifs" ref={card}>
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
            <h4>Barista Shift Manager</h4>
            <h5>09/22 - 09/23</h5>
            <p>
              Management et gestion de l’équipe, des stocks et du salon.
              Interactions clients, prise de commandes, encaissement.
              préparation et service. Entretien du salon.
            </p>
          </div>
          <div className="exp-3">
            <h4>Barista</h4>
            <h5>02/19 - 10/21 & 06/22 - 09/22</h5>
            <p>
              Interactions clients, prise de commandes, encaissement.
              préparation et service. Entretien du salon.
            </p>
          </div>
          <div className="exp-4">
            <h4>Chargé clientèle | Téléconseiller</h4>
            <h5>10/21 - 06/22</h5>
            <p>
              Réception, analyse et traitement de la demande du client. Lien
              direct entre les clients et le groupe Stellantis.
            </p>
          </div>
          <div className="toQualifications" ref={button} onClick={flipCard}>
            <i className="fas fa-arrow-right"></i>
            <span>Qualifications</span>
          </div>
        </div>
        <div className="card-face qualifications">
          <h3>Qualifications</h3>
          <div className="qual-1">
            <h4>Titre professionnel Développeur Web et Web Mobile</h4>
            <h5>2024 - 2025</h5>
            <p>Titre développeur Web & Web mobile Full-Stack.</p>
          </div>
          <div className="qual-2">
            <h4>BACCALAUREAT GENERAL Série SCIENTIFIQUE</h4>
            <h5>2014 - 2017</h5>
            <p>Spécialité Informatique et Sciences du Numérique.</p>
          </div>
          <div className="toQualifications" onClick={flipCard}>
            <i className="fas fa-arrow-right"></i>
            <span>Expériences</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
