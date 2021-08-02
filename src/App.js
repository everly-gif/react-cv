import "./styles.css";
import Sidebar from "./sidebar";
import Config from "./config.json";
import Main from "./main";
const App = () => (
  <div className="container">
    <Sidebar Data={Config.Sidebar} />
    <Main Data={Config.Main} />
  </div>
);
export default App;
