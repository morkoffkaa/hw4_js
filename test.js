let a = prompt('Please input the first number:');
let b = prompt('Please input the second number:');

a = Number(a);
b = Number(b);

let add = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;

alert(`${a} + ${b} = ${add} \n ${a} - ${b} = ${sub} \n ${a} * ${b} = ${mult} \n ${a} / ${b} = ${div}`);