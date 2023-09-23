const express = require('express');
const app = express();
const port = 3001;
//^ use of `` is called interpolarion , using interpolation u can keep writing the string 
//^ and then u can use ${} fro anything that needs to be evaluated , ${} from this browser ubderstands 
//^ that something has come to be evaluated 
app.listen(port, function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }
    console.log(`server is running on the port: ${port}`);
})