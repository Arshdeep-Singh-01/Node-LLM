async function logRequest(req, res, next) {
  console.log(`Request received: ${req.method} ${req.path}`);
  next();
}

module.exports = logRequest;