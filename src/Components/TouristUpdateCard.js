import React, {useState, useEffect} from 'react';
import Button from "./Button"
import "./TouristUpdateCard.css"
import {doPUTCall} from "./apiHelper"
function TouristUpdateCard() {
    const [name, setName] = useState("laoddj");
    const [email, setEmail] = useState("jociDSjfs");
    const [location, setLocation] = useState("kjsfoids");

    useEffect(() => {
        // doPUTCall(url, body)
        //   .then((console.log(data)))
        //   .catch((error) => console.error(error));
      }, []);
  return (
    <div className="container">
    <div className="row">
        <label>Name</label>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    </div>
    <div className="row">
        <label>E-mail </label>
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div className="row">
        <label>Location</label>
        <input type="text" value={location} onChange={e=>setLocation(e.target.value)}/>
    </div>
    <br/>
    <Button content="Submit"/>  
</div>
  );
}
export default TouristUpdateCard;
