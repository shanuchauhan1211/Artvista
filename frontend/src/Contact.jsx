import React from 'react';
import backimage from "./assets/background.png";
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";




function Contact() {
  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);


  return (
    <><div className='duration-500 bg-slate-700 h-screen  flex justify-center items-center bg-center saturate-50 ' style={{backgroundImage:`url(${backimage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      
      <div className=" duration-300  h-[85%] w-[95%]  shadow-[0_0_150px_50px_rgba(0,0,0,1)] bg-center hover:saturate-200 rounded-md" style={{backgroundImage:`url(${backimage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      <NavBar/>
      <div className='flex flex-col-reverse md:flex-row h-[90%] gap-10  md:justify-between'>
        <div className=' md:flex items-center ml-5 w-[90%] h-[100px] md:h-[100%] md:w-[10%]  '>
            <div className='border border-black  md:h-[90%] '></div>
            <div className='flex justify-around md:mr-20 items-center md:flex-col text-black  h-[90%] w-[100%] list-none'>
                <a data-aos="fade-left" href="https://www.instagram.com/kenzen.gall"><li><svg className='hover:text-[#fd889c] hover:shadow-[0_10px_10px_-5px_rgba(0,0,0,0.6)] hover:animate-bounce md:w-[40px] md:h-[40px]' xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"/></svg></li></a>
                <a data-aos="fade-left" data-aos-delay="100" href=""><li ><svg className='hover:animate-bounce hover:text-[#86b8f8] hover:shadow-[0_10px_10px_-10px_rgba(0,0,0,0.6)] md:w-[50px] md:h-[50px]' xmlns="http://www.w3.org/2000/svg" width="30px" height="28px" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM8 10a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m3-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.66c.305-.344.82-.748 1.393-.993c.333-.142.834-.2 1.182-.09a.55.55 0 0 1 .293.188c.052.07.132.226.132.555v4a1 1 0 0 0 2 0v-4c0-.67-.17-1.266-.524-1.744a2.54 2.54 0 0 0-1.301-.907c-.902-.283-1.901-.126-2.568.16a5.82 5.82 0 0 0-.623.312A1 1 0 0 0 11 9M8 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></g></svg></li></a>
                <a data-aos="fade-left" data-aos-delay="200" href=""><li><svg className='hover:animate-bounce hover:text-black hover:shadow-[0_10px_10px_-7px_rgba(0,0,0,0.6)] md:w-[50px] md:h-[50px]' xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1536 1792"><path fill="currentColor" d="M971 1244v211q0 67-39 67q-23 0-45-22v-301q22-22 45-22q39 0 39 67m338 1v46h-90v-46q0-68 45-68t45 68m-966-218h107v-94H138v94h105v569h100zm288 569h89v-494h-89v378q-30 42-57 42q-18 0-21-21q-1-3-1-35v-364h-89v391q0 49 8 73q12 37 58 37q48 0 102-61zm429-148v-197q0-73-9-99q-17-56-71-56q-50 0-93 54V933h-89v663h89v-48q45 55 93 55q54 0 71-55q9-27 9-100m338-10v-13h-91q0 51-2 61q-7 36-40 36q-46 0-46-69v-87h179v-103q0-79-27-116q-39-51-106-51q-68 0-107 51q-28 37-28 116v173q0 79 29 116q39 51 108 51q72 0 108-53q18-27 21-54q2-9 2-58M790 525V315q0-69-43-69t-43 69v210q0 70 43 70t43-70m719 751q0 234-26 350q-14 59-58 99t-102 46q-184 21-555 21t-555-21q-58-6-102.5-46T53 1626q-26-112-26-350q0-234 26-350q14-59 58-99t103-47q183-20 554-20t555 20q58 7 102.5 47t57.5 99q26 112 26 350M511 0h102L492 399v271H392V399q-14-74-61-212Q294 84 266 0h106l71 263zm370 333v175q0 81-28 118q-38 51-106 51q-67 0-105-51q-28-38-28-118V333q0-80 28-117q38-51 105-51q68 0 106 51q28 37 28 117m335-162v499h-91v-55q-53 62-103 62q-46 0-59-37q-8-24-8-75V171h91v367q0 33 1 35q3 22 21 22q27 0 57-43V171z"/></svg></li></a>
                <a data-aos="fade-left" data-aos-delay="300" href=''><li><svg className='hover:animate-bounce hover:text-[#3f57a3] hover:shadow-[0_10px_10px_-10px_rgba(0,0,0,0.6)] md:w-[50px] md:h-[50px]' xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg></li></a>


            </div>
        </div>
        <div  className=' w-[375px] md:w-[50%] flex items-center justify-center  '>
            <div className='duration-300 ease-in-out  w-[275px] h-[400px] md:w-[60%] md:h-[90%] mx-10 rounded-lg shadow-[0_15px_30px_10px_rgba(0,0,0,0.6)] hover:backdrop-sepia  '>
                <form  className='rounded-lg flex flex-col w-[100%] h-[100%]  justify-center items-center gap-5 md:gap-12' action="">
                    <input data-aos="fade-up"  className='border border-slate-800 bg-transparent backdrop-blur-xl  md:text-xl md:font-semibold rounded-lg w-[70%] h-[35px] px-5 placeholder-slate-800' placeholder='FullName'  required type="text" />
                    <input data-aos="fade-up" data-aos-delay="100" className='border border-slate-800 bg-transparent backdrop-blur-xl md:text-xl md:font-semibold rounded-lg w-[70%] h-[35px] px-5 placeholder-slate-800' placeholder='Email@gmail.com' required type="text" />
                    <input data-aos="fade-up" data-aos-delay="200" className='border border-slate-800 bg-transparent backdrop-blur-xl md:text-xl md:font-semibold rounded-lg w-[70%]  h-[35px] px-5 placeholder-slate-800' placeholder='Phone Number' required type="text" />
                    <textarea data-aos="fade-up" data-aos-delay="300" cols={20} rows={5} className='border border-slate-800 bg-transparent md:text-xl md:font-semibold backdrop-blur-xl rounded-lg w-[70%] px-5 py-1 placeholder-slate-800' placeholder='Enter the Message'></textarea>
                    <button data-aos="fade-up" data-aos-delay="400" type='submit' className='border border-slate-800 rounded-lg font-semibold text-slate-800 bg-transparent backdrop-blur-xl w-[20%] h-[35px]'> Submit</button>
                </form>

            </div>
        </div>
      </div>
      
        </div>
        </div>
       
    </>
  )
}

export default Contact
