import "./App.css";
// Routing
import { Outlet } from "react-router-dom";
// Components
import Navbar from "./features/navigation/Navbar";
import Footer from "./features/navigation/Footer";

function App() {
  return (
    <div id="app">
      <Navbar/>
      <div id="app-content">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
