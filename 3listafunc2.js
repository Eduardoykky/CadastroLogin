
var nomes = []
var senhas = []
var index = 0

function CadastrarUsuario(){
    nomes[index] = prompt("Insira seu nome")
    senhas[index] = prompt("Insira sua senha")
    index++
}

function QualDeseja(){
    var opcao = prompt("1 Para Cadastrar; 2 Para login; 3 Para excluir cadastro; 4 Para encerrar.")
    return opcao
}

function Login(nome, senha) {
    for (var index2 = 0; index2 < nomes.length; index2++) {
        if (nome == nomes[index2]) {
            if (senha == senhas[index2]) {
                return true
            }
        }
    } 
    return false   
}

