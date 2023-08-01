const express = require('express');

const app = express();

app.listen(5500);

app.use(express.static("public"));

app.get('/', (req,res) => {
    console.log("it's working")
    res.sendFile("index.html", {root: __dirname});
}); 

app.get('/meditationcenter', (req,res) => {
    console.log('working');
    res.sendFile("meditationcenter.html", {root: __dirname});
});

app.get("/meditationroom", (req,res) => {
    res.sendFile("meditation-room.html", {root: __dirname});
});

