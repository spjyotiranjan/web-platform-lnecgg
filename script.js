/* Iteration 4: Make the Canvas App Functional */
var background = document.getElementById("background")
var inputBackground = document.getElementById("input-background")
inputBackground.oninput = ()=>{
    var colourValue = inputBackground.value
    background.style.fill = colourValue
}

var face = document.getElementById("face-plate")
var inputFace = document.getElementById("input-face")
inputFace.oninput = ()=>{
    var colourValue = inputFace.value
    face.style.fill = colourValue
}
var eyes = document.getElementById("eyes")
var inputEyes = document.getElementById("input-eyes")
inputEyes.oninput = ()=>{
    var colourValue = inputEyes.value
    eyes.style.fill = colourValue
}
var helmet = document.getElementById("helmet")
var inputHelmet = document.getElementById("input-helmet")
inputHelmet.oninput = ()=>{
    var colourValue = inputHelmet.value
    helmet.style.fill = colourValue
}