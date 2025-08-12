// db.js
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
	user: "tech_uber_db_user",
	host: "dpg-d2db7v8gjchc73dh5eig-a.oregon-postgres.render.com",
	database: "tech_uber_db",
	password: "e0xLfQAEpw3xyAlNLHQXYms4KC8ZpfXf",
	port: 5432,
	ssl: { rejectUnauthorized: false },
});

export default pool;
