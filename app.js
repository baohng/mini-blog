import dotenv from 'dotenv';
import express from 'express';
import clientRouter from './server/routes/main.js';
import expressEjsLayouts from 'express-ejs-layouts';
import connectDB from './server/config/db.js';
import adminRouter from './server/routes/admin.js';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import isActiveRoute from './server/helpers/routeHelpers.js';

// load the .env file
dotenv.config();

const PORT = process.env.PORT || 3003;
const app = express();

// Connect to database
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI
  }),
  //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
}));

// Serve static tiles from the 'public' directory
app.use(express.static('public'));

// Template Engine
app.use(expressEjsLayouts);
app.set('layout', './layouts/main.ejs');
app.set('view engine', 'ejs');

app.locals.isActiveRoute = isActiveRoute;

// client route
app.use('/', clientRouter);


// admin route
app.use('/', adminRouter);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});




