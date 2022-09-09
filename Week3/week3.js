console.log("Hello World, iam alive");
console.log("Anotkkkher");

var printMessage = "Another";
console.log(printMessage);




let fname = "Anker";
let floats = 1.2;
let bool = true;
let check = null;
console.log(typeof fname);
console.log(typeof floats);
console.log(typeof bool);
console.log(typeof check);


//String
let txt1 = "Pariatur cupidatat duis Lorem aliquip fugiadt."
console.log(txt1.length);
console.log(txt1.slice(0, 6));
console.log(txt1.replace("Pariatur", "Anker"));
let txt2 = txt1.toUpperCase();
console.log(txt2);
console.log(txt2.toLowerCase());
let txt3 = "killer";
//let txt4= txt1.concat(txt3);
console.log(txt3.concat(txt1));



//Number

let a = 1;
let b = 2;
sum = a + b;
console.log("sum of", a, "+", b, "is", sum);

let x = a.toString();
console.log(x);
console.log(typeof x);

let c = 2.333123;
console.log(c.toFixed(4));


//Array
let arry1 = ["Anker", "Killer", "Ankita", "Kyle", "Joe"];
let arry2 = ["1", "2", "3", "4", "5", "23", "34", "45", "56", "67", "78", "89", "90"];
console.log(arry1);

console.log(arry1.copyWithin(0, 4));
console.log(arry1.copyWithin(0, 2, 4));
console.clear();

function checkEven(number) {
    return number % 2 == 0;
}

console.log(arry2.every(checkEven));
console.log(arry1.push("Dick"));
console.log(arry1.unshift("Hulk"));
console.log(arry1);


//date
console.clear();
let date = new Date();
console.log(date);



let date2 = new Date();
console.log(date2);


let date4 = new Date(2020, 11, 24, 10, 33, 30, 0);
console.log(date4);

let date5 = new Date();
console.log(date5.getFullYear());

let date6 = new Date();

console.clear();

console.log(date6.toDateString());

console.log(date6.toTimeString());


console.clear();

// let date7= new Date(100000000000);
// console.log(date7);
console.log(new Date().getMinutes());

const session =
{
    'item': [],
    'state': true
};

session.item.push("Anker");
sessionStorage.setItem("mypass", '55533');
console.log(sessionStorage.getItem("mypass"));

sessionStorage.setItem("myobj", JSON.stringify(session));

