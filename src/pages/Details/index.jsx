import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <Header />
      <h1>Hello</h1>;
      <Button title="Entrar" loading />
      <Button title="Sair" />
      <Button title="Carregar" />
    </Container>
  );
}
