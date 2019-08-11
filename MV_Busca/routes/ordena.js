
const express = require('express');
const router = express.Router();

function ordenaDATA() {

    Console.log('Passou aqui!!!');

}


module.exports = router;



/* GET home page. */
router.get('/ordena', function (req, res) {
    res.render(ordena, {data: ordenaDATA() });
});