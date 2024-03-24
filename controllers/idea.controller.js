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


/**
 * Controller that fetch the idea based on the id
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas/2
 * 
 */

exports.getIdeaBasedOnId =(req,res)=>{


    //We need first read the idea id from the req param

    idea_id = req.params.id

    //Using id check if the idea with that id is present 

    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
    }else{
        res.status(404).send({
            error : "Idea is not present by this id!"
        })
    }
}


/**
 * Controller to create the new idea
 */

exports.createIdea = (req,res) => {

    idea_object = req.body
    id++
    idea_object["id"] = id
    ideas[id] = idea_object

    //Add the new object provided in the ideas object

    //Return the response
    res.status(201).send(idea_object)
}
