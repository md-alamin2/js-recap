function outer (){
    let a = 10;
    function inner (){
        console.log(a);
    }
    return inner;
}   
let innerFunc = outer();
innerFunc();


// create an application that will count some numbers and you can increment or decrement, reset the count and you will access the counter by calling an instance but it won't be a method of class. 



