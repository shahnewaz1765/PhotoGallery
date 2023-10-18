import "./App.css";
import Gallery from "./hook/Gallery";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "reactstrap";
import "./style/bootstrap.min.css";
import Players from "./component/Players";
import Fixture from "./component/Fixture";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/players" element={<Players />} />
          <Route path="/fixture" element={<Fixture />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
