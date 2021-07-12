function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve conter 11 Dígitos"}
    }else{
      return {valido:true, texto:""}
    }
  }
  function validarSenha(senha){
    if(senha.length <= 4 || senha.length > 72){
      return {valido:false, texto:"Senha de ter entre 4 e 72 Dígitos"}
    }else{
      return {valido:true, texto:""}
    }
  }
  
  export{validarCPF, validarSenha}