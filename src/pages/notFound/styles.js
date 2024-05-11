import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 80px auto;
  grid-template-areas: 
  "header"
  "content";

  background-color: red;

  main{
    padding: 1.0rem;
  
    h1{
      font-size: 4.8rem;
      color: #fff;
    }

    h2{
      font-size: 4.4rem;
      margin-bottom: 3.0rem;
      color: #fff;
    }

    .link-home{
      background-color: #fff;
      border-radius: 1.0rem;
      font-size: 2.4rem;
      color: red;
      padding: 1.2rem;
    }
  }
`;