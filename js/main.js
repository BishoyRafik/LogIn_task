var userName = document.getElementById('userName'); //in signup paage
var userEmail = document.getElementById('userEmail'); //in signup paage
var userPass = document.getElementById('userPass'); //in signup paage
var email = document.getElementById('Email'); //in login page
var pass = document.getElementById('Pass'); //in login page
var allUsers = [];

function creatUser(){
    var user = {
        name : userName.value,
        email : userEmail.value,
        password : userPass.value,
    }
    allUsers.push(user);
    localStorage.setItem("user", JSON.stringify(allUsers));
    console.log(allUsers);
    open('index.html' , '_self');
}

function logIn(){
    // if(searchUser() == true){
        open('home.html', '_self');
        // putName();
    // }
    // else{
    //     console.log('Invalid Email or Pass');
    // }
}

function putName(){
    if(searchUser()){
    }
}

function searchUser(){
    for (var i =0; i < allUsers.length; i++){
        if(email.value == allUsers[i].email && pass.value == allUsers[i].password){
            return true;
        }else {
            return false;
        }
    }
}

function logOut(){
    open('index.html','_self')
}