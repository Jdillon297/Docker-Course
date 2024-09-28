import axios from "axios";

import { useEffect, useState } from "react";

function DataFetcher({ url, port, route }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `${url + port + route}`;
        const response = await axios.get(`${apiUrl}`);
        if (response.status === 200) {
          console.log(response.data);
          setData(response.data); // Ensure it's an array
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[]);

  return (
    <ul>
      <ul>
        {data.map((person) => (
          <li key={person.id}>
            <div>{person.name}</div>
          </li>
        ))}
      </ul>
    </ul>
  );
}

export default DataFetcher;
