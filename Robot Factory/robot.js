let cleaning =[]
let attacking = []
let cooking = []


// Cleaning

 // Get Data
 const gotData =localStorage.getItem('cleanArray')
 console.log('got data...', gotData)

 // convert back to 
    const convertData = JSON.parse(gotData)
    

    if(convertData) {
        cleaning = convertData 
    convertData.forEach(function(clean){
        
        console.log(clean)

        document.querySelector('.clean-robots').innerHTML +=`
        <img class="cleanimage" src = ${clean.image}>
        <h2>${clean.name}</h2>
        <p> Size:${clean.size}</p>
        <p> Color: ${clean.color}</p>
        <br>` 

    })
}
 


class Robot1 {
    constructor(name1, size, color1, image1) {
        this.name1 = name1
        this.size = size 
        this.color1 = color1
        this.image1 = image1
        this.type1 = "Clean Model Robot"
    }
     getRobot1Info() {
        console.log(`${this.name1} is a ${this.color1} robot which is ${this.size}. And it is used for ${this.type1}.`)
     }

}

function newCleanRobot() {
    let name1Data = document.querySelector("#clean-name").value
    let sizeData = document.querySelector("#clean-size").value
    let color1Data = document.querySelector("#clean-color").value
    let image1Data = document.querySelector("#clean-image").value

    console.log (name1Data, sizeData, color1Data, image1Data)

    let cleanrobot = {
        name: name1Data,
        size: sizeData,
        color: color1Data,
        image: image1Data
    }

   cleaning.push(cleanrobot)


 // convert data to string
 const strClean = JSON.stringify(cleaning)

 // save to local storage
 localStorage.setItem('cleanArray',strClean)

document.querySelector('.clean-robots').innerHTML = ''

 cleaning.forEach(function(clean){
    console.log(clean)

    //change the HTML page to show the data
    document.querySelector('.clean-robots').innerHTML +=`
    <img class="cleanimage" src = ${clean.image}>
    <h2>${clean.name}</h2>
    <p> Size:${clean.size}</p>
    <p> Color: ${clean.color}</p>
    `
 })
}


function deleteClean() {
     const cleanRobotName = document.querySelector("#clean-delete").value
    console.log('user typed', cleanRobotName ) 

     const filteredClean = 
     cleaning.filter(function(elementClean) {
        console.log('currently checking', elementClean)
        console.log('compare with', cleanRobotName)
        return elementClean.name !== cleanRobotName
    })
    console.log(filteredClean)
    // now change cleaning to the new array (filteredClean)
    cleaning = filteredClean 

    // update screen
    // delete old stuff on screen
    // use forEach

    document.querySelector('.clean-robots').innerHTML = ''
 
    filteredClean.forEach(function(clean){
        console.log(clean)
    
        document.querySelector('.clean-robots').innerHTML +=`
        <img class="cleanimage" src = ${clean.image}>
        <h2>${clean.name}</h2>
        <p> Size:${clean.size}</p>
        <p> Color: ${clean.color}</p>`
    })
}
    



// Attacking

const gotData2 = localStorage.getItem('attackArray')
console.log('got data...', gotData2)

 // convert back to JSON

    const convertData2 = JSON.parse(gotData2)
 
 if(convertData2) {
    attacking = convertData2 
    convertData2.forEach(function(attack){
        
        console.log(attack)

        document.querySelector('.attack-robots').innerHTML +=`
        <img class="atkimage" src = ${attack.image}>
        <h2>${attack.name}</h2>
        <p> Size:${attack.damage}</p>
        <p> Color: ${attack.HP}</p>
        <br>` 

    })
}

class AttackRobot {
    constructor(damage, hp, name2, image2) {
        this.damage = damage
        this.hp = hp
        this.name2 = name2 
        this.image2 = image2
        this.type2 = " Attack Model Robot"
    }
    getAttackRobot() {
        console.log(`${this.name2} is an ${this.type2} that has ${this.hp} HP and ${this.damage} damage.`)
    }
}


function newAttackRobot() {
    let damageData = document.querySelector("#atk-damage").value
    let hpData = document.querySelector("#atk-hp").value
    let name2Data = document.querySelector("#atk-name").value
    let image2Data = document.querySelector("#atk-image").value
    
 console.log (name2Data, damageData, hpData, image2Data)

 let atkrobot = {
    name: name2Data,
    damage: damageData,
    HP: hpData, 
    image: image2Data
 }

 attacking.push(atkrobot)

  // convert data to string
  const strAttack = JSON.stringify(attacking)

  // save to local storage
  localStorage.setItem('attackArray',strAttack)

  document.querySelector('.attack-robots').innerHTML = ''
 
  attacking.forEach(function(attack){
     console.log(attack)

         //change the HTML page to show the data
    document.querySelector('.attack-robots').innerHTML +=`
    <img class="atkimage" src = ${attack.image}>
    <h2>${attack.name}</h2>
    <p> Damage:${attack.damage}</p>
    <p> HP: ${attack.HP}</p>`

  })

}

