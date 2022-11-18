

const giveRandom = (array) => {
    if (array.length) {
        const random = Math.floor(Math.random() * array.length);
        const el = array.splice(random, 1)[0];
        return el;
    }
};

class card {
    constructor(id, color) {
        this.id = id;
        this.color = color;
    }
}

function StartUp() {
    document.body.innerHTML = '';
    window.sessionStorage.clear;
    for (var x = 1; x < 4; x++) {
        if (x == 1) {
            for (var y = 1; y < 5; y++) {
                var newBtn = document.body.appendChild(document.createElement('button'));
                newBtn.style.height = 150 + "px";
                newBtn.style.width = 100 + "px";
                newBtn.type = "submit";
                newBtn.id = "btn" + y;
                newBtn.value = y;
                newBtn.className = "btn"
                newBtn.style.backgroundColor = 'salmon'
                newBtn.style.margin = 2 + "px";
                newBtn.setAttribute("onclick", "pickCard("+y+')')
            }
            var lineBreak = document.createElement("br");
            document.body.appendChild(lineBreak);
        }
        if (x == 2) {
            for (var y = 5; y < 9; y++) {
                var newBtn = document.body.appendChild(document.createElement('button'));
                newBtn.style.height = 150 + "px";
                newBtn.style.width = 100 + "px";
                newBtn.type = "submit";
                newBtn.id = "btn" + y;
                newBtn.value = y;
                newBtn.className = "btn"
                newBtn.style.backgroundColor = 'salmon'
                newBtn.style.margin = 2 + "px";
                newBtn.setAttribute("onclick", "pickCard(" + y + ')')
            }
            var lineBreak = document.createElement("br");
            document.body.appendChild(lineBreak);
        }
        if (x == 3) {
            for (var y = 9; y < 13; y++) {
                var newBtn = document.body.appendChild(document.createElement('button'));
                newBtn.style.height = 150 + "px";
                newBtn.style.width = 100 + "px";
                newBtn.type = "submit";
                newBtn.id = "btn" + y;
                newBtn.value = y;
                newBtn.className = "btn"
                newBtn.style.backgroundColor = 'salmon'
                newBtn.style.margin = 2 + "px";
                newBtn.setAttribute("onclick", "pickCard(" + y + ')')
            }
            //var lineBreak = document.createElement("br");
            //document.body.appendChild(lineBreak);
        }
    }
    var newBtn = document.body.appendChild(document.createElement('button'))
    newBtn.setAttribute("onclick", "reload()")
    newBtn.innerHTML = 'Reload';
    initiateCards()
}
StartUp();



function initiateCards() {
    window.sessionStorage.clear;
    let cardList = [];
    var colorList = [
        'red', 'red',
        'blue', 'blue',
        'yellow', 'yellow',
        'green', 'green',
        'purple', 'purple',
        'orange', 'orange']

    //var idList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    /*console.log('det här är randomgrejen: ', colorList.getRandom())*/

for (let i = 1; i <= 12; i++) {

    let randomColor = giveRandom(colorList);
    cardList.push(new card(i, randomColor))
}
window.sessionStorage.setItem("cardlist", JSON.stringify(cardList))
console.log(cardList)
    }


function pickCard(y) {
    /*console.log('jag är inne!')*/
    let pickCount = window.sessionStorage.getItem("pickCount") || 0;
    let cardList = JSON.parse(window.sessionStorage.getItem("cardlist"))
    let prevCard = JSON.parse(window.sessionStorage.getItem("prevCard")) || null;
    let chosenCard = cardList[y-1];

    let element = document.getElementById('btn'+y)
    element.style.background = cardList[y-1].color;

    pickCount++;
    /*console.log("pc precis innan: ", pickCount)*/
    if (pickCount == 2) {
        window.sessionStorage.removeItem("prevCard");
        evaluatePicks(prevCard, chosenCard);
        pickCount = 0;
        window.sessionStorage.removeItem("pickCount");
    }
    else {
        window.sessionStorage.setItem("prevCard", JSON.stringify(chosenCard));
    }
    window.sessionStorage.setItem("pickCount", JSON.stringify(pickCount));
}

async function evaluatePicks(pick1, pick2) {
    //console.log("du kom in!");
    if (pick1.color === pick2.color) {
        await new Promise(r => setTimeout(r, 100));
        checkWinner();
        //console.log("jämför ", pick1.color, pick2.color)
        alert("Grattis!");
        
    }
    else {
        await new Promise(r => setTimeout(r, 100));
        alert('tyvärr');
        let element1 = document.getElementById('btn'+pick1.id)
        element1.style.background = 'salmon';
        let element2 = document.getElementById('btn' + pick2.id)
        element2.style.background = 'salmon';
    }
}
function checkWinner() {
    let checkWinner = true;
    let buttons = Array.from(document.querySelectorAll('.btn'));
    console.log(buttons)
    buttons.forEach((button) => { 
        console.log(button)
        if (button.style.backgroundColor == 'salmon') {
            checkWinner = false
        }
    })
    if (checkWinner) {
        alert('du vann!')
    }
}
function reload() {
    let buttons = Array.from(document.querySelectorAll('.btn'));
    console.log(buttons)
    buttons.forEach((button) => {
        console.log(button)
        button.style.backgroundColor = 'salmon'
    });
    initiateCards();
}
