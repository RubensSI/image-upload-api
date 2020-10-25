const express =  require("express")
const morgar = require("morgan")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgar("dev"))

app.use(require("./routes"))

app.listen(3000)