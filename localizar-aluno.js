const alunos = ['Cinthia', 'Vinicius', 'Evandro']
const mediaDosAlunos = [7, 8, 9]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

function exibeNomeNota(nomeDoAluno) {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + 'sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "O aluno não está cadastrado."
    }
}

console.log(exibeNomeNota('Valter'))