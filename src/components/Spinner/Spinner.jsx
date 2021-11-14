import React from "react";
import "./Spinner.scss";
import SpinnerImage from "../../assets/images/Spinner.png";

const Spinner = () => {
  return (
    <div className="spinner-icon">
      <img className="spinner-icon__image" src={SpinnerImage} alt="" />
    </div>
  );
};

export default Spinner;
  