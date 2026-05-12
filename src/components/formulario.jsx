import { useState } from "react";
import InputField from "./inputField"; 
import Botao from "./BotaoEnviar";

function FormularioCadastro() {
  const [nome, setnome] = useState('');
  const [email, setemail] = useState('');
  const [telefone, settelefone] = useState('');

  return (
    // Envolvi tudo em uma div principal
    <div>
      <form>
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
        <InputField label="E-mail" type="email" name="email" placeholder="exemplo@email.com" />
        <InputField label="Nome da mae" type="text" name="NomeMae" placeholder="Mãe..." />
        
        <Botao texto="Cadastrar" />
      </form>

      <div>nome: {nome}
      </div>
      <div>
        telefone: {telefone}
      </div>
    </div>
  );
}

export default FormularioCadastro;
