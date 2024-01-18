import express from 'express';



const router = express.Router();

// routes
router.get('', (req, res) => {
  res.send("Hello World");
});





export default router;
