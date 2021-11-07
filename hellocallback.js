import axios from "axios"

function double(num, func) {
    axios.get('http://localhost:3000/double?number=' + num)
    .then(function(res) {
        return func(res.data)
    })
}

function plus(num, func) {
    axios.get('http://localhost:3000/plus?number=' + num)
    .then(function(res) {
        return func(res.data)
    })
}

function square(num, func) {
    axios.get('http://localhost:3000/square?number=' + num)
    .then(function(res) {
        return func(res.data)
    })
}

export function callbackTest(args) {
    double(args, x => {
        plus(x, y => {
            square(y, z => {
                console.log(z)
            })
        })
    })
}
