var head = 0;
var tail = 0;
while (head <= 11 || tail <= 11) {
    var coin = Math.floor(Math.random() * 2);
    if (coin == 0) {
        head++;
    } else {
        tail++;
    }
    if (head == 11 || tail == 11) {
        break;
    }
}
console.log("Head counter : " + head);
console.log("Tail counter : " + tail);