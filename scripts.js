console.log(document.title);
//1
const titulo = document.getElementById("gen-1");
titulo.innerText = ("Generasión 1 Pokimon")
console.log(titulo)
//2
const colorFondo= document.querySelector(".infocard-list")
colorFondo.style.background= 'orange'
console.log(colorFondo)
//3
const url=document.URL
console.log(url);
//4
const dominio=document.domain
console.log(dominio)
//5
const nodosImagen= document.querySelectorAll('img')
console.log(nodosImagen)
//6
nodosImagen[0].setAttribute("src","url")
for(let i=0;i<nodosImagen.length;i++){
    nodosImagen[i].src="https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
}
/*Premium
const carta= document.querySelectorAll('.infocard-lg-data .text-muted')
const voladores= document.querySelectorAll('.itype flying')
if (voladores && carta){
        carta.style.background='green'
}
console.log(carta)*/