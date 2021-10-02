let chap1 = document.getElementById('chap1')
let chap2 = document.getElementById('chap2')
let resultat = document.getElementById('resultat')
let plusGrand = document.getElementsByClassName('plus')
let somme = document.getElementsByClassName('somme')
let dif = document.getElementsByClassName('dif')
let div = document.getElementsByClassName('div')
let mult = document.getElementsByClassName('mult')
document.getElementsByTagName('form')[0].addEventListener('click',(e)=>{
    e.preventDefault()
})
plusGrand[0].addEventListener('click',(e)=>{
    if(Number(chap1.value) > Number(chap2.value)){
        resultat.innerHTML = chap1.value
    }else if(Number(chap1.value) < Number(chap2.value)){
        resultat.innerHTML = chap2.value
    }else{
        resultat.innerHTML = "les deux nombres sont égales"
    }
})
somme[0].addEventListener('click',(e)=>{
    resultat.innerHTML = Number(chap1.value) + Number(chap2.value)
})
dif[0].addEventListener('click',(e)=>{
    resultat.innerHTML = Number(chap1.value) - Number(chap2.value)
})
mult[0].addEventListener('click',(e)=>{
    resultat.innerHTML = Number(chap1.value) * Number(chap2.value)
})
div[0].addEventListener('click',(e)=>{
    if(chap2 === 0){
        resultat.innerHTML = "impossible de diviser par 0"
    }
    resultat.innerHTML = Number(chap1.value) / Number(chap2.value)
})

