import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

export default function TopRest() {
  const [data, setData] = useState([]);

  useEffect(() => {


    const dummyData = [
      {
        info: {
          offer:"50% off up to ₹199",  
          id: "1",
          name: "Burger King",
          cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          avgRating: 4.2,
          cuisines: ["Burgers", "American"],
          costForTwo: "₹350 for two",
          minTime:30,
          maxTime:"60 mins",
          place:"Bihar Nalanda",
          rating:"⭐️4.1",
          citogary:"Burger"


        }
      },
      {
        info: {
          offer:"Items at ₹179",
          id: "2",
          name: "Pizza Hut",
          cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
          avgRating: 4.0, 
          cuisines: ["Pizzas", "Italian"],
          costForTwo: "₹400 for two",
          minTime:30,
          maxTime:"60 mins",
          place:"Bihar jamui",
          rating:"⭐️4.1",
          citogary:"Pizza"


        }
      },
      {
        info: {
          id: "3",
          offer:"30% off up to ₹199",  
          name: "KFC",
          cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
          avgRating: 4.3,
          cuisines: ["Fast Food", "American"],
          costForTwo: "₹450 for two",
           minTime:30,
          maxTime:"60 mins",
          place:"Bihar Samastipur",
          rating:"⭐️4.1",
          citogary:"Chicken"

        }
      },
      {
        info: {
          id: "4", 
          offer:"70% off up to ₹199",  

          name: "McDonald's",
          cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
          avgRating: 4.1,
          cuisines: ["Burgers", "Fast Food"],
          costForTwo: "₹300 for two",
           minTime:30,
          maxTime:"60 mins",
          place:"Bihar Patna",
          rating:"⭐️4.1",
          citogary:""

        }
      },
        {
        info: {
          id: "4", 
          offer:"70% off up to ₹199",  

          name: "McDonald's",
          cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
          avgRating: 4.1,
          cuisines: ["Burgers", "Fast Food"],
          costForTwo: "₹300 for two", 
          minTime:30,
          maxTime:"60 mins",
          place:"Bihar",
          rating:"⭐️4.1",
          citogary:""
        }
      },
        {
    info: {
      id: "6",
      name: "Subway",
      cloudinaryImageId: "1ace5fa28eff3e122a1c6721327722d8",
      avgRating: 4.0,
      cuisines: ["Sandwiches", "Healthy Food"],
      costForTwo: "₹250 for two",
      minTime: 20,
      maxTime: "40 mins",
      place: "Bihar Muzaffarpur",
      rating: "⭐4.0",
      citogary: "Sandwiches"
    }
  },
    ];
    
    setData(dummyData);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-2 ">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-bold mb-2">
          Top restaurant chains in bihar
        </div>
        <div className="flex">
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-hidden">
        {data.map((d, i) => (
           <Card width = "w-full md:w-[173]" {...d.info} key={d.info.id} /> 
        ))}
      </div>
            <hr className="my-5 border-[2px]" />
    </div>
  );
}



























