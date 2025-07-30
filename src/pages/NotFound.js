import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";

function NotFound() {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Désolé, cette page n'existe pas!</h3>
        <NavLink to={"/"}>
          <i className="fas fa-home"></i>
          <span> Retour à l'accueil</span>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
