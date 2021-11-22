import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 55%;
  display: none;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all .5s ease-in-out;
  @media screen and (max-width: 970px) {
    display: flex;
  }
`;

export const Icon = styled.div`
  width: 20px;
  height: 3px;
  border-radius: 5px;
  /* background: #FF3300;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
  background: #fff;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
  &::before, &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 3px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;
  }
  &::before {
    transform: translateY(-10px);
  }
  &::after {
    transform: translateY(10px);
  }
`;
