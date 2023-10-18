import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import "../style/players.css";

const Players = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = "https://api.jsonbin.io/v3/b/652cfdc754105e766fc2e46c";

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Master-Key":
          "$2a$10$zSfnv/AyDOwB/AwUdj7hf.awX.XiL7M7e1OFPfwb1uskDwAaMOGtW",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  if (data == null) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <Navbar />
      <ul className="list-group">
        {data.record.map((item, i) => (
          
          <li key={i} className="list-group-item">
            <h3>
              {item.name}
              <br />
            </h3>
            {item.position}
            <br />
          
              <img src={item.img_url} className="photo" />
          

            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Players;
