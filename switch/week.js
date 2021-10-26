var readlineSync = require('readline-sync')

var number = readlineSync.question('Enter Number: ')

switch (number) {
    case 1:
        console.log('SUNDAY')
        break;
    case 2:
        console.log('MONDAY')
        break;
    case 3:
        console.log('TUESDAY')
        break;
    case 4:
        console.log('WEDNESDAY')
        break;
    case 5:
        console.log('THIRSDAY')
        break;
    case 6:
        console.log('FRIDAY')
        break;
    case 7:
        console.log('SATURDAY')
        break;
    default:
        console.log('Single Digit only!')
        break;
}