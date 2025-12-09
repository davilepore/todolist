

let buttonEnviar = document.querySelector("#adicionar")
let input = document.querySelector("#tarefa-digitada") 

buttonEnviar.addEventListener("click", function enviar(){
    
    let divTarefa = document.createElement("div")  
    let nomeTarefa = document.createElement("h3")
    let sectionTarefas = document.querySelector(".tarefas")
    const buttonCompletar = document.createElement("button")
    const buttonApagar = document.createElement("button")
    
    buttonApagar.addEventListener("click", function(){
            buttonApagar.parentElement.parentElement.remove()
    })

  
    buttonCompletar.addEventListener("click", function(){
        buttonCompletar.parentElement.parentElement.style.backgroundColor = 'green'
        buttonCompletar.parentNode.parentNode.childNodes[0].style.textDecoration = 'line-through dashed'
    })
    const divButtons = document.createElement("div")
    buttonApagar.setAttribute("class", "button-apagar")
    buttonCompletar.setAttribute("class", "button-completar")
    divButtons.setAttribute("class", "div-buttons")
    buttonApagar.textContent = 'X'
    buttonCompletar.textContent = '✓'
    divTarefa.setAttribute("class", "div-tarefa")
    nomeTarefa.innerHTML = input.value
    divTarefa.appendChild(nomeTarefa)
    divButtons.appendChild(buttonCompletar)
    divButtons.appendChild(buttonApagar)
    divTarefa.appendChild(divButtons)
    sectionTarefas.appendChild(divTarefa)
    input.value = ''
    

})

input.addEventListener("keydown", function(event){  
    if(event.key == 'Enter'){
        buttonEnviar.click()
    }
})




  







