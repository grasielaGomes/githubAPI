import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-4">
      <h2 className="fw-bold">Desafio Github API</h2>
      <p className="fw-bold text-secondary">
        Bootcamp Spring React - DevSuperior
      </p>
      <Link to="/apisearch">
        <button type="button" className="btn btn-primary">
          Começar
        </button>
      </Link>
    </div>
  );
};

export default Home;
