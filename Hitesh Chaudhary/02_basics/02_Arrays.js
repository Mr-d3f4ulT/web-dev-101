const myArr = [0, 2, 4, 5, 1, 4];
const arr1 = [0, 2, 4, "BMW", "LIFE KI MKC"];
console.log(arr1);
console.log(myArr);

//Accessing elements and modifying elements
arr1[4] = "TMKC";
console.log(arr1[4]);

//Common methods
console.log(arr1.length); //Prints length
console.log(arr1.toString()); //Converts to String
console.log(typeof arr1[1]); //returns type of objects for arrays
console.log();

//Objects : non primitive data type that stores key-value pairs
const person = { firstName: "Shivansh", lastName: "Pandey", age: "23" };
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(Object.keys(person).length); //person is a js object, and objects dont have length property like arrays and string in javaScript
//Nested Arrays and Objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "BMW", models: ["M340i", "M4-Competition"] },
    { name: "AUDI", models: ["R8", "Q7"] },
    { name: "PORSCHE", models: ["911 GT3", "Cayenne"] },
  ],
};

//Looping Array
const bikes = [
  "Royal Enfield Meteor 350",
  "Harlay Davidson X440",
  "BMW S1000RR",
];
//Using simple for loop
for (let i = 0; i < bikes.length; i++) {
  console.log(bikes[i]);
}
console.log();

//using a for each loop
bikes.forEach((bike, idx) => {
  console.log(`Bike ${idx + 1}: ${bike}`);
});
const bikes1 = [
  { name: "Meteor 350", brand: "Royal Enfield" },
  { name: "X440", brand: "Harley Davidson" },
  { name: "S1000RR", brand: "BMW" },
];
console.log();

//When there is a nested array with objects, use simple for
for (let i = 0; i < bikes1.length; i++) {
  console.log(bikes1[i].name, bikes1[i].brand);
}
console.log();

bikes1.forEach((bike, idx) => {
  console.log(`Bike ${idx + 1}: ${bike.brand} - ${bike.name}`);
});
console.log("THis is a new change");
