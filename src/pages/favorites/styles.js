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

    display: flex;
    flex-direction: column;

    padding: 3.0rem;

    >h1{
      font-size: 3.0rem;
      color: #fff;
      margin-bottom: 1.0rem;
      border-bottom: 1px solid #fff;
      text-align: center;
    }

    ul{
      display: flex;
      gap: 10px;

      li{

      list-style: none;
      border-radius: 1.0rem;
      padding: 5px;

      background-color: #fff;

      span{
      font-size: 2.0rem;
      }

      div{
        display: flex;
        align-items: center;
        gap: 1.0rem;
        padding-top: 10px;

        a{
          font-size: 1.8rem;
          color: #000;
        }

        a:hover{
          color: red;
        }

        button{
          font-size: 18px;
          background: none;
          border: none;
          background-color: red;
          padding: 1.2rem;
          border-radius:1.0rem;
          color: #fff;
        }
      }
    }
  }
}
`;