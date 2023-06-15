export function Cabecalho(){
fetch('./cabecalho.html')
    .then(response => response.text())
    .then(html =>{
        document.getElementById('componente-cabecalho').innerHTML = html;
    })
    .catch(error => console.log('erro: ' +error));
}