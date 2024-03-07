var err1 = document.getElementById('err1');
document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    login(username, password, display);
});
function login(user,pass,callback){
    var validuser = 'admin';
    var validpass = '12345';
    if (user == validuser && pass ==validpass){
        callback(true);
    }
    else{
        callback(false);
    }
}
function display(isLoggedIn){
    if(isLoggedIn){
        window.location.href = '/todo.html'; 
    }
    else
    {
        err1.innerText = 'Invalid username or password';
        err1.style.color = 'red';
    }
}

