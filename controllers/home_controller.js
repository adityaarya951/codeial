//todo this file willbe containing all the functions , koi request aati hai 
//todo or uss request ke hisaab se jo bhi hum action lete hain wo saare action yaha pade hote hain 
//todo saare function hume yaha mill jaenege 

//^ hum export kar rahe hain home naam ki file 
module.exports.home = function(req,res){
    //* return res.send('<h1> express server is up and running</h1>')
    return res.render('home',{
        title: "Home"
    });
}