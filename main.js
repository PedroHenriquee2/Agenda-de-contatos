const form = document.getElementById('form-contact');
const imgAprovado = '<img src="./imagens/contatoadd.png" alt="contato salvo" />';
const contatos = [];
const telefone = []; 

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha()
    atualizaTabela();
    atualizaTotalNumeros();

});

function adicionaLinha() {
    const inputNomeCompleto = document.getElementById('nome-completo');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (telefones.includes(inputTelefoneContato.value)) {
        alert(`O número: ${inputTelefoneContato.value} já esta cadastrado!`)
    } else {
        nomes.push(inputNomeCompleto.value);
        telefones.push(inputTelefoneContato.value);

        
    let linha = '<tr>';
    linha += `<td>${inputNomeCompleto.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value >= 15 ? imgAprovado : 'Reprovado'}</td>`;
    linha += '</tr>';

    linhas += linha
    }

    inputNomeCompleto.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;
}

function totalInput() {
    return nomes.length;
}

function atualizaTotalNumeros(){
    const total = totalInput();
    document.getElementById('total-numeros').innerHTML = total;
}

const inputTelefone = document.getElementById('telefone-contato');
inputTelefone.addEventListener('keyup', aplicarMascaraTelefone);