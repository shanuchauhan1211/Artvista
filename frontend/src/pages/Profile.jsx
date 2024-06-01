import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';



export default function Profile({setNavigate}){





    return(

<>
<div className=' h-full w-[60%] overflow-y-scroll  rounded-lg shadow-[0_15px_30px_10px_rgba(0,0,0,0.6) text-center p-3'>

  
   <PostCard setNavigate={setNavigate}/>
 
    
</div>

</>


        
    );
}