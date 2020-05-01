const express = require("express")
const app = express()
const port = 3000
const db = require("./model")

const bodyParser = require('body-parser')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.get("/spacestation", (req, res, next) => {
    res.json([
        "wash the spaceship",
        "clean the space kitchen",
        "look at the stars",
        "repair my space suit"
    ])
})

app.get("/tasks", db.getTasks)
app.get("/tasks/:id", db.getTaskById)
app.post("/tasks", db.createTask)
app.put("/tasks/:id", db.updateTask)
app.delete("/tasks/:id", db.deleteTask)
