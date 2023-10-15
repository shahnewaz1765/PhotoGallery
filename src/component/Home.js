import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Footer from "./Footer";


function Home (){
    return (
        <div className="App">
          <Navbar />
          <Slider />
          <Footer />
        </div>
      );
}
export default Home;