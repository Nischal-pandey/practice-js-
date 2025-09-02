  
  // for of loop
//      const array = ["1,2,3,4"];
//   for (const num of array ) {
//        console.log(num);
       
//   }

 const greeting = "hello world";
    for (const greet of greeting) {
        // console.log(`each char is : ${greet}`);
        
    }


    // maps

    const map = new Map();
    map.set(`IN`, `India`);
    map.set(`US`, `United States`);
    map.set(`FR`, `France`);
    map.set(`DE`, `Germany`);

      // console.log(map);

      for(const [key, value] of map){
        console.log(key, ":-", value);
        
      }


      