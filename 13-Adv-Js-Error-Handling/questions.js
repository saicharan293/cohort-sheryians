// to send bulk email

const users = [
    "shiva@email.com",
    "script@email.com",
    "shirt@email.com"
];


function sendEmail(email){
    let time = Math.floor(Math.random()*4);
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let probability = Math.floor(Math.random()*10);
            if(probability <= 5) resolve("Email successfully sent.");
            else reject("Email not sent...");
        }, time*1000);
    })
}

async function sendEmails(usersList){
    let res = usersList.map(function(email){
        return sendEmail(email)
        .then(function(data){
            return data
        })
        .catch(function(data){
            return data
        })
    });

    let ans = await Promise.all(res);
    ans.forEach(function(status){
        console.log(status)
    })
}

sendEmails(users);