import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <div className="list">
        <ul>
          <li className="hobby">
            <i className="fas fa-rocket"></i>
            <span> Astronomie</span>
          </li>
        </ul>
        <ul>
          <li className="hobby">
            <i className="fas fa-gamepad"></i>
            <span> Jeux Vidéos</span>
          </li>
        </ul>
        <ul>
          <li className="hobby">
            <i className="fas fa-video"></i>
            <span> Live Streaming</span>
          </li>
        </ul>
        <ul>
          <li className="hobby">
            <i className="fas fa-paw"></i>
            <span> Animaux</span>
          </li>
        </ul>
        <ul>
          <li className="hobby">
            <i className="fas fa-music"></i>
            <span> Musique</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hobbies;
