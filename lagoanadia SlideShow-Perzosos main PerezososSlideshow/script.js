var lista = ["sloth1.jpg", "sloth2.jpg", "sloth3.jpg", "sloth4.jpg"];
var circulo = document.querySelectorAll(".circle"); /*Selecciona todos los elementos con la clase "circle" y los almacena en la variable circulo*/
var posicion = 0;

function mostrar(aux)
{
    posicion += aux; /*posicion = posicion + aux*/
    console.log(posicion);
    posicion = (posicion < 0) ? lista.length - 1 : posicion; /*Si la posicion es menor que 0, entonces posicion es igual a lista.length - 1, de lo contrario, posicion es igual a posicion*/
    posicion = (posicion > lista.length-1) ? 0 : posicion; /*Si la posicion es mayor que lista.length - 1, entonces posicion es igual a 0, de lo contrario, posicion es igual a posicion*/

    document.getElementById("sloth").src = lista[posicion]; /*El elemento con id "sloth" tiene su atributo src igual a lista[posicion]*/
    actualizarCirculo();
}

function cambiarImagen(aux)
{
    posicion = aux; /*posicion es igual a aux*/
    document.getElementById("sloth").src = lista[posicion]; /*El elemento con id "sloth" tiene su atributo src igual a lista[posicion]*/
    actualizarCirculo();

}

function actualizarCirculo()
{
    circulo[0].classList.remove("active"); /*El primer elemento de circulo tiene su clase "active" removida*/
    circulo[1].classList.remove("active");                      
    circulo[2].classList.remove("active");
    circulo[3].classList.remove("active");
    circulo[posicion].classList.add("active"); /*El elemento de circulo en la posicion tiene su clase "active" agregada*/

}

