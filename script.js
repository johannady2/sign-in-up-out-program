var database =
[
    {
        username:"andrei",
        password:"supersecret"
    }
];

var newsFeed =
[
    {
        username: "bobby",
        timeline: "am tired"
    },
    {
        username: "sally",
        timeline: "am hungry..."
    },
];

var isSomeoneSignedIn = false;
var currentUser = "";



function signInPrompt()
{
    if(isSomeoneSignedIn === false)
    {
        var userNamePrompt = prompt("What\'s your username?");
        var passWordPrompt = prompt("What\'s your password?");

        signIn(userNamePrompt,passWordPrompt);  
    }
    else
    {
        console.log("current user must sign out first.");
    } 
}

function isUserValid(isUser, isPass)
{
    for (i = 0; i < database.length; i++)
    {
        if(isUser === database[i].username && isPass=== database[i].password)
        {
            console.log(isUser + " matches " + database[i].username);
            console.log(isUser + " is a valid user");
            return true;
        }
        else
        {
            console.log(isUser + " does not match " + database[i].username);
            console.log(isUser + " is an invalid user");
        }
    }
    return false
}

function signIn(user, pass)
{

    if(isUserValid(user,pass))
    {
        isSomeoneSignedIn = true;
        currentUser = user;
        console.log("Welcome, " + user);
        console.log(newsFeed);
    }
    else
    {
        console.log(user + " and/or " + pass + " is wrong!");
    }

}

function signOut()
{
    console.log("Goodbye " + currentUser);
    currentUser = "";
    isSomeoneSignedIn = false;
}

function signUp(newuser,newpass)
{

    if(isSomeoneSignedIn === false)
    {
        var databaselength = database.length;
        
        database[databaselength] ={username: "", password:""};
        database[databaselength].username = newuser;
        database[databaselength].password = newpass;
    }
    else
    {
        console.log("current user must sign out first.");
    }
}

