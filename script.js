// Part 1: Understanding and Creating Objects
let student = {
    name: "Anderson",
    age: 31,
    enrolled: true,
    courses: ["Web programming and Design", "Fundamentals of Java Script", "Algorithms and Problem Solving", "Operating System", "Technical Wrt", "Database"],
    info: {
        country: "Canada",
        city: "Toronto",
        street: "Maple Leaf Street",
        college: "Humber College",
        program: "Computer Programming"
    }
};

console.log(student.name);
console.log(student.age);
console.log(student.info);

// Part 2: Working with JSON
// Convert the student object into a JSON string
let jsonString = JSON.stringify(student);
console.log(jsonString);
// Convert the JSON string back into a JavaScript object.
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);
//Compare
console.log(student === jsonObj);