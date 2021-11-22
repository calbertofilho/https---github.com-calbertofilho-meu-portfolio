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
  overflow: hidden;
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
  background: ${props => props.open ? 'transparent' : '#52B7DF'};
  border-radius: 5px;
  box-shadow: ${props => props.open ? 'none' : '0 2px 5px rgba(0, 0, 0, 0.2)'};
  transition: all .5s ease-in-out;
  transform: translateX(${props => props.open ? '30px' : '0'});
  &::before, &::after {
    content: '';
    position: absolute;
    height: 3px;
    background: #1863FF;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: all .5s ease-in-out;
  }
  &::before {
    transform: ${props => props.open ? 'translate(-33px, 0px) rotate(45deg)' : 'translateY(-8px)'};
    width: ${props => props.open ? '26px' : '14px'};
    transition-delay: 0.125s;
  }
  &::after {
    transform: ${props => props.open ? 'translate(-33px, 0px) rotate(315deg)' : 'translateY(8px)'};
    width: ${props => props.open ? '26px' : '9px'};
    transition-delay: 0.25s;
  }
`;
