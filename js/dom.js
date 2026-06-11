const factionButtons = document.querySelectorAll(".btn-container")
const factionInfoSlides = document.querySelectorAll(".faction-info")
const blueInfo = document.querySelector("#blue")
const redInfo = document.querySelector("#red")
const yellowInfo = document.querySelector("#yellow")
const purpleInfo = document.querySelector("#purple")
const whiteInfo = document.querySelector("#white")
const greenInfo = document.querySelector("#green")
const gridGrid = document.querySelector(".grid")
const radios = document.querySelectorAll(".toggle-radio")
const armyRad = document.querySelectorAll(".army-radio")
const colorKey = [redInfo, blueInfo, greenInfo, purpleInfo, yellowInfo, whiteInfo]
const gridForm = document.querySelector(".testing")
const colors = ["red", "blue", "green", "purple", "yellow", "white","none"]
let gridData = []
for(let i=0; i<64; i++){
    gridData.push({land:null, territory:"none", buildings:"none",pop:false, army:"none"})
}
const saveOne = document.querySelector("#saveOne")
const loadSaveOne = document.querySelector("#loadSaveOne")
const saveTwo = document.querySelector("#saveTwo")
const loadSaveTwo = document.querySelector("#loadSaveTwo")
const saveThree = document.querySelector("#saveThree")
const loadSaveThree = document.querySelector("#loadSaveThree")
const clearBtn = document.querySelector(".clear-btn")




function decompileInit(int){
   const charOne = Math.floor(int/8)
   const charTwo = int%8
   let selector = []
   switch(charOne) {
    case 0:
        selector.push("A")
        break;
    case 1:
        selector.push("B")
        break;
    case 2:
        selector.push("C")
        break;
    case 3:
        selector.push("D")
        break;
    case 4:
        selector.push("E")
        break;
    case 5:
        selector.push("F")
        break;
    case 6:
        selector.push("G")
        break;
    case 7:
        selector.push("H")
        break;
   }
   switch(charTwo) {
    case 0:
        selector.push("A")
        break;
    case 1:
        selector.push("B")
        break;
    case 2:
        selector.push("C")
        break;
    case 3:
        selector.push("D")
        break;
    case 4:
        selector.push("E")
        break;
    case 5:
        selector.push("F")
        break;
    case 6:
        selector.push("G")
        break;
    case 7:
        selector.push("H")
        break;
   }
   return selector
}
function deleteOthers(element){
    const killList = element.querySelectorAll(".territory-marking")
    killList.forEach(kid => {
        kid.remove()
    });
    return

}
gridCleared = `
        <div class="box" id="AA"></div>
        <div class="box" id="AB"></div>
        <div class="box" id="AC"></div>
        <div class="box" id="AD"></div>
        <div class="box" id="AE"></div>
        <div class="box" id="AF"></div>
        <div class="box" id="AG"></div>
        <div class="box" id="AH"></div>
        
        <div class="box" id="BA"></div>
        <div class="box" id="BB"></div>
        <div class="box" id="BC"></div>
        <div class="box" id="BD"></div>
        <div class="box" id="BE"></div>
        <div class="box" id="BF"></div>
        <div class="box" id="BG"></div>
        <div class="box" id="BH"></div>

        <div class="box" id="CA"></div>
        <div class="box" id="CB"></div>
        <div class="box" id="CC"></div>
        <div class="box" id="CD"></div>
        <div class="box" id="CE"></div>
        <div class="box" id="CF"></div>
        <div class="box" id="CG"></div>
        <div class="box" id="CH"></div>
        
        <div class="box" id="DA"></div>
        <div class="box" id="DB"></div>
        <div class="box" id="DC"></div>
        <div class="box" id="DD"></div>
        <div class="box" id="DE"></div>
        <div class="box" id="DF"></div>
        <div class="box" id="DG"></div>
        <div class="box" id="DH"></div>

        <div class="box" id="EA"></div>
        <div class="box" id="EB"></div>
        <div class="box" id="EC"></div>
        <div class="box" id="ED"></div>
        <div class="box" id="EE"></div>
        <div class="box" id="EF"></div>
        <div class="box" id="EG"></div>
        <div class="box" id="EH"></div>
        
        <div class="box" id="FA"></div>
        <div class="box" id="FB"></div>
        <div class="box" id="FC"></div>
        <div class="box" id="FD"></div>
        <div class="box" id="FE"></div>
        <div class="box" id="FF"></div>
        <div class="box" id="FG"></div>
        <div class="box" id="FH"></div>
        
        <div class="box" id="GA"></div>
        <div class="box" id="GB"></div>
        <div class="box" id="GC"></div>
        <div class="box" id="GD"></div>
        <div class="box" id="GE"></div>
        <div class="box" id="GF"></div>
        <div class="box" id="GG"></div>
        <div class="box" id="GH"></div>
        
        <div class="box" id="HA"></div>
        <div class="box" id="HB"></div>
        <div class="box" id="HC"></div>
        <div class="box" id="HD"></div>
        <div class="box" id="HE"></div>
        <div class="box" id="HF"></div>
        <div class="box" id="HG"></div>
        <div class="box" id="HH"></div>`


radios.forEach((button) => {
    button.addEventListener("click", () => {
        radios.forEach((button) => {
            if (button.checked) {
                button.style.accentColor = (button.value=="white")?"gray":button.value
            }
        })
    })    
        
})
armyRad.forEach((button) => {
    button.addEventListener("click", () => {
        armyRad.forEach((button) => {
            if (button.checked) {
                button.style.accentColor = (button.value=="white")?"gray":button.value
            }
        })
    })
})
function setStorage(set) {
    storageData = gridData
    localStorage.setItem(set,JSON.stringify(storageData))
}
const buildingChange = document.querySelector("#building")
console.log(buildingChange)
const landCheck = document.querySelector("#land-check")
const landCheckLabel = document.querySelector("#land-check-label")
landCheck.addEventListener("click", () => {
    console.log(landCheckLabel.classList)
    landCheckLabel.classList.remove("btn-outline-success")
    landCheckLabel.classList.remove("btn-outline-primary")
    if (landCheck.checked) {
        console.log("land")
        landCheckLabel.innerHTML = "Land"
        landCheckLabel.classList.add("btn-outline-success")
        buildingChange.innerHTML = `
            <option value="none">none</option>
            <option value="hut">hut</option>
            <option value="lumyar">lumyar</option>
            <option value="garden">garden</option>
            <option value="embassy">embassy</option>
            <option value="refinery">refinery</option>
            <option value="quarry">quarry</option>
            <option value="barracks">barracks</option>
            <option value="multicenter">multi</option>
            <option value="complex">complex</option>
            <option value="defArr">defArr</option>
            <option value="city">city</option>`
    } else {
        console.log("sea")
        landCheckLabel.innerHTML = "sea"
        landCheckLabel.classList.add("btn-outline-primary")
        buildingChange.innerHTML = `
        <option value="none">none</option>
        <option value="docks">Docks</option>
            <option value="port">port</option>`
    }
})