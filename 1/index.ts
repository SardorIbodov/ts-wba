//! data-types
// let firstName: string = "Sardor";
// let lastName: string = "Ibodov";
// let age: number = 20;
// let isMarried: boolean = false;
// let isEmployed: boolean = false;
// let isBest: boolean = true;

// console.log("firstName", firstName);
// console.log("lastName", lastName);
// console.log("age", age);
// console.log("isMarried", isMarried);
// console.log("isEmployed", isEmployed);
// console.log("isBest", isBest);

//! any
// let anyData: any = "webbrain";
// anyData = true;
// console.log(anyData);

//! array
// let arr: any[] = ["Sardor", 123, true, [], {}];
// let students: string[] = ["Sardor", "Ollomurod", "Dilshod"];
// let numbers: number[] = [1, 2, 3, 4, 5];
// let info: [string, number] = ["Sardor", 20];

// let empty: [] = [];
// empty.push("Sardor");

//! union
// let threeTypes: string | number | boolean = 1;
// threeTypes = "Sardor";
// threeTypes = "Sardor";

// let arr: [string | number] = [1];
// arr = ["one"];

//! tuple
// let myTuple: [string, number][] = [
// 	["Sardor", 20],
// 	["Ollomurod", 21],
// ];
// console.log(myTuple);

// let secondTuple: [string, number] = ["Sardor", 20];
// console.log(secondTuple);

// let thirdTuple: [string, number][][] = [
// 	[
// 		["Sardor", 20],
// 		["Sardor", 20],
// 		["Sardor", 20],
// 	]
// ];
// console.log(thirdTuple);

//! enum
// enum numbers {
//   zero,
//   first,
//   second,
//   third,
// }
// console.log(numbers.zero, numbers.first, numbers.second, numbers.third);

// enum languages {
//   uz = "uzbek",
//   ru = "russian",
//   en = "english",
// }
// console.log(languages.uz,languages.ru, languages.en);

//! objects
// let user1: { name: string; age: number } = { name: "Sardor", age: 20 };
// console.log(user1);

// enum languages {
//   uz = "uzbek",
//   ru = "russian",
//   en = "english",
// }
// type template = {
// 	name: string, 
// 	age: number,
// 	language: string
// };
// let user2: template = {name: "Sardor", age: 20, language: languages.en}
// console.log(user2);

//! copying
// let firstName:any = "sardor";
// let copyFirst = <number>firstName;
// let copySecond = firstName as number;
// console.log(copyFirst, copySecond);
// copyFirst = 1;
// copySecond = 2;
// console.log(copyFirst, copySecond);


