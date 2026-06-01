
loadSaved("storageData")
const boxes = document.querySelectorAll(".box")
gridForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let terrVal="none"
    radios.forEach((button) => {
        if (button.checked) {
            terrVal = button.value
        }
    })
    let armyVal="none"
    armyRad.forEach((button) => {
        if (button.checked) {
            armyVal = button.value
        }
    })
    text = [document.querySelector("#row-selector").value+document.querySelector("#col-selector").value,document.querySelector("#land-check").checked, terrVal,document.querySelector("#building").value,armyVal,document.querySelector("#pop-check").checked]
    console.log(text)
    const operandEl = document.querySelector(`#${text[0].toUpperCase()}`)
    let isTerritory = "none"
    let hasBuildings = "none"
    let land = null
    let terGlobal = null
    let buildingPop = false
    let armyCol = "none"

    // check for land type
    if(text[1]) {
        operandEl.style.backgroundColor = "rgb(113, 251, 138)"
        land = true
    } else if(!text[1]) {
        operandEl.style.backgroundColor = "blue"
        land = false
    }
    // check for territory
    if(document.querySelector("#land-check").checked == true) {
        isTerritory=text[2]
        deleteOthers(operandEl)
    if (isTerritory!=="none"){
        const territory = document.createElement("div")
        territory.style.width = "80%"
        territory.style.height = "80%"
        territory.style.backgroundColor = (text[2]==="white")?"gray": text[2]
        territory.classList.add("territory-marking")
        territory.style.display = "flex"
        territory.style.alignItems = "center"
        territory.style.justifyContent = "center"
        territory.style.borderRadius = "50%"
        // check for buildings
        if(text[2]!=="none") {
            territory.innerHTML = `<p>${text[3]}</p>`
            hasBuildings= text[3]
            territory.classList.add("building-text")
            if (text[5] == true) {
                buildingPop = true
                territory.style.color = "beige"
            } else {
                buildingPop = false
                territory.style.color = "black"
            }
            
            
            terGlobal = territory
        }
    } 
        if (colors.includes(text[4])) {
            armyCol = text[4]
        deleteOthers(operandEl)
        terGlobal.style.border = `10px solid ${text[4]}`
    }
    operandEl.appendChild(terGlobal)
    }
    saveToStorage(operandEl.id, land, isTerritory, hasBuildings, buildingPop, armyCol, "storageData")
})



function saveToStorage(elId, landType, whosTerritory, thereBuildings,populated,armyColor, data){
    const elIdA = elId.split("")[0]
    const elIdB = elId.split("")[1]
    idInt =  (elIdA.toLowerCase().charCodeAt(0) - 97)*8 + elIdB.toLowerCase().charCodeAt(0) - 97 ;
    gridData[idInt].land = landType
    gridData[idInt].territory = whosTerritory
    gridData[idInt].buildings = thereBuildings
    gridData[idInt].pop = populated
    gridData[idInt].army = armyColor
    localStorage.setItem(data, JSON.stringify(gridData))

}
saveOne.addEventListener("click", () => {
    boxes.forEach((box) => {
        let landType = null
        let terrCol = "none"
        let building = "none"
        let pop = false
        let army = "none"
        if (box.style.backgroundColor == "rgb(113, 251, 138)") {
            landType = true
        }  if (box.style.backgroundColor == "blue") {
            land = false
        }
        const territoryCircle = box.querySelector(".territory-marking")
            if (colors.includes(territoryCircle.style.backgroundColor) || territoryCircle.style.backgroundColor == "gray") {
                terrCol = (territoryCircle.style.backgroundColor != "gray") ? territoryCircle.style.backgroundColor : "white"
        
                if (territoryCircle.textContent !== "") {
                    if (territoryCircle.style.color !== "black") {
                        pop = true
                    }
                    building = territoryCircle.textContent
                }
            }
        
            if (colors.includes(territoryCircle.style.borderColor)) {
                army = territoryCircle.style.borderColor
            }
        saveToStorage(box.id, landType,terrCol,building,pop,army,"storageOne")
    })         
})


function loadSaved(storage) {
    gridGrid.innerHTML=gridCleared
    const rawGridInitial = JSON.parse(localStorage.getItem(storage))
    gridData = rawGridInitial ?? gridData
    for (let i = 0; i < gridData.length; i++) {
        decompiledOperandEl = document.querySelector(`#${decompileInit(i)[0] + decompileInit(i)[1]}`)
        if (gridData[i].land == true) {
            decompiledOperandEl.style.backgroundColor = "rgb(113, 251, 138)"
        } else if (gridData[i].land == false) {
            decompiledOperandEl.style.backgroundColor = "blue"
        }
        const territory = document.createElement("div")
        territory.style.width = "80%"
        territory.style.height = "80%"
        territory.style.backgroundColor = (gridData[i].territory === "white") ? "gray" : gridData[i].territory
        territory.style.borderRadius = "50%"
        territory.classList.add("territory-marking")
        territory.style.display = "flex"
        territory.style.alignItems = "center"
        territory.style.justifyContent = "center"
        if (gridData[i].pop) {
            territory.style.color = "white"
        } else {
            territory.style.color = "black"
        }
        if (gridData[i].army !== "none") {
            territory.style.border = `10px solid ${gridData[i].army}` 
        }
        if (gridData[i].buildings !== "none") {
            territory.textContent = gridData[i].buildings
        }
        decompiledOperandEl.appendChild(territory)
        
    }
}
clearBtn.addEventListener("click", ()=>{
    gridData = []
    for(let i=0; i<64; i++){
    gridData.push({land:null, territory:"none", buildings:"none", army:false})
}
localStorage.setItem("storageData", JSON.stringify(gridData))
gridGrid.innerHTML = gridCleared
})

