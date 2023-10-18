import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import "../style/bootstrap.min.css";
import "../style/gallery.css";


const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not OK");
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <ul className="list-group">
        {data.map((item) => (
          <li key={item.id} className="list-group-item">
            <img src={item.download_url} alt={item.author} />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
