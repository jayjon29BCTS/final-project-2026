gridForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let rawText = gridInput.value
    const text = rawText.split(" ")
    const operandEl = document.querySelector(`#${text[0].toUpperCase()}`)
    if(text[1] === "land") {
        operandEl.style.backgroundColor = "green"
    } else {
        operandEl.style.backgroundColor = "blue"
    }
    if(colors.includes(text[2])) {
        deleteOthers(operandEl)
        const territory = document.createElement("div")
        territory.style.width = "50%"
        territory.style.height = "50%"
        territory.style.backgroundColor = text[2]
        territory.classList.add("territory-marking")
        operandEl.appendChild(territory)
    }
})

function deleteOthers(element){
    const killList = element.querySelectorAll(".territory-marking")
    console.log(killList)
    killList.forEach(kid => {
        kid.remove()
    });

}
