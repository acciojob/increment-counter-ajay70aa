//your JS code here. If required.
let countDisplay = document.getElementById('count')
let incrementBtn = document.getElementById('incrementBtn')

var count = 0
function handleClick (){
	count++
	countDisplay.textContent = count
}
document.addEventListener('click', handleClick)