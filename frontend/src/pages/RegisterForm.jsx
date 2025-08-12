import { useState } from "react";

export default function RegisterForm() {
	const [form, setForm] = useState({ username: "", email: "", password: "" });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		setSuccess("");
		try {
			const res = await fetch(
				"https://tech-uber-backend.onrender.com/api/register",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(form),
				}
			);
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Error");
			setSuccess("¡Registro exitoso! Ya puedes iniciar sesión.");
			setForm({ username: "", email: "", password: "" });
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-sm mx-auto p-4 bg-white rounded shadow flex flex-col gap-3"
		>
			<h2 className="text-xl font-bold mb-2">Registro</h2>
			<input
				name="username"
				value={form.username}
				onChange={handleChange}
				placeholder="Usuario"
				className="border p-2 rounded"
				required
			/>
			<input
				name="email"
				type="email"
				value={form.email}
				onChange={handleChange}
				placeholder="Email"
				className="border p-2 rounded"
				required
			/>
			<input
				name="password"
				type="password"
				value={form.password}
				onChange={handleChange}
				placeholder="Contraseña"
				className="border p-2 rounded"
				required
			/>
			<button
				type="submit"
				className="bg-blue-600 text-white rounded p-2 mt-2"
				disabled={loading}
			>
				{loading ? "Registrando..." : "Registrarse"}
			</button>
			{error && <div className="text-red-600 text-sm">{error}</div>}
			{success && <div className="text-green-600 text-sm">{success}</div>}
		</form>
	);
}
