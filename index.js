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
// let img = [];
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
      news = data.items.reverse()
        .slice(news.length - 5);
      console.log(news)
      let newarray = news.pop()
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
      <h4> ${newn.title.slice(0, 45)}...</h4>
      <p>${newn.content_text.slice(0, 140)}...</p>
      <br />      
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
      <h4> ${newn.title.slice(0, 50)}</h4>
      <p>${newn.content_text.slice(0, 250)}...</p>
      <br />
      <a href="${newn.url}">https://cancundigital.com.mx/blog</a>
      </div>
    `
  })
  ultimateNews.innerHTML = listHTML;
}

/* imagenes de las noticias del blog */


const API_URL2 = 'https://cancundigital.com.mx/blog/wp-json/wp/v2/media';
let img = [];
let ultimateNewImg = [];
window.addEventListener('DOMContentLoaded', () => {
  getImg();
})

const getImg = () => {
  fetch(API_URL2)
    .then(response => response.json())
    .catch(error => {
      alertManager('error', 'Ocurrión un problema al cargar los productos');
    })
    .then(data => {
      img = data.reverse()
        .slice(img.length - 5);
      console.log(img)
      let newarray = img.pop()
      renderResultImg(img);

      ultimateNewImg = data.slice(ultimateNewImg.length - 1)
      console.log(ultimateNewImg)
      renderUltimateResultImg(ultimateNewImg)

    })

}


const imgList = document.querySelector('#contain');

const renderResultImg = async (img) => {
  let lisImgtHTML = "";
  await img.forEach((im, i) => {
    lisImgtHTML += `
      <div class="card-n-img card-n-img${i}">
           <img src="${im.source_url}" alt="imagen"/>
            </div>
      `
  })
  imgList.innerHTML = lisImgtHTML;
}


const ultimateNewsImg = document.querySelector('#contain2');

const renderUltimateResultImg = async (ultimateNewImg) => {
  let listHTML = "";
  await ultimateNewImg.forEach(im => {
    listHTML += `
      <div class="card-nn-img">
      <img src="${im.source_url}" alt="imagen"/>
      </div>
    `
  })
  ultimateNewsImg.innerHTML = listHTML;
}






