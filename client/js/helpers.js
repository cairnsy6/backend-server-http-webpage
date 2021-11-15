const catButton = document.querySelector("#cats");
const dogButton = document.querySelector("#dogs");
const unicornButton = document.querySelector("#unicorns");
const optionsArea = document.querySelector("#options");
const resultsArea = document.querySelector("#results");


catButton.addEventListener("click", ()=>{
    const catsURL = "http://localhost:3003/cats"
    getURLInfo(catsURL)
})

dogButton.addEventListener("click", ()=>{
    const dogsURL = "http://localhost:3003/dogs"
   getURLInfo(dogsURL)
})

unicornButton.addEventListener("click", ()=>{
    const unicornsURL = "http://localhost:3003/unicorns"
    getURLInfo(unicornsURL)
})

async function getURLInfo(url){
    const directories = url.split("/")
    const animals = directories[directories.length-1]
    console.log(animals)
    await fetch(url)
    .then(response=>response.json())
    .then(data=>{;
        for(let animal of data[animals]){
            createParaElement(animal)
        }
    } 
    )   
    
    }
    

function createParaElement(animal){
    const para =  document.createElement('p')
    para.textContent = animal
    results.appendChild(para)
    console.log(animal)
}


// function getURLInfo(){

//     const url = `http://localhost:3003/${animal}`
// }
