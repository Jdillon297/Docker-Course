import DataFetcher from "./Components/DataFetcher";
import { apiRoutes } from "./Networking/apiRoutes";
import { baseUrl } from "./Networking/baseUrl";
import { styles } from "./Styles/styles";
function App() {
  return (
    <div style={styles.dataContainer}>
      <div>
        <h3>DATA FROM PYTHON API</h3>
        <DataFetcher url={baseUrl.url} route={apiRoutes.python_api} />
      </div>
      <div>
        <h3>DATA FROM NODE API</h3>
        <DataFetcher url={baseUrl.url} route={apiRoutes.node_api} />
      </div>
    </div>
  );
}

export default App;
