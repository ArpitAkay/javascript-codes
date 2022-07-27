const express = require('express')
const app = express();
const port = 3000;
var bodyParser = require("body-parser");



var tasks = {
    task : [],
};


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended : true}));

// app.get("/", function (req,res){        //Controller function
//     res.render("pages/index", {name: "GeekyAnts"});
// });

app.get("/", function (req,res){
    res.render("pages/index", tasks);
});
app.post("/addTodo", (req,res) =>{
    tasks.task.push({
        caption: req.body.todo,
        isComplted: false,
    })
    res.redirect("/");
    // res.send("Hey"+req.body.todo);
});


// app.get('/', (req, res) => {
//   res.send("<html><h1>Hello World!  " +  Date.now() + "</h1></html>")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})