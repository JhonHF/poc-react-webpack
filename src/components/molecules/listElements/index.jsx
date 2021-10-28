import React, { useEffect, useState } from "react";

const ListElements = () => {
  const list = [
    {
      default: true,
      label: "Productos",
      value: "products",
    },
    {
      label: "Proveedores",
      value: "providers",
    },
    {
      label: "Tiendas",
      value: "stores",
    },
  ];

  const [data, setData] = useState([])

  const getPokemons = () => {
    const response = fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'applicat
      },
    });

    response.then((res) => {
      res.json().then((otroRes) => setData(otroRes));
    });
  };
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
    <select onChange={(e) => console.log(e.target.value)}>
      {list.map((element, index) => (
        <option
          key={index}
          value={element.value}
          defaultValue={!!element.default}
        >
          {element.label}
        </option>
      ))}
    </select>
    <div>
    {JSON.stringify(data, null, 10)}
    </div>
    </>
  );
};

export default ListElements;
