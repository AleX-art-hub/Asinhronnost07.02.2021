/*
const square = document.getElementById('item');
let deg=0;

//etInterval(function(){
    //square.style.transform= `rotate(${++deg}deg)`
//},1000/60);


setInterval(rotateFun, 1000/60);

function rotateFun(){
    square.style.transform = `rotate(${++deg}deg)`
}

const button = document.getElementsByTagName('button')[0];
button.onclick = function(){
    alert('Hello');
};*/

/*
const store = {
    users: null,
    isFetching: false,
    error: null,
};

const request = new XMLHttpRequest();

const button = document.getElementById("loadButton");
button.onclick = function () {
    request.open("GET", "./data/users.json", true);
    request.send();

}

request.onloadstart = function () {
    store.isFetching = true;
};

request.onload = function () {
    store.isFetching = false;
    if (this.status >= 200 && this.status < 300) {
        store.users = JSON.parse(this.responseText);
    } else {
        store.error = new Error(`${this.status} : ${this.statusText}`)
    }
};
console.log(store);
*/
/*
//tak kak nizhe namnogo bistree i proshche chem sverhu
fetch('../data/users.json').then(onLoadUsersResolve).catch(onLoadUsersReject);
function onLoadUsersResolve(response) {
    console.log(response);
    const result = response.json();
    console.log(result);
}
function onLoadUsersReject(response) {
    console.log(response);
}*/

//PROMISE
let isMoneyEnough = true;

let buyNewCar = new Promise(
    function (resolve, reject) {
        if (isMoneyEnough) {
            let newCar = { model: 'reno Kengo', color: 'black', year: 1984, price: 500 }
            resolve(newCar);
        } else {
            let reason = new Error('to be continue...');
            reject(reason)
        }
    }
);

let getCar = function () {
    buyNewCar
        .then(function (result) {
            console.log(result);
        })
        .catch(function (error) {
            console.log(error.message);
        });
};
getCar();

//async-await - vizov function asinhronno
async function getCar{
    try {
        let newCar = await buyNewCar;
    } catch (error) {
        console.log(error.message);
    }
}