function deleteAttack() {
    const attackRobotName = document.querySelector("#atk-delete").value
    console.log("user typed", attackRobotName)
    const filteredAttack = 
    attacking.filter(function(elementAttack) {
        console.log('currently checking', elementAttack)
        console.log('compare with', attackRobotName)
        return elementAttack.name !== attackRobotName
    })
    console.log(filteredAttack)
    // Now change attacking to the new array (filteredAttack)
    attacking = filteredAttack 
     // update screen
    // delete old stuff on screen
    // use forEach
    document.querySelector('.attack-robots').innerHTML = ''

    filteredAttack.forEach(function(attack) {
        console.log(attack)
    document.querySelector('.attack-robots'). innerHTML += `
    <img class="atkimage" src = ${attack.image}>
    <h2>${attack.name}</h2>
    <p> Damage:${attack.damage}</p>
    <p> HP: ${attack.HP}</p>`
    })
}



// Cooking 

const gotData3 = localStorage.getItem('cookArray')
console.log('got data...', gotData3)

 // convert back to JSON

    const convertData3 = JSON.parse(gotData3)
 

 if(convertData3) {
    cooking = convertData3 
    convertData3.forEach(function(cook){
        
        console.log(cook)

        document.querySelector('.cook-robots').innerHTML +=`
        <img class="cookimage" src = ${cook.image}>
        <h2>${cook.name}</h2>
        <p> Work:${cook.work}</p>
        <p> Recipe: ${cook.recipe}</p>
        <br>` 

    })
}
 

class CookingRobot {
    constructor(name3, work, recipe, image3) {
        this.name3 = name3
        this.work = work
        this.recipe = recipe
        this.image3 = image3
        this.type3 = "Cooking Model Robot"
    }
    getCookingRobotInfo() {
        console.log(`${this.name3} is a ${this.type3} that has ${this.work} and ${this.recipe}`)
    }
}

function newCookRobot() {
    let name3Data = document.querySelector("#cook-name").value
    let workData = document.querySelector("#cook-work").value
    let recipeData = document.querySelector("#cook-recipe").value
    let image3Data = document.querySelector("#cook-image").value

    console.log(name3Data, workData, recipeData,image3Data)

    let cookRobot = {
        name: name3Data,
        work: workData,
        recipe: recipeData,
        image:image3Data,

    }
    cooking.push(cookRobot)
    console.log('cooking array', cooking)

  // convert data to string
  const strCook = JSON.stringify(cooking)


  // save to local storage
  localStorage.setItem('cookArray',strCook)

  document.querySelector('.cook-robots').innerHTML = ''
 
  cooking.forEach(function(cook){
     console.log(cook)

        //change the HTML page to show the data
    document.querySelector('.cook-robots').innerHTML +=`
    <img class="cookimage" src = ${cook.image}>
    <h2>${cook.name}</h2>
    <p> Work:${cook.work}</p>
    <p> Recipe: ${cook.recipe}</p>`

})
}

function deleteCook() {
    const cookRobotName = document.querySelector('#cook-delete').value
    console.log("user types", cookRobotName)
    const filteredCook = 
    cooking.filter(function(elementCook) {
        console.log('currently checking', elementCook)
        console.log('compare with', cookRobotName)
        return elementCook.name !== cookRobotName
    })
    console.log(filteredCook)
        // Now change attacking to the new array (filteredCook)
    cooking = filteredCook
      // update screen
    // delete old stuff on screen
    // use forEach
    document.querySelector('.cook-robots').innerHTML = ''

    filteredCook.forEach(function(cook) {
        console.log(cook)
        document.querySelector('.cook-robots').innerHTML += `
        <img class="cookimage" src = ${cook.image}>
        <h2>${cook.name}</h2>
        <p> Work:${cook.work}</p>
        <p> Recipe: ${cook.recipe}</p>`
    })
}

function deleteCook() {
    const cookRobotName = document.querySelector('#cook-delete').value
    console.log("user types", cookRobotName)
    const filteredCook = 
    cooking.filter(function(elementCook) {
        console.log('currently checking', elementCook)
        console.log('compare with', cookRobotName)
        return elementCook.name !== cookRobotName
    })
    console.log(filteredCook)
        // Now change attacking to the new array (filteredCook)
    cooking = filteredCook
      // update screen
    // delete old stuff on screen
    // use forEach
    document.querySelector('.cook-robots').innerHTML = ''

    filteredCook.forEach(function(cook) {
        console.log(cook)
        document.querySelector('.cook-robots').innerHTML += `
        <img class="cookimage" src = ${cook.image}>
        <h2>${cook.name}</h2>
        <p> Work:${cook.work}</p>
        <p> Recipe: ${cook.recipe}</p>`
    })
}