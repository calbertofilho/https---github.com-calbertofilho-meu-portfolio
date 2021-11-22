import styled from 'styled-components';

export const Container = styled.section`
  background: url("images/contato-bg.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  position: relative;
  width: 450px;
  height: 250px;
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(20px);
  -moz-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow:  0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  -moz-box-shadow:  0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  &:hover {
    transform: scale(1.2);
    background: rgba(255, 255, 255, 0.25);
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const Conteudo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Avatar = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  -webkit-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s ease-out;
  }
`;

export const Detalhes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #222;
    &, span {
      transition: all 1s ease-out;
      color: #333;
    }
  }
  h3 {
    font-weight: 600;
    text-decoration: underline;
    text-decoration-style: double;
    transition: all 1s ease-out;
  }
`;

export const Icon = styled.i`
  font-size: 1.5em;
`;
