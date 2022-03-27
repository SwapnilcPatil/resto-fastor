import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import pic from "../images/unnamed.png";

const RestaurantDetails = () => {
  const { state } = useLocation();
  const [impData, setImpData] = useState([state]);

//   function to share image across platforms
  const shareImage = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const filesArray = [
      new File([blob], "url", {
        type: "image/jpeg",
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData);
  };

  return (
    <>
      {!impData ? (
        <h1>Loading...</h1>
      ) : (
        (console.log("👨‍👦‍👦", impData),
        impData.map((user) => (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundPosition: 'center',
                  background: `url(${user[0].url})`,
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "80vh",
                  margin: "2%",
                }}
              >
                <img
                  style={{
                    height: "50px",
                    width: "120px",
                  }}
                  src={pic}
                  id="ball"
                ></img>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => shareImage(user[0].url)}
                style={{
                  backgroundColor: "#229ac8",
                  backgroundImage:
                    "linear-gradient(to bottom, #23a1d1, #1f90bb)",
                  backgroundRepeat: "repeat-x",
                  borderColor: "#1f90bb #1f90bb #145e7a",
                  color: "#ffffff",
                  textShadow: "0 -1px 0 rgba(0, 0, 0, 0.25)",
                  padding: "10px 30px 10px 30px",
                  borderRadius: "10px",
                }}
              >
                Share
              </button>
            </div>
          </>
        )))
      )}
    </>
  );
};
export default RestaurantDetails;
