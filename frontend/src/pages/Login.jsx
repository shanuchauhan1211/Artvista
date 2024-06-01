import React, { useContext, useEffect } from "react";
import backimage from "../pages/handLogin.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  const { login } = useContext(AuthContext);
  const [activeLog, setActiveLog] = useState(true);
  const initialLog = { name: "", password: "" };
  const initialSign = { name: "", password: "", email: "", confirm: "" };
  const [logUser, setLogUser] = useState(initialLog);
  const [signUser, setSignUser] = useState(initialSign);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword , setShowPassword] = useState(false);
  const navigate = useNavigate();
  //useEffect(()=>{handleActive()}, [activeLog]);

  var token_key = "";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/User/logIn", {
        name: logUser.name,
        password: logUser.password,
      });
      // const json = await response.json()
      // console.log(json);
      if (response.status === 200) {
        console.log(response);
        console.log(response.data);
        console.log(response.data.result.isAdmin);
        token_key = JSON.stringify(jwtDecode(response.data.token));
        console.log(token_key);
        localStorage.setItem("Token", token_key);
      } else {
        console.log("hey");
      }
      setLogUser(initialLog);
      alert("Logged in");
      if (response.data.result.isAdmin === false) {
        login();
        console.log("hello");
        navigate("/Contact");
      } else if (response.data.result.isAdmin === true) {
        console.log("hello1");
        login();
        navigate("/");
      }
    } catch (error) {
      alert("Check Username or Password");
      console.log(error);
    }
  };

