import weatherRouter from "./routes/weatherRouter"; 
require ('dotenv').config();
const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());

app.use("/api", weatherRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
