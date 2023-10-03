
// a esto lo llamamos desestructuracion de datos
import { barcelona, roma, paris, londres } from './cuidades.js'


//DOM (DOCUMENT OBJECT MODEL): ES UNA REPRESENTACION ESTRUCTURADA DE UN DOCUMET0 EN HTML. LA INTERACCIONCON ESTO NOS VA A PERMITIR HACERUNA MODIFICACION DE ESTRUCTURA,CONTENIDO O DISEÑO EN LA EWB DE FORMA DINAMICA.EL DOM SE ORGANIZA COMOUN ARBOL DE NODOS Y CADA NODO ES UN ELEMENTO.CADAELEMENTO ES UN OBJETO Y PODEMOS TRABAHAR CON ELLO.


//Obtener los elementos del DOM

// queryselectorAll() 
// va a consultar(query) todos los selectores con lacondicion que le pasemos. en este caso todos los 'a'
let enlaces = document.querySelectorAll('a')

let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')
//agregar evento click a cada enlace

enlaces.forEach(function (enlace) {
    // addEventListener es igual que el onclick en html, pero desde js.
    enlace.addEventListener('click', function () {
        //remover activo del html,para agregarlo luego
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        })

        //agregar la clase "active" al enlace actual que corresponda
        this.classList.add('active')
        // este active es la class del html, que nos vaa marcar como activo el enlace. lo resalta de un color. y muestra su contenido

        //obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent) //aca estamos seleccionando el contenido del nodo que estamos seleccionando. tetConten es una propiedad del nodo. 

        // mostrarcontenido en el DOM

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subTitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    })


})

// funcion para traer lainfo corresctadesde ciudades.js

function obtenerContenido(enlace) {
    let contenido = {
        // cada uno de estas claves va a traer el valor importado desde ciudades.js

        'Barcelona': barcelona,
        'Roma': roma,
        'Parìs': paris,
        'Londres': londres
    }

    return contenido[enlace]
}
