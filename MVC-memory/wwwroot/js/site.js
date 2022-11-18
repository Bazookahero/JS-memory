
//function StartUp() {
//    document.body.innerHTML = '';
//    for (var x = 1; x < 4; x++) {
//        if (x == 1) {
//            for (var y = 1; y < 5; y++) {
//                var newBtn = document.body.appendChild(document.createElement('button'));
//                newBtn.style.height = 150 + "px";
//                newBtn.style.width = 150 + "px";
//                newBtn.type = "submit";
//                newBtn.id = "btn" + y;
//                newBtn.value = y;
//                newBtn.className = "btn"
//                newBtn.style.backgroundColor = 'salmon'
//                newBtn.style.margin = 2 + "px";
//                newBtn.onclick = 'pickCard(' + y + ')';
//            }
//            var lineBreak = document.createElement("br");
//            document.body.appendChild(lineBreak);
//        }
//        if (x == 2) {
//            for (var y = 5; y < 9; y++) {
//                var newBtn = document.body.appendChild(document.createElement('button'));
//                newBtn.style.height = 150 + "px";
//                newBtn.style.width = 150 + "px";
//                newBtn.type = "submit";
//                newBtn.id = "btn" + y;
//                newBtn.value = y;
//                newBtn.className = "btn"
//                newBtn.style.backgroundColor = 'salmon'
//                newBtn.style.margin = 2 + "px";
//                newBtn.onclick = 'pickCard(' + y + ')';
//            }
//            var lineBreak = document.createElement("br");
//            document.body.appendChild(lineBreak);
//        }
//        if (x == 3) {
//            for (var y = 9; y < 13; y++) {
//                var newBtn = document.body.appendChild(document.createElement('button'));
//                newBtn.style.height = 150 + "px";
//                newBtn.style.width = 150 + "px";
//                newBtn.type = "submit";
//                newBtn.id = "btn" + y;
//                newBtn.value = y;
//                newBtn.className = "btn"
//                newBtn.style.backgroundColor = 'salmon'
//                newBtn.style.margin = 2 + "px";
//                newBtn.onclick = 'pickCard(' + y + ')';
//            }
//            var lineBreak = document.createElement("br");
//            document.body.appendChild(lineBreak);
//        }
//    }
//    var newBtn = document.body.appendChild(document.createElement('button'))
//    newBtn.onclick = 'initializeCards()'
//    newBtn.innerHTML = 'Start';
//}
//StartUp();
const giveRandom = (array) => {
    if (array.length) {
        const random = Math.floor(Math.random() * array.length);
        const el = array.splice(random, 1)[0];
        return el;
    }
};
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
    let pickCount = window.sessionStorage.getItem("pickCount") || 0;
    let cardList = JSON.parse(window.sessionStorage.getItem("cardlist"))
    let prevCard = JSON.parse(window.sessionStorage.getItem("prevCard")) || null;
    let chosenCard = cardList[y];

    let element = document.getElementById(y)
    element.style.background = cardList[y].color;

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
        /*checkWinner();*/
        //console.log("jämför ", pick1.color, pick2.color)
        alert("Grattis!");
        
    }
    else {
        await new Promise(r => setTimeout(r, 1000));
        alert('tyvärr');
        let element1 = document.getElementById(pick1.id -1)
        element1.style.background = '';
        let element2 = document.getElementById(pick2.id-1)
        element2.style.background = '';
    }
}
//function checkWinner() {
//    let buttons = Array.from(document.querySelectorAll('.card'));
//    console.log(buttons)
//    buttons.forEach((button) => { 
//        console.log(button)
//    if (button.contains('aquamarine')) {
//        alert('du vann!')
//        return
//        }
//    })
//}
class card {
    constructor(id, color) {
        this.id = id;
        this.color = color;
    }
}