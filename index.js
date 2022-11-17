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

/* noticias del blog */


const API_URL = 'https://cancundigital.com.mx/blog/feed/json';
let news = [];
let ultimateNew = [];
window.addEventListener('DOMContentLoaded', () => {
  getNews();
})

const getNews = () => {
  fetch(API_URL)
    .then(response => response.json())
    .catch(error => {
      alertManager('error', 'Ocurrión un problema al cargar los productos');
    })
    .then(data => {
      console.log(data.items)
      news = data.items.reverse()
        .slice(news.length - 5);
      console.log(news)
      let newarray = news.pop()
      console.log(newarray)
      renderResult(news);
      ultimateNew = data.items.slice(ultimateNew.length - 1)
      console.log(ultimateNew)

      renderUltimateResult(ultimateNew)

    })
}

const newsList = document.querySelector('#news-container');

const renderResult = async (news) => {
  let listHTML = "";
  await news.forEach(newn => {
    listHTML += `
      <div class="card-n">
      <h4> ${newn.title}</h4>
      <p>${newn.content_text.slice(0, 200)}...</p>
      <br />
      <img src="https://images.vexels.com/media/users/3/147149/isolated/preview/b80672b8545a4c8d9a04e7df58d4dc1b-icono-de-periodico-de-noticias.png" />
      <a href='${newn.url}'>https://cancundigital.com.mx/blog</a>
      </div>
    `
  })
  newsList.innerHTML = listHTML;
}


const ultimateNews = document.querySelector('#ultimate-New');

const renderUltimateResult = async (ultimateNew) => {
  let listHTML = "";
  await ultimateNew.forEach(newn => {
    listHTML += `
      <div class="card-nn">
      <h4> ${newn.title}</h4>
      <p>${newn.content_text.slice(0, 500)}...</p>
      <br />
      <div class="img-ultimateNew">
      <img src="https://images.vexels.com/media/users/3/147149/isolated/preview/b80672b8545a4c8d9a04e7df58d4dc1b-icono-de-periodico-de-noticias.png" />
      </div>
      <a href="${newn.url}">https://cancundigital.com.mx/blog</a>
      </div>
    `
  })
  ultimateNews.innerHTML = listHTML;
}




