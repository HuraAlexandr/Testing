//1* Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// function Checkage (age){
// let age_2 = 18;
// let age_3 = 60;
// if (age < age_2){
//     console.log(`You don't have access cause your age is ${age}. It's less then 18`)
// }
//     else if(age >= age_2 && age < age_3){  
//         console.log('Welcome')
//     }
//         else if(age  > age_3){
//             console.log('Keep calm and look Culture channel')
//         }
// else{
//     console.log('Technical work')
// }
// }
// Checkage(17);
// Checkage(19);
// Checkage(61);


//2*Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// const Checkage = function (age){
//     let age_max = 60;
//     let age_min = 18;
//     if ( typeof age == 'number'){
//         if (age < age_min){
//                 console.log(`You don't have access cause your age is ${age}. It's less then 18`)
//             }
//                 else if(age >= age_min && age < age_max){  
//                     console.log('Welcome')
//                 }
//                     else if(age  > age_max){
//                         console.log('Keep calm and look Culture channel')
//                     }
//             else{
//                 console.log('Technical work')
//     }
// }
// else{
//     console.log('Неверный тип данных')
// }}
// Checkage('txt');

//3* Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// const Checkage = function (age){
//     age =  Number(age);
//     let age_max = 60;
//     let age_min = 18;
// if ( !isNaN (age)){
//         if (age < age_min){
//                 console.log(`You don't have access cause your age is ${age}. It's less then 18`)
//             }
//                 else if(age >= age_min && age < age_max){  
//                     console.log('Welcome')
//                 }
//                     else if(age > age_max){
//                         console.log('Keep calm and look Culture channel')
//                     }
//             else{
//                 console.log('Technical work')
//     }
// }
// else{
//     console.log('Неверный тип данных')
// }}
// Checkage('22');

//4*  Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
let age_max = 60;
let age_min = 18;

const Checkage = function (age){
if ( !isNaN (age)){
        if (age < age_min){
                console.log(`You don't have access cause your age is ${age}. It's less then 18`)
                alert(`You don't have access cause your age is ${age}. It's less then 18`)
            }
                else if(age >= age_min && age < age_max){  
                    console.log('Welcome')
                    alert('Welcome')
                }
                    else if(age > age_max){
                        console.log('Keep calm and look Culture channel')
                        alert('Keep calm and look Culture channel')
                    }
            else{
                console.log('Technical work')
                alert('Technical work')
    }
}
else{
    console.log('Неверный тип данных')
    alert('Неверный тип данных')
}}
let agePrompt = prompt('Введите ваш возраст')
Checkage(agePrompt);