
let amigos = [];


const input = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');


function mostrarLista() {
  
  lista.innerHTML = '';

  
  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement('li');
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}


function limparResultado() {
  resultado.innerHTML = '';
}


function adicionarAmigo() {
  const nome = input.value.trim(); 


  if (nome === '') {
    alert('Por favor, insira um nome.');
    input.focus();
    return;
  }


  amigos.push(nome);

 
  input.value = '';
  input.focus();

 
  limparResultado();
  mostrarLista();
}


function sortearAmigo() {
  limparResultado();

  
  if (amigos.length === 0) {
    alert('Adicione pelo menos um nome antes de sortear.');
    input.focus();
    return;
  }

  
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  
  const amigoSorteado = amigos[indiceAleatorio];

  
  const itemResultado = document.createElement('li');
  itemResultado.innerHTML = 'Amigo sorteado: <strong>' + amigoSorteado + '</strong>';
  resultado.appendChild(itemResultado);
}


input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    adicionarAmigo();
  }
});
