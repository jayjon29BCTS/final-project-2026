const factionButtons = document.querySelectorAll(".btn-container")
const factionInfoSlides = document.querySelectorAll(".faction-info")
const blueInfo = document.querySelector("#blue")
const redInfo = document.querySelector("#red")
const yellowInfo = document.querySelector("#yellow")
const purpleInfo = document.querySelector("#purple")
const whiteInfo = document.querySelector("#white")
const greenInfo = document.querySelector("#green")
let factionButtonsLength = 0
factionButtons.forEach((btn)=>{
    factionButtonsLength++
})
const colorKey = [redInfo, blueInfo, greenInfo, purpleInfo, yellowInfo, whiteInfo]

