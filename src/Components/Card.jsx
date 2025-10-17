
 import React from "react";
 export default function Card(props) {
   return (
     <div className=" w-[280px] shrink-0 grow  mb-3">
       <div className=" group h-[182px] rounded-[15px] overflow-hidden relative">
         <img
           className=" group-hover:scale-110 duration-100  object-cover w-full h-full "
           src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.cloudinaryImageId}`}/>
         <div
           className=" image-overlay absolute w-full h-full top-0 flex items-end p-2  text-[16px] md:text-[20px] 
             font-bold text-white tracking-tighter">
           {props.offer}
         </div>
       </div>
          <div className="mt-3 text-md:text-xl font-bold flex ml-2 ">{props.name}</div>
          <div className="text-gray-600 mt-1 flex ml-2">
          {props.rating}
   
          <span className="ml-2 text-gray-800 flex "> {props.minTime}-{props.maxTime}  </span>
         </div>
         <div className=" text-gray-600 flex ml-2">{props.citogary}</div>
           <div className=" text-gray-600 flex ml-2">{props.place} </div>

     </div>
   );
 }

































