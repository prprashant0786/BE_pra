import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

//For cors
app.use(cors())

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true , limit:"16kb"}))
app.use(cookieParser())

import userRouter from "./routes/user.routes.js"
import testRouter from "./routes/test.routes.js"

app.use("/api/v1/users", userRouter)
app.use("/api/v1/testAPI", testRouter)

export {app}