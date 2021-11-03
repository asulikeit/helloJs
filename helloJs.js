const a = { "prop": 1 }
let b = {...a}
let c = {}
let d = Object.assign(c, a)

b.prop = 2
c.prop = 3
d.prop = 4

console.log(a)
console.log(b)
console.log(c)
console.log(d)

const aa = {
    "one": 1,
    "two": {
        "in": 2
    }
}

let bb = {...aa}
let cc = Object.assign({}, aa)
let dd = aa
bb.two.in = 3
console.log(aa)
console.log(bb)
console.log(cc)
console.log(dd)
