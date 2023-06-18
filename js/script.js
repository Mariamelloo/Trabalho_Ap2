//navbar

const navbar = document.createElement('nav');
navbar.classList.add('navbar');
navbar.style.width = '100%';
navbar.style.position = 'absolute';
navbar.style.height = '70px';
navbar.style.top = '0px';
navbar.style.left = '0px';
navbar.style.padding = '20px';
navbar.style.background ='#CBCAC9';

const busca = document.createElement('input');
busca.classList.add('search-input');
busca.type = 'text';
busca.placeholder = 'Pesquisar';
busca.style.float = 'right';
busca.style.marginRight = '30px';

const logo = document.createElement('img');
logo.src = 'logo_botafogo.png';
logo.alt = 'Logo';
logo.style.width = '60px'


navbar.appendChild(logo);
navbar.appendChild(busca);

document.body.prepend(navbar);

//body
const container = document.createElement('div');
container.className = 'container';
container.style.display = 'grid';
container.style.gridTemplateColumns = '1fr 1fr';
container.style.margin = '10px';
container.style.placeItems = 'center';
container.style.width = '100%';

const titulo = document.createElement('h1');
titulo.style.color = 'white';
titulo.style.textAlign = 'center';
titulo.style.marginTop ='150px'
titulo.innerHTML = 'Elenco Profissional';

document.body.appendChild(titulo);


function detalhe (clicada) {
    const imagem_clicada = clicada.target;

    localStorage.setItem('nome_completo', imagem_clicada.dataset.nome_completo);
    localStorage.setItem('nascimento', imagem_clicada.dataset.nascimento);
    localStorage.setItem('altura', imagem_clicada.dataset.altura);
    localStorage.setItem('descricao', imagem_clicada.dataset.descricao);
    localStorage.setItem('posicao', imagem_clicada.dataset.posicao);
    localStorage.setItem('caminho', imagem_clicada.src);
  
    window.location.href = 'info.html';
  }



function criar_cartao(imagem, nome , nome_completo, nascimento, altura, descricao, posicao, elenco) {

    const div_cartao = document.createElement('div')
    div_cartao.className = 'div_cartao';
        div_cartao.style.position = 'relative';
        div_cartao.style.width = '90%';
        div_cartao.style.color = 'black';
        div_cartao.style.overflow = 'hidden';
        div_cartao.style.borderRadius = '5px';
        div_cartao.style.padding = '5px';
        div_cartao.style.margin = '5px';
        div_cartao.style.border = '5px';
        div_cartao.style.background ='#c0bec5';
    
    const imagem_jogador =  document.createElement('img');
        imagem_jogador.src = imagem;
        imagem_jogador.className = 'imagem';
        imagem_jogador.style.border = '1px solid black';
        imagem_jogador.style.borderRadius = '5px';
        imagem_jogador.style.width = '100%';
        imagem_jogador.style.textAlign = 'center';
        imagem_jogador.style.margin = '0 auto';
        imagem_jogador.style.fontFamily = 'sans-serif';

        imagem_jogador.dataset.nome_completo = nome_completo;
        imagem_jogador.dataset.nascimento = nascimento;
        imagem_jogador.dataset.altura = altura;
        imagem_jogador.dataset.descricao = descricao;
        imagem_jogador.dataset.posicao = posicao;


    const NomeCompleto = document.createElement('h3');
        NomeCompleto.style.color = 'white';
        NomeCompleto.innerHTML = nome_completo;

    const data_nascimento = document.createElement('h5');
        data_nascimento.innerHTML = nascimento;
    const altura_jogador = document.createElement('h5');
        altura_jogador.innerHTML = altura;
    const descricao_jogador = document.createElement('h5');
        descricao_jogador.innerHTML = descricao;
    const posicao_jogador = document.createElement('h5');
        posicao_jogador.innerHTML = posicao;
 

    const nome_jogador = document.createElement('h5');
        nome_jogador.innerHTML = nome;
        nome_jogador.style.textAlign = 'center';


  
    div_cartao.appendChild(imagem_jogador)
    div_cartao.appendChild(nome_jogador)

    div_cartao.addEventListener('click', detalhe);

    
    return div_cartao;
}
for (const jogador of jogadores) {
    const cartao = criar_cartao(jogador.imagem, jogador.nome, jogador.nome_completo, jogador.nascimento, jogador.altura, jogador.descricao, jogador.posicao, jogador.elenco);
    container.appendChild(cartao);
  }
document.body.appendChild(container)


const buscar = (e) => {
    const pre_string_busca = e.target.value;
    const string_busca = pre_string_busca.toLowerCase();
    if (string_busca.length >= 1 || string_busca.length == 0){
        const filtro = jogadores.filter((jogador) => {
            const nome = jogador.nome.toLowerCase();
            return nome.includes(string_busca);
        });
        container.innerHTML = '';

        filtro.forEach((jogador) => {
        const cartao = criar_cartao(jogador.imagem, jogador.nome, jogador.nome_completo, jogador.nascimento, jogador.altura, jogador.descricao, jogador.posicao, jogador.elenco);
            container.appendChild(cartao);
    });
}
}

busca.addEventListener('input', buscar);






