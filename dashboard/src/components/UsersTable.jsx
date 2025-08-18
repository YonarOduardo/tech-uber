export default function UsersTable({ users, onDelete }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Usuario</th>
            <th className="p-3">Email</th>
            <th className="p-3">Fecha Registro</th>
            <th className="p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.username}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{new Date(u.created_at).toLocaleString()}</td>
                <td className="p-3">
                  <button
                    onClick={() => onDelete(u.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-3 text-center" colSpan="5">
                No hay usuarios registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}