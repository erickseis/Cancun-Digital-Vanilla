/*menu hamburguesa*/
const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('class');

    if (rutaActual == 'fa-solid fa-bars') {
        e.target.setAttribute('class', 'fa-regular fa-circle-xmark');
    } else {
        e.target.setAttribute('class', 'fa-solid fa-bars');
    }
});

/* form */

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Gracias por contactarnos, te escribiremos pronto :)')
    }
}

