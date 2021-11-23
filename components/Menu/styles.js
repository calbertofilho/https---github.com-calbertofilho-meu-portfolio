import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: right;
  padding: 10px 0 0 0;
  min-width: 50%;
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: flex-end;
`;

export const Item = styled.a`
  color: #FFFFFF;
  background: #191A21;
  margin: 0 0 0 6px;
  padding: 10px 20px;
  font-size: 12px;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 2px solid #17181E;
  border-radius: 15px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #191A21;
    background: #FFFFFF;
    padding: 13px 20px;
    border: 2px solid #FFFFFF;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  }
`;
