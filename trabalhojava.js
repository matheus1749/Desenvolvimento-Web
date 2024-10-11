let resultado;

let preco = 50;

if (preco < 40) {
  resultado = "Livro é barato";
} else {
  resultado = "Livro não é barato";
}

console.log(resultado);

// Usando o operador ternário
preco = 50;
resultado = preco < 40 ? "Livro é barato" : "Livro não é barato";

console.log(resultado);

const meuArray = [1, 2, 3];

const meuObjeto = {
  texto: "uma propriedade",
  numero: 34
};

// Corrigindo a função soma
function soma(a, b) {
  return a + b;
}

// Função anônima
const anonima = function(a, b) {
  return a + b;
};

// Função de seta (arrow function)
const arrow = (a, b) => {
  return a + b;
};

// Função de seta mais concisa
const arrow2 = (a, b) => a + b;

// Corrigindo a última expressão
const arrow3 = (a) => a + 2;

// Exemplo de uso das funções
console.log(soma(2, 3)); // 5
console.log(anonima(2, 3)); // 5
console.log(arrow(2, 3)); // 5
console.log(arrow2(2, 3)); // 5
console.log(arrow3(3)); // 5

const dobro = (elemento) => {console.log(elemento * 2)}