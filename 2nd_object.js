  const username = new Object();  // object literal syntax

  const tinderuser = {};  // object constructor syntax

  tinderuser.id = "1234";
  tinderuser.name = "john";
    tinderuser.isLoggedIn = false;
    // console.log(tinderuser);
    

    const regularuser = {
        email : "nischal@goggledotcom",
        fullname : {
            userfullname : {
                firstname : "Nischal",
                lastname : "Pandey"
            }
            
    }}

   
    //+++++++++++++++++++++++object methods++++++++++++++++++++++

    const obj1 = {1:"a", 2:"b"};
    const obj2 = {3:"c", 4:"d"};

    // const obj3 = Object.assign({},obj1,obj2);
     
    const obj3 = {...obj1,...obj2};
    //  console.log(obj3);

// ++++++++++++++++++++++nested object and array of object++++++++++++++++++++++
    const users = [
        {
            id:1,
            email:"nischal@goggledotcom",
        },
        {

        },
        {

        },
    ]
    users[1].email
    // console.log(tinderuser);

    // console.log(Object.keys(tinderuser));


 // ++++++++++++++++++++++object destructuring++++++++++++++++++++++

    const course = {
        coursename : "js",
        price : "999",
        courseInstructor : "Nischal Pandey"
    }

    const {courseInstructor: instructor} = course;
    console.log(instructor);
    
    