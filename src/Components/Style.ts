// import styled , {createGlobalStyle} from 'styled-components';
import styled , {createGlobalStyle} from 'styled-components'
import BGImage from './Image/bg-image.jpg';

export const GlobalStyle = createGlobalStyle`
 html{
     height: 100%;
 }
 body{
   background-image: url(${BGImage});
   background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
 }
 *{
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 }
 `;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  >p{
   color: black;
  }

  .score{
    color: beige;
    font-size: 2rem;
    margin: 0;
  }

  h1{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-image: linear-gradient(180deg);
    background-size: 100%;
  }

  .start , .next{
   cursor: pointer;
   border: 2px solid red;
   box-shadow: 0px 5px 10px;
   border-radius: 10px;
   height: 40px;
   margin: 20px 0px;
   padding: 0px 40px;
  }

  .start{
   max-width: 200px;
  }
`
