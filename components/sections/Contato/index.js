import Head from 'next/head';
import { Avatar, Card, Container, Conteudo, Detalhes, Icon } from './styles';

export default function Contato() {
  return (
    <Container id="contato">
      <Head>
        <script type="text/javascript" src="vanilla-tilt.js" async />
      </Head>
      <Card data-tilt data-tilt-glare data-tilt-max-glare="0.8" data-tilt-scale="1.1">
        <Conteudo>
          <Avatar>
            <img src="/images/perfil.png" height={200} width={200} alt="Avatar" placeholder="blur" loading="lazy" />
          </Avatar>
          <Detalhes>
            <div>
              <h3>Carlos Alberto ETI</h3>
            </div>
            <div>
              <Icon className="material-icons-outlined">phone</Icon>
              <span>+55 85 98899-8844</span>
            </div>
            <div>
              <Icon className="material-icons-outlined">public</Icon>
              <span>carlosalberto.eti.br</span>
            </div>
            <div>
              <Icon className="material-icons-outlined">email</Icon>
              <span>carlos@lberto.eti.br</span>
            </div>
          </Detalhes>
        </Conteudo>
      </Card>
    </Container>
);
}
