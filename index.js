// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config(
    {path:'./env'}
)


connectDB()

// import { Express } from 'express'
// const app = Express()

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("Error:",error)
//         throw err
//     }
// })()