import axios from "axios"

function double(num) {
    return new Promise(function(resolve, reject) {
        axios.get('http://localhost:3000/double?number=' + num)
        .then(function(res) {
            resolve(res.data)
        })
    })
}

function plus(num) {
    return new Promise(function(resolve, reject) {
        axios.get('http://localhost:3000/plus?number=' + num)
        .then(function(res) {
            resolve(res.data)
        })
    })
}

function square(num) {
    return new Promise(function(resolve, reject) {
        axios.get('http://localhost:3000/square?number=' + num)
        .then(function(res) {
            resolve(res.data)
        })
    })
}

export function promTest(x) {
    double(x)
    .then(x => plus(x))
    .then(x => square(x))
    .then(x => console.log(x))
}
