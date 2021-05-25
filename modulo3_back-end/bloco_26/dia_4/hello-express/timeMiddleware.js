const express = require('express');
const app = express();

function timeMiddleware(req, res, next) {
  req.startTime = Date.now();
  next();
}

module.exports = timeMiddleware;
