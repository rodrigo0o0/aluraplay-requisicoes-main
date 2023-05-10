import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";



const btnPesquisar = document.querySelector('[data-botao-pesquisa]');

async function buscaVideo(event){
    const termoConsulta = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(termoConsulta);

    const lista = document.querySelector('[data-lista]');
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi encontrado nenhum vídeo com esse termo. </h2>`;
    }else{
        busca.forEach(element => {
            constroiCard(element.titulo,element.descricao,element.url);
        });
    }


}


btnPesquisar.addEventListener('click', event => buscaVideo(event));
