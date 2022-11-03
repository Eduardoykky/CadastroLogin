
var nomes = []
var senhas = []
var index = 0
var nomesSup = []
var senhasSup = []
var indexSup = 0
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

function ExcluirContas(nome) {
    for (var index3 = 0; index3 < nomes.length; index3++) {
        if (nome == nomes[index3]) {
            nomes[index3] = 0
            senhas[index3] = 0
        }
        
    }
    for (var index4 = 0; index4 < nomes.length; index4++) {
        if (nomes[index4] != 0) {
        nomesSup[indexSup] = nomes[index4]
        senhasSup[indexSup] = senhas[index4]
        indexSup++
        }
    
    }
    nomes = nomesSup
    senhas = senhasSup
}

