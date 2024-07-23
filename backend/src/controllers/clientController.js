const clientes = [
    { 'id': 1, 'nome': 'Vitor', 'email': 'vitor1@gmail.com', 'telefone': 58584934 },
    { 'id': 2, 'nome': 'João', 'email': 'joaoabcdefg@gmail.com', 'telefone': 99887766 },
    { 'id': 3, 'nome': 'Maria', 'email': 'Maria_123_cmcmcmcmcmc@gmail.com', 'telefone': 44339987 }
]


// Listar todos os clientes
getClients = (req, res) => {

    if (clientes.length <= 0) {
        res.send("A lista está vazia")
    } else {
        res.status(200).send(clientes);
    }
}

// Listar um cliente pelo ID
getOneClient = (req, res) => {
    let id = Number(req.params.id);
    const cliente = clientes.find((item) => item.id === id);
    if (cliente) {
        res.send(cliente);
    } else {
        res.status(404).send("Cliente não localizado");
    }
}

// Adicionar cliente
createClient = (req, res) => {
    const addcliente = req.body;
    if (Object.keys(addcliente).length > 0) {
        clientes.push(addcliente);
        res.status(201).send(addcliente);
    } else {
        res.status(406).send("Não foi possível adicionar este cliente");
    }

}

//Atualizar cliente
updateClient = (req, res) => {
    let id = req.params.id;
    let indice = findClientIndex(id);
    clientes[indice] = req.body;
    res.status(201).send("Cliente atualizado com sucesso")

}

//Deletar cliente
deleteClient = (req, res) => {
    let id = req.params.id;
    let indice = findClientIndex(id);
    if (indice >= 0) {
        clientes.splice(indice, 1);
        res.status(200).send(`O cliente de id ${id} foi removido com sucesso`);
    } else {
        res.status(404).send("Cliente não localizado pelo ID");
    }


}

// Localizar index do Cliente
findClientIndex = (id) => {
    const indice = clientes.findIndex((item) => item.id === Number(id));
    return indice
}

module.exports = { getClients, getOneClient, createClient, updateClient, deleteClient }

