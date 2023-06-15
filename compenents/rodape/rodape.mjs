export function Rodape(){
    fetch('./rodape.html')
        .then(response => response.text())
        .then(html =>{
            document.getElementById('componente-rodape').innerHTML= html;
            console.log("peguei")
        })
        .catch(error => console.log(error));
}