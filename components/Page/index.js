import Head from 'next/head';
import { Container } from './styles';

export default function Page({title, description, children}) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {children}
    </Container>
    );
}
