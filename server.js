const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DIAZA360 funcionando correctamente.");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
