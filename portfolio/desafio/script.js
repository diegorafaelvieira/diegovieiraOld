let totalCadastros = 0;
let nomes = [];
let telefones = [];
let nascimentos = [];
let notas = [];

function cadastrarAluno() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let nascimento = document.getElementById("nascimento").value;
    let nota = document.getElementById("nota").value;

    nomes[totalCadastros] = nome;
    telefones[totalCadastros] =  telefone;
    nascimentos[totalCadastros] = nascimento;
    notas[totalCadastros] = nota;

    if (nome && telefone && nascimento && nota != null){
        document.getElementById("alunos").innerHTML += "<p onclick='(" + totalCadastros + ")'>" + "<strong>Nome:</strong>   "+ nome + "  <strong>Telefone:</strong>   " + telefone + "  <strong>Data de Nascimento:</strong>   " + nascimento + "  <strong>Nota Final:</strong>  " + nota + "<hr>";
        totalCadastros++;   

        alert("Aluno cadastrado com sucesso!"); // Aviso ao efetuar cadastro

        document.getElementById('nome').value=''; // Limpa o campo
        document.getElementById('telefone').value=''; // Limpa o campo
        document.getElementById('nascimento').value=''; // Limpa o campo
        document.getElementById('nota').value=''; // Limpa o campo
    }

}