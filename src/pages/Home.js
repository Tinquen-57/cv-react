import Navigation from "../components/Navigation";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Quentin HERRMANN</h1>
          <h2>Développeur Web</h2>
          <div className="pdf">
            <a href="?/medi/cv.pdf" target="_blank">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
