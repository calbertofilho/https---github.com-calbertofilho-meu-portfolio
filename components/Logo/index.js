import Link from 'next/link';
import Image from 'next/image';
import MyLogo from '../../public/logo.png';
import { Anchor, Container } from './styles';

export default function Logo() {
  return (
    <Container>
      <Link href="/" passHref>
        <Anchor><Image src={MyLogo} alt="Carlos Alberto ETI Logo" width={322} height={94} placeholder="blur" /></Anchor>
      </Link>
    </Container>
  );
}
