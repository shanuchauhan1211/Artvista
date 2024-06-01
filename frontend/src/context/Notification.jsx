import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Notification = createContext();

const NotificationProvider = ({ children }) => {
  const token_object = JSON.parse(localStorage.getItem("Token"));
  const [notifications, setNotifications] = useState([]);
  const [latestTime, setLatestTime] = useState(null);
  useEffect(() => {
    const timeInterval = setInterval(async () => {
      try {
        const response = await axios.get(
          `https://artvista-lovat.vercel.app/User/GetInvitations/${token_object.id}`
        );
        console.log(response.data);
        // // console.log(response.data.length);
        // if (response.data.length > 0) {
        //   const newNotifications = response.data.filter((notifications) => {
        //     // console.log(notifications.time);
        //     const currentTime = new Date();
        //     const bookingTime = new Date(notifications.time);
        //     const difference = currentTime.getTime() - bookingTime.getTime();
        //     // console.log(difference);
        //     // const formattedDateTime = new Intl.DateTimeFormat('en-US', {
        //     //   month: 'long',
        //     //   day: 'numeric',
        //     //   year: 'numeric',
        //     //   hour: 'numeric',
        //     //   minute: 'numeric',
        //     //   hour12: true,
        //     // }).format(bookingTime);
        //     return notifications.time > latestTime;
        //   });

        //   console.log(newNotifications);
        //   if (newNotifications.length > 0) {
        //     toast.success("Received a new friend request");
        //   }
        //   setNotifications(...notifications, ...newNotifications);
        // }
        // const MaxTime = Math.max(
        //   ...response?.data.map((notifications) => notifications.time)
        // );
        // const maxTime = response.data.reduce((max,notifications)=>{
        //   return notifications.time > max.time ? notifications : max;
        // },response.data[0]);
        // console.log(maxTime);
        //  setLatestTime(MaxTime);
      } catch (error) {
        console.log("Error Fetching Data", error);
      }
    }, 3000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <Notification.Provider value={{ notifications }}>
      {children}
    </Notification.Provider>
  );
};

export { NotificationProvider, Notification };
