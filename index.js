const writeCards = (array, event) => {
    const cards = []
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}
const countDown = number => {
   while (number >= 0) {
       console.log(number)
       number--
   }
}