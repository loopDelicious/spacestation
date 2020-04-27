var express = require("express");
var app = express();
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
    