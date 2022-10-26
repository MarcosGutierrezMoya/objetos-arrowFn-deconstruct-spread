let hotel = {
    name: "NH",
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ["twin","double","suite"],
    checkAbailability: function () {
        return this.rooms - this.booked;
    }
}

// Arrow functions
//1) forma
function suma(a,b) {
    return a + b;
}
//2) forma
let suma = function (a,b) {return a + b;}
//3) forma
let suma = (a,b) => a + b;
// Un solo parametro
let suma = a => a + 5;
// Si la declaración es compleja, se usa {}
let suma = (a,b,c) => {b + a; b * c; return b}

let divideByTwo = a => a / 2;

// Spread operator
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combined = [...arr1, ...arr2]

// Rest operator
function rest(a,b,...args) {
    console.log(args);
}
rest(1,2,3,4,5,6);

// Deconstruction
let a=1, b=2;
let [c,d] = [1,2]
[d,c] = [c,d] // Intercambian los valores


let item = ["Egg",0.25, 12];

let [nam,price,quantity] = item; // Te coje las posiciones del array al que referencias

console.log(`Item: ${nam}, price: ${price}, quantity: ${quantity}`);