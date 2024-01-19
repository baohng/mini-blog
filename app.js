import dotenv from 'dotenv';
import express from 'express';
import clientRouter from './server/routes/main.js';
import expressEjsLayouts from 'express-ejs-layouts';


// load the .env file
dotenv.config();

const PORT = process.env.PORT || 3003;
const app = express();

// Template Engine
app.use(expressEjsLayouts);
app.set('layout', './layouts/main.ejs');
app.set('view engine', 'ejs');

// client route
app.use('/', clientRouter);


// admin route

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});




