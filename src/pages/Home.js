import "./Home.css";

import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const url = "http://localhost:3000/products";
  const { data: items, loading, error } = useFetch(url);
  return (
    <div>
      {error && <p>{error}</p>}
      {items && (
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>NOME</td>
              <td>PREÇO</td>
              <td>SAIBA MAIS</td>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>R${item.price}</td>
                <td><Link to={`/products/${item.id}`} className="details-link">Detalhes</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
