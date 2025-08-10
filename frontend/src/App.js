import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://tech-uber.onrender.com/api");
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      const json = await res.json();
      setData(json.message);
    } catch (err) {
      console.error("Error:", err);
      setError("No se pudo conectar con la API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend en Netlify personalizado por Yonar</h1>
      <button onClick={getData} disabled={loading}>
        {loading ? "Cargando..." : "Llamar API"}
      </button>
      {data && <p>{data}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
