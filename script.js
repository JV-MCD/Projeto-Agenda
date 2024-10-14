const form = document.getElementById('form-agenda')
let linhas = '';
const Nome = [];
const Numero = [];

form.addEventListener('submit',function(e){
    e.preventDefault();

adicionaLinha();
atualizaNumero();

})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if (Numero.includes(inputNumeroContato.value)){
        alert(`O Numero ${inputNumeroContato.value} já foi adicionado!`)
    }else{
    Nome.push(inputNomeContato.value);
    Numero.push(inputNumeroContato.value);
    

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNumeroContato.value}</td>`
    linha += '</tr>'

    linhas += linha;
}

inputNomeContato.value ='';
inputNumeroContato.value='';
}

function atualizaNumero(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}