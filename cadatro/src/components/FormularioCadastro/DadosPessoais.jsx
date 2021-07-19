import React, { useState, useContext } from 'react';
import { Switch, TextField, Button, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ onSubmit}) {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [CPF, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    
 
    

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if(possoEnviar()){
                onSubmit({ nome, sobrenome, CPF, novidades, promocoes })
            }
            
        }}>
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value)


                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome"
                label="Nome"
                name="nome"
                variant="outlined"
                margin="normal"
                fullWidth />

            <TextField
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value)
                }}

                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth />

            <TextField
                value={CPF}
                onChange={event => {
                    setCpf(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                name="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth />


            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        checked={promocoes}

                        onChange={(event) => {
                            setPromocoes(event.target.checked)
                        }}
                        name="Promocoes"
                        color="primary" />
                } />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked)
                        }}
                        name="Novidades"

                        color="primary" />} />



            <Button type="submit" variant="contained" color="primary">
                Próximo 
            </Button>
        </form>
    )
}
export default DadosPessoais