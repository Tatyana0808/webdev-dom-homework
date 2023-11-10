const host = "https://wedev-api.sky.pro/api/v2/vorobyeva-tatyana/comments";
const userURL = " https://wedev-api.sky.pro/api/user";
let token = "Bearer bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";
export function getTodos() {
  return  fetch(host, {
      method: "GET",
      headers : {
        Authorization: token,
      }
    })
      .then((response) => {
       
        return response.json();

      })
}

export function postTodo( {name}, {text} ) {
   return fetch(host, {
        method: "POST",
        headers : {
          Authorization: token,
        },
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
      export function login({login, password}) {
        return fetch(userURL, {
             method: "POST",
             
             body: JSON.stringify({
              login,
              password,
      
             }),
           })
           .then((response) => {
             
                 return response.json();
                 
           })


}