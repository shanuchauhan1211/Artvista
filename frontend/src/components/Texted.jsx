import React from 'react';
import { ReactTyped } from "react-typed";

export default function Texted(){
    return(
        <div className='flex w-[100%]  h-[90%] px-5 md:px-10 '>

<div className='flex flex-col text-white text-xl font-primary h-[30%] font-medium relative top-5 md:top-60 px-0 md:px-10 gap-5 md:gap-10'>
    <p className='md:text-4xl'>CREATIVE</p>

 <ReactTyped className='md:text-5xl font-primary'
      strings={[
        'Front End Developer...',' Full Stack Developer...','Sketch Artist'
      ]}
      typeSpeed={50}
      backSpeed={60}
      
      loop
    ></ReactTyped>

 </div>
<div></div>



        </div>




    );
}