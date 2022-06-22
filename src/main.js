let express = require("express")

let PORT = process.env.PORT || 8000;


let app = new express();

app.get("/hello", function(req,res){

    let name = req.query.name;
    if(name) {
        res.send(`hello there ${name}, how are you`);
    } else {
        res.send(`hello there stranger how are you`);
    }
    res.json("HELLO HOW ARE YOU")
})

app.listen(PORT, function(){
    console.log("app started on port", PORT)
})


