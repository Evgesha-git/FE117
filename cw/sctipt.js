let days = 250;

let year = parseInt(days / 365);
let mount = parseInt(days / 31);
let week = parseInt(days / 7);
let hour = days * 24;
let min = hour * 60;
let sec = min * 60;

year < 1 ? console.log('Меньше года') : console.log(year);
mount < 1 ? console.log('Меньше месяца') : console.log(mount);


console.log(week);

let realMount = 0;

if (mount > 12){
    if (year > 1)realMount = mount - (12 * (year - 1));
    else realMount = mount - 12;
}else{
    realMount = mount;
}

// 10 задание
console.log(realMount)
switch (realMount){
    case 12:
    case 1:
    case 2:
        console.log('Зима')
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна')
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето')
        break;
    default:
        console.log('Осень')
}