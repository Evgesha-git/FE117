// let a = 1;
// const b = 2;
// var c = 3;

// // b = 3;

// const obj = {
//     a: 1,
//     b: 2
// }

// console.table(obj);

// obj.a = 5;

// console.dir(obj);

// {
//     let a = 4;
//     var c = 10;
//     // console.log(a);
//     console.warn(c);
// }

// // console.log(a);
// console.error(c);

// var c = 15;
// console.log(c);

// console.log('2' + 2);

// let a = '1001011';

// console.log(Number(a));

// console.log(parseInt(a, 2));

// console.log(parseFloat(a));

// console.log(+a);

// let b = 11;

// console.log(String(b));

// console.log(b.toString());

// console.log(b + '');

let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + '3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;

console.log(`
a1 = ${a1},
a2 = ${a2},
a3 = ${a3},
a4 = ${a4},
a5 = ${a5},
a6 = ${a6},
a7 = ${a7},
a16 = ${a16},
a17 = ${a17},
a18 = ${a18},
`)

// 3

let width = '23см';
let height = '10см';
let SPryam = parseInt(width) * parseInt(height);

console.log(SPryam);

// 4

let h = '10m';
let VCilindra = parseInt(h) * a7;

console.log(VCilindra);

// 6

{
    let a = '5sm',
        b = '7sm',
        h = '10sm',
        STrap = ((parseInt(a) + parseInt(b)) / 2) * parseInt(h);
    
    let aN = a.split(/\D/)[0];
    let aS = a.split(/\d/).reverse()[0];
    console.table([aN, aS]);
    console.log(STrap);
}

// 7

{
    let s = 2000000;
    let p = 10;
    let years = 5;
    let rez = (s * (p / 100)) * years;
    console.log(rez);
}

// 9 

console.log(`
Бывало, спит у ног собака,
костер занявшийся гудит,
и женщина из полумрака
глазами зыбкими глядит.

Потом под пихтою приляжет
на куртку рыжую мою
и мне, задумчивая, скажет:

"А ну-ка, спой!.."- и я пою. 
`);

//('' undefined NaN null 0 false) = false

let x = 10;

if (x) console.log('правда');
else console.log('неправда');

x > 9 ? console.log('правда') : console.log('неправда');

function f(x){
    return x > 9 ? 'правда' : null;
    // if (x > 9){
    //     return 'правда';
    // }else{
    //     return 'неправда';
    // }
}