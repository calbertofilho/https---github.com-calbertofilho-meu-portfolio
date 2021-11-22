import Link from 'next/link'
import { Anchor, Container, Delimiters, Values } from './styles';

export default function Footer() {
  return (
    <Container>
      <Delimiters>[</Delimiters>
      <Values>2020</Values>
      &nbsp;
      <Delimiters>&copy;</Delimiters>
      &nbsp;
      <Values>{new Date().getFullYear()}</Values>
      <Delimiters>]</Delimiters>
      &nbsp;&nbsp;
      <Link href="http://www.carlosalberto.eti.br" passHref>
        <Anchor>www.carlosalberto.eti.br</Anchor>
      </Link>
    </Container>
  );
}
