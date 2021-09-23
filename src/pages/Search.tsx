import { useState } from "react";
import axios from "axios";

type userData = {
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
        const { url, followers, location, name } = response.data;
        setUserData({ url, followers, location, name });
        setUser("");
      })
      .catch((error) => {
        console.log(error);
        setUserData(undefined);
      });
  };

  return (
    <div className="container mt-2">
      <div className="card px-4 py-5 bg-primary bg-opacity-10">
        <h3>Encontre um perfil Github</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
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
    </div>
  );
}
