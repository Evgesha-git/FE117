//1 - задача

// let a = Number(prompt('Введите первое целое число')),
//     b = +prompt('Введите второе целое число'),
//     c = +prompt('Введите предпологаемый результат');

// let rez = a * b;

// if (rez === c){
//     alert('Верный результат');
// }else{
//     alert('Результат не верный');
// }

//2 - задача

// let hour = 8;

// let c = parseInt(hour / 15);

// switch (c){
//     case 3:
//         console.log('Четверная четверть');
//         break;
//     case 2:
//         console.log('Третья четверть');
//         break;
//     case 1:
//         console.log('Вторая четверть');
//         break;
//     default:
//         console.log('Первая четверть');
// }

//3 - задача

// let str = 'bbcde';

// if (str[0] === 'a'){
//     console.log('Да');
// }else{
//     console.log('Нет');
// }

//4 - задача

// let str = '523456'

// if (str[0] === '1' || str[0] === '2' || str[0] === '3'){
//     console.log('Да');
// }else{
//     console.log('Нет');
// }

//5 - задача

// let str = '123'

// let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);

// console.log(sum);

//6 - задача

// let a6 = 1;

// if (a6 === 0 || a6 === 2){
//     a6 += 7;
// }else{
//     a6 /= 10;
// }

// console.log(a6);

//7 - задача

// let name = 'Stive';

// let age = 14;

// if (0 <= age && age < 12){
//     console.log(`${name} is a child`);
// }else if(age >= 12 && age < 18){
//     console.log(`${name} is a teenager`);
// }else if (age >= 18 && age < 120){
//     console.log(`${name} is an adult`);
// }else{
//    console.log(`${name} Not Found`); 
// }

// if (age < 0 || age > 120){
//     console.log(`${name} Not Found`);
// }else {
//     switch (age){
//         case 0:
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//         case 11:
//             console.log(`${name} is a child`);
//             break;
//         case 12:
//         case 13:
//         case 14:
//         case 15:
//         case 16:
//         case 17:
//             console.log(`${name} is a teenager`);
//             break;
//         default:
//             console.log(`${name} is an adult`);
//     }
// }

// let name = 'Stive';

// let age = 34;

// (0 <= age && age < 12) ? 
//     console.log(`${name} is a child`) :
//         (age >= 12 && age < 18) ? 
//             console.log(`${name} is a teenager`) :
//                 (age >= 18 && age < 120) ? 
//                     console.log(`${name} is an adult`) :
//                     console.log(`${name} Not Found`);

//8 - задача - 9

// let a = +prompt();
// let b = +prompt();

// if (a > b){
//     alert(`Максимальное  a`);
// }else if (a === b){
//     alert('Числа равны')
// }else{
//     alert(`Максимальное b`);
// }

// a > b ? alert('a больше, чем b') : alert('a не больше, чем b');

//10 - задание

// let a = +prompt('Сторона a'),
//     b = +prompt('Сторона b'),
//     c = +prompt('Сторона c');

// if ((a + b) > c && (a + c) > b && (c + b) > a){
//     alert('Треугольник реален');
// }else{
//     alert('Нереальный треугольник');
// }

let str = '123';
let sum = 0;

// for (let i = 0; i < str.length; i++){
//     sum += Number(str[i]);
// }
let i = 0;

while (1){
    if (str[i] !== undefined){
        sum += Number(str[i]);
        i++;
    }else{
        break;
    }
    
}

console.log(sum)