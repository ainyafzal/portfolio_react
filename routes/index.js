const express = require('express');
const path = require('path')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "..", "views", "build")))

app.get("/api", async (req, res) => {
  res.send({ message: "Hello"})
})
app.get("*", async(req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "build", "index.html"))
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
