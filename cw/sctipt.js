// let flag = true,
//     sum = 0,
//     i = 0;

// while (1){
//     let num = prompt();
//     if (num != 0 && num != '' && !isNaN(num)){
//         sum += Number(num);
//         i++;
//     }else if(isNaN(num)){
//         alert('Ввели нечисло');
//         continue;
//     }else{
//         break;
//     }
// }

// alert(sum);
// alert(i);
// alert(sum / i);

// let str = '4 98 4 6 1 -32 2131 4 65 4 3 5 7 89 7 10 1 36 8 57';
// let max = -Infinity;
// let min = Infinity;
// let buffer = '';

// for (let i = 0; i < str.length; i++){
//     if (str[i] !== ' '){
//         buffer += str[i];
//     }else{
//         if (+buffer > max) max = +buffer;
//         if (+buffer < min) min = +buffer;
//         buffer = '';
//     }
// }

// console.log(max);
// console.log(min);

// let arr = [
//     [1, 2],
//     [3, 4],
// ];

// for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }
// let i = 0;
// while (i < arr.length){
//     let j = 0;
//     while (j < arr[i].length){
//         console.log(arr[i][j]);
//         j++;
//     }
//     i++;
// }

// let arr = [];

// console.log(arr);
// arr.push(3);
// console.log(arr);
// arr.unshift(4);
// console.log(arr);
// arr.push(5);
// console.log(arr);
// let a = arr.shift()
// console.log(a, arr);
// let b = arr.pop();
// console.log(b, arr);

// let str = '4 98 4 6 1 -32 2131 4 65 4 3 5 7 89 7 10 1 36 8 57';
// let arr2 = str.split(' ');
// console.table(arr2);
// let str2 = arr2.join(' ! ')
// console.log(str2);

// let arr1 = [1, 2, 3],
//     arr2 = [4, 5, 6];

// console.log(arr1.concat(arr2.reverse()));

// let str = 'abcde';

// str = str.split('').reverse().join(', ');

// console.log(str);

// let str = '4 98 4 6 1 -32 2131 4 65 4 3 5 7 89 7 10 1 36 8 57';

// str = str.split(' ');

// console.log(str);
// let a = str.slice(2, 6);
// console.log(a, str);
// let b = str.splice(7, 6);
// console.log(b, str);

// console.log(str[str.length - 3]);

// for (let i in str){
//     console.log(str[i]);
// }

// for (let i of str){
//     console.log(i);
// }

// let s = str.forEach(function (element){
//     console.log(+element);
// });

// console.log(s);

// let s2 = str.map(function (element){
//     console.log(+element);
//     return +element
// });

// console.log(s2);

// let s = str.filter(function (element){
//     return +element > 0 && +element < 30
// })

// let s = str.find(function (element){
//     return +element === 4;
// })


// let s = str.every(function (element){
//     return +element > 0 && +element < 30;
// })

// let s = str.some(function (element){
//     return +element > 0 && +element < 30;
// })

// let num = str.reduce(function (acc, element){
//     if (+element > 0 && +element < 10){
//         acc.push(element)
//     }
//     return acc
// }, []);

// let num = str.reduceRight(function (acc, element){
//     if (+element > 0 && +element < 10){
//         acc.push(element)
//     }
//     return acc
// }, []);

// console.log(num)

let str = `у треугольника сумма любых двух сторон должна быть больше третьей. иначе две стороны просто «лягут» на третью и треугольника не получится.
пользователь вводит поочерёдно через prompt длины трех сторон. используя конструкцию if..else (один раз), напишите код, который должен определять, может ли существовать треугольник при таких длинах. т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной. чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.`;

str = str.split('. ');

for (let i = 0; i < str.length; i++){
    str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
}

str = str.join('. ');

console.log(str);