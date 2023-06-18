const title = document.createElement('h1');
title.style.color = 'white';
title.style.textAlign = 'center';
title.innerHTML = 'Detalhes dos jogadores';
title.style.marginBottom = '60px';

document.body.appendChild(title);

const container = document.createElement('div')
container.style.display = 'flex';

const div_img = document.createElement('div');
div_img.className = 'div_imagem';
div_img.style.width = '100%';
div_img.style.display = 'flex';
div_img.style.flexDirection = 'column';
div_img.style.alignItems = 'center';
div_img.style.position = 'absolute';

const imagem = document.createElement('img');
imagem.src = localStorage.getItem('caminho');;
imagem.style.marginBottom = '10px'

document.body.appendChild(imagem)

const nome_completo = document.createElement('h2');
nome_completo.innerHTML = localStorage.getItem('nome_completo');
nome_completo.style.color = 'white';

nome_completo.style.textAlign = 'center';



const div_text = document.createElement('div');
    div_text.className = 'div_text';
    div_text.style.width = '100%';
    div_text.style.position = 'absolute';
    div_text.style.color = 'white';
    div_text.style.top = '600px'

const nascimento = document.createElement('p');
nascimento.innerHTML = `Data de nascimento: ${localStorage.getItem('nascimento')}`;

const posicao = document.createElement('p');
posicao.innerHTML = `Posição: ${localStorage.getItem('posicao')}`;

const altura = document.createElement('p');
altura.innerHTML = `Altura: ${localStorage.getItem('altura')}`;

const descricao = document.createElement('p');
descricao.innerHTML = localStorage.getItem('descricao');


div_img.appendChild(imagem)
div_img.appendChild(nome_completo)

div_text.appendChild(nascimento)
div_text.appendChild(posicao)
div_text.appendChild(altura)
div_text.appendChild(descricao)

container.appendChild(div_img)
container.appendChild(div_text)

document.body.appendChild(container)

const botao = document.createElement('button');

botao.textContent = 'Voltar';

botao.addEventListener('click', function() {
    window.location.href = 'index.html';
});

botao.style.position = 'fixed';
botao.style.bottom = '20px';
botao.style.right = '20px';
botao.style.padding = '10px';
botao.style.backgroundColor = 'white';
botao.style.color = 'black';
botao.style.border = 'none';
botao.style.borderRadius = '5px';
botao.style.fontSize = '15px';



document.body.appendChild(botao);


