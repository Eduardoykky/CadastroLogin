
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

