
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
    console.log(armyVal)
    text = [document.querySelector("#row-selector").value+document.querySelector("#col-selector").value,document.querySelector("#land-check").checked, terrVal,document.querySelector("#building").value,armyVal,document.querySelector("#pop-check").checked]
    const operandEl = document.querySelector(`#${text[0].toUpperCase()}`)
    let isTerritory = "none"
    let hasBuildings = "none"
    let land = null
    let terGlobal = document.createElement("div")
    let buildingPop = false
    let armyCol = "none"
    deleteOthers(operandEl)

    // check for land type
    if(text[1]) {
        operandEl.style.backgroundColor = "rgb(113, 251, 138)"
        land = true
    } else if(!text[1]) {
        operandEl.style.backgroundColor = "blue"
        land = false
    }
    // check for terGlobal
    if (document.querySelector("#land-check").checked) {
        isTerritory = text[2]
        if (isTerritory !== "none") {
            terGlobal.style.width = "80%"
            terGlobal.style.height = "80%"
            terGlobal.style.backgroundColor = (text[2] === "white") ? "gray" : text[2]
            terGlobal.classList.add("territory-marking")
            terGlobal.style.display = "flex"
            terGlobal.style.alignItems = "center"
            terGlobal.style.justifyContent = "center"
            terGlobal.style.borderRadius = "50%"
        
            // check for buildings
            if (text[3] !== "none") {
                terGlobal.innerHTML = `<img src =">`
                hasBuildings = text[3]
                terGlobal.classList.add("building-text")
                if (text[5] == true) {
                    buildingPop = true
                    terGlobal.style.color = "beige"
                } else {
                    buildingPop = false
                    terGlobal.style.color = "black"
                }

            
            
            }

            console.log(terGlobal)
            armyCol = text[4]
            deleteOthers(operandEl)
            terGlobal.style.border = `10px solid ${(text[4] !== "none") ? text[4] : "rgb(113, 251, 138)"}`
        } else {
            terGlobal = document.createElement("div")
            terGlobal.style.width = "80%"
            terGlobal.style.height = "80%"
            terGlobal.classList.add("territory-marking")
            terGlobal.style.display = "flex"
            terGlobal.style.alignItems = "center"
            terGlobal.style.justifyContent = "center"
            terGlobal.style.borderRadius = "50%"
            if (text[3] !== "none") {
                terGlobal.innerHTML = `<p>${text[3]}</p>`
                hasBuildings = text[3]
                terGlobal.classList.add("building-text")
                if (text[5] == true) {
                    buildingPop = true
                    terGlobal.style.color = "beige"
                } else {
                    buildingPop = false
                    terGlobal.style.color = "black"
                }
          
            }
            console.log(terGlobal)
            armyCol = text[4]
            deleteOthers(operandEl)
            terGlobal.style.border = `10px solid ${(text[4] !== "none") ? text[4] : "rgb(113, 251, 138)"}`

        }
    } else {
        terGlobal = document.createElement("div")
        terGlobal.style.width = "80%"
        terGlobal.style.height = "80%"
        terGlobal.classList.add("territory-marking")
        terGlobal.style.display = "flex"
        terGlobal.style.alignItems = "center"
        terGlobal.style.justifyContent = "center"
        terGlobal.style.borderRadius = "50%"
        if (text[3] !== "none") {
            terGlobal.innerHTML = `<p>${text[3]}</p>`
            hasBuildings = text[3]
            terGlobal.classList.add("building-text")
            if (text[5] == true) {
                buildingPop = true
                terGlobal.style.color = "beige"
            } else {
                buildingPop = false
                terGlobal.style.color = "black"
            }
        }
    }
        
    operandEl.appendChild(terGlobal)
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
    setStorage("storageOne")
})
saveTwo.addEventListener("click", () => {
    setStorage("storageTwo")
})
saveThree.addEventListener("click", () => {
    setStorage("storageTwo")
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
        const terGlobal = document.createElement("div")
        terGlobal.style.width = "80%"
        terGlobal.style.height = "80%"
        terGlobal.style.backgroundColor = (gridData[i].territory === "white") ? "gray" : gridData[i].territory
        terGlobal.style.borderRadius = "50%"
        terGlobal.classList.add("territory-marking")
        terGlobal.style.display = "flex"
        terGlobal.style.alignItems = "center"
        terGlobal.style.justifyContent = "center"
        if (gridData[i].pop) {
            terGlobal.style.color = "white"
        } else {
            terGlobal.style.color = "black"
        }
        if (gridData[i].army !== "none") {
            terGlobal.style.border = `10px solid ${gridData[i].army}` 
        } else if(gridData[i].land) {
            terGlobal.style.border =`10px solid rgb(113, 251, 138)` 
        }
        if (gridData[i].buildings !== "none") {
            terGlobal.textContent = gridData[i].buildings
        }
        decompiledOperandEl.appendChild(terGlobal)
        
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
loadSaveOne.addEventListener("click", () => {
    loadSaved("storageOne")
    setStorage("storageData")
    
})
loadSaveTwo.addEventListener("click", () => {
    loadSaved("storageTwo")
    setStorage("storageData")
    
})
loadSaveThree.addEventListener("click", () => {
    loadSaved("storageThree")
    setStorage("storageData")
    
})


document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault()
        let terrVal = "none"
        radios.forEach((button) => {
            if (button.checked) {
                terrVal = button.value
            }
        })
        let armyVal = "none"
        armyRad.forEach((button) => {
            if (button.checked) {
                armyVal = button.value
            }
        })
        text = [document.querySelector("#row-selector").value + document.querySelector("#col-selector").value, document.querySelector("#land-check").checked, terrVal, document.querySelector("#building").value, armyVal, document.querySelector("#pop-check").checked]
        console.log(text)
        const operandEl = document.querySelector(`#${text[0].toUpperCase()}`)
        let isTerritory = "none"
        let hasBuildings = "none"
        let land = null
        let terGlobal = document.createElement("div")
        let buildingPop = false
        let armyCol = "none"
        deleteOthers(operandEl)

        // check for land type
        if (text[1]) {
            operandEl.style.backgroundColor = "rgb(113, 251, 138)"
            land = true
        } else if (!text[1]) {
            operandEl.style.backgroundColor = "blue"
            land = false
        }
        // check for terGlobal
        if (document.querySelector("#land-check").checked) {
            isTerritory = text[2]
            if (isTerritory !== "none") {
                terGlobal.style.width = "80%"
                terGlobal.style.height = "80%"
                terGlobal.style.backgroundColor = (text[2] === "white") ? "gray" : text[2]
                terGlobal.classList.add("territory-marking")
                terGlobal.style.display = "flex"
                terGlobal.style.alignItems = "center"
                terGlobal.style.justifyContent = "center"
                terGlobal.style.borderRadius = "50%"
            
                // check for buildings
                if (text[3] !== "none") {
                    terGlobal.innerHTML = `<p>${text[3]}</p>`
                    hasBuildings = text[3]
                    terGlobal.classList.add("building-text")
                    if (text[5] == true) {
                        buildingPop = true
                        terGlobal.style.color = "beige"
                    } else {
                        buildingPop = false
                        terGlobal.style.color = "black"
                    }
                
                
                }
            } else {
                terGlobal = document.createElement("div")
                terGlobal.style.width = "80%"
                terGlobal.style.height = "80%"
                terGlobal.classList.add("territory-marking")
                terGlobal.style.display = "flex"
                terGlobal.style.alignItems = "center"
                terGlobal.style.justifyContent = "center"
                terGlobal.style.borderRadius = "50%"
            
            }
            console.log(terGlobal)
            armyCol = text[4]
            deleteOthers(operandEl)
            terGlobal.style.border = `10px solid ${(text[4] !== "none") ? text[4] : "rgb(113, 251, 138)"}`
        
            operandEl.appendChild(terGlobal)
        }
        saveToStorage(operandEl.id, land, isTerritory, hasBuildings, buildingPop, armyCol, "storageData")
    }
})
