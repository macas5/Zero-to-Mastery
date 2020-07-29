var database = [
    {
        username: "ayy",
        password: "lmao"
    }, {
        username: "bubble",
        password: "gum"
    }, {
        username: "kiec",
        password: "karys"
    },
];

var newsfeed = [
    {
        username: "fat",
        timeline: "albert"
    }
    ,{
        username: "big",
        timeline: "jimmy"
    },{
        username: "cool",
        timeline: "kidz"
} ];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password){
    for (var i = 0; i < database.length; i++){
        if((database[i].username === username) && (database[i].password === password)){
            return true;
        }
    }
    return false;
}

function signIn(username, password){
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username or password");
    }
}

signIn (userNamePrompt, passwordPrompt);