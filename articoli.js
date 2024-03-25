// EVENTO SCROLL

let navbar = document.querySelector(".navbar")

window.addEventListener("scroll",()=>{
    if (window.scrollY > 0) {
        navbar.classList.add("navScrolled")    
    } else {
        navbar.classList.remove("navScrolled")
    }
});

// INIZIO FETCH
fetch("./articoli.JSON").then((response)=> response.json()).then((data)=>{


    // CONTENITORE CARDS
    let articlesWrapper = document.querySelector("#articlesWrapper")

    function createCards(array){
        articlesWrapper.innerHTML = ""
        array.forEach((articolo, i )=>{
                let column = document.createElement("div");
                column.classList.add("col-11", "col-lg-3", "my-3", "mx-1")
                column.innerHTML = `
                <div class="overflow-hidden">
                <img src="https://picsum.photos/20${i} "class="card-img-top imgCard" alt="">
                </div>
                <div class="card-body d-flex flex-column justify-content-between ">
                <h4 class="card-title fw-bold text-center text-truncate">${articolo.nome}</h4>
                <p class="card-text">Categoria: <span class="fs-5">${articolo.categoria}</span></p>
                <p class="card-text">Prezzo: <span class="fs-4">${articolo.prezzo}</span>€</p>
                </div>
                <div class="d-flex justify-content-between">
                <i class="bi bi-heart fs-3"></i>
                <a href="#" class="btn btn-success">Aggiungi al Carrello</a>
                </div>
                </div>
                `
                articlesWrapper.appendChild(column)
            
            });
        }
        createCards(data)

        // CATEGORIE

        // CREAZIONE CATEGORIE
        let radioWrapper = document.querySelector("#radioWrapper")
        
        function setCategories(){
            let categories = data.map ( (el)=>el.categoria)
            let uniqueCategories = [];
            categories.forEach((category)=>{
                if (uniqueCategories.includes(category) == false) {
                    uniqueCategories.push(category)
                    
                }
            })

            uniqueCategories.sort().forEach((categoria)=>{
                let div = document.createElement("div")
                div.classList.add("form-check")
                div.innerHTML =`
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${categoria}">
                <label class="form-check-label" for="flexRadioDefault1">
                ${categoria}
                </label>
                `
                radioWrapper.appendChild(div)
            })
        }
        setCategories()
        
    // FINE FETCH 
    })
    


