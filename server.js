const express = require('express');
const app = express();
const PORT = 3000;

//simple route
app.get('/', (req, res)=>{
    res.json({message: 'I am Unloccode!'});
});

//server
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});