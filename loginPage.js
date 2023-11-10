import { login, setToken, token } from "./api.js"




 export const renderLogin =() =>{
    const appElement = document.getElementById("app")
    const loginHtml = `  <div class="container">
    <div class="add-form-login">
        <input id="login-input" type="text" class="add-form-name-login" placeholder="Введите логин" />
        <input id="password-input" type="password" class="add-form-name-login" placeholder="Введите пароль" />
        <div class="add-form-row">
            <button id="login-button" class="add-form-button-login">Войти</button>
            <button id="login-button" class="add-form-button-login">Авторизоваться</button>
        </div>
    </div>
</div> `;

appElement.innerHtml = loginHtml;

const buttonElement = document.getElementById("login-button")
const loginInputElement = document.getElementById("login-input")
const passwordInputElement = document.getElementById("password-input")

buttonElement.addEventListener("click", () => {
login({
    login: loginInputElement.value,
    password: passwordInputElement.value,
}).then((responseData) => {
console.log(token);
setToken(responseData.user.token);
console.log(token);
    });
});

};