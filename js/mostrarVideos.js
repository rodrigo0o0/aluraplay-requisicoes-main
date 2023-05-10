import { conectaApi } from "./conectaApi.js";



const lista = document.querySelector('[data-lista]')
export default function constroiCard(titulo, descricao,url){
    const video = document.createElement('li');
    video.classList = 'videos__item';

    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="./img/logo.png" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`;
    
    lista.appendChild(video);
}
async function listaVideo(){
    try{
        const listaApi = await conectaApi.listaVideos();
        listaApi.forEach(elemento => {
            constroiCard(elemento.titulo, elemento.descricao, elemento.url)
        });
    }catch{
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de videos. </h2>`;
    }
}

console.log(listaVideo());

