import process from "process"
import express from "express"
import { promTest } from "./hellopromise.js"
import { awaitTest } from "./helloawait.js"
import { callbackTest } from "./hellocallback.js"

const app = express()
const PORT = 3000

app.get("/plus", (req, res) => {
    const n = parseInt(req.query['number']) + 100
    res.json(n)
})

app.get("/double", (req, res) => {
    const n = parseInt(req.query['number']) * 2
    res.json(n)
})

app.get("/square", (req, res) => {
    const n = parseInt(req.query['number'])
    res.json(n * n)
})

app.listen(PORT, () => {
    if (process.argv.includes('prom')) {
        console.log('promise test')
        promTest(1)
    } else if (process.argv.includes('call')) {
        console.log('promise test')
        callbackTest(1)
    } else if (process.argv.includes('await')) {
        console.log('promise test')
        awaitTest(1)
    }
})
