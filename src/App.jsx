import "./App.css";
import Headers from "./components/Headers";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="header_home_container">
          <Headers />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
