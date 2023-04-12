let cleaning =[]
let attacking = []
let cooking = []



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
        Name: name1Data,
        Size: sizeData,
        Color: color1Data,
        Image: image1Data
    }

   cleaning.push(cleanrobot)
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
    
 console.log (damageData, hpData, name2Data, image2Data)

 let atkrobot = {
    Damage: damageData,
    HP: hpData, 
    Name: name2Data,
    Image: image2Data
 }

 attacking.push(atkrobot)
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
        Name: name3Data,
        Work: workData,
        Recipe: recipeData,
        Image:image3Data,

    }
    cooking.push(cookRobot)
}
