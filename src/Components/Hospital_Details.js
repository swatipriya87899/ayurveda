import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Hospital_Details.css";
import Hospital_Details_Card from "./Hospital_Details_Card";

const Hospital_Details = () => {
  const [data, setData] = useState([]);
  //fetching api's to display cards
  useEffect(() => {
    fetch("http://localhost:9600/api/v1/hospital?city=kolkata").then(
      (result) => {
        result.json().then((res) => {
          setData(res);
        });
      }
    );
  }, []);
  return (
    <div className="hospital_details">
      <Header heading="Ayur Hospitals" subheading="Near You"></Header>
      {/* displaying hospital cards */}
      <div style={{ display: "flex", justifyContent:'space-around',flexWrap:'wrap' }}>
        {data.map((item) => {
          return (
              <div>
            <Hospital_Details_Card key={item.address}
              image={item.image}
              city={item.city}
              address={item.address}
            ></Hospital_Details_Card>
            </div>
            
          );
        })}
      </div>

      <div></div>
    </div>
  );
};

export default Hospital_Details;
