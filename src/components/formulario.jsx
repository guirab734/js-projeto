import InputField from "./inputField"; 
import Botao from "./BotaoEnviar";
function FormularioCadastro() {
  return (
    <div>
      <form>
        <InputField label="Nome" type="text" name="nome" placeholder={"Gabriel..."} />
        <InputField label="E-mail" type="email" name="email" placeholder={"exemplo@email.com"} />
        <InputField label="Telefone" type="tel" name="telefone" placeholder={"+55..."} />
        <InputField label="Nome da mae" type="text" n  ame="NomeMae" placeholder={"Josefa"} />
        <Botao texto = "Cadastrar" />
      </form>
    </div>
  );
}

export default FormularioCadastro; 