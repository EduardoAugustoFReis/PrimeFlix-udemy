import {Container} from "./styles";

import {Link} from "react-router-dom";

export function Header(){
  return(
    <Container>
      
      <Link to="/" className="brand">Prime Flix</Link>
      <Link to="/favorites" className="my-films">Meus filmes</Link>

    </Container>
  )
}