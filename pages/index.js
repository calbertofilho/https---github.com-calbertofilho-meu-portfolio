import Head from 'next/head';
import { Page, Header, Content, Footer } from '../components';

export default function Home() {
  return (
    <Page title="Carlos Alberto ETI" description="Especialista em Tecnologia da Informação">
      <Header />
      <Content />
      <Footer />
    </Page>
  );
}
