let numberArray = [45,2,37,4,58,6];
console.log(numberArray);
let numberArrayTwo = Array(5,6,7,8);
console.log(numberArrayTwo);
console.log();
let fruits = ['Apple', 'Orange', 'Banan'];
console.log(fruits);
// let user = [1, 'Serik', 'Almaty', 23, true];
// console.log(user);


// numberArray.push(parseInt(prompt('insert element')) );
// console.log(numberArray);
// numberArray.pop();
// console.log(numberArray);
// numberArray.unshift(parseInt(prompt('insert element')));
// console.log(numberArray);
// numberArray.shift();
// console.log(numberArray);
// numberArray = numberArray.sort();
let arr = numberArray.sort();
console.log(arr);
console.log(fruits.sort());

let person = {
    name: 'Sergey',
    surname: 'Ivanov',
    bYear: 1965,
    job: 'Java developer',
    isMaried: false,
    
    getAge: function() {
        return age(this.bYear);
    }
}

function age(birthYear) {
    let year = 2021;
    return year - birthYear;
}

console.log(person.job);
console.log('is married? ' + person.isMaried);
console.log(person.getAge());

let users = [
    {'name':'Ivan', 'surname':'Sidorov', 'email':'ivan@mail.kz', 'pass':'qwerty'},
    {'name':'Almaz', 'surname':'Ivanov', 'email':'almaz@mail.kz', 'pass':'qwerty'},
    {'name':'Ilon', 'surname':'Mask', 'email':'ilon@mail.kz', 'pass':'qwerty'}
]

console.log(users);


// function searchUser() {
//     let email = prompt('insert user email');
//     let user;
//     for(let i=0; i<users.length; i++) {
//         if(users[i].email === email) {
//             user = users[i];
//             alert(user.name);
//             console.log(user);
//             break;
//         }
//     }
//     if(user === undefined) {
//         alert('such email not found');
//         console.log('such email not found');}
// }

// searchUser();

// while(true) {
//     let newElement = parseInt(prompt('insert number'));
//     if(newElement === 0) {
//         break;
//     }
//     numberArray.push(newElement);
//     console.log(numberArray);
// }

function task21() {
    let a = parseInt(prompt('insert a'));
    let b = parseInt(prompt('insert b'));
    let result = 1;

    for(let i = 0; i < b; i++) {
        result = result * a;
    }

    console.log(result);
}
task21();



