const name = prompt("What's your name ?")
const gender = prompt("What is your gender, boys or girls?")


if (gender ==="boy"){
    let hair = prompt("How much hair do you have? From 1-10")
    let personality = prompt("Do you have a good personality? Ex:kind, honest... From 1-10")
    let rich = prompt("How much money do you have?")

    hair=parseInt(hair)
    personality=parseInt(personality)
    rich=parseInt(rich)
    if (money > 1000000){
        money = 10
    
    }else if (money >= 100000 && money <= 1000000){
        money = 5
    } else {
        money = 1
    }

    let total = hair + personality + rich 
    document.write(`<p class = "p1"> Hi ${name}, your total score is ${total} </p>`)

} else if(gender === "girl"){
 let hair2 = prompt("How much hair do you have? From 1-10") 
 let appearance = prompt("Do you think you have a good looking? From 1-10")
 let mommy = prompt("Are you a sugar mommy ? yes or no ")

 hair2 = parseInt(hair2)
 appearance=parseInt(appearance)
 mommy=parseInt(mommy)

 if (mommy === "yes") {
    mommy = 10
 }else (mommy=parseInt(mommy)) {
    mommy = 1 
 }

 let total2 = hair2 + appearance + mommy 
 
 document.write (`<p> class="p1"> Hi ${name}, your total score is ${total2} </p>`)

}