function greeting (name) {
    console.log('Hello ' + name);
}

function highOrder (func) {
    return function nameGiving(){
         func('Next Level Web');
    };
}

highOrder(greeting)();
