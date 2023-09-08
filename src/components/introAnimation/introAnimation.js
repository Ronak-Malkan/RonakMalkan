import { useEffect } from "react";
import "./introAnimation.css";

const IntroAnimation = ({ setAnimationOver }) => {
   useEffect(() => {
      const waitForAnimation = setTimeout(() => {
         clearTimeout(waitForAnimation);
         setAnimationOver(true);
      }, 4000);
   });

   return (
      <div className="animationContainer">
         <h1 className="codeRonakMalkan">
            <div className="nameHolder">
               {"<"}Ronak_Malkan{"/>"}
            </div>
         </h1>
      </div>
   );
};

export default IntroAnimation;
