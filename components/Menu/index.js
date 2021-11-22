import Link from 'next/link'
import { Container, Item, NavBar } from './styles';

export default function Menu() {
  return (
    <Container>
      <NavBar>
        <Link href="#" passHref>
          <Item>Portfolio</Item>
        </Link>&nbsp;
        <Link href="#" passHref>
          <Item>Download</Item>
        </Link>&nbsp;
        <Link href="#" passHref>
          <Item>App</Item>
        </Link>&nbsp;
        <Link href="#" passHref>
          <Item>Sobre</Item>
        </Link>&nbsp;
        <Link href="#" passHref>
          <Item>Contato</Item>
        </Link>&nbsp;
        <Link href="#" passHref>
          <Item>@</Item>
        </Link>
      </NavBar>
    </Container>
  );
}
