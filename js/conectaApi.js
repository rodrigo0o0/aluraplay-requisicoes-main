


async function listaVideos(){
    const conexao = await fetch('http://localhost:3000/videos');
    console.log(conexao);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


export const conectaApi = {

    listaVideos
}


