import { Link } from "react-router-dom";
import { Container } from "./styles";

import {Header} from "../../components/header";

export function NotFound(){
  return(
    <Container>
      <Header/>
      <main>
      <h1>404</h1>
      <h2>Página não encontrada!</h2>

      <Link to="/" className="link-home">Veja todos os filmes!</Link>

      </main>

    </Container>
  )
}