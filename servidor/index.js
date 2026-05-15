import express from 'express';
const servidor = express()
servidor.use(express.json())

const registros = []

servidor.post('/registros', (req, res) => {
    const dados = req.body

    if (!dados.nome) {
        res.status(400).json({
            erro: "campo de nome é obrigatorio"
        })
    }

    console.log(`dados:
        ${dados}`)
    registros.push(dados)

    res.status(201).json({
        mensagem: "regisrtro criado",
        sucesso: true,
    })
})

servidor.get('/registros', (req, res) => {
    res.status(200).json(registros)
})

servidor.listen(3000, () => {
    console.log("o app esta rodando em http://localhost:3000")
})