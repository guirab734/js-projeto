import { useState } from "react";
import InputField from "./inputField";
import Botao from "./BotaoEnviar";

function FormularioCadastro() {
  const [user, setUser] = useState({ nome: "", email: "", telefone: "" });
  const [erroSucesso, setErroSucesso] = useState({ erro: "", sucesso: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.nome.trim() === "") {
      // Atualizando como objeto, mantendo a estrutura original
      setErroSucesso({ erro: "O campo nome não pode ser vazio", sucesso: false });
      return;
    }

    if (user.telefone.length !== 11) {
      setErroSucesso({ erro: "O campo telefone precisa de 11 digitos", sucesso: false });
      return;
    }

    // Se passou pelas validações, limpa o erro e seta sucesso como true
    setErroSucesso({ erro: "", sucesso: true });
    
    console.log(user);
    
    // Limpa o formulário após o envio
    setUser({ nome: "", email: "", telefone: "" }); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        {/* Lendo as variáveis diretamente do objeto erroSucesso */}
        {erroSucesso.erro && <p style={{ color: 'red' }}>{erroSucesso.erro}</p>}
        {erroSucesso.sucesso && <p style={{ color: 'green' }}>Cadastrado com sucesso!</p>}

        <InputField
          label="Nome"
          type="text"
          name="nome"
          placeholder="Gabriel..."
          value={user.nome}
          onChange={(e) => setUser(dados => ({
            ...dados,
            nome: e.target.value
          }))}
        />

        <div>
          <InputField
            label="Telefone"
            type="tel"
            name="telefone"
            placeholder="+55..."
            value={user.telefone}
            onChange={(e) => setUser(dados => ({
            ...dados,
            telefone: e.target.value
          }))}
          />
        </div>

        <InputField
          label="E-mail"
          type="email"
          name="email"
          placeholder="exemplo@email.com"
          value={user.email}
          onChange={(e) => setUser(dados => ({
            ...dados,
            email: e.target.value
          }))}
        />

        {/* Como você não mapeou o estado "NomeMae" no objeto 'user', deixei sem o value/onChange por enquanto */}
        <InputField label="Nome da mãe" type="text" name="NomeMae" placeholder="Mãe..." />

        <Botao texto="Cadastrar" />
      </form>

      {/* Apenas para visualizar se o estado está atualizando */}
      <div style={{ marginTop: '20px' }}>
        <div>Nome digitado: {user.nome}</div>
        <div>Telefone digitado: {user.telefone}</div>
      </div>
    </div>
  );
}

export default FormularioCadastro;