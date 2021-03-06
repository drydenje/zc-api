// express for common application functions
const express = require("express");
// we create an app using express's express() function
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: `Yess! It's working!` });
});

app.listen(port, () => {
  console.log(`I'm Here, I care, I'm listening on ${port}.`);
  console.log(`NODE_ENV: ${process.env.PORT}`);
});
