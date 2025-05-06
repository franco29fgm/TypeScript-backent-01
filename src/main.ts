import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
        res.send("Estamos casi listos");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
