const host = "https://wedev-api.sky.pro/api/v2/vorobyeva-tatyana/comments";
export function getTodos() {
  return  fetch(host, {
      method: "GET",
    })
      .then((response) => {
        return response.json();

      })
}

export function postTodo( {name}, {text} ) {
   return fetch(host, {
        method: "POST",
        body: JSON.stringify({
          name: name
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;"),

          text: text
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
           // сonsole.log(response.status);
            return response.json();
            
            


          })
    
}