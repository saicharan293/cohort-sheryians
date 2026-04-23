// Create After Delay
// 2s

function afterDelay(time, cb){
    setTimeout(() => {
        cb();
    }, time);
}

// afterDelay(3000, function(){
//     console.log("Call back executed")
// })

function getUser(username, cb){
    setTimeout(() => {
        cb({id: 1, username: "Sai"});
    }, 1000);
}

function getUserPosts(id, pfn){
    setTimeout(() => {
        pfn(["hello", "good day"]);
    }, 2000);
}

// getUser("Sai", function(data){
//     getUserPosts(data.id, function(allposts){
//         console.log(data.username, allposts);
//     });
// })

function loginUser(username, cb){
    console.log("loggingg...")
    setTimeout(() => {
        cb({id: 1, username: "sai"})
    }, 1000);
}

function fetchPermissions(id, cb){
    console.log("fetching permissions");
    
    setTimeout(() => {
        cb(["read","write","delete"])
    }, 2000);
}
function loadDashboard(permissions,cb){
    console.log("loading dashboard");
    
    setTimeout(() => {
        cb()
    }, 2000);
}
loginUser("sai", function(userData){
    fetchPermissions(userData.id, function(permissions){
        loadDashboard(permissions, function(){
            console.log("permissions loaded")
        })
    })
});