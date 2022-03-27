import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const RestaurantList = () => {
  const navigate = useNavigate(); 

  const [restoData, setrestoData] = useState([]);

  // Api to fetch restaurant list
  useEffect(() => {
    const url = "https://staging.fastor.in/v1/m/restaurant?city_id=118&&";
    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsInBob25lIjoiOTgxODk3OTQ1MCIsImRpYWxfY29kZSI6Iis5MSIsImxhc3RfcGFzc3dvcmRfdXBkYXRlIjoiMjAyMi0wMS0yNVQxMTo1NTo0Ny4wMDBaIiwiaWF0IjoxNjQ4MTk5NzYxLCJleHAiOjE2NTU0NTczNjF9.kD9fNEPHLa7QN1x_okZjZ5IsC1t2W9SoR-pdBRWNM6A",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setrestoData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80)",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#222222",
            zIndex: "2",
            opacity: "0.7",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10%",
          }}
        >
          <h1
            style={{
              zIndex: "4",
              color: "white",
              fontFamily: "serif",
            }}
          >
            Restaurant List
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: " grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center",
              width: "50%",
              zIndex: "4",
              color: "white",
              fontFamily: "serif",
            }}
          >
            {!restoData ? (
              <h1>Loading...</h1>
            ) : (
              // console.log('👨‍👦‍👦', restoData)
              restoData.map((user) => (
                <>
                <div onClick={() => navigate("/restaurant-details", {state: user.images})}>
                  <h2>{user.restaurant_name}</h2>
                  </div>
                </>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantList;
