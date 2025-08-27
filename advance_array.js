 //++++++++++++++++++++++++++++++++++++++++CONCATE OPEERATOR+++++++++++++++++++++++++++++++++++++++++++
 const heros = ['spiderman', 'thor', 'hulk', 'ironman'];
 const villains = ['loki', 'thanos', 'green goblin'];
//  heros.push(villains);
    // console.log(heros);
    // console.log(heros[4][1]);
//    const heros1= heros.concat(villains);
//     console.log(heros1);

//++++++++++++++++++++++++++++++++++++++++SPREAD OPEERATOR+++++++++++++++++++++++++++++++++++++++++++

 const all_new_heros= [...heros, ...villains];
    // console.log(all_new_heros);

    const another_array= [1, 2, [3, 4, 5 , [6, 7]]];
    const flatted_array= another_array.flat(2);
    console.log(flatted_array);// to flat the array

    console.log(Array.from('sachin'));// to convert string into array
    console.log( Array.from({name: 'sachin', age: 24}));// to convert object into array. interview question
