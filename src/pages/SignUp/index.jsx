import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "./../../components/Input";
import { Button } from "./../../components/Button";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Container, Form, Background } from "./styles";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
    const data = { name, email, password };

    api
      .post("/users", {
        name: "jhe",
        email: "teste@gmail.com",
        password: "1234",
      })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
      })
      .catch((error) => {
        if (error.message) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar");
        }
      });
  }
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">Voltar para login</Link>
      </Form>
    </Container>
  );
}
