/* IMPORT START */
const express=require("express");
const app=express();

const fileUpload=require("express-fileupload");
const cookieParser=require("cookie-parser");
require("dotenv").config();
const {dbConnect}=require('./config/connectDataBase');

const UserRoute=require("./routes/userRoutes")


/*** IMPORT END ** */

//connect database
dbConnect();

app.use(express.json());
app.use(cookieParser());

//file upload middleware
app.use(
    fileUpload({
         useTempFiles:true,
         tempFileDir:"/tmp"
    })
)

//mounts routs
app.use("/api/v1/auth",UserRoute);

app.listen(process.env.PORT,()=>{
    console.log(`your server is running on on port :${process.env.PORT}`);
    return `<h1>Hellowworld </h1>`
});