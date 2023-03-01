const { default: mongoose } = require('mongoose')
const db = require('./db')


// registration
const registration = (phone, username, password) => {

  return db.User.findOne({ phone })//data
    .then(user => {
      if (user) {
        return {
          status: 'false',
          statusCode: 400,
          message: 'user already registered'
        }
      }

      else {
        const newUser = new db.User({
          phone: phone,
          username: username,
          password: password,
          balance: 0,
          transaction: []
        })

        newUser.save();//data saved in mngodb

        return {
          status: 'true',
          statusCode: 200,
          message: 'register successfull'
        }
      }
    })
}


//login service
const login = (phone, pswd) => {

  return db.User.findOne({ phone,pswd })//data
  .then(user=>{
    if(user){
      currentUser = user.username
      currentphone = phone

      return{
        status: 'true',
        statusCode: 200,
        message: 'login successful',
        currentUser:currentUser,
        currentphone:currentphone
      }
    }else{
      return{
        status: 'false',
        statusCode: 400,
        message: 'invalid userdetails'
      }
    }

  })
}











const getProducts = () => {
  return db.Products.find().then(
       (result) => {
           if(result){
               return{
                   status:true,
                   statusCode:200,
                   products:result
               }
           }else{
               return{
                   status:false,
                   statusCode:402,
                   message:'Product not found' 
               }
           }
       }
   )
}

// addtowishlist details store to db

addtowishlist = (title,price,image,description) => {
  return db.Wishlist.findOne( {item:title} ).then(result => {
      if(result) {
          return{
              status:false,
              statusCode:400,
              message:"Product already added to wishlist"
          }

          
      }else{

          const newProduct = new db.Wishlist({ 
              
              item:title,
              price,
              image,
              description
          })

          newProduct.save()

          return{
              status:true,
              statusCode:200,
              message:'Product Added Successfully'
          }
      }

  })


}



module.exports ={ 
  registration,
  login,
  addtowishlist,
  getProducts,
 
}