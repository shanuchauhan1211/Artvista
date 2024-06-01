import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Login from "./pages/Login";
import SideBar from "./components/SideBar";
import Profile from "./pages/Profile";
import { AuthContext } from "./context/AuthContext";
import AddFriends from "./pages/AddFriends";
function App() {
  const { isLoggedIn } = useContext(AuthContext);
  // console.log(data)

  return (
    <>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home />}>
              {" "}
            </Route>
            <Route exact path="/Contact" element={<Contact />}>
              {" "}
            </Route>
            <Route exact path="/SideBar" element={<SideBar />}></Route>
            <Route exact path="/Profile" element={<Profile />}></Route>
            <Route exact path="/AddFriends" element={<AddFriends/>}></Route>
          </>
        ) : (
          <>
            <Route exact path="/*" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
