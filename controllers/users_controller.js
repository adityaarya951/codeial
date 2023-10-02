module.exports.profile = function(req,res){
    // agar /profile request hua hai to humari ejs file user_profile ko render kar do 
    res.render('user_profile',{
        title:'userProfile'
    });
}
module.exports.post = function(req,res){
    res.send("user is to be created");
} 