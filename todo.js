var para = document.getElementById('new');
var table = document.getElementById('todo-list');
var completedCheckboxes = 0;

function caller(){
    var obj = new XMLHttpRequest();
    obj.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            var output = "";
            for (let i=0;i<data.length;i++){
                output += '<li>';
                output += '<input type="checkbox" id="todo_' + i + '">';
                output += '<label for="todo_' + i + '">' + data[i].title + '</label>';
                output += '</li>';
            }
        para.innerHTML = '<ul>' + output + '</ul>';
        checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(function (checkbox) {
                checkbox.addEventListener('change', function () {
                    if (this.checked) {
                        completedCheckboxes++;
                        if (completedCheckboxes === 5) {
                            // Resolve the promise when 5 checkboxes are checked
                            resolvePromise();
                        }
                    } else {
                        completedCheckboxes--;
                    }
                });
            });

    }
    };
obj.open('GET','https://jsonplaceholder.typicode.com/todos',true);
obj.send();
}

function resolvePromise() {
    return new Promise(function (resolve, reject) {
        alert("Congrats. 5 Tasks have been Successfully Completed");
        resolve();
    });
}

caller();





function logout(){
    window.location.href = "login.html";
}
