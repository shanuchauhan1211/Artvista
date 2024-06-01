import React from 'react';
import { useEffect } from 'react';
import Posts from '../pages/Posts';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function SideBar({setNavigate}){

    useEffect(() => {
        Aos.init({
          disable: "phone",
          duration: 900,
          easing: "ease-out-cubic",
        });
      }, []);
  
 function  handlenavigate(value){
    
        setNavigate(value);
    

 }
 
    return(
        <>
        <div className='w-[40%]  flex gap-8 h-[100%] items-center  ml-4 mr-0'>
            <div className='border-2 h-[90%] border-white'>
            </div>
            <div className='duration-300 rounded-2xl  hover:backdrop-blur-md  hover:border-2 flex flex-col text-2xl font-semibold text-white font-primary h-[85%] justify-around '>
                <li data-aos="fade-left" data-aos-delay="150" className='  hover:animate-bounce hover:text-black h-[15%]' onClick={()=>{handlenavigate("CP")}} >Create Post</li>
                <li data-aos="fade-left" data-aos-delay="250" className='  hover:animate-bounce hover:text-black h-[15%]' onClick={()=>{handlenavigate("PRO")} }>Profile</li>
                <li data-aos="fade-left" data-aos-delay="350" className='  hover:animate-bounce hover:text-black h-[15%]' onClick={()=>{handlenavigate("CHAT")}} >Chat</li>
                <li data-aos="fade-left" data-aos-delay="450" className='  hover:animate-bounce hover:text-black h-[15%]' onClick={()=>{handlenavigate("SET")}} >Setting</li>
            </div>
        </div>



      <div className='w-[85%]   flex items-center justify-center '>
        
         </div>  
         



        </>




    );
}