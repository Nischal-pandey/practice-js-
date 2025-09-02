// for loop

for (let index = 0; index < 5; index++) {
  const element = index;

  if (element == 3) {
    // console.log("3 is best number");
  }

  //    console.log(element);
}

for (let i = 0; i < 10; i++) {
    //console.log(`inner loop value : ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`outer loop value${j} , inner loop value : ${i}`);
        
    }
}


let myArray = ["batman", "superman", "wonderwoman"];
      //console.log(myArray.length);
      
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue

 for (let index = 0; index < 10; index++) {
    if (index == 5) {
        console.log("5 is best number");
         break;
    }
    console.log(index);
    
    }
