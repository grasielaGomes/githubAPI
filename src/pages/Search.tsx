import { useState } from "react";
import axios from "axios";

type userData = {
  avatar_url: string;
  url: string;
  followers: number;
  location: string;
  name: string;
};

export function Search() {
  const [user, setUser] = useState("");

  const [userData, setUserData] = useState<userData>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        const { avatar_url, url, followers, location, name } = response.data;
        setUserData({ avatar_url, url, followers, location, name });
        setUser("");
      })
      .catch((error) => {
        console.log(error);
        setUserData(undefined);
      });
  };

  return (
    <div className="container mt-4">
      <div className="card px-4 py-5 bg-primary bg-opacity-10">
        <h3>Encontre um perfil Github</h3>
        <form onSubmit={handleSubmit}>
          <div className="col-10 col-md-8 col-lg-6">
            <input
              onChange={handleChange}
              value={user}
              type="text"
              placeholder="Usuário Github"
              className="form-control"
            />
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-primary">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {userData && (
        <div className="card p-4 bg-secondary bg-opacity-10 mt-4">
          <div className="row">
            <div className="col-4">
              <img
                src={userData?.avatar_url}
                alt={userData?.name}
                className="img-fluid"
              />
            </div>
            <div className="card col p-4">
              <h6 className="text-primary fw-bold">Informações</h6>
              <div className="px-2 pt-2 card mt-2">
                <p className="text-secondary">
                  <span className="fw-bold">Perfil: </span>
                  {userData.url}
                </p>
              </div>
              <div className="px-2 pt-2 card mt-2">
                <p className="text-secondary">
                  <span className="fw-bold">Seguidores: </span>
                  {userData.followers}
                </p>
              </div>
              <div className="px-2 pt-2 card mt-2">
                <p className="text-secondary">
                  <span className="fw-bold">Localidade: </span>
                  {userData.location}
                </p>
              </div>
              <div className="px-2 pt-2 card mt-2">
                <p className="text-secondary">
                  <span className="fw-bold">Nome: </span>
                  {userData.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
