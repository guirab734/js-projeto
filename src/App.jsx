import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Footer from './components/Footer'
import InputField from './components/inputField'
import FormularioCadastro from './components/formulario'
function App() {
  return (
    <>
      <div>
        <Cabecalho></Cabecalho>
      </div>

      <div>
        <FormularioCadastro> </FormularioCadastro>
      </div>
<div>
  <Footer /> 
</div>

    </>
  )
}





export default App

