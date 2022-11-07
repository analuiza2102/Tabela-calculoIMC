var campoFiltro = document.querySelector("#filtrar-tabela"); // campo de filtro

campoFiltro.addEventListener("input", function() { // evento de digitação
    var pacientes = document.querySelectorAll(".paciente"); // selecionando todos os pacientes
   
    if (this.value.length > 0) { // se o campo de filtro tiver algum valor digitado faz a busca
        for (var i = 0; i < pacientes.length; i++) { // percorrendo os pacientes
            var paciente = pacientes[i]; // selecionando um paciente
            var nome = paciente.textContent; // selecionando o nome do paciente, que é o texto do td (td.textContent),  dessa forma, o nome do paciente é o texto do td
            var expressao = new RegExp(this.value, "i"); // criando uma expressão regular para fazer a busca do nome digitado no campo de filtro, i é para ignorar maiusculas e minusculas, new RegExp é para criar uma expressão regular
            
            if (!expressao.test(nome)) { // se o nome digitado no campo de filtro não for igual ao nome do paciente ele vai esconder o paciente
                paciente.classList.add("invisivel"); // adiciona a classe invisivel
            } else { // se for igual
                paciente.classList.remove("invisivel"); // remove a classe invisivel
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) { //vai percorrer todos os pacientes, i = 0, i < pacientes.length, i++ (i = i + 1), i significa indice e length significa tamanho; 
            var paciente = pacientes[i]; // selecionando um paciente, minha variavel paciente vai receber o paciente que esta na posição i do array pacientes, meu array esta na variavel pacientes
            paciente.classList.remove("invisivel"); //classList é uma propriedade que retorna a lista de classes de um elemento, remove é um metodo que remove uma classe do elemento
        }
    }
});
