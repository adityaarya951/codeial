module.exports.profile = function(req,res){
    res.render('user_profile',{
        title:'userProfile'
    });
}
module.exports.post = function(req,res){
    res.send("user is to be created");
} 