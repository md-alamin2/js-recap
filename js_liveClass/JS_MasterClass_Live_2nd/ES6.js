const student = {
    name: "Rafi", 
    age: 25,
    address: "Dhaka",
}


// const grade = student.grade;
const { grade: studentGrade, name : studentName } = student;
// console.log(`The student is: ${studentName} and his obtained grade is: ${studentGrade}`);


const {name: studentName2, grade = "A+", address = "Barishal"} = {
    name: "Zihad",
};
// console.log(studentName2, grade, address);

function getStudentInfo({name, age, address, grade="A-"}) {
    console.log(name, age, address, grade);
}
// getStudentInfo(student);

const data = {profile: { email: "rafi@example.com",}}


const {profile : {email} = {} } = data;


// console.log(email);

const arr = [1, 2, 3, 4, 5, 6, 7];

const [ , secondElement, ,fourth, ...rest] = arr;

console.log(secondElement, fourth, ...rest);

const obj ={
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}

const {a=null, b, ...baki} = obj

console.log("Baki run hocche: ",{b, ...baki});

const std1 = {
 name : "Maruf",
 address: "Dhaka",
}
const std2 ={
    name2 : "Shoshee",
    address2: "Barishal",
}

const stds = {
    ...std1,
    ...std2,
}

console.log("stds :", stds)


function sum (...nmbr){
    return nmbr.reduce((acc, cur) => acc + cur, 5);
}

console.log(sum(1, 2, 3, 4, 5));



