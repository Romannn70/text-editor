let boxUp = document.querySelector('.boxUp');
let editButton = document.querySelector('.edit');
let textArea = document.querySelector('.textarea');
let saveButton = document.querySelector('.save');
let styleButton = document.querySelector('.buttonStyle');
let form = document.querySelector('.form1');
let Col = document.querySelector('.color');


editButton.addEventListener('click', function () {
    boxUp.innerHTML;
    textArea.value = boxUp.innerHTML;
    document.querySelector('.boxArea').style.display = 'block';
    document.querySelector('.sytyleBox').style.display = 'none';
})

saveButton.addEventListener('click', function () {
    boxUp.innerHTML = textArea.value;
    document.querySelector('.boxArea').style.display = 'none';
})

styleButton.addEventListener('click', function () {
    document.querySelector('.boxArea').style.display = 'none';
    document.querySelector('.sytyleBox').style.display = 'block';
    document.querySelector('.colBox').style.display = 'none';
    document.querySelector('.colorBox').style.display = 'none';
})

form.addEventListener('click', function (event) {
    if (event.target.name == 'fontSize') {
        boxUp.style.fontSize = event.target.value;
    } else if (event.target.name == 'fontFamily') {
        boxUp.style.fontFamily = event.target.value;

    } else if (event.target.name == 'fontWeight') {
        if (event.target.checked) {
            boxUp.style.fontWeight = event.target.value
        } else {
            boxUp.style.fontWeight = 'normal';
        }
    } else if (event.target.name == 'fontStyle') {
        if (event.target.checked) {
            boxUp.style.fontStyle = event.target.value
        } else {
            boxUp.style.fontStyle = 'normal';
        }
    } else if (event.target.name == 'color') {
        document.querySelector('.sytyleBox').style.display = 'flex'
        document.querySelector('.colorBox').style.display = 'flex'
        document.querySelector('.colBox').style.display = 'none'
    }
})

let CT = document.querySelectorAll('.colorText');
for (let i = 0; i < CT.length; i++) {
    CT[i].onclick = function () {
        boxUp.style.color = CT[i].textContent;
        document.querySelector('.colorBox').style.display = 'none';
    }
}

let BC = document.querySelector('.background');

BC.addEventListener('click', function () {
    document.querySelector('.sytyleBox').style.display = 'flex'
    document.querySelector('.colBox').style.display = 'flex';
    document.querySelector('.colorBox').style.display = 'none';
})
let co = document.querySelectorAll('.co');
for (let i = 0; i < co.length; i++) {
    co[i].onclick = function () {
        boxUp.style.background = co[i].textContent;
        document.querySelector('.colBox').style.display = 'none'

    }
}

let addButton = document.querySelector('.add');
addButton.addEventListener('click', function () {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.container2').style.display = 'block';
    document.querySelector('.form3').style.display = 'none';

})

let list = document.querySelector('.list');

list.addEventListener('click', function () {
    document.querySelector('.form2').style.display = 'block';
    document.querySelector('.form3').style.display = 'none';

})

let countLi = document.querySelector('.countLi');
let f2 = document.querySelector('.form2');
let CrList = document.querySelector('.createList');
let ulCount = null;
let count = 1;
let ulMark;
let myList = null;

f2.addEventListener('change', function (event) {
    if (event.target.name == 'countLi') {
        ulCount = event.target.value;
    }
    if (event.target.name == 'typeOfMarks') {
        ulMark = event.target.value;
    }
})



CrList.addEventListener('click', function () {
    myList = document.createElement("ul");
    myList.type = ulMark;
    for (let i = 0; i < ulCount; i++) {
        myList.innerHTML = `<li>item ${count++}</li>`;
        textArea.value += myList.outerHTML;
    }
    document.querySelector('.container2').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
})

let table = document.querySelector('.table');
table.addEventListener('click', function () {
    document.querySelector('.form2').style.display = 'none';
    document.querySelector('.form3').style.display = 'block';

})



let crTable = document.querySelector('.createTable');
let f3 = document.querySelector('.form3');
let tr = null;
let td = null;
let widthTD = null;
let heightTD = null;
let widthBorder = null;
let typeBorder = null;
let colorBorder = null;
let myTable = null;

f3.addEventListener('change', function (event) {
    if (event.target.name == 'countTR') {
        tr = event.target.value;
    }
    else if (event.target.name == 'countTD') {
        td = event.target.value;
    }
    else if (event.target.name == 'widthOfTD') {
        widthTD = event.target.value + 'px';
    }
    else if (event.target.name == 'heightOfTD') {
        heightTD = event.target.value + 'px';
    }
    else if (event.target.name == 'widthOfBorder') {
        widthBorder = event.target.value + 'px';
    }
    else if (event.target.name == 'typeOfborder') {
        typeborder = event.target.value;
    }
    else if (event.target.name == 'colorOfborder') {
        colorBorder = event.target.value;
    }

})
let myData = null;
let myRow = null;
crTable.addEventListener('click', function () {
    myTable = document.createElement("table");
    myTable.style.borderColor = colorBorder;
    myTable.style.borderStyle = typeborder;
    myTable.style.borderWidth = widthBorder;


    for (let i = 0; i < tr; i++) {
        myRow = myTable.insertRow();
        for(let j = 0; j < td; j++){
            if(i == tr && j == td){
                break;
            }
            else{
                myData = myRow.insertCell();
                myData.appendChild(document.createTextNode('TD'));
                myData.style.width = widthTD;
                myData.style.height = heightTD;
                myData.style.borderWidth = myTable.style.borderWidth;
                myData.style.borderColor = myTable.style.borderColor;
                myData.style.borderStyle = myTable.style.borderStyle;
            }
        }
    }
    textArea.value += myTable.outerHTML;

    document.querySelector('.container2').style.display = 'none';
    document.querySelector('.container').style.display = 'block';

})