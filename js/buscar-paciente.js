var botaoAdicionar = document.querySelector("#Buscar-paciente"); // Seleciona o botão

botaoAdicionar.addEventListener("click", function() { 
    var xhr = new XMLHttpRequest(); // objeto que faz requisições HTTP (AJAX), é um objeto do JS, não do DOM,  xml é um formato de dados, não é uma linguagem de programação; xml e uma biblioteca do JS // aqui vamos configurar a requisição, ou seja, o que queremos fazer com o objeto xhr

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // método open, que recebe dois parâmetros, o primeiro é o método HTTP que queremos usar, ou seja, qual tipo de requisicao vamos fazer e o segundo é a URL que queremos acessar (a API que queremos acessar)
    
    xhr.addEventListener("load", function() {  // evento load, que é disparado quando a requisição termina, ou seja, quando o servidor responde, xhr quando sua resposta chegar, ele vai disparar o evento load, e quando isso acontecer, ele vai executar a função anônima que está dentro do evento load, que é a função que vai tratar a resposta do servidor
        var erroAjax = document.querySelector("#msg-erro"); // seleciona a mensagem de erro
        if (xhr.status == 200) { // se o status da requisição for 200, ou seja, se a requisição foi bem sucedida, então ele vai executar o código abaixo
            erroAjax.classList.add("invisivel"); // adiciona a classe invisivel na mensagem de erro
            var resposta = xhr.responseText; // resposta do servidor, que é o texto que está dentro do xhr, que é o objeto que faz requisições HTTP e que vai receber a resposta do servidor
            var pacientes = JSON.parse(resposta); // transformando a resposta em um array de objetos, ou seja, transformando a resposta em um array de pacientes, JSON.parse é um método do JS que transforma uma string no formato JSON em um objeto do JS
    
            pacientes.forEach(function(paciente) { // forEach é um método do array que percorre cada item do array e executa uma função para cada item, nesse caso ele vai percorrer cada paciente e vai adicionar na tabela
                adicionaPacienteNaTabela(paciente); // adiciona o paciente na tabela
            });
        } else { // se o status da requisição for diferente de 200, ou seja, se a requisição não foi bem sucedida, então ele vai executar o código abaixo
            erroAjax.classList.remove("invisivel"); // remove a classe invisivel da mensagem de erro
        }
    });
    
    xhr.send(); // método send, que envia a requisição, ou seja, ele envia a requisição para o servidor, e o servidor vai responder com o JSON, e quando o servidor responder, o evento load vai ser disparado, e quando o evento load for disparado, a função anônima que está dentro do evento load vai ser executada, e a função anônima vai tratar a resposta do servidor, que é o JSON, e vai converter o JSON em objeto, e vai mostrar no console o objeto que foi convertido, no caso os dados do paciente da API
    });