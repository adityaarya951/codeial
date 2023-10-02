const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 3001;
const expressLayouts = require('express-ejs-layouts');
const db = require("./config/mongoose");
//^ hum layouts ka use kar rahe hain to jo bhi humari repeating cheeze hain wo layouts me 
//^ rahengi , jaise footer , header , hume files me sirf variable part likhna hai 
//^ body waala baaki sab apne aap layout.ejs se aa jaega 

// we will be putting the data we get in the post request in the body and will directly put into the db
app.use(express.urlencoded());

app.use(cookieParser());
//^ express.static is used to acess all the static files 
//^ these static files has media, js , css
app.use(express.static('./assets'))
// we are using this because we will be having the css files of each file and we dont want that link of the 
// file to be shown in the body of the file , we want it to be in the hgead and for that we use this middleware 
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//^ we will be using express router for managing all our routes
//^ humari koi bhi req hogi wo seedha routes pe jaegi 
app.use('/', require('./routes'));

//^ when we have case sensitive routes we use app.set , else app.use
app.set('view engine', 'ejs');
app.set('views', './views');

//^ use of `` is called interpolarion , using interpolation u can keep writing the string 
//^ and then u can use ${} fro anything that needs to be evaluated , ${} from this browser ubderstands 
//^ that something has come to be evaluated 
app.listen(port, function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }
    console.log(`server is running on the port: ${port}`);
});