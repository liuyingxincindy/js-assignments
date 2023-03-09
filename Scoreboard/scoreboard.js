let min = 9
let sec = 60
let numInterval

let homescore = 0 
let visitorscore = 0 

function start() {
    numInterval = setInterval(second, 1000)
    numInterval = setInterval(minute, 1000)
}
function stop() {
    clearInterval(numInterval)
}
function reset() {
    min = 9
    num = 60 
    clearInterval(numInterval)
}

function second() {
    // minus 1 from sec
    sec--
    // make it 60 when 0
    if (sec === 0) {
        sec = 60
        min--
    }
    // show on screen
    document.querySelector(".time").innerText = sec
}

function minute() {
    if(sec === 0) {
      min--
    }
    document.querySelector(".time").innerText = min
}
homescore=parseInt(homescore)
visitorscore = parseInt(visitorscore)




function onepoint1() {
   homescore++
   document.querySelector(".score2").innerText = homescore
}
function onepoint2() {
    visitorscore++ 
    document.querySelector(".score3").innerText = visitorscore
} 
function twopoint1() {
   homescore = homescore +2
    document.querySelector(".score2").innerText = homescore
}
function twopoint2() {
    visitorscore = visitorscore +2
    document.querySelector(".score3").innerText = visitorscore
}
function threepoint1() {
    homescore = homescore +3
    document.querySelector(".score2").innerText = homescore
}
function threepoint2() {
    visitorscore = visitorscore +3
    document.querySelector(".score3").innerText = visitorscore
}
function reset2() {
    homescore = 0 
    document.querySelector(".score2").innerText = homescore
}
function reset3() {
    visitorscore = 0 
    document.querySelector(".score3").innerText = visitorscore
}

document.querySelector(".number2").innerText = homescore
document.querySelector(".number3").innerText = visitorscore

