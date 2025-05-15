// Classe que representa um herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    let ataque;

    // Define o ataque com base no tipo do herói
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque desconhecido';
    }

    // Exibe a mensagem final
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso
const heroi1 = new Heroi("Arthur", 30, "guerreiro");
const heroi2 = new Heroi("Mestre Lee", 60, "monge");
const heroi3 = new Heroi("Shadow", 22, "ninja");
const heroi4 = new Heroi("Merlin", 120, "mago");

heroi1.atacar(); // O guerreiro atacou usando espada
heroi2.atacar(); // O monge atacou usando artes marciais
heroi3.atacar(); // O ninja atacou usando shuriken
heroi4.atacar(); // O mago atacou usando magia