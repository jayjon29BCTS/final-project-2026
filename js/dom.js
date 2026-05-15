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
const colors = ["red", "blue", "green", "purple", "yellow", "white"]
let gridData = []
for(let i=0; i<64; i++){
    gridData.push({land:false, territory:"none", buildings:"none", army:false})
}

const buildings = ["hut","lumberyard", "garden", "embassy", "port", "refinery","quarry","barracks", "multicenter", "complex", "defenseArray"]