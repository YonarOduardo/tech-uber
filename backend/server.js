import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Aquí especificamos el dominio de tu frontend en Netlify
app.use(cors({
  origin: "https://chipper-bienenstitch-6e40fa.netlify.app/" // Reemplaza con tu URL real
}));

app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el backend en Render 🚀" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
