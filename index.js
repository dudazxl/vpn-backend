const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/teste", (req, res) => {
  res.send("backend funcionando");
});

app.get("/gerar", (req, res) => {
  const numero = Math.floor(Math.random() * 1000);
  res.json({ usuario: "user" + numero });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
