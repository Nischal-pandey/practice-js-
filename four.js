  // for in loop apply to objects


   const myObject = {
      js: "JavaScript",
      py: "Python",
      rb: "Ruby",
      rs: "Rust",
   }
    for (const key in myObject) {
        console.log(` ${key} shortcut is  ${myObject[key]}`);
        
    }