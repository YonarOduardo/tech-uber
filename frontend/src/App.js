import React, { useState } from "react";

function App() {
	const [search, setSearch] = useState("");
	const [technicians] = useState([
		{ id: 1, name: "Juan Pérez", skill: "Electricista", rating: 4.8 },
		{ id: 2, name: "María López", skill: "Plomera", rating: 4.6 },
		{
			id: 3,
			name: "Carlos Gómez",
			skill: "Reparación de aire acondicionado",
			rating: 4.9,
		},
	]);

	const filteredTechnicians = technicians.filter(
		(t) =>
			t.name.toLowerCase().includes(search.toLowerCase()) ||
			t.skill.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col">
			{/* Encabezado */}
			<header className="bg-green-600 text-white p-4 text-lg font-bold">
				Tech-Uber 🚐 — Encuentra tu técnico al instante
			</header>

			{/* Buscador */}
			<div className="p-4 bg-white shadow">
				<input
					type="text"
					placeholder="Buscar técnico o especialidad..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded-lg"
				/>
			</div>

			{/* Lista de técnicos */}
			<main className="flex-1 p-4">
				{filteredTechnicians.length > 0 ? (
					filteredTechnicians.map((tech) => (
						<div
							key={tech.id}
							className="bg-white p-4 mb-3 rounded-lg shadow hover:shadow-md transition"
						>
							<h2 className="text-xl font-bold">{tech.name}</h2>
							<p className="text-gray-600">{tech.skill}</p>
							<p className="text-yellow-500">⭐ {tech.rating}</p>
							<button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
								Solicitar
							</button>
						</div>
					))
				) : (
					<p className="text-gray-500">No se encontraron técnicos</p>
				)}
			</main>
		</div>
	);
}

export default App;
