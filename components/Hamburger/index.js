import { useState } from 'react';
import { Container, Icon } from './styles';

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  return (
    <Container onClick={() => setOpen(!open)}>
      <Icon open={open} />
    </Container>
  );
}
