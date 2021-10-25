const { Router } = require('express');
const mainText = require('./mainText')

const router = Router();

router.use("/mainText", mainText);

module.exports = router;