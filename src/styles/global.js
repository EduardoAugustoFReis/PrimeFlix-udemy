import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  a, button{
    cursor: pointer;
  }

  button:hover{
    filter: brightness(0.9);
  }

  a{
    text-decoration: none;
  }

  a:hover{
    filter: brightness(0.9);
  }
  
`