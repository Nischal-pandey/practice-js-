// for each loop with function+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

   const coding = ["java","python","javascript","html","css"];

   coding.forEach(function(item){
        //  console.log(item);
   })


   // using arrow function+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   coding.forEach((item) => {
        //   console.log(item);
   })

   function printme (item){
    // console.log(item);
   }
    // coding.forEach(printme);


    const myCoding = [
        {language : "JavaScript"},
       { language : "Python"},
        {language : "Java"},
        {language : "C++"},
        {language : "Ruby"},
];

    myCoding.forEach((item) => {
       console.log(item.language);
    })
