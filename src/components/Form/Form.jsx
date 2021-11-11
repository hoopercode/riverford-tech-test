import React from "react";
import "./Form.scss";
import confirm from "../../assets/images/button-bg.png"

const Form = (props) => {
  const {toggleSignIn} = props;

  return (
    <>
    <form action="/action_page.php">
      <div class="container">
        <div className="container__item container__item--name">
          <label className="container__label" for="name">
            Name
          </label>
          <input className="container__box" type="text" name="name" required />
        </div>
        <div className="container__item container__item--email">
          <label className="container__label" for="email">
            Email
          </label>
          <input className="container__box" type="text" name="email" required />
        </div>
        <div className="container__item container__item--password">
          <label className="container__label" for="password">
            Password
          </label>
          <input
            className="container__box"
            type="password"
            name="password"
            required
          />
        </div>
        <div className="container__item  container__item--phone">
          <label className="container__label" for="phone">
            Phone number
          </label>
          <input className="container__box--phone" type="tel" name="phone" />
        </div>
        <div className="container__item container__item--info">
          <label className="container__label" for="moreInfo">
            How did you hear about us?
          </label>
          <textarea className="container__item container__box--info" type="text" cols="40" 
       rows="5"name="moreInfo" />
        </div>
        <div className="container__item container__item--confirm" onClick={toggleSignIn} > 
          <img className="container__button"src={confirm} alt="" />
          <div className="container__button-text">Confirm</div>
        </div>
      </div>
      
    </form>
    </>
  );
};

export default Form;
