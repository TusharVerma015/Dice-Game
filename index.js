const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')

const randm1 = Math.random()*6
const randm2 = Math.random()*6
const random1 = randm1+1
const random2 = randm2+1
const r1 = Math.floor(random1)
const r2 = Math.floor(random2)
function roll(){
    image1.setAttribute('src',`images/dice${r1}.png`)
    image2.setAttribute('src',`images/dice${r2}.png`)
    if(r1>r2){
    document.querySelector("h2").innerHTML = 'Wohho! Player1 Wins'
    }
    else if(r2>r1){
    document.querySelector("h2").innerHTML = 'Wohho! Player2 Wins'
    
    }
    else{
    document.querySelector("h2").innerHTML = 'Draw'


    }

}