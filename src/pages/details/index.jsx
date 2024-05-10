import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import api from "../../services/api";

import {Container} from "./styles";

import { Header } from "../../components/header";

export function Details(){
  const {id} = useParams();

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

       })
    }  

    loadFilme();

  }, []);

  
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
      
    </Container>
  )
}