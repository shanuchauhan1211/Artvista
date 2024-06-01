import React, { useContext, useEffect } from "react";
import backimage from "../assets/background.png";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useState } from "react";
import { Notification } from "../context/Notification";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddFriends() {
  const [data, setData] = useState([]);
  const [changeItems, setChangeItems] = useState("AddFriend");
  const { notifications } = useContext(Notification);
  const currentUser = JSON.parse(localStorage.getItem("Token"));
  console.log(currentUser.id);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get("https://artvista-lovat.vercel.app/User/getAllUser");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddFriends = async (friendId) => {
    const sure = confirm("Are you Sure you want to send Request?");
    console.log(sure);
    if (sure) {
      try {
        const response = await axios.post(
          `https://artvista-lovat.vercel.app/User/Pending/${currentUser.id}`,
          {
            pending: friendId,
          }
        );
        console.log(response);
        toast.success("sucesssfull");
      } catch (error) {
        console.error("Error updating data:", error);
        console.log(error);
      }

      try {
        const response = await axios.post(
          `https://artvista-lovat.vercel.app/User/Inviation/${friendId}`,
          {
            invitation: currentUser.id,
          }
        );
        console.log(response);
      } catch (error) {
        console.error("Error updating invitation", error);
        console.log(error);
      }
    }
  };

  function handleSwitchinPage(val) {
    setChangeItems(val);
  }

  return (
    <>
      <div
        className="duration-500 bg-slate-700 h-screen  flex justify-center items-center bg-center saturate-50 "
        style={{
          backgroundImage: `url(${backimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <ToastContainer
          position="top-left"
          autoClose={6000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Flip
        />
        <div
          className=" duration-300  h-[85%] w-[95%]  shadow-[0_0_150px_50px_rgba(0,0,0,1)] bg-center hover:saturate-200 rounded-md"
          style={{
            backgroundImage: `url(${backimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <NavBar />

          <div className="duration-500 flex flex-col-reverse md:flex-row items-center  justify-center  md:justify-around  w-full h-[91%]">
            <div className="duration-500 w-[80%] h-[6%]   md:h-[50%] md:w-[6%] flex flex-col-reverse  md:flex-row md:gap-4">
              <div className=" border border-black "></div>
              <ul className="text-black text-4xl font-primary flex flex-row  md:flex-col justify-center gap-10 list-none">
                <li
                  className={`${
                    changeItems === "AddFriend" ? "text-red-600" : "text-black"
                  } cursor-pointer`}
                  onClick={() => {
                    handleSwitchinPage("AddFriend");
                  }}
                >
                  Add New Friends
                </li>
                <li
                  className={`${
                    changeItems === "CurrentFriends"
                      ? "text-red-600"
                      : "text-black"
                  } cursor-pointer`}
                  onClick={() => {
                    handleSwitchinPage("CurrentFriends");
                  }}
                >
                  Friends
                </li>
              </ul>
            </div>

            <div className=" w-full h-[91%] flex items-center justify-center bg-black md:w-[55%] ">
              {changeItems === "AddFriend" ? (
                <div className="duration-300 ease-in-out w-full h-[90%]  bg-white text-center md:w-full md:h-[85%] mx-10 rounded-lg shadow-[0_15px_30px_10px_rgba(0,0,0,0.6)] hover:backdrop-sepia  ">
                  <p className="text-4xl mt-2 font-normal font-primary mb-4">
                    Suggestions
                  </p>

                  {data.length === 0 ? (
                    <div>No suggestions</div>
                  ) : (
                    <div className="py-5 px-5  w-full h-[90%] bg-slate-600 overflow-y-scroll">
                      {data
                        .filter((item) => {
                          return item._id != currentUser.id;
                        })
                        .map((users, index) => {
                          return (
                            <div
                              key={index}
                              className="flex bg-black h-[25%] px-5 justify-between items-center hover:bg-slate-600  text-white font-normal font-primary text-3xl"
                            >
                              <div className="flex h-[90%] w-[80%] gap-6 items-center">
                                <img
                                  className="bg-white h-[90%] w-[15%]  mx-3 text-white rounded-3xl"
                                  alt="Img"
                                />
                                <p className="">{users.name}</p>
                              </div>
                              <button
                                className=""
                                onClick={() => {
                                  handleAddFriends(users._id);
                                }}
                              >
                                Add
                              </button>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white"> </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
