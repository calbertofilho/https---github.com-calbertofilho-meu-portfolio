import Link from 'next/link'
import { Container, Item, NavBar } from './styles';

export default function Menu() {
  return (
    <Container>
      <NavBar>
        <Link href="#contato" passHref>
          <Item>Contato</Item>
        </Link>&nbsp;
        <Link href="#sobre" passHref>
          <Item>Sobre</Item>
        </Link>&nbsp;
        <Link href="#portfolio" passHref>
          <Item>Portfolio</Item>
        </Link>&nbsp;
        <Link href="#download" passHref>
          <Item>Download</Item>
        </Link>&nbsp;
        <Link href="#app" passHref>
          <Item>App</Item>
        </Link>&nbsp;
        <Link href="mail.lberto.eti.br" passHref>
          <Item>@</Item>
        </Link>
      </NavBar>
    </Container>
  );
}
