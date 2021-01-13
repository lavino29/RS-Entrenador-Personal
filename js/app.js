const button = document.querySelector('#button')
const navegacion = document.querySelector('.navegacion__mobile')
const lista = document.querySelector('#lista')

button.addEventListener('click',()=>{
navegacion.classList.toggle('menu_activo2')
lista.classList.toggle('menu_activo')
})
