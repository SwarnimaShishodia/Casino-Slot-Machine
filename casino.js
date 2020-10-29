let value1 = document.getElementById('value1').innerHTML
let value2 = document.getElementById('value2').innerHTML
let value3 = document.getElementById('value3').innerHTML
let inpSpeed = document.getElementById('inpSpeed')

let values = ['😃', '😇', '😋', '😂', '😎', '😭', '😡']

function getRandomValue() {
    return values[Math.floor(Math.random() * 7)]
}
let animationId;

function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {

        value1=document.getElementById('value1').innerHTML = getRandomValue()
        value2=document.getElementById('value2').innerHTML= getRandomValue()
        value3=document.getElementById('value3').innerHTML = getRandomValue()
        console.log(value1)
        
        if(value1===value2 && value2===value3 && value3===value1)
        {
            clearInterval(animationId)
        alert("You Win!! :)")
        }

    
    }, 1000 / newSpeed)
}

inpSpeed.onchange = function (ev) {
    document.documentElement.style.setProperty('--speed', ev.target.value)
    updateAnimation(ev.target.value)
}