// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import Astro from '../../assets/images/astro-img.png'


// export const Scroll = () => {

//     const [scrollPosition, setScrollPosition] = useState(0);
    
//     // function logit() {
//     //     setScrollY(window.pageYOffset);
//     //     console.log(new Date().getTime());
//     //   }
    
//       useEffect(() => {
        
//         const updatePosition = () => {
//           setScrollPosition(window.pageYOffset);
//         };

//         window.addEventListener("scroll", updatePosition);

//         return () => {
//           window.removeEventListener("scroll", updatePosition);
//         }, []);
//         return scrollPosition;
//       };
    

//   return (
//     <div>
//       <div className="fixed-center"> <img src={Astro} width='650px' alt="logo" className="astro-img"/></div>
    
//     </div>
//   );
