window.addEventListener("load", function () {
    let form = document.getElementById("new-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let input = document.getElementById("new-form-input").value;
        document.getElementById("new-form-input").value = "";
        let tasks = document.getElementById("tasks")
        console.log(input);
        input = input.trim();
        console.log(input);
        if (!input) {
            alert("Please Enter Task");
        } else {
            let box = document.createElement("div");
            box.classList.add("container")

            let box_content = document.createElement("div");
            box_content.classList.add("left")

            let box_content_input = document.createElement("input");
            box_content_input.setAttribute("type", "text");
            box_content_input.setAttribute("readonly", "readonly");
            box_content_input.classList.add("left-input-btn");
            box_content_input.setAttribute("value",input);
            box_content.appendChild(box_content_input);


            let box_buttons = document.createElement("div");
            box_buttons.classList.add("right");
            let box_buttons_edit = document.createElement("button");
            box_buttons_edit.classList.add("right-btn-edit");
            box_buttons_edit.innerText = "EDIT";
            let box_buttons_delete = document.createElement("button");
            box_buttons_delete.classList.add("right-btn-delete");
            box_buttons_delete.innerText = "DELETE";
            box_buttons.appendChild(box_buttons_edit);
            box_buttons.appendChild(box_buttons_delete);
            box.appendChild(box_content);
            box.appendChild(box_buttons);
            tasks.appendChild(box);


            box_buttons_edit.addEventListener("click",function(){
                if(box_buttons_edit.innerText.toLowerCase() == "edit"){
                    box_content_input.removeAttribute("readonly");
                    box_buttons_edit.innerText = "SAVE";
                }
                else{
                    box_content_input.setAttribute("readonly","readonly");
                    box_buttons_edit.innerText = "EDIT";
                }
            });
            box_buttons_delete.addEventListener("click",function(){
                tasks.removeChild(box);
            });
        }
    });
})