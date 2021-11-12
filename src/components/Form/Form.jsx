import React, {useState} from "react";
import "./Form.scss";
import confirm from "../../assets/images/button-bg.png"

const Form = (props) => {
  const {toggleSignIn} = props;
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePassword = (e) => {
    setPasswordShown(!passwordShown)
    e.preventDefault()
    
  }
  return (
    <>
    <form action="/action_page.php">
      <div class="form">

        <div className="form__item form__item--name">
          <label className="form__label" for="name">
            Name
          </label>
          <input className="form__box" type="text" name="name" required />
        </div>


        <div className="form__item form__item--email">
          <label className="form__label" for="email">
            Email
          </label>
          <input className="form__box" type="text" name="email" required />
        </div>

        <div className="form__item form__item--password">
          <label className="form__label" for="password">
            Password
          </label>
          <input
            className="form__box"
            type={passwordShown ? "text" : "password"}
            name="password"
            required
          />
          <button className="form__show-button"onClick={togglePassword}>show</button>
        </div>


        <div className="form__item  form__item--phone">
          <label className="form__label" for="phone">
            Phone number
          </label>
          <input className="form__box--phone form__box" type="tel" name="phone" />
        </div>

        <div className="form__item form__item--info">
          <label className="form__label" for="moreInfo">
            How did you hear about us?
          </label>
          <textarea className="form__box form__box--info" type="text" cols="40" 
       rows="5"name="moreInfo" />
        </div>


        <div className="form__item form__item--confirm" onClick={toggleSignIn} > 
          <img className="form__button"src={confirm} alt="" />
          <div className="form__button-text">Confirm</div>
        </div>
      </div>

      
    </form>
    </>
  );
};

export default Form;
