import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./components/CardList";

const App = () => {
  const [Personas, setPersonas] = useState(null);

  const fetchData = async () => {
    const res = await axios.get(
      "https://corrupcionaldia.com/wp-json/wp/v2/posts/?categories=33&per_page=100"
    );

    setPersonas(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>{!Personas ? <p>Cargando...</p> : <CardList data={Personas} />}</div>
  );
};

export default App;
