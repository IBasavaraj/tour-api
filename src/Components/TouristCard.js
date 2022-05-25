import React, { useState, useEffect } from "react";
import { doGETCall, doDELETECall } from "./apiHelper";
import "./TouristCard.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const TouristInfo = () => {
  const [data, setData] = useState([]);
//   const [update, setUpdate] = useState(false);
  const url = "http://restapi.adequateshop.com/api/Tourist";

  useEffect(() => {
    doGETCall(url)
      .then((data) => {setData(data.data);
    console.log(data);})
      .catch((error) => console.error(error));
  }, []);
  const touristDetailHandler = (id) => {
      
    console.log("its me");
 
  };
  const renderNewList = (id) => {
    const newList = data.filter((item) => item.id !== id);
    setData(newList);
  };
  const touristDeleteHandler = (id) => {
    // e.preventDefault();
    doDELETECall(url + `/${id}`).then(renderNewList(id));
  };
  return (
    <div>
      {data?.map((touristItem) => {
        return (
          <div
            key={touristItem.id}
            onClick={() => touristDetailHandler(touristItem.id)}
            className="tourist__container"
          >
            <div className="delete__container">
              <span
                onClick={() => touristDeleteHandler(touristItem.id)}
                className="delete__close close"
              >
                X
              </span>
            </div>
            <div className="tourist__flex">
              <div className="details__container">
                <p>Name: {touristItem.tourist_name}</p>
                <p>E-mail: {touristItem.tourist_email}</p>
                <p>Location: {touristItem.tourist_location}</p>
              </div>
              <p>{touristItem.createdat}</p>
            </div>
            <Button content="Update" />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(TouristInfo);
