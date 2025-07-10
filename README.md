# 🏆 Desafio - Partidas Rankeadas

Este projeto consiste em uma função JavaScript que calcula o **nível de um jogador** com base no número de vitórias e derrotas em partidas ranqueadas, simulando um sistema de ranqueamento de jogos competitivos.

## 📋 Descrição do Desafio

A ideia é criar uma função que receba a quantidade de **vitórias** e **derrotas** de um jogador e calcule:

- O **saldo de vitórias**
- O **nível do jogador**, baseado em uma tabela de classificação

### 💡 Regras de Classificação

| Saldo de Vitórias | Nível     |
|-------------------|-----------|
| Menor que 10      | Ferro     |
| 11 a 20           | Bronze    |
| 21 a 50           | Prata     |
| 51 a 80           | Ouro      |
| 81 a 90           | Diamante  |
| 91 a 100          | Lendário  |
| Acima de 101      | Imortal   |

## 🧠 Lógica da Função

A função `calcularRank(vitorias, derrotas)`:

1. Calcula o saldo: `saldo = vitórias - derrotas`
2. Verifica o nível com base na quantidade de vitórias (não no saldo)
3. Retorna uma mensagem com o saldo e o nível correspondente

### 🧪 Exemplo de uso

```javascript
const resultado = calcularRank(75, 20);
console.log(resultado);
// Saída: "O Herói tem de saldo de **55** está no nível de **Ouro**"
