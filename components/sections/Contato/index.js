import Image from 'next/image';
import { Avatar, Card, Container, Conteudo, Detalhes, Icon } from './styles';

export default function Contato() {
  return (
    <Container id="contato">
      <Card>
        <Conteudo>
          <Avatar>
            <img src="/images/perfil.png" height={500} width={500} alt="Avatar" />
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
