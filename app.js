import dotenv from 'dotenv';
import express from 'express';



// load the .env file
dotenv.config();

const PORT = process.env.PORT || 3003;
const app = express();

app.get('/', (req, res) => {
  res.send("Hello Arthur");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});




