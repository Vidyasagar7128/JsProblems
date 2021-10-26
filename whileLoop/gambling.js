var money = 100
var win = 0
var bet = 1
while (money > 0 && money <= 200) {
    let rand = Math.floor(Math.random() * 2)
    bet = bet + 1
    if (rand == 0) {
        win = win + 1
        money = money + 1
    } else {
        money = money + 1
    }
    if (money == 200) {
        break
    }
}
console.log(`${bet} Times Bet`)
console.log(`${win} Times Winner!`)
console.log(`${bet - win} Times Lose!`)
console.log(`${money} Reachead`)
