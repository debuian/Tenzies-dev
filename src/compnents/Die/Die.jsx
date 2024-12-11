import React from "react";
import "../Die/styles/DieStyle.css";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <button onClick={() => props.hold(props.id)} style={styles}>
      {props.value}
    </button>
  );
};

export default Die;
