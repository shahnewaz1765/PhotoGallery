import "./App.css";
import Gallery from "./hook/Gallery";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "reactstrap";
import "./style/bootstrap.min.css";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
