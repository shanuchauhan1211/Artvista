import React,{useContext} from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { AuthContext } from '../context/AuthContext';


export default function NavBar() {
  const {logout}=useContext(AuthContext)
  const [toggle, setToggle] = useState(false);
 const [name , setName] = useState("");
 useEffect(()=>{
  
  const token_object = JSON.parse(localStorage.getItem('Token'));
 // console.log(token_object.name);
  if(token_object){
  setName(token_object.name);
  }

  else{
    setName("kenzen.gall")
  }

    }
,[]);



  function buttn() {
    setToggle(!toggle);
  }

  const navigate = useNavigate();

  function handleLogOut(){
    localStorage.removeItem("Token");
    logout();
    alert("user is Logged out");
    navigate("/Login");
  }

  return (
    <>
      <div className="px-4">
        <div className="flex py-3 px-0 md:px-3 justify-between  text-sm md:text-2xl text-white md:font-semibold  font-primary ">
          <div className="">{name}</div>
          <div className="">
            <div>
              <ul className=" hidden md:flex gap-2 md:gap-8">
                <Link to="/">
                  {" "}
                  <li className="relative hover:bottom-1.5 hover:text-black">
                    Art Work
                  </li>
                </Link>
                <Link to="/AddFriends">
                  {" "}
                  <li className="relative hover:bottom-1.5 hover:text-black">
                    Add Friends
                  </li>
                </Link>
                <Link to="/Contact">
                  {" "}
                  <li className="relative hover:bottom-1.5   hover:text-black ">
                    Contact
                  </li>
                </Link>
                <li><button onClick={handleLogOut}>Log Out</button></li>
              </ul>
            </div>

            <div>
              <ul
                className={`w-[95%] mx-auto fixed bottom-[100px] duration-300 backdrop-blur-sm rounded-sm shadow-[0_15px_30px_10px_rgba(0,0,0,0.6)] border z-20 flex flex-col md:hidden gap-4 md:gap-8 text-black  h-[300px] px-3   ${
                  toggle ? "left-[10px]" : "left-[-110%]"
                } `}
              >
                <Link to="/">
                  {" "}
                  <li className=" hover:text-white ">Art Work</li>
                </Link>
                <Link to="/">
                  {" "}
                  <li className=" hover:text-white">About</li>
                </Link>
                <Link to="/Contact">
                  {" "}
                  <li className=" hover:text-white ">Contact</li>
                </Link>
              </ul>
            </div>

            {toggle ? (
              <AiOutlineClose
                onClick={buttn}
                className="text-2xl shadow-lg rounded  md:hidden block hover:text-black"
              />
            ) : (
              <AiOutlineMenu
                onClick={buttn}
                className="text-2xl shadow-lg rounded  md:hidden block hover:text-black"
              />
            )}
          </div>
        </div>

        <hr />
      </div>
    </>
  );
}
