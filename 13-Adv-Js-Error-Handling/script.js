// ERROR Handling in Java script

//Types of Errors


// syntax error -> typo mistakes, format mistakes
// leat a =12;

// runtime error -> errors while running the code

const a = {
    name : "sim"
}

// console.log(a.city.address);

// Uncaught TypeError: Cannot read properties of undefined (reading 'address')

// logical error: when code doesn't give desired result

// for normal errors, the execution flow of the code will break
// try-catch: to avoid syntactical error and give valid message and also it won't break the flow of execution

// try {
//     let a = "sai";
//     console.log(a.greet());
// } catch (error) {
//     console.log(error)
// }

// console.log("this is try catch")

// understanding error object
// message, stack, name

// stack: complete details of the error
// message: main message about the error
// name: what is the type of error

// try {
//     let a = "sai";
//     console.log(a.greet());
// } catch (error) {
//     console.log(error.stack);
// }

// finally: the code that has to run after try... catch...
// example: to remove loader

// try {
//     let a = "sai";
//     console.log(a.greet());
// } catch (error) {
//     console.log(error.mesage);
// } finally{
//     console.log("this is finally");
// }

// How to throw errors


try {
    let a = 12;
    console.log(a.greet());
} catch (error) {
//    throw new Error("Something went wrong, Please try out later");
    console.error(new Error("Some thing went wrong"));
}
