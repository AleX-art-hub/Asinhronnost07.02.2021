//sluchaynoe chislo kotoroe bolshe 5 ot 0 do10
const getNumberBiggerThan5 = new Promise(someFun);
function someFun(resolve, reject) {
    const number = Math.random() * 10;
    console.log(number);
    if (number > 5) resolve(number);
    else {
        let numLess = new Error('Ooops! Number is less')
        reject(numLess)
    }
}
console.log(getNumberBiggerThan5);