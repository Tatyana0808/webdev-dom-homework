import { postTodo } from "./api.js";
const listElement = document.getElementById('list-comments')

export const renderComments = ({commentsArray},{likes},{commentClick}) => {
  const appElement = document.getElementById("app")
   /* let commentsHtml = commentsArray.map((item, index) => {
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
      .join('');*/
  const appHTML = commentsArray.map((item, index) =>  {
    
   return `<li class="comment" data-username="${item.name}" data-text="${item.comment}">
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
</li>`
  })
 .join('');

  appElement.innerHTML = appHTML;
    likes();
    commentClick();
    const buttonElement = document.getElementById("add-button");
    const buttonElementDel = document.getElementById("delete-button");
    
    const nameInputElement = document.getElementById('name-input');
    const textareaInputElement = document.getElementById('textarea-input');
    const loaderElement = document.querySelector('.loader');
    const loadingElement = document.querySelector('.loading');
    const formElement = document.querySelector('.add-form');
    const ulElement = document.getElementById("list-comments");

    buttonElement.addEventListener("click", () => {
      buttonElement.disabled = true;
      loadingElement.classList.add("loadingInvisible")
      formElement.classList.add("add-formInvisible")
      loaderElement.classList.add("hidden");
  
      const postCommentsPromise = () => {
        
          postTodo({name:nameInputElement.value}, {text: textareaInputElement.value}).then((responseData) => {
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


  };