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

// INTERSECTION OBSERVER NUMERI DINAMCI

let sonoIntersecato = false ;


const intersectionObv = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{ 
        if (entry.isIntersecting && sonoIntersecato == false){
            
            creaIntervallo(numArticles, 500, 8)
            creaIntervallo(numUsers, 1000, 0.5)
            creaIntervallo(numComments, 200, 20)
            sonoIntersecato = true;
            setTimeout (()=>{
                sonoIntersecato = false;
            }, 10000 );   
        }
    })
})

intersectionObv.observe(numArticles)


// ULTIMI ANNUNCI

let announcements = [
    {name: "Katana di Hattori Hanzo", categoria: "Accessori", prezzo: 500, img: "https://picsum.photos/200"},
    {name: "Vaso Ming", categoria: "Arredamento", prezzo: 700, img: "https://picsum.photos/201"},
    {name: "Statua di terracotta", categoria: "Arredamento", prezzo: 650, img: "https://picsum.photos/202"},
    {name: "Quadro di Buddha", categoria: "Arredamento", prezzo: 350, img: "https://picsum.photos/203"},
    {name: "Guqin", categoria: "Musica", prezzo: 1000, img: "https://picsum.photos/204"},
];