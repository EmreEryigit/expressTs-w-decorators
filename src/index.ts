import express from "express"
import cookieSession from "cookie-session"
import "./controllers/loginController"
import "./controllers/rootController"
import { AppRouter } from "./AppRouter"


const app = express()


app.use(express.urlencoded({extended: true}))
app.use(cookieSession({keys: ["Emre"]}))
app.use(AppRouter.getInstance())
app.listen(3000, () => {
console.log("listenin on 3000")
})
