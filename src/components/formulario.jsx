import { useState } from "react";
import InputField from "./inputField"; 
import Botao from "./BotaoEnviar";

function FormularioCadastro() {
  const [nome, setnome] = useState('');
  const [email, setemail] = useState('');
  const [telefone, settelefone] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (nome.trim() === "") {
      setErro("O campo nome não pode ser vazio")
      console.log(erro)
      return
    }

    
    setErro('');
    setSucesso(true);
    console.log({ nome, email, telefone }); //envio para o banco
    setnome('')
    setemail('')
    settelefone('')
  };

  const Telefone = (e) => {
    e.preventDefault();
  

    if (telefone != length(11) ) {
      setErro("O campo telefone precisa de 11 digitos")
      console.log(erro)
      return
    }
  

    
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {erro && <p style={{ color: 'red'}}>{erro}</p>}
        {sucesso && <p style = {{ color: 'green'}}> {"cadastrado com sucesso!"}</p>}
         
        <InputField
          label="Nome" 
          type="text" 
          name="nome" 
          placeholder="Gabriel..." 
          value={nome} 
          onChange={(e) => setnome(e.target.value)} 
        />
        
        <div>
          <InputField 
            label="Telefone" 
            type="tel" 
            name="telefone" 
            placeholder="+55..." 
            value={telefone} 
            onChange={(e) => settelefone(e.target.value)} 
          />
        </div>

        <InputField 
          label="E-mail" 
          type="email" 
          name="email" 
          placeholder="exemplo@email.com" 
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        
        <InputField label="Nome da mae" type="text" name="NomeMae" placeholder="Mãe..." />
        
        <Botao texto="Cadastrar" />
      </form>

      <div>nome: {nome}</div>
      <div>telefone: {telefone}</div>
    </div>
  );
}

export default FormularioCadastro;
