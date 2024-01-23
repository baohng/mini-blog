import dotenv from 'dotenv';
import express from 'express';
import clientRouter from './server/routes/main.js';
import expressEjsLayouts from 'express-ejs-layouts';
import connectDB from './server/config/db.js';


// load the .env file
dotenv.config();

const PORT = process.env.PORT || 3003;
const app = express();

// Connect to database
connectDB();

// Serve static tiles from the 'public' directory
app.use(express.static('public'));

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




