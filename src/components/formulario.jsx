import { useState } from "react";
import InputField from "./inputField";
import Botao from "./BotaoEnviar";

function FormularioCadastro() {
  // const [nome, setnome] = useState('');
  // const [email, setemail] = useState('');
  // const [telefone, settelefone] = useState('');
  // const [erro, setErro] = useState('');
  // const [sucesso, setSucesso] = useState(false);
  const [user, setUser] = useState({ nome: "", email: "", telefone: "" });
  const [erroSucesso, setErroSucesso] = useState({erro: "", sucesso:false})
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.nome.trim() === "") {
      setErroSucesso("O campo nome não pode ser vazio")
      console.log(erro)
      return
    }

    if (user.telefone.length !== 11) {
      setErroSucesso("O campo telefone precisa de 11 digitos")
      console.log(erro)
      return
    }



    setErroSucesso('');
    setErroSucesso({Sucesso: true});
    console.log (user)
    setUser({ nome: "", email: "", telefone: "" })  //envio para o banco


  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        {useState ({erro}) && <p style={{ color: 'red' }}>{useState ({erro}) }</p>}
        {useState ({sucesso})  && <p style={{ color: 'green' }}> {"cadastrado com sucesso!"}</p>}

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

        <InputField label="Nome da mae" type="text" name="NomeMae" placeholder="Mãe..." />

        <Botao texto="Cadastrar" />
      </form>

      <div>nome: {user.nome}</div>
      <div>telefone: {user.telefone}</div>
    </div>
  );
}

export default FormularioCadastro;
