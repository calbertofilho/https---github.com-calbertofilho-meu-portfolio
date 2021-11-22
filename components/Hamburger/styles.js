import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 55%;
  display: none;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background: #191A21;
  border: 2px solid #17181E;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  border-radius: 5px;
  transition: all .5s ease-in-out;
  @media screen and (max-width: 980px) {
    display: flex;
  }
  &:hover {
    border: none;
    background: #FFFFFF;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  }
`;

export const Icon = styled.div`
  width: 20px;
  height: 3px;
  border-radius: 5px;
  background: #52B7DF;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all .5s ease-in-out;
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 5px;
    background: #1863FF;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: all .5s ease-in-out;
  }
  &::before {
    transform: translateY(-8px);
    width: 14px;
    height: 3px;
  }
  &::after {
    transform: translateY(8px);
    width: 9px;
    height: 3px;
  }
`;
