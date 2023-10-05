const express =  require("express");
const bodyParser =  require("body-parser");
const ejs = require("ejs");

const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({encoded : true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    res.render("home.ejs");
});
app.get("/home",function(req,res){
    res.render("home.ejs");
});
app.get("/projects",function(req,res){
    res.render("project.ejs");
});
app.get("/project1",function(req,res){//not required
    res.render("project.ejs");
});
app.get("/project2",function(req,res){//not required
    res.render("project.ejs");
});
app.get("/community",function(req,res){
    res.render("community.ejs");
});
app.get("/feedback",function(req,res){//not required
    res.render("community.ejs");
});
app.get("/contributors",function(req,res){//required
    res.render("community.ejs");
});
app.get("/contact",function(req,res){//not required
    res.render("community.ejs");
});
app.listen(5000,function(){
    console.log("Server started");
})