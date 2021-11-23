import Image from 'next/image';
import { Page, Header, Content, Footer } from '../components';
import { Contato } from '../components/sections';
import NodeJS from '../public/images/nodejs.png';
import Bootstrap from '../public/images/bootstrap.png';
import Sass from '../public/images/sass.png';
import Ruby from '../public/images/ruby.png';
import Angular from '../public/images/angular.png';
import styled from 'styled-components';

export const Bloco = styled.section`
  height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	scroll-snap-align: start;
  /* background-color: #343745; */
  background-color: ${ (props) => props.bg };
  img {
    width: 40%;
    height: auto;
  }
`;

export default function Home() {
  return (
    <Page title="Carlos Alberto ETI" description="Especialista em Tecnologia da Informação">
      <Header />
      <Content>
        <Contato id="contato" />
        <Bloco id="sobre" bg="#69f">
          <img src="/images/bootstrap.png" alt="Bootstrap" width={716} height={716} placeholder="blur" loading="lazy" />
          {/* <Image src={Bootstrap} alt="Bootstrap" width={716} height={716} placeholder="blur" loading="lazy" /> */}
        </Bloco>
        <Bloco id="portfolio" bg="#faa">
          <img src="/images/sass.png" alt="Sass" width={870} height={653} placeholder="blur" loading="lazy" />
          {/* <Image src={Sass} alt="Sass" width={870} height={653} placeholder="blur" loading="lazy" /> */}
        </Bloco>
        <Bloco id="download" bg="#aaa">
          <img src="/images/ruby.png" alt="Ruby" width={1316} height={536} placeholder="blur" loading="lazy" />
          {/* <Image src={Ruby} alt="Ruby" width={1316} height={536} placeholder="blur" loading="lazy" /> */}
        </Bloco>
        <Bloco id="app" bg="#414950">
          <img src="/images/angular.png" alt="Angular" width={1426} height={1511} placeholder="blur" loading="lazy" />
          {/* <Image src={Angular} alt="Angular" width={1426} height={1511} placeholder="blur" loading="lazy" /> */}
        </Bloco>
      </Content>
      <Footer />
    </Page>
  );
}
