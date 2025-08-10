import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const res = await fetch("https://TU-BACKEND.up.railway.app/api");
      const json = await res.json();
      setData(json.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend en Netlify</h1>
      <button onClick={getData}>Llamar API</button>
      {data && <p>{data}</p>}
    </div>
  );
}

export default App;
