/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - When function is invoked this will show "undefined" in the console, since .call()/.apply()/.bind() is not being used while invoking, and will stick to the window's object?
* 2. Implicit Binding - What I noticed about them is that they DO NOT use "this." in the function, since the fuction is inside of a specify variable as a property?
* 3. New Binding - This is where "contructor functions" come in to play, when we invoked our function with a new argument, it will automatically create a new property inside of your object/variable.
* 4. Explicit Binding - When an Explicit Binding function is invoked, in order to use "this." with any variable, you have to use the .call(variable) or .apply (variable) when invoking.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var myfunction = function (){ //}      When function is invoked this will show "undefined" in the console, 
console.log (this.name);    //} <--- since .call()/.apply()/.bind() is not being used while invoking, and will stick
}                           //}      to the window's object?

var me = {
    age: 27
}

function(); 


// Principle 2

// code example for Implicit Binding

let person = {
    name: "Jerry",
    age: 27,
    hobby: "Video Games",
    speak: function (){
      console.log(person.name)  //<-- Function is INSIDE of variable.
    }
  }
  person.speak(); //<-- This will show the person's name in the console.
  

// Principle 3

// code example for New Binding

var Fruits = function (color, form, weight){ // <-- Using "Constructor Function"
    //this.rating = {} <---------- Theorically, Javascript will create this property automatically.
    this.color = color,
    this.form = form,
    this.weight = weight
    };

var newProperty = new Fruits("yellow", "moon",  "0.25pounds", "10");
    

// Principle 4

// code example for Explicit Binding

let Jerry = {
    name: "Jerry",
    age: 27
  }
  let Nerma = {
    name: "Nerma",
    age: 23
  }

  let array = [1,2,3,4,5];

  // Function is OUTSIDE of variable.
  let findName = function (){
      console.log("My name is " + this.name)
    }
    
  findName.call(Nerma);  //} <---Difference between .call and .apply is that call() accepts an argument list, while apply() accepts a single array of arguments, 
  findName.apply(array); //}     and can even spread the array across your return statement in your function.
  findName.bind(Nerma);  //} <---Bind on the other hand, is the same thing is .call, but instead of invoking the same function it will return a new one that can be reused later.
  
  

