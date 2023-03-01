// server creation

// 1)Import Express

const express = require('express')

// import dataservices
const dataservices = require('./services/data.service')

// import cors
const cors = require('cors');


// 2)create a application using express

const app = express()

// Give command to share data via cors


// to parse json from request body
app.use(express.json())

app.use(cors({
    origin:'http://localhost:4200'
}))

// create a port number

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})


// API Request
// registration request
app.post('/registration',(req,res)=>{
    console.log(req.body);
    dataservices.registration(req.body.phone,req.body.username,req.body.password)//data
    .then(result=>{
    res.status(result.statusCode).json(result)
})
})


// login request
app.post('/login',(req,res)=>{
    console.log(req.body);
    dataservices.login(req.body.phone,req.body.password)//data
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//API call to get all products

app.get('/all-products',(req,res)=>{
    dataservices.getProducts().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//Api call to addto wishlist

app.post('/addtowishlist',(req,res)=>{
    dataservices.addtowishlist(req.body.title,req.body.price,req.body.image,req.body.description).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
    })

//Api call to getwishlist

app.get('/getwishlist'),(req,res)=>{
    dataservices.getwishlist().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
    }


