//logging helps you show the outcome in the terminal
console.log ("hello world");

//typeof shows you data type, the 3 data types shown below are primitive data types 
//if it is not a primitive data type then it is an object 
console.log (typeof `hi zen`);
console.log (typeof 1.20);
console.log (typeof true);
//////////////////////////////
//these act as containers to hold the data
console.log ({}); //object 
console.log ([]); //array


//Ways to create a variable, a Variable represents the data the different data/outcomes an object can hold 
const a = 5; //const means constant so variable value cant change 
console.log(a);
//a = 6, you use const then you can't assign another value to the variable 


let b = 6; // if you use a let instead of a const but let allows you change the variable value 
console.log(b);
b = 7


{
    const c = 3
    console.log(c)

    var d = 8 // var is not as good as const or let since it has the variable exist globally which can lead to errors 
    {
        let d = 6
        console.log(c)// variable c still exist within the main {} so the value can be used 
        
    }
}
//console.log(c) this console.log will lead to error since the variable c does not exist outside {}

console.log(d)

///////////////////////////////////
//Math operators
//the operators also follows PEMDAS
//Operators are symbols we can use to do operations between multiple data points. The below are for math operations (operations that result in numbers)

const aa = 5
const bb = 8
let ab = 3
let ac = 2


console.log(aa + bb) 
console.log(aa - bb) 
console.log(aa * bb) 
console.log(aa / bb) 
//gives a remainder, % is used to find if a num is devisable by another 
console.log(10 % 4) 
// aa to the power of b, exponent 
console.log(aa**bb) 

//this will add 1 to the variable and then give the value 
// ++ab 
// console.log(ab)

//better way to do it 
ab += 2
console.log(ab)



//this will minus 1 to the variable and then give the value 
// --ac
// console.log(ac)

ac -= 2
console.log(ac)


//Boolean operators allows us to do operations that result in either true or false. Keep in mind javascript categorizes all values as truthy of falsey. Easiest way to remember it, is that everything is truthy except:
// 0
// "" empty string 
// false
// null means nothing 
// undefined means no value given 
// NaN means not a number 

console.log(Boolean(0))
console.log(Boolean(1))

console.log(Boolean(""))
console.log(Boolean(" ")) //the string true due to space between ""

console.log(Boolean(false))
console.log(Boolean("false"))

console.log(Boolean(null))
console.log(Boolean("null"))


const ad = 4
const an = "4"

// is ad equal to an
console.log(ad == an)  

// is ad strictly equal to an 
console.log(ad === an) 

// is ad strictly not equal to an 
console.log(ad !== an) 

// is ad greater than or equal to an 
console.log(ad >= an) 

// is ad less than  or equal to an 
console.log(ad <= an) 

// && is "and" operator 
console.log(ad <= an && an > ad)

// || is "or" operator 
console.log(ad <= an || an > ad) 


//example  of using boolean expression for practical real life things
const tenOrOlder = false;
const cameWithAdult = true;

// console.log(tenOrOlder || cameWithAdult);


//Control Flow is a bundle of programming tools that allow us to break apart from the procedural nature of code (do x, then y, then z).

/////////////////////////////

//If Statements

if(tenOrOlder || cameWithAdult){
    console.log("good")
}else{
    console.log("bad")
}

console.log("this code runs either way")

let cheese; //we did not assign a value to cheese

if (cheese){
    console.log("value")
}else{
    console.log("empty")
}

const people = "Zen"

////////////////////////

//Switch
//we are taking the variable "people" and then the switch statement is checking if the case value is a part of the variable 
switch (people){ 
    case "Zen":
        console.log("come on inside")
        break

    case "Jay":
        console.log("come on inside")
          break

    case "Bob":
        console.log("come on inside")
    break

    case "Zoom":
        console.log("come on inside")
        break

//default case runs if the value asked isn't in the variable 
    default:
        console.log("not entry  ")
}

///////////////////////

//Loops The ability to repeat a block of code several consecutive times.

//While Loops

let x = 0

while(x < 10){
    console.log(x)
    x += 1
}

//For loop, you have to use semi-colons for this loop 

//for(counter, expression, what you want to happen)

for(let x = 0; x < 10; x += 1){
    console.log(x)
}

