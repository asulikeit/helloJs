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

export async function awaitTest(x) {
    const first = await double(x)
    const second = await plus(first)
    const third = await square(second)
    console.log(third)
}
