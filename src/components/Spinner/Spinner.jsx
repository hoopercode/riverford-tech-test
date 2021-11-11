import React from 'react'
import "./Spinner.scss"
import SpinnerImage from "../../assets/images/newerSpinnerB.png"

const Spinner = () => {
  return (
    <div className="spinnerIcon">
      <img className="spinnerIcon__image" src={SpinnerImage} alt="" />
    </div>
  )
}

export default Spinner
