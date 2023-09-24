const express = require('express');
const app = express();
const port = 3001;
const expresslayouts = require('express-ejs-layouts');
//^ hum layouts ka use kar rahe hain to jo bhi humari repeating cheeze hain wo layouts me 
//^ rahengi , jaise footer , header , hume files me sirf variable part likhna hai 
//^ body waala baaki sab apne aap layout.ejs se aa jaega 
app.use(expresslayouts);

//^ express.static is used to acess all the static files 
//^ these static files has media, js , css
app.use(express.static('./assets'))


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
})