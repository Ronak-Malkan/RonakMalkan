const IntroAnimation = () => {
   let nameIndex = 0;
   let typeRonak;

   const returnCharacter = () => {
      if (nameIndex === 10) {
         clearInterval(typeRonak);
      }
      const name = "RonakMalkan";
      nameIndex++;
      console.log(name[nameIndex - 1]);
      return name[nameIndex - 1];
   };

   const setINTERVAL = () => {
      typeRonak = setInterval(returnCharacter, 100);
      return typeRonak;
   };

   return (
      <div>
         <h1 className="codeRonakMalkan">
            {"<"}
            <span>{setINTERVAL()}</span>
            {"/>"}
         </h1>
      </div>
   );
};

export default IntroAnimation;
