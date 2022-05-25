import React from "react";
import './Button.css'
function Button({content}) {
  return (
    <>
    <div className="close">
        <button className="button"> {content}</button>
    </div>
    </>
  );
}

export default Button;
