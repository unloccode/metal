const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//in app imports
const db = require('./config/db.config.js');
const Role = db.role;

const app = express();
const PORT = 8080;

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requests of content-type -application/json
app.use(bodyParser.json());
//parse requests of content-type -application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//simple route
app.get('/', (req, res)=>{
    res.json({message: 'I am Unloccode!'});
});

//server
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});

//some I N I T S
db.sequelize.sync({force: true}).then(()=>{
    console.log('Drop and Resync Db');
    initial();
});

function initial(){
    Role.create({
        id: 1,
        name: 'user'
    });
    Role.create({
        id: 2,
        name: 'moderator'
    });
    Role.create({
        id: 3,
        name: 'admin'
    });
}