/* authRouter.js */
const express = require('express');
const router = express.Router();
const authMiddleware = require('./auth-middleware');

router.use(authMiddleware);

/* Todas as rotas daqui para baixo utilizam o `authMiddleware` */

/* GET /secure/hello */
router.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello world' });
});

module.exports = router;