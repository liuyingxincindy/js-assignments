const name = prompt("What's your name ?")
const gender = prompt("What is your gender, boy or girl ?")


if (gender ==="boy"){
    let hair = prompt("How much hair do you have? From 1-10")
    let personality = prompt("Do you have a good personality? Ex:kind, honest... From 1-10")
    let rich = prompt("How much money do you have?")

    hair=parseInt(hair)
    personality=parseInt(personality)
    rich=parseInt(rich)
    if (rich > 1000000){
        rich = 10
    
    }else if (rich >= 100000 && rich <= 1000000){
        rich = 5
    } else {
        rich = 1
    }

    let total = hair + personality + rich 
    document.write(`<p class = "p1"> Hi ${name}, your total score is ${total} of 30 </p>`)

    if (total > 21){
        document.write(`<p class = "p2"> Good job !</p>`)
    
    } else if (total <= 21 && total >= 11){
        document.write(`<p class = "p2"> Not too bad, but it can be better </p>`)
    
    } else if ( total < 11){
        document.write(`<p class = "p2"> Not good </p>`)
    }


} else if(gender === "girl"){
 let hair2 = prompt("How much hair do you have? From 1-10") 
 let appearance = prompt("Do you think you have a good looking? From 1-10")
 let mommy = prompt("Are you a sugar mommy ? yes or no ")

 hair2 = parseInt(hair2)
 appearance=parseInt(appearance)
 mommy=parseInt(mommy)

 if (mommy === "yes") {
    mommy = 10
 }else {
    mommy = 1 
 }

 let total2 = hair2 + appearance + mommy 
 
 document.write (`<p class = "p1"> Hi ${name}, your total score is ${total2} of 30 </p>`)

 if (total2 > 21){
    document.write(`<p class = "p2"> Good job !</p>`)

} else if (total2 <= 21 && total2 >= 11){
    document.write(`<p class = "p2"> Not too bad, but it can be better </p>`)

} else if ( total2 < 11){
    document.write(`<p class = "p2" > Not good </p>`)
}
}