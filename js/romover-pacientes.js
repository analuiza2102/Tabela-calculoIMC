  var pacientes = document.querySelectorAll(".paciente"); // seleciona a tabela
    
   var tabela = document.querySelector("#tabela-pacientes"); // seleciona todos os pacientes da tabela
  
   tabela.addEventListener("dblclick", function(event) { // adiciona um evento de duplo clique na tabela
        event.target.parentNode.classList.add("fadeOut"); // adiciona a classe fadeOut ao pai do elemento clicado (tr) . 
        
        
        setTimeout(function() { // adiciona um timeout de 500ms
            event.target.parentNode.remove(); // remove o pai do elemento clicado (tr)
        }, 500);
    
    });
      

    //  var alvoEvento = event.target; // pega o alvo do evento
   // var paiDoAlvo = alvoEvento.parentNode; // pega o pai do alvo do evento
   // paiDoAlvo.remove.(); // remove o pai do alvo do evento (tr)   .    Isso e o mesmo que event.target.parentNode.remove();                 