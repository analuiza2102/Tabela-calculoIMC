var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();


        var form = document.querySelector("#form-adiciona");
        var paciente = obtemPacienteDoFormulario(form);
       

// se tiver tudo certo, adiciona o paciente na tabela 
        var erros = validaPaciente(paciente);
       

        if (erros.length > 0) { 
            exibeMensagensDeErro(erros); // se tiver algum erro na validação, mostra a mensagem de erro conforme o array de erros
            return;
        }



  //adicionando o paciente na tabela
    
    adicionaPacienteNaTabela(paciente);

    
    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro"); // mensagens de erro nesse caso é a ul
    mensagensErro.innerHTML = ""; // limpa a lista de erros antes de exibir os novos erros

});


/* ta extraindo la do form os valores de peso altura e gordura de cada paciente */
function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

         }

    return paciente;
}


function montarTr(paciente) {

  var pacienteTr = document.createElement("tr");  /* ela cria aqui o tr */
  pacienteTr.classList.add("paciente");

  var nomeTd = montarTd(paciente.nome,"info-nome");
  var pesoTd = montarTd(paciente.peso,"info-peso");
  var alturaTd = montarTd(paciente.altura,"info-altura");
  var gorduraTd = montarTd(paciente.gordura,"info-gordura");
  var imcTd = montarTd(paciente.imc,"info-imc");



  pacienteTr.appendChild(nomeTd);  /* E DEPOIS COLOCA O TD DENTRO DA TABELA */
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr; /* retorna o tr */
}




function montarTd (dado,classe){ /* ela cria aqui o td */
  var td = document.createElement("td");
  td.textContent = dado;

  td.classList.add("classe"); /* adiciona a classe no td */

  return td; /* retorna o td */
}

function validaPaciente(paciente) {
    
        var erros = [];
    
        if (paciente.nome.length == 0) { // se o nome do paciente for igual a 0, adiciona o erro no array de erros
            erros.push("O nome não pode ser em branco");
        }
    
        if (paciente.gordura.length == 0) { // se a gordura do paciente for igual a 0, adiciona o erro no array de erros
            erros.push("A gordura não pode ser em branco");
        }
    
        if (paciente.peso.length == 0) { // se o peso do paciente for igual a 0, adiciona o erro no array de erros
            erros.push("O peso não pode ser em branco");
        }
    
        if (paciente.altura.length == 0) {
            erros.push("A altura não pode ser em branco");
        }
    
        if (!validaPeso(paciente.peso)) { // se o peso do paciente for inválido, adiciona o erro no array de erros
            erros.push("Peso é inválido");
        }
    
        if (!validaAltura(paciente.altura)) { // se a altura do paciente for inválida, adiciona o erro no array de erros
            erros.push("Altura é inválida");
        }
    
        return erros;
    }

    



// exibe as mensagens de erro, se houver algum erro;
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; // limpa a lista de erros antes de exibir os novos erros

    erros.forEach(function(erro) {  // forEach é um método do array que percorre cada item do array e executa uma função para cada item
        var li = document.createElement("li"); // cria um elemento li
        li.textContent = erro; // adiciona o texto do erro na li
        ul.appendChild(li); // adiciona a li na ul
    });
}

function adicionaPacienteNaTabela(paciente) { // função que adiciona o paciente na tabela
    var pacienteTr = montarTr(paciente); // monta a tr e a td do paciente
    var tabela = document.querySelector("#tabela-pacientes"); // seleciona a tabela
    tabela.appendChild(pacienteTr);  // adiciona o paciente na tabela
}