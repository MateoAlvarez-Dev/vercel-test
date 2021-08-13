const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.get('/', (req, res) => {
    res.send("Youre in the home page");
})


const PORT = process.env.PORT || 3000;
server.listen(PORT , () => {
    console.log("Server started on port " + PORT);
})
