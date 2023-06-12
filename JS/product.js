// AICI SE AFLA PRODUCT

// aici din pagina de produs pur si simplu selectezi chestiile care vor fi schimbate




// si aici la fiecare in parte setezi atributele si innex



// LUATUL ID-ului DIN PATH
//Acest lucruimi ia din path elementele din path are & ca despartitor

// Ne ajuta sa convertim aceste lucruri in elemente de tip cheie valoare
const searchParams = new URLSearchParams(window.location.search);

// acet lucru imi baga toate acele elemente din path intr-un obiect ca cheie/ valoare
const params = Object.fromEntries(searchParams.entries())

const productListString = localStorage.getItem("productList")

if(!productListString){
   alert("eroare") 
} else {

}

// gasirea produsului si returnarea obiectului ostru
const product = productListString.find(el => el.id === params.id)

if(!product){
    alert("produsul nu a fost gasit")
} else {
    const title = document.querySelector(".title")
    const img = document.querySelector("img")
    const price = document.querySelector("price")
    const description = document.querySelector(".product-informations")

    // iar aici introduci in toate aceste elemente selectate inforamtia
    // din obiectul product
}





// PRACTIC AICI AI PE PAGINA DE PRODUS UN SCRIP SI CEL DE PRODUSE UL ALTUL
// IDEEA ESTE CA TOATE PAGINILE AU ACELASI WINDOW SI PATH DE SUS
// ACEASTA PAGINA VA RULA DOAR CAND ACCESATI PAGINA DE PRODUS


















