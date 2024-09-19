const express = require('express');

// services
const logRequest = require('./services/requestLog');

// routers
const staticRouter = require('./routes/static');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// middleware
app.use(express.json());
app.use(logRequest);

app.use("/", staticRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});