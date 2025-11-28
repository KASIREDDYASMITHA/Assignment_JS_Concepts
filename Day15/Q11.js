function displayMessage(name){
    console.log(`Hello,${name}!`);
}
function getUserInput(callback)
{
    setTimeout(()=>
    {
        let username="Alice";
        callback(username);
        console.log("")
    },1000);
}
getUserInput(displayMessage);