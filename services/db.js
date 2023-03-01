// Server mongodb Integration
//1 import mongoose
const mongoose = require('mongoose');
// 2 state connection string voia mongoose 
mongoose.connect('mongodb://localhost:27017/JabirDb',()=>{
    console.log('connected to mongo db');
} 
);

// Define bank db model
const User = mongoose.model('User', { //model creation - User
    //schema creation
    phone: Number,
    username: String,
    password: String,
    balance: Number,
    transaction: []
});


const Products = mongoose.model('Products', {
    // schema creation
    id:Number,
    item:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})
//export collection

const Wishlist = mongoose.model('wishlists',{
    id:Number,
    item:String,
    price:Number,
    description:String,
    image:String,
})

module.exports = {
    User,
    Wishlist,
    Products
}