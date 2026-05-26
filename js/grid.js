
loadSaved("storageData")
gridForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let rawText = gridInput.value
    const text = rawText.split(" ")
    operandint = text[1]
    const operandEl = document.querySelector(`#${text[0].toUpperCase()}`)
    let isTerritory = "none"
    let hasBuildings = "none"
    let land = null
    let terGlobal = null
    let buildingPop = false

    // check for land type
    if(text[1] === "land") {
        operandEl.style.backgroundColor = "rgb(113, 251, 138)"
        land = true
    } else if(text[1]==="sea") {
        operandEl.style.backgroundColor = "blue"
        land = false
    }
    // check for territory
    if(colors.includes(text[2]) && (text[1]!=="sea")) {
        isTerritory=text[2]
        deleteOthers(operandEl)
    if (isTerritory!=="blank"){
        const territory = document.createElement("div")
        territory.style.width = "80%"
        territory.style.height = "80%"
        territory.style.backgroundColor = (text[2]==="white")?"gray": text[2]
        territory.classList.add("territory-marking")
        territory.style.display = "flex"
        territory.style.alignItems = "center"
        territory.style.justifyContent = "center"
        territory.style.borderRadius = "50%"
        territory.style.fontSize = "20px"
        // check for buildings
        if(buildings.includes(text[3])) {
            territory.innerHTML = `<p>${text[3]}</p>`
            hasBuildings= text[3]||text[2]||text[1]
            territory.classList.add("building-text")
            if (text[5] == "y") {
                buildingPop = true
                territory.style.color = "beige"
            } else {
                buildingPop = false
                territory.style.color = "black"
            }
            
        }
        terGlobal = territory
    } 
    if (colors.includes(text[4])) {
        deleteOthers(operandEl)
        terGlobal.style.border = `10px solid ${text[4]}`
    }
    operandEl.appendChild(terGlobal)
    }
    saveToStorage(operandEl.id, land, isTerritory, hasBuildings)
})


function saveToStorage(elId, landType, whosTerritory, thereBuildings){
    const elIdA = elId.split("")[0]
    const elIdB = elId.split("")[1]
    console.log(elIdA, elIdB)
    idInt =  (elIdA.toLowerCase().charCodeAt(0) - 97)*8 + elIdB.toLowerCase().charCodeAt(0) - 97 ;
    console.log(idInt)
    gridData[idInt].land = landType
    gridData[idInt].territory = whosTerritory
    gridData[idInt].buildings= thereBuildings
    localStorage.setItem("storageData", JSON.stringify(gridData))
    console.log(gridData)

}
function saveToStorageMan(elId, landType, whosTerritory, thereBuildings){
    const elIdA = elId.split("")[0]
    const elIdB = elId.split("")[1]
    console.log(elIdA, elIdB)
    idInt =  (elIdA.toLowerCase().charCodeAt(0) - 97)*8 + elIdB.toLowerCase().charCodeAt(0) - 97 ;
    console.log(idInt)
    gridData[idInt].land = landType
    gridData[idInt].territory = whosTerritory
    gridData[idInt].buildings= thereBuildings
    localStorage.setItem("storageDataOne", JSON.stringify(gridData))

}
let repCount = 0
saveOne.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        if(box.style.backgroundColor == "rgb(113, 251, 138)"){

        }
    })
})
function loadSaved(storage) {
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
        decompiledOperandEl.appendChild(territory)
        if (gridData[i].buildings !== "none") {
            territory.textContent = gridData[i].buildings
            territory.classList.add("building-text")
        }
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

