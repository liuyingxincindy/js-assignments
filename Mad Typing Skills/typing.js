const typingscore = [
    //Accuracy
    [94, 89, 93, 95, 93, 93, 88, 89, 86, 92, 88, 94],
    //WPM
    [18, 17, 19, 20, 17, 17, 16, 17, 20, 20, 23, 23]
]

let FatestWPM = 0 
typingscore[1].forEach(function(element){
  if(element > FatestWPM) {
    FatestWPM = element
  }
  
})
console.log(FatestWPM)
document.querySelector(".FS").innerText = FatestWPM

let MAS = 0
typingscore[0].forEach(function(element){
    if(element > MAS) {
        MAS = element 
    }
})
   console.log(MAS)
document.querySelector(".MAS").innerText = MAS

let averageACC = 0 
let length = typingscore[0].length
console.log(length)

typingscore[0].forEach(function(element){
 console.log(averageACC = averageACC + element)
})

let sum1 = 0 
console.log(sum1 = averageACC / length)
document.querySelector(".AAS").innerText = sum1 



let averageWPM = 0
let length1 = typingscore[1].length
console.log(length1)

typingscore[1].forEach(function(element){
console.log(averageWPM = averageWPM + element)
})

let sum2 = 0
console.log(sum2 = averageWPM / length1)
document.querySelector(".WPM").innerText = sum2 


// For Each Loop on WPM
// Check if element is bigger than FastestWPM
// if it is bigger, change FastestWPM to the element
// if it is smaller, do nothing
