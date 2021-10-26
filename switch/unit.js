var readlineSync = require('readline-sync')

var number = readlineSync.question('Enter Number: ')

switch (number.length) {
    case 1:
        console.log('UNIT')
        break;
    case 2:
        console.log('TEN')
        break;
    case 3:
        console.log('HUNDRED')
        break;
    case 4:
        console.log('THOUSAND')
        break;
    case 5:
        console.log('TEN THOUSAND')
        break;
    case 6:
        console.log('LACK')
        break;
    case 7:
        console.log('TEN LACK')
        break;
    case 8:
        console.log('CRORE')
        break;
    case 9:
        console.log('TEN CRORE')
        break;
    default:
        console.log('Single Digit only!')
        break;
}