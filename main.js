
  "use strict";


import { token } from "./api.js";
import { renderLogin } from "./loginPage.js";
import { renderComments } from "./renderComments.js";


import { addTodo, deleteTodo, getTodos } from "./api.js";
//import { renderLoginComponent } from "./components/login-component.js";
import { formatDateToRu, formatDateToUs } from "./lib/formatDate/formatDate.js"
import { format } from 'date-fns'


const tasksHtml = tasks;
const country = "ru"

    .map((task) => {
      return `
          < class="task">
            <p class="task-text">
              ${task.text} (Создал: ${task.user?.name ?? "Неизвестно"})
              <button data-id="${
                task.id
              }" class="button delete-button">Удалить</button>
            </p>
            <p><i>Задача создана: ${country === "ru" ? formatDateToRu(new Date(task.created_at)) : formatDateToUs(new Date(task.created_at))}</i></p>
          
          </li>`;
    })
    .join("");


  console.log("It works!");

  // Код писать здесь

  const ulElement = document.getElementById("list-comments");

  const setActiveButtonInput = () => {


    nameInputElement.addEventListener(('input'),

      () => { //привожу кнопку в порядок после инпута:
        buttonElement.classList.remove('disabled-hover');//Делаю кнопку активной после ввода данных в инпут
        buttonElement.removeAttribute('disabled', '');//Делаю кнопку активной после ввода данных в инпут
        nameInputElement.classList.remove('err');

      });
  }

  const setActiveButtonMessage = () => {

    textareaInputElement.addEventListener(('input'), () => {
      //привожу кнопку в порядок после текстареа:
      buttonElement.classList.remove('disabled-hover');
      //Делаю кнопку активной после ввода данных в текстареа

      buttonElement.removeAttribute('disabled', '');

      //Делаю кнопку активной после ввода данных в текстареа
      textareaInputElement.classList.remove('err');

    });


  }

  const disabledButton = () => {
    // Делаю кнопку неактивной

    buttonElement.setAttribute('disabled', '');
    buttonElement.classList.add('disabled-hover');


  }

  const submitEnter = (event) => { // отправка сообщения по Enter
    if (event.keyCode === 13) {
      document.getElementById("add-button").click();
      nameInputElement.value = "";
      textareaInputElement.value = "";
    }
  }
  const buttonElement = document.getElementById("add-button");
  const buttonElementDel = document.getElementById("delete-button");
  
  const nameInputElement = document.getElementById('name-input');
  const textareaInputElement = document.getElementById('textarea-input');
  const loaderElement = document.querySelector('.loader');
  

  let commentsArray = [];



//цепочка промисов method: "GET"

 export const fetchComments = () => {
    getTodos().then((responseData) => {
        const getApiComments = responseData.comments.map((comment) => {
          return {
            name: comment.author.name,
            date: format(new Date(comment.date), "yyyy-MM-dd hh.mm.ss"),
            like: comment.likes,
            userLike: false,
            comment: comment.text,
          };
        });
        commentsArray = getApiComments;
        renderComments({commentsArray,likes,commentClick});
        loaderElement.classList.add("hidden");
      });
  };

  fetchComments();
  

  const getDateNow = () => {
    const dateNow = new Date();
    let day = dateNow.getDate();
    let month = dateNow.getMonth() + 1;
    let year = dateNow.getFullYear() % 1000;
    let hour = dateNow.getHours();
    let minute = dateNow.getMinutes();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    return `${day}.${month}.${year} ${hour}:${minute}`
  }


  document.addEventListener("keyup", submitEnter);



  const likes = () => {
    const likeButtons = document.querySelectorAll('.like-button');
    for (const likeButton of likeButtons) {
      likeButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const index = likeButton.dataset.index;
        if (commentsArray[index].userLike === false) {
          commentsArray[index].paint = '-active-like';
          commentsArray[index].like += 1;
          commentsArray[index].userLike = true;
        } else {
          commentsArray[index].paint = '';
          commentsArray[index].like -= 1;
          commentsArray[index].userLike = false;
        }
        renderComments({commentsArray,likes,commentClick});
      });
    };
  };




  const commentClick = () => {
    const userComments = document.querySelectorAll(".comment");
    for (const userComment of userComments) {
      userComment.addEventListener("click", () => {
        textareaInputElement.value = `>${userComment.dataset.text}\n ${userComment.dataset.username},\n`;
      });
    }

  }


 

  renderComments({commentsArray,likes,commentClick});

  const getToken = () => token
  getToken ();
  if(token){

    setActiveButtonInput();//Делаем кнопку активной после ввода поля

    setActiveButtonMessage();//Делаем кнопку активной после ввода поля

  }

  if (token){
    buttonElementDel.addEventListener(('click'), () => { //Удаляю последний элемент (комментарий);
       document.getElementById('list-comments').lastElementChild.remove();
      });
     } 

   if (token){

    buttonElement.disabled = true;
   nameInputElement.addEventListener('input', () => {
    if ((nameInputElement.value === '') || (textareaInputElement.value === '')) {
      buttonElement.disabled = true;
      return;
    }
    else {
      buttonElement.disabled = false;
      return;
    }
  });

  textareaInputElement.addEventListener('input', () => {
    if ((textareaInputElement.value === '') || (nameInputElement.value === '')) {
      buttonElement.disabled = true;
      return;
    }
    else {
      buttonElement.disabled = false;

      return;
    }
  })


  buttonElement.addEventListener('click', () => {
    nameInputElement.classList.remove('error');
    textareaInputElement.classList.remove('error');

    if ((nameInputElement.value || textareaInputElement.value) === '') {
      nameInputElement.classList.add('error');
      textareaInputElement.classList.add('error');
      return;
    }
    getDateNow();
  }); 

   }   




 



  