function handleGoogleLogin (response)
{

if(!response)
{
alert("Invalid");
}

else{
    alert("You have logged in ");
    login();
    navigate("/Contact");
}

}


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/User/NewUser", {
        name: signUser.name,
        password: signUser.password,
        email: signUser.email,
        confirm: signUser.confirm,
      });
      console.log(response);
      alert("User Created");
      setSignUser(initialSign);
      navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  };

  function handleActive() {
    setActiveLog(!activeLog);
  }

  function visiblePassword(){
    setShowPassword(!showPassword);
  }

  function handleLogChangeName(e) {
    setLogUser({ ...logUser, name: e.target.value });
  }
  function handleLogChangePassword(e) {
    let new_pass = e.target.value;
    setLogUser({ ...logUser, password: e.target.value });
    setSignUser({ ...signUser, password: new_pass });
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (!new_pass.match(lowerCase)) {
      setErrorMessage("Passowrd should contain LowerCase letters");
    } else if (!new_pass.match(upperCase)) {
      setErrorMessage("Passowrd should contain UpperCase letters");
    } else if (!new_pass.match(numbers)) {
      setErrorMessage("Passowrd should contain numbers");
    } else if (new_pass.length < 8) {
      setErrorMessage("Passowrd should contain Weak password");
    } else {
      setErrorMessage("");
    }
  }
  function handleSignChangeName(e) {
    setSignUser({ ...signUser, name: e.target.value });
  }
  function handleSignChangePassword(e) {
    let new_pass = e.target.value;
    setSignUser({ ...signUser, password: new_pass });
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (!new_pass.match(lowerCase)) {
      setErrorMessage("Passowrd should contain LowerCase letters");
    } else if (!new_pass.match(upperCase)) {
      setErrorMessage("Passowrd should contain UpperCase letters");
    } else if (!new_pass.match(numbers)) {
      setErrorMessage("Passowrd should contain numbers");
    } else if (new_pass.length < 8) {
      setErrorMessage("Passowrd should contain Weak password");
    } else {
      setErrorMessage("");
    }
  }
  function handleSignChangeConfirm(e) {
    setSignUser({ ...signUser, confirm: e.target.value });
  }

  function handleSignChangeEmail(e) {
    setSignUser({ ...signUser, email: e.target.value });
  }

  return (
    <>
      <div
        className="bg-slate-700 h-screen  flex justify-center items-center bg-center saturate-50 "
        style={{
          backgroundImage: `url(${backimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className=" flex flex-col-reverse md:flex-row  gap-10 items-center justify-center duration-300  h-[85%] w-[95%]  shadow-[0_0_150px_50px_rgba(0,0,0,1)] bg-center hover:saturate-200 rounded-md "
          style={{
            backgroundImage: `url(${backimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className=" w-[80%] h-[6%]   md:h-[50%] md:w-[6%] flex flex-col-reverse  md:flex-row md:gap-4">
            <div className=" border border-black "></div>
            <div className=" text-black text-4xl font-primary flex flex-row  md:flex-col justify-center gap-10 list-none">
              <Link to={"/Login"} onClick={handleActive}>
                {" "}
                <li
                  className={`duration-300 ${
                    activeLog ? ` underline text-[red]` : ` text-black`
                  }`}
                >
                  LogIn
                </li>{" "}
              </Link>
              <Link to={"/Login"} onClick={handleActive}>
                {" "}
                <li
                  className={`duration-300 ${
                    activeLog ? ` text-black ` : ` underline text-[red]`
                  }`}
                >
                  SignUp
                </li>
              </Link>
            </div>
          </div>
          {activeLog ? (
            <div className=" w-[375px] md:w-[50%]  flex items-center justify-center  ">
              <div className="duration-300 ease-in-out  w-[275px] h-[400px] md:w-[60%] md:h-[90%] mx-10 rounded-lg shadow-[0_15px_30px_10px_rgba(0,0,0,0.6)] hover:backdrop-sepia  ">
                <form
                  onSubmit={handleLogin}
                  className="rounded-lg md:py-6 flex flex-col w-[100%] h-[100%]  justify-center items-center gap-5 md:gap-12"
                  action=""
                >
                  <p className="md:text-4xl rounded-md md:w-[30%] backdrop-blur-xl text-center font-primary">
                    Log In
                  </p>
                  <input
                    onChange={handleLogChangeName}
                    value={logUser.name}
                    className="border border-slate-800 bg-transparent backdrop-blur-xl  md:text-xl md:font-semibold rounded-lg w-[70%] h-[35px] px-5 placeholder-slate-800"
                    placeholder="UserName"
                    required
                    type="text"
                  />
                  <div className="flex gap-5 w-[70%] md:w-[70%] ">
                  <input
                    onChange={handleLogChangePassword}
                    value={logUser.password}
                    className="border border-slate-800 bg-transparent backdrop-blur-xl md:text-xl md:font-semibold rounded-lg w-[90%] h-[35px] px-5 placeholder-slate-800"
                    placeholder="Password"
                    required
                    type={showPassword? 'text' : 'password' }
                  />
                  <button type="button" onClick={visiblePassword}>
                  {showPassword ? <svg className="border border-black rounded-md" xmlns="http://www.w3.org/2000/svg" width="2.1em" height="2.1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3.625c-4.187 0-5.945 3.766-5.945 3.844c0 .078 1.758 3.843 5.945 3.843s5.945-3.765 5.945-3.843c0-.078-1.758-3.844-5.945-3.844M2.169 5.813L.61 4.252m4.525-.354L4.5 1.843m7.331 3.97l1.559-1.56m-4.525-.355L9.5 1.843"/><path d="M5.306 7.081a1.738 1.738 0 1 0 3.388.776a1.738 1.738 0 1 0-3.388-.776"/></g></svg> : <svg className="border border-black rounded-md" xmlns="http://www.w3.org/2000/svg" width="2.1em" height="2.1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 104c-16.81 20.81-47.63 48-96 48s-79.19-27.19-96-48c16.81-20.81 47.63-48 96-48s79.19 27.19 96 48" opacity="0.2"/><path d="M228 175a8 8 0 0 1-10.92-3l-19-33.2A123.23 123.23 0 0 1 162 155.46l5.87 35.22a8 8 0 0 1-6.58 9.21a8.4 8.4 0 0 1-1.29.11a8 8 0 0 1-7.88-6.69l-5.77-34.58a133.06 133.06 0 0 1-36.68 0l-5.77 34.58A8 8 0 0 1 96 200a8.4 8.4 0 0 1-1.32-.11a8 8 0 0 1-6.58-9.21l5.9-35.22a123.23 123.23 0 0 1-36.06-16.69L39 172a8 8 0 1 1-13.94-8l20-35a153.47 153.47 0 0 1-19.3-20a8 8 0 1 1 12.46-10c16.6 20.54 45.64 45 89.78 45s73.18-24.49 89.78-45a8 8 0 1 1 12.44 10a153.47 153.47 0 0 1-19.3 20l20 35a8 8 0 0 1-2.92 11"/></g></svg>}
                  </button>
                  </div>
                  <div
                    className={`text-[red] text-xl backdrop-blur-md ${
                      errorMessage === "" ? `hidden` : `block`
                    }  `}
                  >
                    {errorMessage}
                  </div>
                  <button
                    type="submit"

                    className="border border-slate-800 rounded-lg font-bold text-slate-800 bg-transparent backdrop-blur-xl w-[20%] h-[35px]"
                  >

                    Submit
                  </button>
                  <div className="w-[90%] overflow-hidden md:w-[100%]  flex justify-center ">
                  <GoogleLogin
                 
                    onSuccess={(credentialResponse) => {
                        const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                        handleGoogleLogin(credentialResponseDecoded);
                      console.log(credentialResponseDecoded);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className=" w-[375px] md:w-[50%]  flex items-center justify-center  ">
              <div className="duration-300 ease-in-out  w-[275px] h-[400px] md:w-[60%] md:h-[90%] mx-10 rounded-lg shadow-[0_15px_30px_10px_rgba(0,0,0,0.6)] hover:backdrop-sepia  ">
                <form
                  onSubmit={handleSubmit}
                  className="rounded-lg md:py-6 flex flex-col w-[100%] h-[100%]  justify-center items-center gap-5 md:gap-12"
                  action=""
                >
                  <p className="md:text-4xl rounded-md md:w-[70%] text-center font-primary backdrop-blur-xl">
                    Create an Account
                  </p>
                  <input
                    onChange={handleSignChangeName}
                    value={signUser.name}
                    className="border border-slate-800 bg-transparent backdrop-blur-xl  md:text-xl md:font-semibold rounded-lg w-[70%] h-[35px] px-5 placeholder-slate-800"
                    placeholder="UserName"
                    required
                    type="text"
                  />
                  <input
                    onChange={handleSignChangeEmail}
                    value={signUser.email}
                    className="border border-slate-800 bg-transparent backdrop-blur-xl  md:text-xl md:font-semibold rounded-lg w-[70%] h-[35px] px-5 placeholder-slate-800"
                    placeholder="Email@gmail.com"
                    required
                    type="text"
                  />
                  <input
                    onChange={handleSignChangePassword}
                    value={signUser.password}
                    className="border border-slate-800 bg-transparent backdrop-blur-xl md:text-xl md:font-semibold rounded-lg w-[70%] h-[35px] px-5 placeholder-slate-800"
                    placeholder="SetPassword"
                    required
                    type="password"
                  />
                  <div
                    className={`text-[red] text-xl backdrop-blur-md ${
                      errorMessage === "" ? `hidden` : `block`
                    }  `}
                  >
                    {errorMessage}
                  </div>
                  <input
                    onChange={handleSignChangeConfirm}
                    value={signUser.confirm}
                    className="border border-slate-800 bg-transparent backdrop-blur-xl md:text-xl md:font-semibold rounded-lg w-[70%] h-[35px] px-5 placeholder-slate-800"
                    placeholder="Confirm"
                    required
                    type="password"
                  />
                  <button
                    type="submit"
                    className="border border-slate-800 rounded-lg font-bold text-slate-800 bg-transparent backdrop-blur-xl w-[20%] h-[35px]"
                  >
                    {" "}
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
