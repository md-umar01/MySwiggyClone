import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: ""
  });

  const shoSideMenu = () => {
    setToggle(true);
  };

  function hideSideMenu() {
    setToggle(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    

    alert("Form submitted successfully!");
    setToggle(false);
    setFormData({ name: "", email: "", phone: "", address: "", city: "" });
  };

  const links = [
    { name: "Search", icon: <IoIosSearch /> },
    { name: "Offer", sup: "new", icon: <CiDiscount1 /> },
    { name: "Help", icon: <IoHelpBuoyOutline /> },
    { name: "Sign in", icon: <GrUserManager /> },
    { name: "Cart", icon: <FiShoppingCart /> },
  ];

  return (
    <>
      
      <div
        className="black-overlay w-full h-full fixed duration-500 bg-black bg-opacity-50"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex: toggle ? 9998 : -80,
        }}
      ></div>

  
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90vw] max-w-[400px] bg-white h-full absolute duration-[400ms] shadow-2xl overflow-y-auto z-[9999]"
        style={{ left: toggle ? "0%" : "-100%" }}
      >
        

        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Delivery Details</h2>
          <button 
            onClick={hideSideMenu}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <IoClose size={24} />
          </button>
        </div>

      
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your full name"
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your phone number"
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Address *
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your complete address"
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your city"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors mt-4"
          >
          
          </button>

        
          <button
            type="button"
            onClick={hideSideMenu}
            className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
          
          </button>
        </form>
      </div>

      
      <header className="p-[15px] shadow-xl text-[#685b78] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7e9-ELr0kloaNftORz8hFMLKgQh1t74a_w&s" className="w-full" />
          </div>
          <div className="ml-4">
            <span className="font-bold border-b-[3px] border-[black] pr-2 hover:text-[#fc8020]">
              Bihar,
            </span>
            Delhi,  Mumbai...
            <RxCaretDown
              fontSize={25}
              className="inline text-[#fc8020] cursor-pointer"
              onClick={shoSideMenu}
            />
          </div>
          <nav className="hidden md:flex list-none gap-10 ml-auto text-[17px] font-semibold">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer flex hover:text-[#fc8020] items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;








// import React, { useState } from "react";
// import { RxCaretDown } from "react-icons/rx";
// import { IoIosSearch } from "react-icons/io";
// import { CiDiscount1 } from "react-icons/ci";
// import { IoHelpBuoyOutline } from "react-icons/io5";
// import { GrUserManager } from "react-icons/gr";
// import { FiShoppingCart } from "react-icons/fi";
// const Header = () => {
//   const [toggle, setToggle] = useState(false);
//   const shoSideMenu = () => {
//     setToggle(true);
//   };
//   function hideSideMenu() {
//     setToggle(false);
//   }
//   const links = [
//     {
//       name: "Search",
//       icon: <IoIosSearch />,
//     },
//     {
//       name: "Offer",
//       sup: "new",
//       icon: <CiDiscount1 />,
//     },
//     {
//       name: "Help",
//       icon: <IoHelpBuoyOutline />,
//     },
//     {
//       name: "Sign in",
//       icon: <GrUserManager />,
//     },
//     {
//       name: "Cart",
//       icon: <FiShoppingCart />,
//     },
//   ];
//   return (
//     <>
//       <div
//         className="black-overlay w-full h-full fixed duration-500"
//         onClick={hideSideMenu}
//         style={{
//           opacity: toggle ? 1 : 0,
//           visibility: toggle ? "visible" : "hidden",
//           zIndex: toggle ? 9998 : -80,
//         }}
//       ></div>
//       <div
//         onClick={(e) => {
//           e.stopPropagation();
//         }}
//         className="w-[400px] bg-white h-full absolute duration-[400ms]"
//         style={{ left: toggle ? "0%" : "-100%" }}
//       ></div>
//       <header className="p-[15px] shadow-xl text-[#685b78] sticky top-0 bg-white z-[9999]">
//         <div className="max-w-[1200px] mx-auto flex items-center">
//           <div className="w-[100px]">
//             <img src="images/Swiggy.png" className="w-full" />
//           </div>
//           <div className="">
//             <span className=" font-bold border-b-[3px] border-[black] pr-2  hover:text-[#fc8020]">
//               Bihar
//             </span>
//             Dealhi NCR, Mumbai
//             <RxCaretDown
//               fontSize={25}
//               className="inline text-[#fc8020]
//               cursor-pointer"
//               onClick={shoSideMenu}
//             />
//           </div>
//           <nav
//             className=" hidden md:flex list-none gap-10 ml-auto  text-[17px] font-semibold"
//           >
     
//             {links.map((link, index) => {
//               return (
//                 <li
//                   key={index}
//                   className="cursor-pointer flex hover:text-[#fc8020] items-center gap-2"
//                 >
//                   {link.icon}
//                   {link.name}
//                   <sup>{link.sup}</sup>
//                 </li>
//               );
//             })}
         
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };
// export default Header;













