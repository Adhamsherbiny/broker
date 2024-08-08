import { databaseConnet } from "./db.js";
import express from "express";
import cors from "cors"
const port = 5000
const app = express()

app.use(express.json())
app.use(cors())

app.get("/"  , (req , res)=>{
    res.json({msg: "hello wrold"})
})

app.post("/createpost" , (req , res)=>{
    const value = [
        req.body.pic , 
        req.body.type ,
        req.body.price ,
        req.body.phone ,
        req.body.adress ,
        req.body.area ,
        req.body.rooms , 
        req.body.bathrooms
    ]
    databaseConnet.query("INSERT INTO posts (pic, type, price, phone, adress, area ,rooms, bathrooms) VALUES (?)", [value] ,(err , result)=>{
        if (err) throw err
        console.log("Added New Post")
        res.json({msg:"Added New Post"})
    })
})

app.get("/showposts" , (req , res)=>{
    databaseConnet.query("SELECT * FROM posts" , (err , result)=>{
        if (err) throw err
        res.json({msg:"done" , status:200 , posts:result})
    })
})

app.listen(port , ()=>{
    console.log(`application is starting on port ${port}`)
})