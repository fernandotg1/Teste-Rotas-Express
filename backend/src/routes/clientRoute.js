const express = require('express');
const router = express.Router();
const clientController = require('./../controllers/clientController')


router.get('/', clientController.getClients);

router.get('/:id', clientController.getOneClient);

router.post('/', clientController.createClient);

router.put('/:id', clientController.updateClient);

router.delete('/:id', clientController.deleteClient)

// router.get('/adicionar', (req, res) => {
//     console.log("Entrei na minha rota 2 /");
//     res.status(200).send('Entrei na atual rota adicionar');
// })

module.exports = router;