import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";
import { Header } from "../../components/header";

export function Favorites(){
  const [filmes, setFilmes] = useState([]);

  useEffect(()=> {
    const myList = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(myList) || []);

  }, []);

  function deleteFilm(id) {
    // Confirmar antes de excluir
    if (confirm("Tem certeza que deseja excluir este filme dos favoritos?")) {
        // Filtrar os filmes para excluir o filme com o ID fornecido
        let filteredFilms = filmes.filter((item) => {
            return item.id !== id;
        });

        // Atualizar o estado dos filmes
        setFilmes(filteredFilms);

        // Atualizar os dados no localStorage
        localStorage.setItem("@primeflix", JSON.stringify(filteredFilms));
    }
  }

  return(
    <Container>
      <Header/>
      <main>
      <h1>Meus Filmes</h1>
      
      <ul>
        {filmes.map((item)=>{
          return(
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/movie/${item.id}`}>Ver detatlhes</Link>
                <button onClick={()=> deleteFilm(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
      </main>
    </Container>
  )
}