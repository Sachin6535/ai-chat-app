const express=require("express");
const app =express();
app.get("/", (req, res) => {
    res.send("AI Chat Backend is Running!");
});

app.listen(8080, () => {
    console.log("Server running on port 5000");
});