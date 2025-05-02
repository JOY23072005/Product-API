const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Product = require('./models/product.model.js')

const databaseUrl = process.env.DATABASE_URL;
const port = process.env.PORT;

mongoose.connect(databaseUrl).then(()=>{
    console.log("Connected to database!");
}).catch((err)=>{
    console.error("Not Connected!",err);
})

const app = express()
//middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}))//to accept form request

//routes
const productRoute = require('./routes/product.route.js')
app.use('/api/products',productRoute)

app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`);
});
app.get("/",(req,res)=>{
   res.send("Hello From Server JD"); 
});