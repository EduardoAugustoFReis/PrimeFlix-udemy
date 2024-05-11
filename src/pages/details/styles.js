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
    grid-area: content;
    padding-top: 1.0rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    
  .filmes-info{
    max-width: 60.0rem;
    background-color: #fff;
    border-radius: 1.0rem;
    
    padding: 1.0rem;

    text-align: center;

    >h1{
      font-size: 3.4rem;
      padding-top: 2.0rem;
    }
    
    >img{
      height: 30.0rem;
      border-radius: 1.0rem;
    }

    >h3{
      font-size: 2.8rem;
      padding: 5px 0px;
    }

    >span{
      font-size: 1.8rem;
      padding-top: 5px;
      display: block;
      text-align: left;
    }

    >p{
      font-size: 20px;
      font-weight: bold;
      padding: 5px 0px;
    }
  }

  .buttons-favorites-trailer{

    display: flex;
    gap: 2.0rem;

    padding-top: 10px;

    >button{
      background: none;
      border: none;
      font-size: 2.0rem;
      background-color: #fff;

      color: red;
      
      padding: 1.2rem;
      border-radius: 1.0rem;
      
      >a{
        color: #000;
      }

    }

  }

  }
`;