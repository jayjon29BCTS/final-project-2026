gridForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let rawText = gridInput.value
    const text = rawText.split(" ")
    const operandEl = document.querySelector(`#${text[0].toUpperCase()}`)
    // check for land type
    if(text[1] === "land") {
        operandEl.style.backgroundColor = "rgb(113, 251, 138)"
    } else if(text[1]==="sea") {
        operandEl.style.backgroundColor = "blue"
    }
    // check for territory
    if((colors.includes(text[2])||colors.includes(text[1]))&& (text[1]!=="sea")) {
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
    }
    }
})

function deleteOthers(element){
    const killList = element.querySelectorAll(".territory-marking")
    console.log(killList)
    killList.forEach(kid => {
        kid.remove()
    });
    return

}
