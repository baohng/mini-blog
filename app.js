import dotenv from 'dotenv';
import express from 'express';
import clientRouter from './server/routes/main.js';


// load the .env file
dotenv.config();

const PORT = process.env.PORT || 3003;
const app = express();

// client route
app.use('/', clientRouter);

// admin route

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});




