import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Posts() {
  let initial = {
    title: "",
    description: "",
  };

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);


//const navigate = useNavigate();
  useEffect(()=>{handleUpload;},[]);
  const [acc, setAcc] = useState(initial);
  //const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
   const token_object = JSON.parse(localStorage.getItem('Token'));
 let accountId = token_object.id;
 

//   const handleSelectedFile = (event) => {

//     var reader = new FileReader();
//     reader.readAsDataURL(event.target.files[0]);
//     reader.onload=()=>{
//       console.log(reader.result);
//       setSelectedFile(JSON.stringify(reader.result));
      
      
//     }
//     reader.error=(error)=>{
// console.log("Error :", error);
//     }

   
//   };

const handleSelectedFile = (event) => {
//console.log(event.target.files[0]);
setSelectedFile(event.target.files[0]);

};



  const onchange = (event) => {
    setAcc({ ...acc, [event.target.name]: event.target.value });
  };


const handleUpload = async(event)=>{ 
 event.preventDefault();

 const formData = new FormData();
 
 formData.append('title', acc.title);
 formData.append('description',acc.description);
 formData.append('image', selectedFile);
 formData.append('accountId', accountId);


try {
  
  const response = await axios.post("https://artvista-lovat.vercel.app/Post/createPost", formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }});
  if(response.status === 200)
  {
    console.log(response);
    setSelectedFile(null);
    setAcc({title:"" , description:""});
  //  navigate("/");
  }
  
} catch (error) {
  console.log(error);
  
}

}


  return (
    <>
        <div className='w-[275px] h-[400px] md:w-[60%] md:h-[90%] mx-10 rounded-lg shadow-[0_15px_30px_10px_rgba(0,0,0,0.6)] mt-5'>
          <form data-aos="fade-up" className='rounded-lg flex flex-col w-[100%] h-[97%]  justify-center items-center gap-5 md:gap-8'>
            <p className='text-4xl font-semibold font-primary  '>Create New Post </p>
            <div className='flex flex-col text-2xl font-semibold  w-[70%]'>
              <label>Title</label>
              <input
                onChange={onchange}
                value={acc.title || ""}
                name='title'
                id='title'
                className='border border-slate-800 bg-transparent backdrop-blur-xl  md:text-xl md:font-semibold rounded-lg w-[70%] h-[35px] px-5 placeholder-slate-800'
                type='text'
                placeholder='Enter Title'
              ></input>
            </div>
            <div className='flex flex-col text-2xl font-semibold  w-[70%]'>
              <label>Description</label>
              <input
                onChange={onchange}
                value={acc.description || ""}
                name='description'
                id='description'
                className='border border-slate-800 bg-transparent backdrop-blur-xl  md:text-xl md:font-semibold rounded-lg w-[70%] h-[35px] px-5 placeholder-slate-800'
                type='text'
                placeholder='Enter Description'
              ></input>
            </div>
            <div className='flex flex-col text-xl font-semibold  w-[70%]'>
              <label>Select Pic</label>
              <input onChange={handleSelectedFile} type='file' id='image' />
            </div>
            <button className='rounded-lg text-2xl w-[13%] h-[8%] font-semibold  backdrop-blur-md' onClick={handleUpload}>
              Upload
            </button>
          </form>
        </div>
      
    </>
  );
}








// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import axios from 'axios';

// export default function Posts() {
//   let initial = {
//     title: "",
//     description: "",
//   };

//   const [acc, setAcc] = useState(initial);
//   const [data, setData] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const token_object = JSON.parse(localStorage.getItem('Token'));

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`https://localhost:5000/Post/showPost/${token_object.id}`);
//       setData(response.data);
//     } catch (error) {
//       console.error("error fetching data", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [token_object.id]);

//   const handleSelectedFile = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const onchange = (event) => {
//     setAcc({ ...acc, [event.target.name]: event.target.value });
//   };

//   const handleUpload = async () => {
//     try {
//       const fileReader = new FileReader();
//       fileReader.onloadend = async () => {
//         const base64Data = fileReader.result.split(",")[1];
//         await axios.post("http://localhost:5000/Post/createPost", {
//           title: acc.title,
//           description: acc.description,
//           data: base64Data,
//         });
//         fetchData(); // Fetch data again after successful upload
//       };
//       fileReader.readAsDataURL(selectedFile);
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   return (
//     <>
//       {data.length ? (
//         <div className=''>
//           {data.map((items, i) => (
//             <div key={i}>
//               <p>{items.title}</p>
//               <img src={`data:image/jpeg;base64,${items.data.toString("base64")}`} alt="Post" />
//               <p>{items.description}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className='w-[275px] h-[400px] md:w-[60%] md:h-[90%] mx-10 rounded-lg shadow-[0_15px_30px_10px_rgba(0,0,0,0.6)]'>
//           <form className='rounded-lg flex flex-col w-[100%] h-[100%]  justify-center items-center gap-5 md:gap-12'>
//             <p className='text-4xl font-semibold font-primary '>Create New Post </p>
//             <div className='flex flex-col text-2xl font-semibold  w-[70%]'>
//               <label>Title</label>
//               <input
//                 onChange={onchange}
//                 value={acc.title || ""}
//                 name='title'
//                 className='border border-slate-800 bg-transparent backdrop-blur-xl  md:text-xl md:font-semibold rounded-lg w-[70%] h-[35px] px-5 placeholder-slate-800'
//                 type='text'
//                 placeholder='Enter Title'
//               ></input>
//             </div>
//             <div className='flex flex-col text-2xl font-semibold  w-[70%]'>
//               <label>Description</label>
//               <input
//                 onChange={onchange}
//                 value={acc.description || ""}
//                 name='description'
//                 className='border border-slate-800 bg-transparent backdrop-blur-xl  md:text-xl md:font-semibold rounded-lg w-[70%] h-[35px] px-5 placeholder-slate-800'
//                 type='text'
//                 placeholder='Enter Description'
//               ></input>
//             </div>
//             <div className='flex flex-col text-xl font-semibold  w-[70%]'>
//               <label>Select Pic</label>
//               <input onChange={handleSelectedFile} type='file' />
//             </div>
//             <button className='rounded-lg text-2xl w-[13%] h-[10%] font-semibold  backdrop-blur-md' onClick={handleUpload}>
//               Upload
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// }