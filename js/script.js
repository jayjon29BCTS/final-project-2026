factionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        factionButtons.forEach((btn) => btn.classList.remove("active"))
        btn.classList.add("active")
        displayText()
    })
})
function displayText() {
        factionButtons.forEach((btn, index) => {
            if (btn.classList.contains("active")) {
                for(let color of colorKey){
                    color.style.display = "none"
                }
                colorKey[index].style.display = "block"
            }
        })

}  












