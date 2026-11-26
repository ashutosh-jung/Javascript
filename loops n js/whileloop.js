// // // // //while loop
// // // // // let i =1;
// // // // // while(i<=5){
// // // // //   console.log("Ashutosh Loves Kunta");
// // // // // i++;
// // // // // }

// // // // //do while loop

// // // // let i =1;
// // // // while(i<=5){
// // // //   console.log("Ashutosh Loves Kunta");
// // // // i++;
// // // // }
// // // // do{
// // // //   console.log("i=", i);
// // // //   i++;
// // // // }while(i<=5);

// // // //for-of-loop used only for arrays and strings

// // // let str="Ashutosh Loves Kunta";
// // // let size=0;
// // // for(let i of str){
// // // console.log("i=", i);
// // // size++;
// // // }
// // // console.log("string size=", size);


// // // for-in-loop used for objects
// // let student={
// //   name:"Ashutosh",
// //   age:20,
// //   cgpa:8.7,
// //   isPass: true
// // };
// // for(let key in student){
// //   console.log("key=",key,  "value=",student[key]);
// // }

// //print all even no. form 0 to 100
// for(num=0; num<=100; num++){
//   if(num% 2===0){
//     console.log("num",num);
//   }
// }

//guessing no
let gameNumber=25;
let userNumber= prompt("Guess the game Number:")

while(userNumber!= gameNumber){
  userNumber=prompt("you entered wrong number:")

}
console.log("you entered the right number congratulations");