import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { ReactTyped } from 'react-typed';


export  default function PostCard({setNavigate}){
  const [isLoading, setIsLoading] = useState(true);
    const token_object = JSON.parse(localStorage.getItem('Token'));
    let accountId = token_object.id;

const [data,setData] = useState(['']);
useEffect(()=>{
 setTimeout(()=>{fetchDatas()} ,10000);
},[]);

useEffect(() => {
  Aos.init({
    disable: "phone",
    duration: 900,
    easing: "ease-out-cubic",
  });
}, []);


    const fetchDatas = async () => {
        try {
          setIsLoading(false);
          const response = await axios.get(`http://localhost:5000/Post/showPost/${accountId}`);
          setData(response.data);
          console.log(response);
      
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      const removeData = async(id)=>{
        

        var confirmDelete = window.confirm("Are you sure you wanna delete this post ?");
        if(confirmDelete){
         try {
          await axios.delete(`http://localhost:5000/Post/PostDelete/${id}`);
          alert("Post Deleted Successfully");
          window. location. reload();
          
        } catch (error) {
          console.error("Error Removing Data",error);
          alert("Failed to delete Post");
        }
      }
    };
    



    return(

        <>
      <div className='grid grid-cols-1 gap-16 '>  
    { (data.length === 0 ) ?
       <div className='flex flex-col  w-[100%] h-[400px] justify-center gap-20  rounded-lg shadow-[0_15px_25px_5px_rgba(0,0,0,0.6)] backdrop-blur-lg text-xl '>
        <p>NO Post Yet</p>
        <button onClick={()=>{setNavigate("CP");}} className='flex flex-col gap-10 items-center justify-center text-slate-800'><svg  className='duration-300   hover:scale-150' xmlns="http://www.w3.org/2000/svg" width="5.5em" height="5.5em" viewBox="0 0 28 28"><path fill="currentColor" d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2m0 6a.75.75 0 0 0-.743.648l-.007.102v4.5h-4.5a.75.75 0 0 0-.102 1.493l.102.007h4.5v4.5a.75.75 0 0 0 1.493.102l.007-.102v-4.5h4.5a.75.75 0 0 0 .102-1.493l-.102-.007h-4.5v-4.5A.75.75 0 0 0 14 8"/></svg> <p className='font-bold text-2xl'>Create Post </p></button>

       </div>

       :


       isLoading ? <div className='flex  items-center w-[100%] h-[400px] justify-center   rounded-lg shadow-[0_15px_25px_5px_rgba(0,0,0,0.6)] backdrop-blur-lg text-3xl ' >
         {
          <ReactTyped
          strings={[
            "Loading.....",
            "Please Wait !",
            
          ]}
          typeSpeed={100}
          backSpeed={50}
          
          loop
        >
        
        </ReactTyped>



       }  </div>
       
       
       :

       data.map((items,i)=>{ console.log(items.image)
     return(<div key={i} className='flex flex-col  w-[100%] h-[500px]  rounded-lg shadow-[0_15px_25px_5px_rgba(0,0,0,0.6)] backdrop-blur-lg '>
      <img  src={`../src/assets/${items.image}`} className='object-contain rounded-lg h-[60%] bg-white'></img>
      <h2 className='h-[10%]' >{items.title}</h2>
      <p  className='h-[20%]' >{items.description}</p>
      <div  className='flex justify-around h-[10%]'><p>{items.date}</p> <button onClick={()=>{removeData(items._id)}}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26"><path fill="currentColor" d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1zm2 2v12h2V10zm4 0v12h2V10zm4 0v12h2V10z"/></svg></button> </div>
  </div>
     );

    })  
}
    </div>
        </>
    );
}