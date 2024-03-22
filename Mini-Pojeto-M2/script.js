
class Pet {
  constructor(nomeAnimal, nomeTutor, contato, diarias, especie) {
    this.nomeAnimal = nomeAnimal;
    this.nomeTutor = nomeTutor;
    this.contato = contato;
    this.diarias = diarias;
    this.especie = especie;
  }
}

const formCadastro = document.getElementById('formCadastro');
const listaPets = document.getElementById('listaPets');

let pets = [];

formCadastro.addEventListener('submit', (event) => {
  event.preventDefault();
  const nomeAnimal = document.getElementById('nomeAnimal').value;
  const nomeTutor = document.getElementById('nomeTutor').value;
  const contato = document.getElementById('contato').value;
  const diarias = document.getElementById('diarias').value;
  const especie = document.getElementById('especie').value;

  const novoPet = new Pet(nomeAnimal, nomeTutor, contato, diarias, especie);
  pets.push(novoPet);
  formCadastro.reset();

  // Exibindo mensagem de cadastro com sucesso
  const mensagemCadastro = document.createElement('p');
  mensagemCadastro.textContent = 'Cadastro realizado com sucesso!';
  mensagemCadastro.classList.add('sucesso');
  formCadastro.appendChild(mensagemCadastro);

  // Removendo a mensagem após alguns segundos
  setTimeout(() => {
    mensagemCadastro.remove();
  }, 3000);

  listarPets();
});
// Função para listar os pets na página
function listarPets() {
  listaPets.innerHTML = '';

  pets.forEach((pet) => {
    const li = document.createElement('li');
    li.textContent = `Nome do Animal: ${pet.nomeAnimal}, Nome do Tutor: ${pet.nomeTutor}, Contato: ${pet.contato}, Diárias: ${pet.diarias}, Espécie: ${pet.especie}`;
    listaPets.appendChild(li);
  });
}

listarPets();




