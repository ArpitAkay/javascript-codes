let form = document.getElementById("new-form");
let ls = localStorage.getItem("todo");
console.log(ls)
let todo = ls ? JSON.parse(ls) :[];

form.addEventListener("submit",function(event){
    event.preventDefault();
    let inputValue = document.getElementById("new-form-input").value;
    console.log(inputValue);
    if(inputValue == ""){
        return alert("Please enter the task");
    };
    todo.push(inputValue);
    localStorage.setItem("todo",JSON.stringify(todo));
    location.reload();
});
todo.map((data,index) =>{
    document.getElementById("tasks").innerHTML += `
    <div class="container">
        <div class="left">
            <input type="text" class="left-input-btn"  id="text${index}" value="${data}" readonly="readonly">
        </div>
        <div class="right">
            <input type="checkbox"           id="completed${index}" onclick="complete(${index})"/>
            <button class="right-btn-edit"   id="edit${index}" onclick="edit(${index})">Edit</button>
            <button class="right-btn-edit"   id="save${index}" style="display:none" onclick="save(${index})">Save</button>
            <button class="right-btn-delete" id="right-btn-delete" onclick="del(${index})">Delete</button>
        </div>
    </div>
    `;
});
function complete(e){
    let checkBox = document.getElementById("completed"+e);
    console.log(checkBox);
    let text = document.getElementById("text"+e);
    console.log(text);
    if(checkBox.checked == true){
        text.style.textDecoration = "line-through";
        text.style.color = "red";
    }
    else{
        text.style.textDecoration = "none";
        text.style.color = "black";
    }
}
function edit(e){
    let text = document.getElementById("text"+e).removeAttribute("readonly");
    document.getElementById("edit"+e).style.display = "none";
    document.getElementById("save"+e).style.display = "inline-block";
}
function save(e){
    let text = document.getElementById("text"+e).value;
    console.log(text);
    if(text == ""){
        alert("Please enter some task");
    }
    else{
        for(let i=0;i<todo.length;i++){
            if(i==e){
                todo[e] = text;
            }
        }
        localStorage.setItem("todo",JSON.stringify(todo));
        document.getElementById("edit"+e).style.display = "inline-block";
        document.getElementById("save"+e).style.display = "none";
        document.getElementById("text"+e).setAttribute("readonly","readonly");
    }
}
function del(e){
    let deleted = todo.filter((data,index)=>{
        return index!=e;
    });
    localStorage.setItem("todo",JSON.stringify(deleted));
    location.reload();
}
