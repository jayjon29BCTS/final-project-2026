loadSaved()
gridForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let rawText = gridInput.value
    const text = rawText.split(" ")
    operandint = text[1]
    const operandEl = document.querySelector(`#${text[0].toUpperCase()}`)
    let isTerritory = "none"
    let hasBuildings = "none"
    let land = null

    // check for land type
    if(text[1] === "land") {
        operandEl.style.backgroundColor = "rgb(113, 251, 138)"
        land = true
    } else if(text[1]==="sea") {
        operandEl.style.backgroundColor = "blue"
        land = false
    }
    // check for territory
    if((colors.includes(text[2])||colors.includes(text[1]))&& (text[1]!=="sea")) {
        isTerritory=text[2]||text[1]
        deleteOthers(operandEl)
    if (isTerritory!=="blank"){
            const territory = document.createElement("div")
            territory.style.width = "80%"
            territory.style.height = "80%"
            territory.style.backgroundColor = text[2]||text[1]
            territory.classList.add("territory-marking")
            operandEl.appendChild(territory)
                // check for buildings
        if(buildings.includes(text[3]) || buildings.includes(text[2]) || buildings.includes(text[1])) {
                console.log("buildings")
                territory.textContent = text[3]||text[2]||text[1]
                hasBuildings= territory.textContent
                territory.classList.add("building-text")
        }
    } 
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

}
function loadSaved() {
    const rawGridInitial = JSON.parse(localStorage.getItem("storageData"))
    gridData = rawGridInitial? rawGridInitial : gridData
     for(let i=0;i<gridData.length;i++){
         decompiledOperandEl = document.querySelector(`#${decompileInit(i)[0]+decompileInit(i)[1]}`)
         if (gridData[i].land == true){
            decompiledOperandEl.style.backgroundColor = "rgb(113, 251, 138)"
         } else if(gridData[i].land == false){
            decompiledOperandEl.style.backgroundColor = "blue"
         }
         const territory = document.createElement("div")

            territory.style.width = "80%"
            territory.style.height = "80%"
            territory.style.backgroundColor = gridData[i].territory
            territory.classList.add("territory-marking")
            decompiledOperandEl.appendChild(territory)
         

    }

}
clearBtn.addEventListener("click", ()=>{
    gridData = []
    for(let i=0; i<64; i++){
    gridData.push({land:null, territory:"none", buildings:"none", army:false})
}
localStorage.setItem("storageData", JSON.stringify(gridData))
})

