
const express = require("express");
const bodyParser = require("body-parser");

const app = express(); 
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});  

app.post("/", function(req,res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send(`The result of your addition is ${result}`);
});

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server is up at ${port}`);
});

// const events = require('events');
// const util = require('util');

// let Person = function(name){
//     this.name = name;
// }

// util.inherits(Person, events.EventEmitter);

// let faith = new Person('faith');
// let jane = new Person('jane');
// let yusuf = new Person('yusuf');
// let nazih = new Person('nazih');

// let people = [faith, jane, yusuf, nazih];

// people.forEach(function(Person){
//     Person.on("speak", function(message){
//         console.log(Person.name + " said : " + message )
//     });
// });

// faith.emit("speak", "I love you Nazih");
// yusuf.emit("speak", "I want to play game");
// jane.emit("speak", " I want to get married soon");
// nazih.emit("speak", "i want to be the ambassador");