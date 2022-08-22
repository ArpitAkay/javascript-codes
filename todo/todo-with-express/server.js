const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended : true}));


var tasks = {
    task : [],
};

let flag = false;

// app.get("/", function (req,res){        //Controller function
//     res.render("pages/index", {name: "GeekyAnts"});
// });

app.get("/", function (req,res){
    res.render("pages/index",{'task' : tasks.task , 'flag' : flag});
});
app.post("/addTodo", (req,res) =>{
    let todo = req.body.todo;
    todo = todo.trim();
    if(todo){
        tasks.task.push({
            caption: todo,
            isComplted: false,
        });
        flag = false;
    }else{
        flag = true;
    };
    res.redirect("/");
    // res.send("Hey"+req.body.todo);
});


// app.get('/', (req, res) => {
//   res.send("<html><h1>Hello World!  " +  Date.now() + "</h1></html>")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})