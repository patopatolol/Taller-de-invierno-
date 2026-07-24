let imagenes = [
    {
        "url": "../Fotos/Voluntariados.jpeg",
        "nombre": "Voluntariados ",
        "descripcion": "Creemos que ayudar puede cambiar vidas. Por eso, conectamos personas con ganas de hacer la diferencia a través de voluntariados presenciales y televoluntariados. Nuestra misión es fortalecer comedores comunitarios y llevar más apoyo a quienes lo necesitan. Sumate y sé parte del cambio."
    },
    {
        "url": "../Fotos/Donaciones.jpg",
        "nombre": "Recibimos Donaciones",
        "descripcion": "Cada donación genera un impacto real. Con tu apoyo fortalecemos nuestros comedores comunitarios y llevamos alimentos, acompañamiento y esperanza a quienes más lo necesitan. Súmate al cambio y dona hoy."
    },
    {
        "url": "../Fotos/comedores.jpg",
        "nombre": "Comedores comunitarios",
        "descripcion": "Un plato de comida puede cambiar un día. En nuestro comedor compartimos alimentos, apoyo y esperanza para que más personas encuentren un lugar donde sentirse acompañadas y escuchadas."
    }
];

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.</p>'
        }
        else{
            puntos.innerHTML += '<p>.</p>'
        }
    } 
}