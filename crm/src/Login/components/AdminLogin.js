import React, { useState } from "react";
import "./AdminLogin.css";
import { Login } from "../adminAuth";
import MyButton from "../../utilities/Button";
import { useDispatch } from "react-redux";
import { default as flyokartLogo } from "../../images/flyokart-plane-svg.svg";
import { admin_login } from "../../actions/adminActions";
import { Link, Redirect } from "react-router-dom";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    password: "",
  });

  const [AdminAuth, setAdminAuth] = useState(false);
  const [inputborder, setInputBorder] = useState();

  const redirectToHome = () => {
    if (AdminAuth) {
      return "/home";
    }
  };

  const LoginUser = async () => {
    try {
      const response = await Login({
        email: userRegistration.username,
        password: userRegistration.password,
      });
      console.log(response);
      dispatch(admin_login(response));
      setAdminAuth(true);
    } catch (error) {
      console.log(error);
    }
  };
  const [showpass,setshowpass]=useState(false);
  const [passicon,setpassicon]=useState(true);
  /*const passwordtoggler = () =>{
    setshowpass(!showpass);
  }*/
  return (
    <>
      <div className="loginLogoContainer">
        <div className="logoContainer">
          <div className="loginLogoText">Fly0kart.com</div>
          {<img src={flyokartLogo} alt="logo" className="logoSvg"></img>}
        </div>
      </div>
      <div className="signIn_wrapper">
        <div className="box_wrapper">
          <div className="signIn_text">Sign In</div>
          <div className="form_wrapper">
            <div className="logininputfieldwrapper">
              <input
                type="text"
                autoComplete="none"
                placeholder="User Name*"
                value={userRegistration.username}
                onChange={(e) => {
                  setUserRegistration((prev) => {
                    return {
                      ...prev,
                      username: e.target.value,
                    };
                  });
                }}
                name="username"
                id="username"
                onClick={() => {
                  setInputBorder("username");
                }}
                className={`inputLoginInfo ${
                  inputborder === "username" ? "inputActive" : null
                }`}
              />
            </div>
            <div className="d-flex logininputfieldwrapper">
              <input
                type={showpass? "text":"password"}
                autoComplete="none"
                placeholder="Password*"
                value={userRegistration.password}
                onChange={(e) => {
                  setUserRegistration((prev) => {
                    return { ...prev, password: e.target.value };
                  });
                }}
                onClick={() => {
                  setInputBorder("password");
                }}
                name="password"
                id="password"
                className={`inputLoginInfo ${
                  inputborder === "password" ? "inputActive" : null
                }`}
              />
              <lable className="btn" onClick={()=>{setshowpass(!showpass)}}>
              <i className={showpass?"d-block fas fa-eye":"d-none fas fa-eye"}></i>
              <i className={showpass ?"d-none fas fa-eye-slash":"d-block fas fa-eye-slash"}></i>
              </lable>
            </div>
            <div className="adminLoginBtn">
              <MyButton
                type="default"
                label="Login"
                padding=" 6px 50px 6px 50px"
                fontsize="28px"
                runAction={() => {
                  LoginUser();
                }}
                linkTo={redirectToHome()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
