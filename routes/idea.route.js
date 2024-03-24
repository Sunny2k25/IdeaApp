
const idea_controller =require("../controllers/idea.controller")

/**
 * Route for 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 */


module.exports = (app)=>{
    app.get("/ideaApp/api/v1/ideas",idea_controller.getAllideas)
    


    //Yaha pe path param ka concept aaya hain toh isko dhyan rakhna

    app.get("/ideaApp/api/v1/ideas/:id",idea_controller.getIdeaBasedOnId)
}

/**
 * Route for 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas/1
 */
