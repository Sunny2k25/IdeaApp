/**
 * Start the server
 */

const express = require('express')

const app = express()

app.listen(8000,()=>{
    console.log("App started at the port number ", 8000);

})

