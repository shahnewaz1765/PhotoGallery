import "./App.css";
import Slider from "./component/Slider";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Gallery from "./hook/Gallery";



function App() {

  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
