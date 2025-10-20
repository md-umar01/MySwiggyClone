import React, { useEffect, useReducer, useRef, useState } from "react";
import Card from "./Card";
const OnlineDelivery = () => {
  const [data, setData] = useState([]);

  const componentRef=useRef(null);
  const[isAtTop,setIsAtTop]=useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const react=componentRef.current.getBoundingClientRect();
        setIsAtTop(react.top<=0)
  }
};
window.addEventListener('scroll',handleScroll)
return()=>{
  window.removeEventListener('scroll',handleScroll)
};
    }, []);

  useEffect(() => {
    const dummyData = [
  {
    info: {
      offer: "50% off up to ₹199",  
      id: "1",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      avgRating: 4.2,
      cuisines: ["Burgers", "American"],
      costForTwo: "₹350 for two",
      minTime: 30,
      maxTime: "60 mins",
      place: "Bihar Nalanda",
      rating: "⭐4.1",
      citogary: "Burger"
    }
  },
  {
    info: {
      offer: "Items at ₹179",
      id: "2",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      avgRating: 4.0, 
      cuisines: ["Pizzas", "Italian"],
      costForTwo: "₹400 for two",
      minTime: 30,
      maxTime: "60 mins",
      place: "Bihar jamui",
      rating: "⭐4.1",
      citogary: "Pizza"
    }
  },
  {
    info: {
      id: "3",
      offer: "30% off up to ₹199",  
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      avgRating: 4.3,
      cuisines: ["Fast Food", "American"],
      costForTwo: "₹450 for two",
      minTime: 30,
      maxTime: "60 mins",
      place: "Bihar Samastipur",
      rating: "⭐4.1",
      citogary: "Chicken"
    }
  },
  {
    info: {
      id: "4", 
      offer: "70% off up to ₹199",  
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      avgRating: 4.1,
      cuisines: ["Burgers", "Fast Food"],
      costForTwo: "₹300 for two",
      minTime: 30,
      maxTime: "60 mins",
      place: "Bihar Patna",
      rating: "⭐4.1",
      citogary: "Fast Food"
    }
  },
  {
    info: {
      id: "5",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      avgRating: 4.1,
      cuisines: ["Pizzas", "Fast Food"],
      costForTwo: "₹500 for two",
      minTime: 25,
      maxTime: "45 mins", 
      place: "Bihar Gaya",
      rating: "✪ 4.2",
      citogary: "Pizza"
    }
  },
   {
    info: {
      offer: "50% off up to ₹199",  
      id: "1",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      avgRating: 4.2,
      cuisines: ["Burgers", "American"],
      costForTwo: "₹350 for two",
      minTime: 30,
      maxTime: "60 mins",
      place: "Bihar Nalanda",
      rating: "⭐4.1",
      citogary: "Burger"
    }
  },
  {
    info: {
      offer: "Items at ₹179",
      id: "2",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      avgRating: 4.0, 
      cuisines: ["Pizzas", "Italian"],
      costForTwo: "₹400 for two",
      minTime: 30,
      maxTime: "60 mins",
      place: "Bihar jamui",
      rating: "⭐4.1",
      citogary: "Pizza"
    }
  }
 

];

    setData(dummyData);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-2 " ref={componentRef}>
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-bold mb-2">
          Restaurants with online food delivery in Bihar 
        </div>
      </div>
        <div className={isAtTop ? 'fixed top-0 z-[9999] bg-white w-full left-0 ': ''}>
          <div className=" max-w-[1200px] mx-auto flex justify-between my-4 gap-3 rounded-xl p-3 overflow-x-auto ">
            <div className="p-3 rounded-md shadow">Filter</div>
            <div className="p-3 rounded-md shadow">Sort By</div>
            <div className="p-3 rounded-md shadow">Fast Delivery</div>
            <div className="p-3 rounded-md shadow">New on Swiggy</div>
            <div className="p-3 rounded-md shadow">Ratings 4.0+</div>
            <div className="p-3 rounded-md shadow">Rs.300-Rs 600</div>
            <div className="p-3 rounded-md shadow">Less than Rs.300</div>

          </div>
        </div>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 ">
      {
        data.map((d,i)=>{
            return <Card  {...d.info} key={d.info.id} />
        })
      }
      </div>
    </div>
  );
};

export default OnlineDelivery;
