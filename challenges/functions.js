// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume (param1, param2, callback){
  return callback(param1,param2);
};


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add (num1,num2){
  return (num1 + num2);
};

function multiply (num1, num2){
  return (num1 * num2);
};

function greeting(firstName, lastName){
  return (`Hello ${firstName}${lastName}, nice to mee you`);
};

/* Step 3: Check your work by un-commenting the following calls to consume(): */
 console.log(consume(2,2,add)); // 4
 console.log(consume(10,16,multiply)); // 160
 console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: The neseted function has access to the variable 'internal' due to closure.  Closure in simple terms is like a two way mirror.  While the inner functions have the ability
// to look outward to variables, the outer functions are unable to look inward.  The nestedFunction in this case has three levels of scope,
// acces to it's own scope variables, access to the outer functions variables as well as access to the global variables.  


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();