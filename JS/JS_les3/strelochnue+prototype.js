function yolochka1(item_1, item_2){

    let mass = 'Hello!!';
    console.log(mass, item_1, item_2)
}

// yolochka1(11, 22)

function f1(){
    console.log()
}


let t1 = 10;
let t2 = 20;

let t11 = 50;
let t22 = 100;

let f11 = () => {console.log()} // - равносильная запись к 9-11 строке

let f22 = (t1, t2) => {console.log(`Sum = ${t1 + t2}`)}

let f33 = (t1 < t2) ?
    (t11, t22) => console.log('order =' , t11 + t22) : // если правда
    (t11, t22) => console.log('order =' , t11 - t22) ; // если ложь

f33(t11, t22)

function yolochka33(){};

yolochka33.prototype.fast = function(){
    console.log('Fast !!')
}
yolochka33.prototype.green = function (sun, co2){
    console.log('Green ==', sun, '+', co2)
}
yolochka33.prototype.shishki = function(){
    console.log('Shishki = yolki')
}

let forest = new yolochka33()

forest.fast()
forest.green(4500, 50) 
forest.shishki()