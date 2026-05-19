
gridForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let rawText = gridInput.value
    const text = rawText.split(" ")
    operandint = text[1]
    const operandEl = document.querySelector(`#${text[0].toUpperCase()}`)
    let isTerritory = false
    let hasBuildings = false
    let land = false

    // check for land type
    if(text[1] === "land") {
        operandEl.style.backgroundColor = "rgb(113, 251, 138)"
        !land
    } else if(text[1]==="sea") {
        operandEl.style.backgroundColor = "blue"
    }
    // check for territory
    if((colors.includes(text[2])||colors.includes(text[1]))&& (text[1]!=="sea")) {
        isTerritory=!isTerritory
        deleteOthers(operandEl)
        territory = document.createElement("div")
        territory.style.width = "80%"
        territory.style.height = "80%"
        territory.style.backgroundColor = text[2]||text[1]
        territory.classList.add("territory-marking")
        operandEl.appendChild(territory)
            // check for buildings
    if(buildings.includes(text[3])||buildings.includes(text[2]||buildings.includes(text[1]))) {
            console.log("buildings")
            territory.textContent = text[3]||text[2]||text[1]
            hasBuildings= territory.textContent
            territory.classList.add("building-text")
    }
}
    if (colors.includes(text[1||2||3||4]+"army")){
        console.log(text[1||2||3||4]+"army")
    } 
    saveToStorage(operandEl.id, land, isTerritory, hasBuildings)
})

function deleteOthers(element){
    const killList = element.querySelectorAll(".territory-marking")
    killList.forEach(kid => {
        kid.remove()
    });
    return

}
function saveToStorage(elId, landType, whosTerritory, thereBuildings){
    const elIdA = elId.split("")[0]
    const elIdB = elId.split("")[1]
    console.log(elIdA, elIdB)
    idInt =  (elIdA.toLowerCase().charCodeAt(0) - 97)*8 + elIdB.toLowerCase().charCodeAt(0) - 97 ;
    console.log(idInt)
    localStorage.setItem("storageData", JSON.stringify(gridData))
    gridData[idInt].land = landType
    gridData[idInt].territory = whosTerritory
    gridData[idInt].buildings= thereBuildings
    console.log(gridData[idInt])

}
