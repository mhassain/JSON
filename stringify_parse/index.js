"use strict";

let obj = {
  fname: "md.mahade",
  lname: "hasan",
  score: "88",
  passed: true,
  work: ["eat", "sleep", "coding"]
};

let str = '{ fname: "md. mahade", lname: "hasan", score: "88" }';

let obj1 = JSON.parse(str);
console.log(obj1);

let str1 = JSON.stringify(obj);
console.log(str1);
