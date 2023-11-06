
  "use strict";
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
  const buttonElement = document.getElementById('add-button');
  const buttonElementDel = document.getElementById("delete-button");
  const listElement = document.getElementById('list-comments');
  const nameInputElement = document.getElementById('name-input');
  const textareaInputElement = document.getElementById('textarea-input');
  const loaderElement = document.querySelector('.loader');
  const loadingElement = document.querySelector('.loading');
  const formElement = document.querySelector('.add-form');

  setActiveButtonInput();//Делаем кнопку активной после ввода поля

  setActiveButtonMessage();//Делаем кнопку активной после ввода поля
  let commentsArray = [];








  //цепочка промисов method: "GET"
  const fetchComments = () => {
    return fetch("https://wedev-api.sky.pro/api/v1/vorobyeva-tatyana/comments", {
      method: "GET",
    })
      .then((response) => {
        return response.json();

      })
      .then((responseData) => {
        const getApiComments = responseData.comments.map((comment) => {
          return {
            name: comment.author.name,
            date: getDateNow(),
            like: comment.likes,
            userLike: false,
            comment: comment.text,
          };
        });
        commentsArray = getApiComments;
        renderComments();
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

  buttonElementDel.addEventListener(('click'), () => { //Удаляю последний элемент (комментарий);
    document.getElementById('list-comments').lastElementChild.remove();
  });




  
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
        renderComments();
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


  const renderComments = () => {
    let commentsHtml = commentsArray.map((item, index) => {
      return `
    
    <li class="comment" data-username="${item.name}" data-text="${item.comment}">
          <div class="comment-header">
            <div>${item.name}</div>
            <div>${item.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${item.comment}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${item.like}</span>
              <button data-index='${index}' class="like-button ${item.paint}"</button>
            </div>
          </div>
        </li>
    `})
      .join('');
    listElement.innerHTML = commentsHtml;
    likes();
    commentClick();
  };

  renderComments();


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




  buttonElement.addEventListener("click", () => {
    buttonElement.disabled = true;
    loadingElement.classList.add("loadingInvisible")
    formElement.classList.add("add-formInvisible")
    loaderElement.classList.add("hidden");

    const postCommentsPromise = () => {
      fetch("https://wedev-api.sky.pro/api/v1/vorobyeva-tatyana/comments", {
        method: "POST",
        body: JSON.stringify({
          name: nameInputElement.value
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;"),

          text: textareaInputElement.value
            .replaceAll("___<", "&lt;")
            .replaceAll(">", "&gt;"),
          forceError: true
 
        }),
      })
      .then((response) => {
        if(response.status===500){
            throw new Error("Извините, неполатки с сервером")
           }
           if(response.status===400){
            throw new Error("Недопустимое количество символов-меньше трех")
           } 
            return response.json();
            сonsole.log(response.status);
            


          })
          .then((responseData) => {
            nameInputElement.value = '';
            textareaInputElement.value = '';
           return fetchComments()
           

          })


          
          .catch((error) => {
            if  (error.message === 'Failed to fetch') {
               alert("Проблемы с интернетом, проверьте подключение")

            }

             alert(error.message);

          })
          .finally(() => {
            console.log("click");

            loadingElement.classList.remove("loadingInvisible");
            formElement.classList.remove("add-formInvisible");
            buttonElement.disabled = false;
          })
     

    };


    postCommentsPromise();

    
  });



  



