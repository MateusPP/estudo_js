const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao = 1.25
const avaliacao2 = 9.25
console.log(Number.isInteger(avaliacao))

const total = peso1 * avaliacao + peso2 * avaliacao2
const media = total/2

console.log(media, media.toFixed(1))
console.log(media.toString())
console.log(media.toString(2))
console.log(typeof media)

console.log(7/0)
console.log("10"/2)
console.log("show" * 2)
console.log(0.1 + 0.7)
console.log((15.48575).toFixed(2))

