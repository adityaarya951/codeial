//^ this file will be having all the routes, matlab ki iss document(routes) ke andar 
//^ saare routes hum daal denege 
const express = require("express");
const router = express.Router();

//^ jo bhi file same directory me upar hoti hai usko hum ../ use karke karte hain
const homeController = require('../controllers/home_controller');

console.log('router loaded');
//^ agar bhumare paas request '/' (root) ki aa rahi hai to controllers me jake home function ko chala do
//^ home wala action le do , humne home apne controllers me bana rakha hai jo ki ek action hai 
//^ function hai 
//^ router.get('/') ye sirf home page ke liye baaki ke liye we use router.use("/routername",'./routerfile');

router.get('/', homeController.home);

//^ agar users se related humari koi bhi req hai to use hum users waale 
//^ route pe bhej denge , humare users se related kaafi cheeze ho sakti hain kyunki 
//^ profile dekhna , age dehna , profile pic dekhna , to wo saare ke saare 
//^ users se related humare saare routes alag se ek file hai users naam ki 
//^usme pade hain 
//^ to agar /users waali req aati hai to ./users pe chale jao 
router.use('/users', require('./users'));
module.exports = router;