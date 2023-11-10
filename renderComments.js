const listElement = document.getElementById('list-comments');

export const renderComments = ({commentsArray},{likes},{commentClick}) => {
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