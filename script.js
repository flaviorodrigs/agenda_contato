let form = document.querySelector("form");
let nome = document.querySelector("input#nome");
let numContato = document.querySelector("input#numContato");
let tbody = document.querySelector("#tbody");
let arrayNomes=[]


form.addEventListener("submit", (evt)=>{
    evt.preventDefault()

    if(arrayNomes.includes(nome.value)){
        alert(`O contato [${nome.value}] já existe.`)
    }else{
        tbody.innerHTML+=`<tr><td>${nome.value}<Qtd><td>${numContato.value}<Qtd></tr>`

        arrayNomes.push(nome.value)
    }
    

    numContato.value=""
    nome.value=""
})
