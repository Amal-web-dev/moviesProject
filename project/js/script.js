import {
  movies
} from "../modules/db.js";

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
'use strict';


const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Одержимость",
    "Скотт Пилигрим против...",
    "Ла-ла лэнд",
  ]
};

let pGenre = document.querySelector('.promo__genre')
let bg = document.querySelector('.promo__bg')
let adsName = document.querySelector('.promo__title')
let decr = document.querySelector('.promo__descr')
let IMBD = document.querySelector('.IMBD')
let kino = document.querySelector('.kino')
let typeMovie = document.querySelectorAll('.promo__menu-item')
let click = false

function reload(arr, place) {
  place.innerHTML = "";

  arr.sort((a, b) => a.Title.localeCompare(b.Title));

  for (const item of arr) {
    let p = document.createElement("li");
    let div = document.createElement("div");

    p.classList.add("promo__interactive-item");
    div.classList.add("delete");
    p.innerHTML = (arr.indexOf(item) + 1) + '. ' + item.Title;
    p.style.cursor = 'pointer'


    place.append(p);
    p.append(div);

    p.onclick = () => {
      bg.style.backgroundImage = 'url(' + item.Poster + ')'
      pGenre.innerHTML = item.Genre
      adsName.innerHTML = item.Title 
      decr.innerHTML = item.Plot
      IMBD.innerHTML = 'IMBD: ' + item.imdbRating
      kino.innerHTML = 'Кинопоиск: ' +  Math.round(Math.random() * 3 + 7)
    }

    div.onclick = () => {
      p.remove();
    }
    

  }
}

const listP = document.querySelector('.promo__interactive-list');
reload(movies, listP);


typeMovie.forEach(movie => {
    movie.onclick = () => {
      typeMovie.forEach(otherMovie => {
        if(otherMovie != movie) {
          otherMovie.style.color = 'white'
        }
      })
      if(click == false) {
        movie.style.color = 'yellow'
        click = true
      } else {
        movie.style.color = 'yellow'
        click = false
      }
    }
  })




// btnChange.onclick = () => {
//   if(click == false) {
//     pGenre.innerHTML = 'драма'
//     bg.style.backgroundImage = 'url(./img/bg.jpg)'
//     click = true
//   } else {
//     pGenre.innerHTML = 'комедия'
//     bg.style.backgroundImage = 'url(./img/mars.webp)'
//     click = false
//   }
// }

let adv = document.querySelectorAll('#adv-logo')
let close = document.querySelector('.icon-close')

close.onclick = () => {
  adv.forEach(addvert => {
    addvert.remove()
    close.remove()
  })
}

