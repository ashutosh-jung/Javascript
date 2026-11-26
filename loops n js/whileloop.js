// // //while loop
// // // let i =1;
// // // while(i<=5){
// // //   console.log("Ashutosh Loves Kunta");
// // // i++;
// // // }

// // //do while loop

// // let i =1;
// // while(i<=5){
// //   console.log("Ashutosh Loves Kunta");
// // i++;
// // }
// // do{
// //   console.log("i=", i);
// //   i++;
// // }while(i<=5);

// //for-of-loop used only for arrays and strings

// let str="Ashutosh Loves Kunta";
// let size=0;
// for(let i of str){
// console.log("i=", i);
// size++;
// }
// console.log("string size=", size);


// for-in-loop used for objects
let student={
  name:"Ashutosh",
  age:20,
  cgpa:8.7,
  isPass: true
};
for(let key in student){
  console.log("key=",key,  "value=",student[key]);
}