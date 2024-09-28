import DataFetcher from "./Components/DataFetcher";
import { apiRoutes } from "./Networking/apiRoutes";
import { baseUrl } from "./Networking/baseUrl";
import { Ports } from "./Networking/ports";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <h3>DATA FROM PYTHON API</h3>
        <DataFetcher
          url={baseUrl.url}
          port={Ports.pythonPort}
          route={apiRoutes.python_api}
        />
      </div>
      <div>
        <h3>DATA FROM NODE JS</h3>
        HELLO
      </div>
    </div>
  );
}

export default App;
