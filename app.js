'use stict'

let todoArray = [];



const addButton = document.getElementById ('buttonAdd');
const list = document.querySelector ('.list-wrapper');

function generatorId() {
    return Date.now();
};


addButton.onclick = function() {
    const inputAdd = document.getElementById ('inputAdd').value;

    const newList = {
        id: generatorId(),
        text: inputAdd,
        status: false
    };

    todoArray.push(newList);
    console.log(todoArray);
    displayMessages(); 

};



function displayMessages() {
   
    let displayMessage = '';

    todoArray.map(function(item, index) {
        displayMessage += `
         <li class="list">
         ${item.text}
         <span><img src="/Icon/trash.svg" class="trash-icon" onclick="Delete(${index})"> <input class="style-checkbox" type="checkbox"></span>
         </li>
        `;


    });

    list.innerHTML = displayMessage;

};


function Delete(index) {
    todoArray.splice(index, 1);
    displayMessages();

};




// function displayMessages() {
   
//     if (inputAdd === '') {
//         console.log(1);
//     } else {
        
//         let displayMessage = '';

//         todoArray.map(function(item, index) {
//             displayMessage += `
//              <li class="list">
//              ${item.text}
//              <span><img src="/Icon/trash.svg" class="trash-icon" onclick="Delete(${index})"> <input class="style-checkbox" type="checkbox"></span>
//              </li>
//             `;
    
    
//         });
    
//         list.innerHTML = displayMessage;

//     }
// };


function Done() {
    
    
}

const checkBox = document.querySelector('.style-checkbox');
const listDone = document.querySelector('.list');

checkBox.addEventListener('click', ()=> {
listDone.classList.toggle('list-done')
})



const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'    
    },
    makeTest: function() {
        console.log('Test');
    }
};


option.makeTest();

const {name, height, color} = option;

console.log(color);

console.log(Object.keys(option));


// console.log(option.name);

// delete option.name;

// console.log(option);

let counter = 0;

for (let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
            counter++;
        } 
        
   } else {
        console.log(`Свойство ${key} имеет значение ${option[key]}`);
        counter++;

    }
}


console.log(counter);