import Link from 'next/link'
import { Container, Item, NavBar } from './styles';

export default function Menu() {
  return (
    <Container>
      <NavBar>
        <Link href="#contato" passHref>
          <Item>Contato</Item>
        </Link>
        <Link href="#sobre" passHref>
          <Item>Sobre</Item>
        </Link>
        <Link href="#portfolio" passHref>
          <Item>Portfolio</Item>
        </Link>
        <Link href="#download" passHref>
          <Item>Download</Item>
        </Link>
        <Link href="#app" passHref>
          <Item>App</Item>
        </Link>
        <Link href="http://mail.lberto.eti.br/" passHref>
          <Item>@</Item>
        </Link>
      </NavBar>
    </Container>
  );
}
