import React, { Component } from 'react'
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import '@fontsource/roboto';

import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center"> Formulário de cadastro </Typography>
        <FormularioCadastro onSubmit={aoEnviarDados} validarCPF={validarCPF}/>
      </Container>

    );
  }
}
function aoEnviarDados(dados){
  console.log(dados)
}
function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve conter 11 Dígitos"}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
