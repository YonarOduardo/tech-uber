import { useEffect, useState } from "react";
import UsersTable from "../components/UsersTable";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();

	const fetchUsers = async () => {
		try {
			const res = await fetch("https://tech-uber.onrender.com/api/users");
			const data = await res.json();
			setUsers(data);
		} catch (error) {
			console.error("Error cargando usuarios", error);
		}
	};

	const deleteUser = async (id) => {
		if (!confirm("¿Seguro que deseas eliminar este usuario?")) return;
		try {
			await fetch(`https://tech-uber.onrender.com/api/users/${id}`, {
				method: "DELETE",
			});
			setUsers(users.filter((u) => u.id !== id));
		} catch (error) {
			console.error("Error eliminando usuario", error);
		}
	};

	const handleLogout = () => {
		// Elimina el token o datos de sesión
		localStorage.removeItem("token");
		// Redirige al login del dashboard
		navigate("/login");
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Dashboard de Usuarios</h1>
				<button
					onClick={handleLogout}
					className="bg-red-500 text-white px-4 py-2 rounded"
				>
					Cerrar sesión
				</button>
			</div>
			<UsersTable users={users} onDelete={deleteUser} />
		</div>
	);
}
