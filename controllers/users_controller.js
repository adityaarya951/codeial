module.exports.profile = function(req,res){
    // agar /profile request hua hai to humari ejs file user_profile ko render kar do 
    res.render('user_profile',{
        title:'userProfile'
    });
}
module.exports.post = function(req,res){
    res.send("user is to be created");
} 

module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: "Codeial| Sign Up"
    })
}
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: "Codeial| Sign In"
    })
}

// this is the action taht we are going to take when the sighnup will be clicked on the sighnup page 
module.exports.create = function(req,res){
    // to do 
}
// this is the action we are going to take when we are going to click on the login page 
// when we will click on the login button we will creatye a session of the user with the browser 
module.exports.createSession = function(req,res){
    // to do later 
}
