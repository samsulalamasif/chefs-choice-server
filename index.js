const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
app.use(cors())

const chefs = require("./data/chefs.json")

app.get("/chefs", (req, res) => {
    res.send(chefs)
})
app.get("/chefs/:id", (req, res) => {
    const id = req.params.id
    const singleChef = chefs.find(chef => chef._id === id)
    res.send(singleChef)
})




app.get("/", (req, res) => {
    res.send("Chef's Choice Server Side Running")
})


app.listen(port, () => {
    console.log(`chefs choice server side: ${port}`);
})
