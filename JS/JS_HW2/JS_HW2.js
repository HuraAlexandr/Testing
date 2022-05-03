// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let result = 1;
for(let count = 1; count <= 10; count++){
    result *= 2;
}
console.log('Result is - ', result);


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
// 1 Вариант:
let result2 = 2;
function math (step){
for(let count = 1; count < step; count++){
    result2 *= 2;
}
console.log('Result is - ', result2);
}
math (10);

// 2 Вариант:
const power = function(num) {
    let result = 1;
    for(let i = 1; i <= num; i++){
        result = result *2
    }
    return result
}
console.log(power(10))

// 3 Вариант:
const power2 = function(num){
    return 2**num
}
console.log(power2(10))

// 4 Вариант:
const power3 = function(num){
    return Math.pow(2, num)
}
console.log(power3(10))



// 1**. Написал для браузера с кастомными значениями

// let count = 1;
// let number = prompt('Введите число');
// let step = prompt('Введите степень');
// let result3 = number;
// while(count < step){

//     result3 = result3 * number;

//     count++
// }
// alert('Result is - ' + result3);



// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

let smile = ':)';
let result4 = smile;
for(let count = 0; count < 5; count++){
  //
    console.log(result4)
    result4 = result4 + smile;
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 

//Вариант номер 1
function printSmile(stroka, numberOfRows){
    let result5 = stroka;
    for(let count = 0; count < numberOfRows; count++){
  
        console.log(result5)
        result5 = result5 + stroka;   // (либо) result += stroka;
    }
}
printSmile('abs', 3)

// Вариант номер 2
function printSmile2(stroka, numberOfRows){
    for (let i = 1; i<=numberOfRows; i++){
        console.log(stroka.repeat(i))
    }
}
printSmile2('*)', 6)



//3. Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.

function getWordStructure(word) {
    const vowels = 'aeiouy'.split('')
    const consonants = 'bcdfghjklmnpqrstvwxz'.split('')
    let numberOfVowels = 0;
    let numberOfConsonants = 0;
    for(char of word.toLowerCase()){
        if(vowels.includes(char)) numberOfVowels++;
        if(consonants.includes(char)) numberOfConsonants++;
    }
    console.log(`Слово ${word} состоит из ${numberOfVowels} гласных и ${numberOfConsonants} согласных букв`)
}
getWordStructure('Case')

//4. Написать функцию, которая проверяет, является ли слово палиндромом

//Вариант 1
function isPalindrom(word){
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('')
}
    console.log(`${isPalindrom('Abba') ? 'It is a palindrom' : 'It is not a palindrom'}`)

//Вариант 2

function isPalindrom2(str){
    str = str.toLowerCase()

    //find the length of a string
    const len = str.length;

    //loop through half of the string
    for (let i = 0; i < len / 2; i++){

        //check if first and last string are same
        if (str[i] !== str[len - 1 - i]){
                return 'It is not a palindrom';
        }
    }
    return 'It is a palindrom';
}
console.log(isPalindrom2('text'))

//Вариант 3

function isPalindrom3(word){
    let newStroka = '';
    for(i = word.length - 1; i>=0; i--){
        newStroka = newStroka + word[i];
    }
    if (word.toLowerCase() == newStroka.toLowerCase()){
        console.log(word, ' палиндром');
    } else {
        console.log(word, '  is not palindrom')
    }
}
isPalindrom3('ab1ba')
isPalindrom3('ab12ba')