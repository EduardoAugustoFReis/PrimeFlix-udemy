import { useEffect, useState } from "react";

import { useParams, useNavigate, json } from "react-router-dom";
import api from "../../services/api";

import {Container} from "./styles";

import { Header } from "../../components/header";

export function Details(){
  const {id} = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    
    async function loadFilme(){
       await api.get(`movie/${id}`, {
        params: {
          api_key: "ccdc9a4b9b711d6d75c2d3634c552d2b",
          language: "pt-BR",
        }
       })
       .then((response)=>{
        setFilme(response.data);
        setLoading(false);
       })
       .catch(()=>{
        navigate("/",  {replace: true} );
        return;
       })
    }  

    loadFilme();

  }, [navigate, id]);

  function salvarFilme(){
    const myList = localStorage.getItem("@primeflix");

    let myFilms = JSON.parse(myList) || [];  
    
    const hasFilm = myFilms.some((film)=>film.id === filme.id);

    if(hasFilm){
      alert("Esse filme já está na lista de favoritos");
      return;
    }

    myFilms.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(myFilms));
      
    alert("Filme salvo com sucesso!");
  }

  if(loading){
    return(
      <div className="loading-container">
      <h2 style={{ fontSize: "24px", color: "#333", padding: "10px" }}>Carregando detalhes do filme ...</h2>
     </div>
    )
  }

  return(
    <Container>
      <Header/>

      <main>

      <div className="filmes-info">

        <h1>{filme.title}</h1>

        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

        <h3>Sinopse</h3>

        <span>{filme.overview}</span>

        <p>Avaliação: {filme.vote_average} / 10</p>

      </div>

      <div className="buttons-favorites-trailer">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} rel="external" target="_blank">Trailer</a>
        </button>
      </div>

      </main>
    </Container>
  )
}