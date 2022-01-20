function clicar1(){
    let min = 1
    let max = 100  
    let dif = max - min 
    let aleatório = Math.random()
    let num = min + Math.trunc(dif*aleatório)
    let res = window.document.querySelector('div#res')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}
function clicar2(){
    let res = window.document.querySelector('div#res')
    res.innerHTML = null 
}


