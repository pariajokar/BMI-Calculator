let weight = document.getElementById('weightInput');
let outWeight = document.getElementById('weightVal');
let height = document.getElementById('heightInput')
let outHeight = document.getElementById('heightVal')

outWeight.innerHTML = weight.value
outHeight.innerHTML = height.value
weight.oninput = function() {

    outWeight.innerHTML = this.value
}
height.oninput = function() {

    outHeight.innerHTML = this.value
}

function furmola() {
    weight = document.getElementById('weightInput').value
    height = parseInt(document.getElementById('heightInput').value) * 0.01

    let result = weight / (height * height)
    result = result.toFixed()
    document.getElementById('bmioutput').innerHTML = result

    let category = document.getElementById('catoutput')

    if (result < 18.5) {
        category.innerHTML = 'Under weight'
        category.style.color = '#ADD8D3'
    }
    if (result > 18.5 && result < 24.9) {
        category.innerHTML = 'Normal weight'
        category.style.color = 'rgb(143 229 37)'
    }
    if (result > 25 && result < 29.9) {
        category.innerHTML = 'Over weight'
        category.style.color = 'rgb(211 209 137)'
    }
    if (result > 30 && result < 34.9) {
        category.innerHTML = 'Obses (I)'
        category.style.color = '#FCD21E'
    }

    if (result > 35 && result < 39.9) {
        category.innerHTML = 'Obses (II)'
        category.style.color = 'rgb(228 125 51)'
    }
    if (result > 40) {
        category.innerHTML = 'Obses (III)'
        category.style.color = 'rgb(115 32 39)'
    }
}
furmola();

function _move(event) {
    let x = event.clientX
    let y = event.clientY
    let _cursor = document.getElementsByClassName('cursor')[0]
    _cursor.style.top = y + 'px'
    _cursor.style.left = x + 'px'
}