import styled from "styled-components";


export const Container = styled.header`
   width : 100vw;
   position: fixed;
   height: 55px;
   top: 0;
   

   background-color: var(--primary);

   align-items: center;
   justify-content: space-between;
   
  >nav{
     height: inherit;
     position: static;
     width: inherit;
     background-color: var(--primary);
     display: flex;

     > img{
      width: 80px;
      margin-left: 10px;
   }
   > input {
        width: 1850px;
        height: 30px;

        margin-top: 15px;
        margin-left: 50px;
        border-radius: 25px;
        font-size: 22px;
        padding-left: 10px;
        border: none;
    }
    >p{
       width: 450px;
       height: 10px;
       color: white;

       margin-top: 20px;
       margin-left: 60px;
      font-size: 20px;
    }
  }
   
   >#headerCardes{
      height: 90px;
      width: inherit;
      display: flex;
      background-color: white;
      align-items: center;

      >#fotoDePerfil{
         height:80px;
         width: 80px;
         border-radius: 100vh;
      }
      >div {
         width: 190px;
         height: 39px;         
         border-radius: 25px;
         display: flex;
         justify-content: center;
         align-items: center;
         margin-right: auto;
         margin-left: auto;


        
         background-color:  var(--primary);
         
         :hover{
            box-shadow: 0px 10px 10px rgba(0,0,0, 0.25);
            cursor: pointer;
         }

         >p{
            font-weight: bold;
            font-size: 22px;
            text-align: center;
            color: white;
         }
      }
   }
   >#InformacoesParciais{
      width: inherit;
      height: 160px;
      justify-content: center;
      display: flex;
      align-items: center;

      background-color: black;
      >div{
         align-items: center;
         height: inherit;
         width: inherit;
         margin-right: auto;
         margin-left: auto;

         background-color: var(--primary);
        
         >.containerCardeInformacoes{
            height: 100px;
            width: 100px;
            margin-top: 13px;
            border-radius: 100vh;
            margin-right: auto;
            margin-left: auto;
            justify-content: center;
            display: flex;
            align-items: center;
            
            
            background-color: white;
           
            >p{
            font-size: 40px;
            text-align: center;

            font-weight: bold;
            color: black;
            
         }
       
      }
      >p{
            text-align: center;
            margin-top: 15px;

            color: white;
         }
      }
        
   }
     
   
   
 
`;

