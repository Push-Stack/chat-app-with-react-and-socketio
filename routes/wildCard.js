const express = require('express');

const router = express.Router();

router.all('*', (req, res) => {
  res.status(400).json({
    status: 'Fail',
    error: `Can't find ${req.originalUrl} on this server`
  });
});

module.exports = router;
