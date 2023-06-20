import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 900px;
  background: #000000;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1 rem;
  }
  .reset {
    cursor: pointer;
    // background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
     box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    background-color: #0808c2;
    color: #e6e609;
    box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  }
`;

export const ButtonWrapper = styled.div`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
}
`;