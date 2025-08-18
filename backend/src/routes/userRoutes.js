// backend/src/routes/userRoutes.js
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

/**
 * GET /api/users
 * Devuelve todos los usuarios
 */
router.get("/", async (req, res) => {
	try {
		const users = await prisma.user.findMany({
			orderBy: { createdAt: "desc" }, // si tu modelo tiene createdAt
		});
		res.json(users);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al obtener usuarios" });
	}
});

/**
 * GET /api/users/:id
 * Devuelve info de un usuario específico
 */
router.get("/:id", async (req, res) => {
	try {
		const user = await prisma.user.findUnique({
			where: { id: Number(req.params.id) },
		});
		if (!user)
			return res.status(404).json({ error: "Usuario no encontrado" });
		res.json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al obtener usuario" });
	}
});

/**
 * DELETE /api/users/:id
 * Elimina un usuario
 */
router.delete("/:id", async (req, res) => {
	try {
		await prisma.user.delete({
			where: { id: Number(req.params.id) },
		});
		res.json({ message: "Usuario eliminado correctamente" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al eliminar usuario" });
	}
});

export default router;
