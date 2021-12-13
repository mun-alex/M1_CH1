// function querySelectorCSS() {
//     let selInput = document.querySelector('input');
//     selInput.style.border = '2px solid red';
// }

// function querySelectorsCSS() {
//     let elements = document.querySelectorAll('.selector');
//     elements.forEach(element => {
//         element.setAttribute('placeholder', 'lesson 6');
//     });
// }

// function getElemId() {
//     let element = document.getElementById('5');
//     element.setAttribute('value', 'bitlab');
//     element.setAttribute('style', 'border: 4px solid;');

//     let text = document.getElementById('text');
//     text.innerText = 'lorem ipsum dfjld fdlhfsduadk flakfjak';
// }

// function getElemName() {
//     let elementsTwo = document.getElementsByName('inputSel');
//     elementsTwo.forEach(element => {
//         element.style.backgroundColor = 'red';
//     });
// }

// function getElemTag() {
//     let elementsThree = document.getElementsByTagName('button');
//     // console.log(elementsThree);

//     for(let i=0; i<elementsThree.length; i++) {
//         let element = elementsThree[i].style.color = 'blue';
//     }
//     // elementsThree.forEach(element => {
//     //     element.style.backgroundColor = 'yellow';
//     //     element.style.fontSize = '14px';
//     //     element.style.color = 'blue';
//     // });
// }

// function addNewElement() {
//     let newElement = document.createElement('button');
//     newElement.style.backgroundColor = 'yellow';
//     newElement.innerText = 'newButton';

//     let block = document.getElementById('buttons');
//     block.prepend(newElement);
// }

// function deleteContent() {
//     let content = document.getElementById('main');
//     content.remove();
// }

// function showInnerHTMLMain() {
//     let mainContent = document.getElementById('main');
//     mainContent.innerHTML = 'hello';

// }

// let startBtn = document.getElementById('start');

// function changeColor() {
//     startBtn.style.backgroundColor = 'red';
// }

// function defaultColor() {
//     startBtn.style.backgroundColor = 'white';
// }

// startBtn.addEventListener('click', querySelectorCSS);
// startBtn.addEventListener('click', querySelectorsCSS);
// startBtn.addEventListener('mouseover', changeColor);
// startBtn.addEventListener('mouseout', defaultColor);

// let number = 11;
// localStorage.setItem('someNumber', number);

let productItems = [
    {'id': '0', 'name': 'samsung', 'model': 'A5', 'price': '300'},
    {'id': '1', 'name': 'nokia', 'model': '3310', 'price': '120'},
    {'id': '2', 'name': 'xiaomi', 'model': 'mi11 Ultra', 'price': '1000'}
]

// localStorage.setItem('productItems', JSON.stringify(productItems));


// console.log(JSON.parse(localStorage.getItem('productItems')));

let shop = document.getElementById('shop');

for(let i = 0; i < productItems.length; i++) {
    console.log(productItems[i]);
    let shopItem = document.createElement('div');
    shopItem.setAttribute('class', 'shopItem');
    shopItem.innerHTML = 

    '<h6>' + productItems[i].name + '</h6>' +
    '<p>' + productItems[i].model + '</p>' +
    '<p>' + productItems[i].price + '</p>' +
    '<a id="' + productItems[i].id + ' "onclick="deleteItem(' + i + ')">Remove</a>';

    // let element = document.createElement('h6');
    // element.innerText = productItems[i].name;
    shop.append(shopItem);
}

function deleteItem(itemId) {
    productItems.splice(itemId, 1);
    console.log(productItems);
    // location.reload();
}

