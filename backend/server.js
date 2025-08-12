import express from "express";
import cors from "cors";
import pool from "./db.js";
import bcrypt from "bcrypt";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Crear tabla de usuarios si no existe
const createUsersTable = async () => {
	await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
};
createUsersTable();

// Registro de usuario
app.post("/api/register", async (req, res) => {
	const { username, email, password } = req.body;
	if (!username || !email || !password) {
		return res
			.status(400)
			.json({ error: "Todos los campos son obligatorios" });
	}
	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const result = await pool.query(
			"INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email, created_at",
			[username, email, hashedPassword]
		);
		res.status(201).json({ user: result.rows[0] });
	} catch (err) {
		if (err.code === "23505") {
			res.status(409).json({ error: "Usuario o email ya existe" });
		} else {
			res.status(500).json({ error: "Error en el servidor" });
		}
	}
});

// Inicio de sesión
app.post("/api/login", async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({ error: "Email y contraseña requeridos" });
	}
	try {
		const result = await pool.query(
			"SELECT * FROM users WHERE email = $1",
			[email]
		);
		if (result.rows.length === 0) {
			return res.status(401).json({ error: "Credenciales inválidas" });
		}
		const user = result.rows[0];
		const match = await bcrypt.compare(password, user.password);
		if (!match) {
			return res.status(401).json({ error: "Credenciales inválidas" });
		}
		res.json({
			user: {
				id: user.id,
				username: user.username,
				email: user.email,
				created_at: user.created_at,
			},
		});
	} catch (err) {
		res.status(500).json({ error: "Error en el servidor" });
	}
});

app.get("/api", (req, res) => {
	res.json({ message: "Hola desde el backend en Render 🚀" });
});

app.listen(PORT, () => {
	console.log(`Servidor corriendo en puerto ${PORT}`);
});
