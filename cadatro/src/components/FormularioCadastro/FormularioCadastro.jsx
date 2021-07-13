import React, { useEffect, useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

import { Typography, Stepper,Step, StepLabel} from '@material-ui/core';

function FormularioCadastro({ onSubmit}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({})
    useEffect(()=>{
        if(etapaAtual == formularios.length-1){
            onSubmit(dadosColetados)
        }
        
    })

    const formularios = [
        <DadosUsuario onSubmit={coletarDados} />,
        <DadosPessoais onSubmit={coletarDados}  />,
        <DadosEntrega onSubmit={coletarDados} />,
        <Typography variant="h5">Obrigado pelo cadastro seu gostoso</Typography>
    ]

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados})
        proximo()
    }
    function proximo() {
        setEtapaAtual(etapaAtual + 1)
    }

    return (
        <> <Stepper activeStep={etapaAtual} >
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Endereço</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
         {formularios[etapaAtual]}</>
    )
}


export default FormularioCadastro