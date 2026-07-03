function login(){
    let userName = document.getElementById("username").value;
    let password = Number(document.getElementById("password").value);
    
    if(userName === "Ameer" && password === 1234){
        window.location.href = "home.html";
    } else {
        window.alert("Invalid Password!");
    } 
}