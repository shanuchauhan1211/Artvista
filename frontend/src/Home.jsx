import React from 'react';
import backimage from "./assets/background.png";
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Center from './pages/Center';
//import Texted from './components/Texted';


function Home() {


  return (
    <><div className='duration-500 bg-slate-700 h-screen  flex justify-center items-center bg-center saturate-50 ' style={{backgroundImage:`url(${backimage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      
      <div className=" duration-300  h-[85%] w-[95%]  shadow-[0_0_150px_50px_rgba(0,0,0,1)] bg-center hover:saturate-200 rounded-md" style={{backgroundImage:`url(${backimage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      <NavBar/>
      <Center />
        </div>
        </div>
       
    </>
  )
}

export default Home
