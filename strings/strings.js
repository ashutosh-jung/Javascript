// // // //  let str="Ashutosh";
// // // // // // // // // let str2='Ashutosh Loves Kunta';
// // // // // // // // // console.log(str2[9]);

// // // // // // // // //template literal
// // // // // // // // let specialString=`This is a template literal ${1+2+3}`;
// // // // // // // // console.log(specialString );

// // // // // // // // // let obj= {
// // // // // // // // //   item:"pencil",
// // // // // // // // //   price:10,
// // // // // // // // // };
// // // // // // // // // let output =`the cost of ${obj.item} is${obj.price} rupees`;
// // // // // // // // // console.log(output);

// // // // // // // let str="Ashutosh \tLoves Kunta";
// // // // // // // console.log(str.length);

// // // // // // //string methods in js
// // // // // // let str ="Ashutosh Loves Kunta";
// // // // // // str =str.toUpperCase();
// // // // // // console.log(str);

// // // // // //lowercase
// // // // // let str="Ashutosh Loves Kunta";
// // // // // str = str.toLowerCase();
// // // // // console.log(str);

// // // // //trim
// // // // let str ="    Ashutosh    Loves Kunta";
// // // // console.log(str.trim());


// // // // slice in js

// // // //let str="hello"
// // // //console.log(str.slice(3));

// // // // concatenation in js
// // // let str1="ashutosh";
// // // let str2="loves";

// // // let res =str1+str2;
// // // console.log(res);

// // //replace methods in js
// // let str="hello";
// // console.log(str.replace("hell","klo"));

// //character at methods

// let str="IlovesJavascript";
// str= str.replace("I","s");
// console.log(str);

//practice questions
let fullName = prompt("enter your fullname without spaces");

let username = "@" + fullName+fullName.length;
console.log(username);