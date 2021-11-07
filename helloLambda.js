import { reduce } from "fxjs/Strict"

const plus100 = x => x + 100
const isEven = x => x % 2 == 0

const mapTest = [1, 2, 3, 4].map(plus100)

console.log(mapTest)

const filterTest = [1, 2, 3, 4].filter(isEven)

console.log(filterTest)

const selfList = [
    {id: 1, info: 95},
    {id: 2, info: 80},
    {id: 3, info: 85},
    {id: 4, info: 75}
]

const reduceTest = reduce(function (data, one) {
    const score = one.info
    // console.log('=> ' + data.info)
    // console.log('---> ' + score)
    data.total = (data.info || 0) + score
    return data
}, {total: {}}, selfList)

console.log(reduceTest)
