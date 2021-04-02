const express = require('express');
const { env } = require('node:process');
const app = express();
const server = require('http').createServer(app);

const PORT = env.PORT || 5510;
server.listen(PORT , () => {
    console.log("Server started on port " + PORT);
})