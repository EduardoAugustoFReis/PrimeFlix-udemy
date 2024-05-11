import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 80px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    padding: 2.0rem 0px;
    background-color: red;

    display: flex;
    justify-content: center;

    .lista-filmes {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.0rem;

      > article {
        width: 40.0rem;
        background-color: #fff;
        border-radius: 1.0rem;
        padding: 1.2rem;

        display: flex; 
        flex-direction: column; 
        align-items: center; 

        > strong {
          font-size: 2.0rem;
          margin-bottom: 0.5rem; 
        }

        > img {
          height: 40.0rem;
          border-radius: 1.0rem;
          margin-bottom: 0.5rem; 
        }

        .access-link-film {
          font-size: 2.0rem;
          font-weight: bold;
          color: #000;
        }
        .access-link-film:hover {
          color: red;
        }

      }
    }
  }

  
`;
