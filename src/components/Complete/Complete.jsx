import React from 'react'
import "./Complete.scss"
import Tick from "../../assets/images/Tick.png"

const Complete = () => {
  return (
    <>
    <div className="complete">
      <h1>Sign Up</h1>
      <p className="complete__content">Sign up complete! You have successfully created an account.  You can now sign in to the website at any time</p>
    </div>
    <img className="complete__image" src={Tick} alt="" />
    </>
  )
}

export default Complete
