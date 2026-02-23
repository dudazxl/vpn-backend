const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend rodando 🚀");
});

app.get("/gerar", (req, res) => {
  const numero = Math.floor(Math.random() * 10000);
  const usuario = "user" + numero;

  res.json({
    usuario,
    senha: usuario,
    tipo: "teste",
    validade: "1 dia"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
