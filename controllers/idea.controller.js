/**
 * Write the logic to create the controllers for the idea resources
 */


const ideas = require("../models/ideas.model")

/**
 * Create the controller for fetching all the ideas 
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 * 
 * Return the list of all the ideas
 */


//yeh jo bhi function hain uska naam hain getAllideas and this is available everywhere
exports.getAllideas = (req,res)=>{

    //First read all the ideas from the idea model file

    //return all those idea

    res.status(200).send(ideas)  //Here 200 is http status code



}