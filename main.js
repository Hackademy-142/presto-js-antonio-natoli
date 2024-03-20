// EVENTO SCROLL

let navbar = document.querySelector(".navbar")

window.addEventListener("scroll",()=>{
    if (window.scrollY > 0) {
        navbar.classList.add("navScrolled")    
    } else {
        navbar.classList.remove("navScrolled")
    }
});


let numArticles = document.querySelector("#numArticles")
let numUsers = document.querySelector ("#numUsers")
let numComments = document.querySelector("#numComments")

// INTERVALLO SEZIONE NUMERI

function creaIntervallo (idElemento, finalNum, frequenza){
    let counter = 0 
    let intervallo = setInterval(()=>{
        if (counter < finalNum) {
            counter ++
            idElemento.innerHTML = counter ;
        } else {
            clearInterval(intervallo)
        }
    }, frequenza);
}


creaIntervallo(numArticles, 500, 10)
creaIntervallo(numUsers, 1000, 0.5)
creaIntervallo(numComments, 200, 20)