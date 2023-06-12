/**

first are o functie care creaza cutia care contine produsul

are produsele in loocal storage

Din local storage sccoate produsele
 */

// AICI SE AFLA PRODUCTS NU PRODUCT


const itemPerPage = 8

function createImg(imgUrl, alt) {
    const imgElement = document.createElement("img")
    imgElement.setAttribute("src", imgUrl)
    imgElement.setAttribute("alt", alt)
  
    return imgElement
}


// parametrii pe care nu ii folosim returneaza undefined
function createCustomElement(element, text, elementClass){

    const newElement = document.createElement(element)
    newElement.textContent = text

    if(elementClass){
        newElement.elementClass.add(elementClass)
    }

    return newElement
}

// Aici foarte important la partea cu url este ca navigheaza de la o pagina la alta prin url-ul mare al paginii plus numele paginii la care vre isa mergi
function createCardElement(id, imgUrl, imgAlt, productTitle, productPrice, productCurrency, productDescription) {
    const card = document.createElement("div")
    const anchor = document.createElement("a")
    const container = document.createElement("div")
    card.classList.add("card")
    anchor.setAttribute("href", `/product.html?productId=${id}`)

    const img = createImg(imgUrl, imgAlt)
    const title = createCustomElement("h3", productTitle)
    const price = createCustomElement("p",`${productPrice} ${productCurrency}`, "price")
    const description = createCustomElement("p", productDescription)
    const addToCart = createCustomElement("button", "add to cart")

    container.appendChild(img)
    container.appendChild(title)
    container.appendChild(price)
    container.appendChild(description)
    container.appendChild(addToCart)

    anchor.appendChild(container)
    card.appendChild(anchor)


    return card
}


function generateList(list, start, stop){
  // aici din fiecare element din lista din local storage alegi cheile de care ai nevoie
  const cardElement = createCardElement(productListElement[0])


  productListElement.innerHTML=""
  pagination.innerHTML = ""

  // Guard

  if(!productListElement){
    alert("ceva nu merge")
    return
  }

  for (let i = start; i < llist.length; i++) {
    // pentru fiecare elment trebuie sa accesezi cheia din obiect
    const cardElement = createCardElement(product.img, product.title)

    productList.appendChild(cardElement)
  }

  const productListElement = document.querySelector(".product-list")


}


// 45 ELEMENTE / 8 elemente => 6 pagini

/// PAGINARE 


function generatePagination(list) {
  const page = Math.floor(list.length % itemPerPage)
  const pageRest = list.length % itemPerPage

  if(pageRest > 0){
    page = page + 1
  }


 // trebuie sa ai o lista jos la final cu numerel paginilor
  const ol = document.createElement("ol")
    const li = document.createElement("li")
    li.textContent = i
    li.addEventListener("click", (e) => {
      const count = parseInt(e.target.textContent)

      const start = itemPerPage * (count - 1)
      const end = itemPerPage * count

      generateList(start, end)

    })
  ol.appendChild(li)
    
  

}

generatePagination(0, itemPerPage)


const searchButton = document.getElementById("search")

searchButton.addEventListener("click", () => {



  const filterList = productList.filter((product)=> {
    const lowerCase = product.title.toLowerCase()

    return lowerCase.contains(lowerCase)
  })

  generateList(filterList)
})
















