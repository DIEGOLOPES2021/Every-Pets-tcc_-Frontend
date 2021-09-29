
import styled from "styled-components";


export const ContainerFooter = styled.div`
   width : 100vw;
   position: fixed;
   height: 255px;
   top: 0;
   

   background-color: var(--primary);
   align-items: center;
   justify-content: space-between;
   
  

      >#containerHeader{
      width: inherit;
      height: 50px;
      background-color: blue;
      display: flex;
      justify-content: center;

      >nav{
          width: 200px;
          height: 50px;
          background-color: violet;
          display: flex;
          align-items: center;
         justify-content: center;
          >p{
          text-align: center;
          color: white;
          text-align: center;
      }
      }
  }

  >#containerSobre{
    width: inherit;
    height: 205px;
    background-color: black;
    display: flex;

    >div{
          width: 300px;
          height: 205px;
          background-color: violet;
          align-items: center;
          margin-left: 10px;

          >h2{
              color: white;
          }
          >#listagem{
              color: white;
              margin-top: 10px;
          }
      }

      >#containerAcesseEimagens{
          width: 600px;
          height: 205px;
          margin-left: 350px;
          background-color: red;
      }
  }
   
  
 
`;