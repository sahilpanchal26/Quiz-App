import styled from 'styled-components';
export const Wrapper = styled.div`
 max-width: 1000px;
 background: #ebfeff;
 border-radius: 10px;
 border: 2px solid violet;
 padding: 20px;
 box-shadow: 0px 5px 10px;
 text-align: center;

 p{
    font-size: medium;
 }
`

type ButtonWrapperProps={
    correct: boolean;
    userClicked: boolean;
}
export const ButtonWrapper= styled.div<ButtonWrapperProps>`
 transition: all 0.5s ease-in;

  :hover{
    opacity: 0.7;
  }

  button{
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
    height: 50px;
    margin: 10px 10px;
    background: ${({correct , userClicked})=>
     correct? 'linear-gradient(90deg,#56ffa4,#59bc86)'
     : !correct && userClicked? 'linear-gradient(90deg,#ff5665,#c16868)'
     : 'linear-gradient(90deg,#556ccff,#6eafb4)'
};
    border: 2px solid greenyellow;
    border-radius: 5px;
    color: darkorange;
  }
`

