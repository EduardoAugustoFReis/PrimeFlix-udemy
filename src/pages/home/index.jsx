import {useEffect, useState} from "react";

import api from "../../services/api";
import { Link } from "react-router-dom";

import { Container } from "./styles"

import { Header } from "../../components/header"

export function Home(){
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    
    async function loadMovies(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "ccdc9a4b9b711d6d75c2d3634c552d2b",
          language: "pt-BR",
          page: 1,
        }
      })

      // console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 9));
      setLoading(false);
    }

    loadMovies();

  }, []);

  if(loading){
    return(
      <div className="loading-container">
      <h2 style={{ fontSize: "24px", color: "#333", padding: "10px" }}>Carregando filmes ...</h2>
     </div>
    )
  }

  return(
    <Container>
      <Header/>

      <main>

      <div className="lista-filmes">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/movie/${filme.id}`} className="access-link-film">Acessar</Link>
            </article>
          )
        })}
      </div>
      
      </main>

    </Container>
  )
}