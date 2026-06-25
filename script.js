const curtidas = document.getElementById("curtidas") // Pega o botão de curtidas pelo id
curtidas.addEventListener("click", aumentarCurtidas) // Quando clicar chama a função

// função aumentar curtidas 
function aumentarCurtidas (){
    let  quantidade = document.querySelector("span")
    quantidade.textContent++
}