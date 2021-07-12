import React, { useState } from 'react';
import { Switch, TextField, Button, FormControlLabel } from '@material-ui/core';

function DadosPessoais({ onSubmit, validacoes }) {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [CPF, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })


    function validarCampos(event){
            const {name, value} = event.target
            const novoEstado = {...erros}
            novoEstado[name] = validacoes[name](value)
            setErros(novoEstado)
        
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            onSubmit({ nome, sobrenome, CPF, novidades, promocoes })
        }}>
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value)


                }}
                id="nome"
                label="Nome"
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
                Cadastrar
            </Button>
        </form>
    )
}
export default DadosPessoais