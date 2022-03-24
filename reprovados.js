const nomes = ['Cinthia', 'Vinicius', 'Layla']
const notas = [4, 8, 9]

const reprovados = nomes.filter((alunos, indice) => notas[indice] < 5)

console.log(`reprovados: ${reprovados}`)