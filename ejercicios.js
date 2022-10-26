//#region ========Arrow function===========
// EJ 1
let divideByTwo = a => a / 2;

//EJ 2
let sum = (num1,num2) => num1 + num2;

//EJ 3
let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

let stringLength = (str) => console.log(`the length of "${str}" is:`, str.length)

stringLength(longestCityNameInTheWorld)

//EJ 4
let stringLength2 = (str) =>{ let length = str.length; console.log(`the length of "${str}" is:`, length); return str.length}

stringLength2("willynilly")

//EJ 5

// let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

// let showAlert = (name) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)

// showAlert("you ball of fluff")

//EJ 6
const oneTwoThreeRotate = () =>
    Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(rotate = (tag) =>
    
    tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)');
    
oneTwoThreeRotate()
//#endregion

//#region ========Deconstructing===========
//EJ1
let item = ["Egg",0.25, 12];

let [nam,price,quantity] = item;

console.log(`Item: ${nam}, price: ${price}, quantity: ${quantity}`);

//EJ 2
let numbers = [3, 5, 4, 2, 6, 1];

let [one, two, three, four, five, six] = [numbers[5],numbers[3],numbers[0],numbers[2],numbers[1],numbers[4]];

console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);

//EJ 3
let user = { name1: "John", years: 30};

// your code to the left side:

let {name1:name2, years:age1 ,isAdmin = "false"} = user;

console.log(name2); // John

console.log(age1); // 30

console.log(isAdmin); // false

//EJ 4
let person1 = [12, "Chris", "Owen"];

let [age2,firstName1,lastName1] = person1;

console.log(`Person - Age: ${age2}, Name: ${firstName1} ${lastName1}`);

//EJ 5
let person2 = ["Chris", 12, "Owen"];

let [firstName2,,lastName2] = person2;

console.log(`Person - Name: ${firstName2} ${lastName2}`);

//EJ 6
const students = ['Christina', 'Jon', 'Alexandare'];

const [,,lastName3] = students;

console.log(lastName3);

//EJ 7
const moreStudents = [

    'Chris',
    
    ['Ahmad', 'Antigoni'],
    
    ['Toby', 'Sam']
    
];
let [student1,[student2,student3],[student4,student5]] = moreStudents;

console.log(`primero: ${student1}/ segundo: ${student2}/ tercero: ${student3}/ cuarto: ${student4}/ quinto: ${student5}`);
//#endregion

//#region ========Spread Operator==========
//EJ 1
let fruits1 = ['Apple','Orange','Banana'];
let copyFruits = [...fruits1]
console.log(copyFruits);

//EJ 2
let arr1 = ['A', 'B', 'C'];
let arr2 = ['X', 'Y', 'Z'];
let combinedArr1y2 = arr1.concat(arr2);
console.log(combinedArr1y2);

//EJ 3
let fruits2 = ['Apple','Orange','Banana'];
let moreFruits2 = ["Cherry",...fruits2];
console.log(moreFruits2);

//EJ 4
let fruits3 = ['Apple','Orange','Banana']
let getFruits3 = (a,b,c) => console.log(`Fruits: ${a}, ${b} and ${c}`);

getFruits3(...fruits3)

//EJ 5
let obj1 = { id: 101, name: 'Jhon Doe' };
let obj2 = { age: 25, country: 'USA'};
let merge = {...obj1, ...obj2}

console.log(merge);
//#endregion

//#region ====================Ejercicios Dani================================
//EJ 1
let citizen1 = {
    name: "Jack",
    lastName: "Sparrow",
    age: 33
}

//EJ 2
citizen1.city = "The Black Pearl";
citizen1.age = 30;

//EJ 3
function checkCitizenship (ciudadano) {
    if (ciudadano.age > 18) {
        ciudadano.canVote = true;
    } else {
        ciudadano.canVote = false;
    }
}
checkCitizenship(citizen1);

//EJ 4
function createCitizen(name, lastName, age) {
    if (name != "" && lastName != "" && age != null) {
        let newCitizen = {newName: name, newLastName: lastName, newAge: age};
        return newCitizen;
    } else {
        alert("The parameters are invalid");
    }
}


//EJ 5
let citizen2 = createCitizen("Robin", "Hood", 26);

//EJ 6 y 7
function checkVoting(objeto) {
    if (objeto.canVote) {
        return objeto.canVote
    }
    else{
        checkCitizenship(citizen2);
        console.log("done");
    }
}
console.log(checkVoting(citizen1));

//EJ 8
function showValues(objetoAmostrar) {
    console.log("------Valores del objeto------");
    for (let i = 0; i < Object.keys(objetoAmostrar).length; i++) {
        console.log(Object.keys(objetoAmostrar)[i] + ": " + Object.values(objetoAmostrar)[i]); 
    }
}
showValues(citizen1);
console.log("Ciudadano 1: ", citizen1);
console.log("Ciudadano 2: ", citizen2);

//EJ 9
function deleteLastProp(objeto) {
    if (Object.keys(objeto).length > 4) {
        let lastPos = Object.keys(objeto).length;
        let lastElement = Object.keys(objeto)[lastPos-1];
        delete objeto[lastElement]
        return objeto;
    }
    else {
        console.log("False");
    }
}
console.log("Ciudadano 1: ", deleteLastProp(citizen1));
console.log("Ciudadano 2: ", deleteLastProp(citizen2));
//#endregion