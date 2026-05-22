const factionButtons = document.querySelectorAll(".btn-container")
const factionInfoSlides = document.querySelectorAll(".faction-info")
const blueInfo = document.querySelector("#blue")
const redInfo = document.querySelector("#red")
const yellowInfo = document.querySelector("#yellow")
const purpleInfo = document.querySelector("#purple")
const whiteInfo = document.querySelector("#white")
const greenInfo = document.querySelector("#green")
const colorKey = [redInfo, blueInfo, greenInfo, purpleInfo, yellowInfo, whiteInfo]
const gridForm = document.querySelector(".testing")
const gridInput = document.querySelector("#grid-text")
const colors = ["red", "blue", "green", "purple", "yellow", "white","blank"]
let gridData = []
for(let i=0; i<64; i++){
    gridData.push({land:null, territory:"none", buildings:"none", army:false})
}

const clearBtn = document.querySelector(".clear-btn")

const buildings = ["hut","lumberyard", "garden", "embassy", "port", "refinery","quarry","barracks", "multicenter", "complex", "defenseArray"]
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
