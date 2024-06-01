function setup() {
    const canvas = document.getElementById("game");
    createCanvas(450, 450, canvas);
}

let clickedNum = 0;
let winCount = 0;
let winner = document.getElementById("count");
document.getElementById("count").innerText = winCount;
document.getElementById("1").addEventListener("click", ()=>clickedNum = 1);
document.getElementById("2").addEventListener("click", ()=>clickedNum = 2);
document.getElementById("3").addEventListener("click", ()=>clickedNum = 3);
document.getElementById("4").addEventListener("click", ()=>clickedNum = 4);
document.getElementById("5").addEventListener("click", ()=>clickedNum = 5);
document.getElementById("6").addEventListener("click", ()=>clickedNum = 6);
document.getElementById("7").addEventListener("click", ()=>clickedNum = 7);
document.getElementById("8").addEventListener("click", ()=>clickedNum = 8);
document.getElementById("9").addEventListener("click", ()=>clickedNum = 9);


// Test arrays
// var problem = [
//     "--74----5",
//     "2---68--9",
//     "5-9-----8",
//     "75---92--",
//     "-2----59-",
//     "4-------7",
//     "----7----",
//     "6--------",
//     "8----5---"
// ];

var problem = [
    "---491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];

replaceAt = (string, index, replacement) => {
    return string.substring(0, index) + replacement + string.substring(index+replacement.length);
}

function editProblem(array, x, y, num) {
    let j, k, tempArray;
    tempArray = array;
    if (x > 0 && x < 50) {j = 0;}
    else if ( x > 50 && x < 100) { j = 1}
    else if ( x > 100 && x < 150) { j = 2}
    else if ( x > 150 && x < 200) { j = 3}
    else if ( x > 200 && x < 250) { j = 4}
    else if ( x > 250 && x < 300) { j = 5}
    else if ( x > 300 && x < 350) { j = 6}
    else if ( x > 350 && x < 400) { j = 7}
    else if ( x > 400 && x < 450) { j = 8}


    if (y > 0 && y < 50) {k = 0;}
    else if ( y > 50 && y < 100) { k = 1}
    else if ( y > 100 && y < 150) { k = 2}
    else if ( y > 150 && y < 200) { k = 3}
    else if ( y > 200 && y < 250) { k = 4}
    else if ( y > 250 && y < 300) { k = 5}
    else if ( y > 300 && y < 350) { k = 6}
    else if ( y > 350 && y < 400) { k = 7}
    else if ( y > 400 && y < 450) { k = 8}

    let change = replaceAt(tempArray[k], j, num.toString());
    tempArray[k] = change;
    problem = tempArray;
}

function drawing(array, x, y) {
    let j, k, char;
    if (x > 0 && x < 50) {j = 0;}
    else if ( x > 50 && x < 100) { j = 1}
    else if ( x > 100 && x < 150) { j = 2}
    else if ( x > 150 && x < 200) { j = 3}
    else if ( x > 200 && x < 250) { j = 4}
    else if ( x > 250 && x < 300) { j = 5}
    else if ( x > 300 && x < 350) { j = 6}
    else if ( x > 350 && x < 400) { j = 7}
    else if ( x > 400 && x < 450) { j = 8}


    if (y > 0 && y < 50) {k = 0;}
    else if ( y > 50 && y < 100) { k = 1}
    else if ( y > 100 && y < 150) { k = 2}
    else if ( y > 150 && y < 200) { k = 3}
    else if ( y > 200 && y < 250) { k = 4}
    else if ( y > 250 && y < 300) { k = 5}
    else if ( y > 300 && y < 350) { k = 6}
    else if ( y > 350 && y < 400) { k = 7}
    else if ( y > 400 && y < 450) { k = 8}

    char = array[k].split("")[j];
    if (char === "-") {
        return " "
    } else {
        return char
    }
}

function draw() {
    background(255);
    frameRate(6);
    for (var x = 50; x < width; x += 50) {
        for (var y = 50; y < height; y +=  50) {
            stroke(0);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }

    for (let j = 23; j < width; j += 50) {
        for (let k = 27; k < height; k += 50) {
            text(drawing(problem, j, k), j, k);
        }
    }

    if (JSON.stringify(solution) === JSON.stringify(problem)) {
        alert("Puzzle completed");
        winCount += 1;
        winner.innerText = winCount;
        problem = [
            "---491625",
            "241568379",
            "569327418",
            "758619234",
            "123784596",
            "496253187",
            "934176852",
            "675832941",
            "812945763"
        ];
    }
}

function mousePressed() {
    editProblem(problem, mouseX, mouseY, clickedNum);
}
