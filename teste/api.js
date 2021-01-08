const ul = document.getElementById('usuarios')
const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
    .then(function (resp) {
        return resp.json();

    })
    .then(function (dados) {
        console.log(dados);

        // o recomendado aqui seria usar um map, mas vamos fazer com for
        // pois é o que mais vimos até agora.
        Object.entries(dados).forEach(([indice, usuario]) => {
            let li = document.createElement("li");
            // atente ao uso da crase (`)
            // aspas simples (') ou duplas (") não formatam a string
            li.innerHTML = `[${indice}] ${usuario.name} (${usuario.username})`;
            ul.appendChild(li);
        });

    })
    .catch((err) => {
        console.log("Deu ruim no assíncrono aí, rapaz!", err);
    })

///////////////////////////////////////////////////////////////
const url1 = "https://jsonplaceholder.typicode.com/todos/1"
const url2 = "https://jsonplaceholder.typicode.com/todos/2"
const url3 = "https://jsonplaceholder.typicode.com/todos/312312312"
const urls = [url1, url2, url3]

const ul_ = document.getElementById("tarefas")

var promises = urls.map(function (url) {

    obj = fetch(url)
        .then(function (resp) {

            // o fetch entenderá como bem sucedida qualquer resposta do servidor
            // mesmo que seja uma resposta de erro
            if (resp.ok) {
                console.log(url, "alcançada")
                return resp.json()

            } else {
                throw new Error("Deu ruim ao alcançar a url! Resposta não 2xx")
            }

        })
        .catch(function (err) {
            console.log(err)
        })

    return obj

});


Promise.all(promises).then(resultado => {

    return resultado.map(tarefa => {
        let li = document.createElement('li');
        li.innerHTML = `${tarefa.title} (completo: ${tarefa.completed})`;
        ul_.appendChild(li);
    })

}).catch(function (err) {
    console.log("Deu ruim no assíncrono aí", err)

});