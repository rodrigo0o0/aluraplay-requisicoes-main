import { conectaApi } from "./conectaApi.js";

const formEnvio = document.querySelector('[data-formulario]');
formEnvio.addEventListener('submit',(event) => criarVideo(event));



async function criarVideo(event) {
    event.preventDefault();
    var url = document.querySelector('[data-url]').value;
    var titulo = document.querySelector('[data-titulo]').value;
    var imagem = document.querySelector('[data-imagem]').value;
    var descricao = Math.floor(Math.random() * 10).toString();
    try{
        await conectaApi.criaVideo(titulo,descricao,url,imagem);
    
        window.location.href = '../pages/envio-concluido.html';
    }catch(e){
        alert(e);
    }
}

