function first() {
    second();
    console.log('first')
}

function second() {
    third();
    console.log('second')
}

function third() {
    console.log('third')
}

first();
console.log('Global')
