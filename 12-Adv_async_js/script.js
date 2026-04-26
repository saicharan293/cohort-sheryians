
// Synchronous : line by line code execution
// Asynchronous : code execution waits and run at required point of time

function GoAfter(val){
    setTimeout(() => {
        console.log('after 3 seconds', val);
    }, 3000);
}

// GoAfter(12);

function test(fnc){
    let rn = Math.floor(Math.random()*10)*1000;
    console.log(rn);
    
    setTimeout(fnc, rn);
}

// test(()=>{console.log("hey");});
// parameter function inside the test is called callback function

// Promises: contains two states, resolve, reject. only one gets output

// let pr = new Promise(function(res, rej){
//     setTimeout(() => {
//         let rn = Math.floor(Math.random()*10);
//         if(rn > 5) res("resolved with"+ rn);
//         else rej("rejected with"+rn);
//     }, 3000);
// });

// pr
// .then(function(val){
//     console.log(val);
// })
// .catch(function(val){
//     console.log(val);
// });

// Think:

// Promise = future result
// .then() = “if success, do this”
// .catch() = “if error, do this”

// 1. Create a Promise that resolves after 2 seconds with "Hello World" and print it.

let promise1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("hello world");
    }, 2000);
})

// promise1
// .then(function(val){
//     console.log(val);
// })

//2. Create a Promise that resolves with a number 10. 
// Then multiply it by 2 inside .then() and print result.

let promise2 = new Promise(function(res, rej){
    res(10)
});

// promise2
// .then(function(val){
//     console.log(val*2)
// });


//3. Create a Promise that resolves with 5.

// Then:

// first .then() → multiply by 2
// second .then() → add 3

let promise3 = new Promise(function(res, rej){
    res(5)
})

// promise3
// .then((val)=> {
//     console.log(val*2);
//     return val*2
// })
// .then((val)=> console.log(val+3))



//4. Create a Promise:

// If a number is even → resolve "Even number"
// If odd → reject "Odd number"

// let promise4 = new Promise(function(res, rej){
//     if(5%2==0) res("Even number");
//     else rej("Odd")
// });

// promise4
// .then(function(val){
//     console.log(val)
// })
// .catch(function(val){
//     console.log(val)
// })

// through function

function checkNo(num){
    return new Promise(function(res, rej){
        if(num%2==0) res("Even");
        else rej("Odd")
    })
}

// checkNo(5)
// .then(function(val){
//     console.log(val)
// }).catch(function(val){
//     console.log(val)
// })

//--------------------------------------

// fetch()

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => console.log(response));


//  What’s happening step-by-step
// fetch() → returns a Promise
// .then(response) → gets raw response
// response.json() → returns another Promise
// .then(data) → gets actual data

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(response => console.log(response));

// Error handling

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log("Error:", err));

// ⚠️ Tricky thing (VERY important)

// fetch does NOT reject for HTTP errors like 404 or 500.

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response =>{
//         if(!response.ok){
//             throw new Error("Http error")
//         }
//         return response.json();
//     })
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


//------------------------------------
// ASYNC - AWAIT

// Basic rule
// async → makes a function return a Promise
// await → pauses until Promise is done

async function getUsers(){
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!res.ok) throw new Error("Failed to fetch");
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", err.message);
    }
}

// getUsers();

// To handle multiple api calls

// Sometimes you need to do things in order, like:

// Login user
// Get user data
// Get user’s posts

async function loadUserData (){
    try {
        
        let userRes = await fetch("https://jsonplaceholder.typicode.com/users/4");
        if (!userRes.ok) throw new Error("User fetch failed");
        let user = await userRes.json();
        console.log("user:", user.name);
        
        let postRes = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id);
        if (!postRes.ok) throw new Error("Post fetch failed");
        let posts = await postRes.json();
        console.log("Posts:", posts.length);
    } catch (error) {
        console.error("Something went wrong");   
    }
}

// loadUserData();

// promise.all, to run more than one promise in parellel. but if one fails, execution ends there.
// returns array of result.

async function loadData() {
    try {
        let [users, posts] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
            fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
        ]);

        console.log(users.length, posts.length);

    } catch (err) {
        console.log("Error:", err);
    }
}