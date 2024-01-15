import Header from "./components/layouts/HeaderComponent";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouteComponents from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <RouteComponents />
      </Router>
    </div>
  );
}

export default App;
