// Part 1: Understanding and Creating Objects
console.log("Part 1: Understanding and Creating Objects\n");
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
console.log("\nPart 2: Working with JSON\n");
// Convert the student object into a JSON string
let jsonString = JSON.stringify(student);
console.log(jsonString);
// Convert the JSON string back into a JavaScript object.
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);
//Compare
console.log(student === jsonObj);

// Part 3: Using Destructuring Assignment
console.log("\nPart 3: Using Destructuring Assignment\n");
let { name, age, enrolled, courses, info } = student;
console.log(name);
console.log(courses);

let array = [85, 92, 78, 90];
let [first, second, third, forth] = array;
console.log(first, second); // first two scores

// Part 4: The Spread Operator
console.log("\nPart 4: The Spread Operator\n");
let cloneObj = {...student};
console.log(cloneObj);
console.log("\nAdd new property to the cloneObj\n");
let newProperty = {...cloneObj, graduationYear: 2028};
console.log(newProperty);