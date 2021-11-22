import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: right;
  padding: 10px 0 0 0;
  min-width: 50%;
  /* border: 1px solid red; */
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 970px) {
    display: none;
  }
`;

export const Item = styled.a`
  color: #FFFFFF;
  background: #191A21;
  padding: 10px 20px;
  font-size: 12px;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 15px;
  font-weight: bold;
  border: 2px solid #17181E;
  &:hover {
    border: none;
    background: rgba(0, 0, 0, 0.4);
    background: #FFFFFF;
    padding: 13px 20px;
    color: #191A21;
    border: 2px solid #282A36;
  }
`;
