function querySelectorCSS() {
    let selInput = document.querySelector('input');
    selInput.style.border = '2px solid red';
}

function querySelectorsCSS() {
    let elements = document.querySelectorAll('.selector');
    elements.forEach(element => {
        element.setAttribute('placeholder', 'lesson 6');
    });
}

function getElemId() {
    let element = document.getElementById('5');
    element.setAttribute('value', 'bitlab');
    element.setAttribute('style', 'border: 4px solid;');

    let text = document.getElementById('text');
    text.innerText = 'lorem ipsum dfjld fdlhfsduadk flakfjak';
}

function getElemName() {
    let elementsTwo = document.getElementsByName('inputSel');
    elementsTwo.forEach(element => {
        element.style.backgroundColor = 'red';
    });
}

function getElemTag() {
    let elementsThree = document.getElementsByTagName('button');
    // console.log(elementsThree);

    for(let i=0; i<elementsThree.length; i++) {
        let element = elementsThree[i].style.color = 'blue';
    }
    // elementsThree.forEach(element => {
    //     element.style.backgroundColor = 'yellow';
    //     element.style.fontSize = '14px';
    //     element.style.color = 'blue';
    // });
}

function addNewElement() {
    let newElement = document.createElement('button');
    newElement.style.backgroundColor = 'yellow';
    newElement.innerText = 'newButton';

    let block = document.getElementById('buttons');
    block.prepend(newElement);
}

function deleteContent() {
    let content = document.getElementById('main');
    content.remove();
}