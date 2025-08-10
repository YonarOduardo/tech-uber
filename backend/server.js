import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Permitir CORS de cualquier dominio (para probar)
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el backend en Render 🚀" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
