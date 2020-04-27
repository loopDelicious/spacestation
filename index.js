var express = require("express");
var app = express();
var db = require("./model");

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/spacestation", (req, res, next) => {
    res.json([
        "wash the spaceship",
        "clean the space kitchen", 
        "look at the stars",
        "repair my space suit"
    ]);
});

app.get("/tasks", db.getTasks)
// app.get("/tasks/:id", db.getTaskById)
// app.post("/tasks", db.createTask)
// app.put("/tasks/:id", db.updateTask)
// app.delete("/tasks/:id", db.deleteTasks)
    