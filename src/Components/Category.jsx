import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
const Category = () => {
  const [slide, setSlide] = useState(0);
  const [categories, setCategory] = useState([]);
  const fetchCategories = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data = await response.json();
    setCategory(data.categories);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const nextSlide = () => {
    if (categories.length - 6 === slide) return false;
    setSlide(slide + 2);
  };
  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 2);
  };
  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-bold mt-3">What's on your mind?</div>
        <div className="flex">
          <div 
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" 
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div 
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" 
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
   
      <div className="flex overflow-hidden">
        {categories.map((cat, index) => {
          return (
            <div 
              style={{
                transform: `translateX(${-slide * 100}%)`
              }} 
              key={index} 
              className="w-[200px] shrink-0 duration-500 p-2"
            >
              <img 
                src={cat.strCategoryThumb}  
                alt={cat.strCategory}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center mt-2 font-semibold text-gray-700">
                {cat.strCategory}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-8 border-[2px]" />
    </div>
  );
};
export default Category;





















// import React, { useEffect, useState } from "react";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

// const Category = () => {

//   const [slide,setSlide]=useState(0);


//   const [categories, setCategory] = useState([]);

//   const fetchCategories = async () => {
//     const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
//     const data = await response.json();
//     setCategory(data.categories);
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const nextSlide =()=>{
//     console.log(categories.length)
//     if(categories.length -6 == slide) return false
//     setSlide(slide + 2);
//     } 
//     const prevtSlide=()=>{
//       if(slide == 0) return false
//     setSlide(slide - 2);
//     }

//   return (
//     <div className="max-w-[1200px] mx-auto ">
//       <div className="flex items-center justify-between">
//         <div className=" text-[25px] font-bold ">What's on your mind?</div>
//         <div className="flex">
//           <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" onClick={prevtSlide}>
//             <FaArrowLeft />
//           </div>
//           <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" onClick={nextSlide}>
//             <FaArrowRight />
//           </div>
//         </div>
//       </div>
//       <div className="flex overflow-hidden ">
//         {categories.map(
//           (cat, index) => {
//           return (
//             <div 
//             style={{
//               transform:`translateX(${-slide * 100}%)`
//             }} key={index} className=" w-[200px] shrink-0 duration-500 " >
//               <img src={cat.strCategoryThumb }  alt={cat.strCategory} />
//             </div>
//           );
//         })}
//       </div>
//       <hr className=" my-8 border-[2px] "/>
//     </div>
//   );
// };

// export default Category;
















































