import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            vitae, nisi, aspernatur accusamus perferendis ullam itaque modi qui
            aperiam, aliquid fuga hic laborum eveniet illum sunt commodi.
            Dolorem, excepturi quae!
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">http://www.rocketseat.com.br/"</a>
              </li>
              <li>
                <a href="#">http://www.rocketseat.com.br/"</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodeJs" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
