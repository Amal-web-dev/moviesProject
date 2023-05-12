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
let btnChange = document.querySelector('#btn-change')
let bg = document.querySelector('.promo__bg')
let typeMovie = document.querySelectorAll('.promo__menu-item')
let click = false

function reload(arr, place) {
  place.innerHTML = "";

  arr.movies.sort();

  for (let i = 0; i < arr.movies.length; i++) {
    const element = arr.movies[i];

    let p = document.createElement("li");
    let div = document.createElement("div");
    let span = document.createElement("span");

    p.classList.add("promo__interactive-item");
    div.classList.add("delete");
    span.classList.add("promo__interactive-item-num");
    span.innerHTML = i + 1 + ". ";
    p.innerHTML = span.innerHTML + element;

    place.append(p);
    p.append(div);

    div.onclick = () => {
      p.remove();
    }
  }
}

const listP = document.querySelector('.promo__interactive-list');
reload(movieDB, listP);


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




btnChange.onclick = () => {
  if(click == false) {
    pGenre.innerHTML = 'драма'
    bg.style.backgroundImage = 'url(./img/bg.jpg)'
    click = true
  } else {
    pGenre.innerHTML = 'комедия'
    bg.style.backgroundImage = 'url(./img/mars.webp)'
    click = false
  }
}

let adv = document.querySelectorAll('#adv-logo')
let close = document.querySelector('.icon-close')

close.onclick = () => {
  adv.forEach(addvert => {
    addvert.remove()
    close.remove()
  })
}

