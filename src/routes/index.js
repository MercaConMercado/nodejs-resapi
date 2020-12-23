const express = require('express');
const router = express.Router();

/*ROUTES*/

router.get('/', function (req, res) {
    const data ={
        'name': 'daniel',
        'phone': 3192841939

    };
    res.json(data);
});



module.exports = router;