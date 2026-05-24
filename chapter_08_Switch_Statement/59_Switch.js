let day = 2;
// 1 - mon, 2. - tue
//Switch uses **strict comparison (===)**. And break keyword is mandatory



switch (day) {
    case 1:
        console.log('Mon');
        break;
    case 2:
        console.log('Tue');
        let a = 10;
        let b = 30;
        console.log(a + b);
        break;
    case 3:
        console.log('Wed');
        break;
    case 4:
        console.log('Thur');
        break;
    case 5:
        console.log('Fri');
        break;
    case 6:
        console.log('Sat');
        break;
    case 7:
        console.log('Sun');
        break;
    default:
        console.log("No idea which day it is");
}
// switch (expression) {
//     case value1:
//         // code block
//         break;       // IMPORTANT: stops fall-through
//     case value2:
//         // code block
//         break;
//     default:
//         // runs if no case matches (optional)
// }