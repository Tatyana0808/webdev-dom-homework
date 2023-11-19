/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTodos: () => (/* binding */ getTodos),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   nameUser: () => (/* binding */ nameUser),\n/* harmony export */   postTodo: () => (/* binding */ postTodo),\n/* harmony export */   setName: () => (/* binding */ setName),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   token: () => (/* binding */ token)\n/* harmony export */ });\nconst host = \"https://wedev-api.sky.pro/api/v2/vorobyeva-tatyana/comments\";\r\nconst userURL = \"https://wedev-api.sky.pro/api/user/login\";\r\nlet token; \r\nlet nameUser;\r\nconst setName = (newName) => {\r\n  nameUser = newName;\r\n}\r\n\r\nconst setToken = (newToken) => {\r\ntoken = newToken;\r\n};\r\n\r\nfunction getTodos() {\r\n  return  fetch(host, {\r\n      method: \"GET\",\r\n      headers : {\r\n        Authorization: `Bearer ${token}`,\r\n      }\r\n    })\r\n      .then((response) => {\r\n        if(response.ststus === 401) {\r\n\r\n        \r\n\r\n          throw new Error(\"Нет авторизации\")\r\n        }\r\n       \r\n        return response.json();\r\n\r\n      })\r\n}\r\n\r\nfunction postTodo( {name}, {text} ) {\r\n   return fetch(host, {\r\n        method: \"POST\",\r\n        headers : {\r\n          Authorization: `Bearer ${token}`,\r\n        },\r\n        body: JSON.stringify({\r\n          name: name\r\n            .replaceAll(\"<\", \"&lt;\")\r\n            .replaceAll(\">\", \"&gt;\"),\r\n\r\n          text: text\r\n            .replaceAll(\"___<\", \"&lt;\")\r\n            .replaceAll(\">\", \"&gt;\"),\r\n          forceError: true\r\n \r\n        }),\r\n      })\r\n      .then((response) => {\r\n        if(response.status===500){\r\n            throw new Error(\"Извините, неполатки с сервером\")\r\n           }\r\n           if(response.status===400){\r\n            throw new Error(\"Недопустимое количество символов-меньше трех\")\r\n           } \r\n           // сonsole.log(response.status);\r\n            return response.json();\r\n            \r\n      })\r\n    }\r\n      function login({login, password}) {\r\n        return fetch(userURL, {\r\n             method: \"POST\",\r\n             \r\n             body: JSON.stringify({\r\n              login,\r\n              password,\r\n      \r\n             }),\r\n           })\r\n           .then((response, event) => {\r\n            if(response.status === 400) {\r\n              alert (\"Вы ввели не верный логин или пароль\");\r\n              event.stopPropagation();\r\n            }else{\r\n              return response.json();\r\n\r\n            }\r\n\r\n             \r\n                 \r\n                 \r\n           })\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./api.js?");

/***/ }),

/***/ "./lib/formatDate/formatDate.js":
/*!**************************************!*\
  !*** ./lib/formatDate/formatDate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDateToRu: () => (/* binding */ formatDateToRu),\n/* harmony export */   formatDateToUs: () => (/* binding */ formatDateToUs)\n/* harmony export */ });\n// Файл lib/formatDate/formatDate.js\r\n\r\n// Приводим дату к формату ДД/ММ/ГГГГ ЧЧ:ММ\r\nconst formatDateToRu = (date) => {\r\n    return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;\r\n  };\r\n\r\n  // Файл lib/formatDate/formatDate.js\r\n\r\n\r\n  \r\n  // Приводим дату к формату ММ-ДД-ГГГГ ЧЧ:ММ\r\n  const formatDateToUs = (date) => {\r\n    return `${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;\r\n  };\n\n//# sourceURL=webpack:///./lib/formatDate/formatDate.js?");

/***/ }),

/***/ "./loginPage.js":
/*!**********************!*\
  !*** ./loginPage.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLogin: () => (/* binding */ renderLogin)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\r\n\r\n\r\n\r\n\r\n const renderLogin =() =>{\r\n    const appElement = document.getElementById(\"app\");\r\n    const loginHTML = `  <div class=\"container\">\r\n    <div class=\"add-form-login\">\r\n        <input id=\"login-input\" type=\"text\" class=\"add-form-name-login\" placeholder=\"Введите логин\" />\r\n        <input id=\"password-input\" type=\"password\" class=\"add-form-name-login\" placeholder=\"Введите пароль\" />\r\n        <div class=\"add-form-row\">\r\n            <button id=\"login-button\" class=\"add-form-button-login\">Войти</button>\r\n            <button id=\"login-button\" class=\"add-form-button-login\">Авторизоваться</button>\r\n        </div>\r\n    </div>\r\n</div> `;\r\n\r\nappElement.innerHTML = loginHTML;\r\n\r\nconst buttonElement = document.getElementById(\"login-button\")\r\nconst loginInputElement = document.getElementById(\"login-input\")\r\nconst passwordInputElement = document.getElementById(\"password-input\")\r\n\r\nbuttonElement.addEventListener(\"click\", () => {\r\n;(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.login)({\r\n    login: loginInputElement.value,\r\n    password: passwordInputElement.value,\r\n}).then((responseData) => {\r\nconsole.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.token);\r\n(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setToken)(responseData.user.token);\r\n\r\nconsole.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.token);\r\nconsole.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.nameUser);\r\n(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setName)(responseData.user.name);\r\nconsole.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.nameUser);\r\n    }).then(() => {\r\n       (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.fetchComments)(); \r\n    })\r\n    \r\n});\r\n\r\n};\n\n//# sourceURL=webpack:///./loginPage.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchComments: () => (/* binding */ fetchComments)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _loginPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginPage.js */ \"./loginPage.js\");\n/* harmony import */ var _renderComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderComments.js */ \"./renderComments.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/login-component.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/formatDate/formatDate.js */ \"./lib/formatDate/formatDate.js\");\n\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst tasksHtml = tasks;\r\nconst country = \"ru\"\r\n\r\n    .map((task) => {\r\n      return `\r\n          < class=\"task\">\r\n            <p class=\"task-text\">\r\n              ${task.text} (Создал: ${task.user?.name ?? \"Неизвестно\"})\r\n              <button data-id=\"${\r\n                task.id\r\n              }\" class=\"button delete-button\">Удалить</button>\r\n            </p>\r\n            <p><i>Задача создана: ${country === \"ru\" ? (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_4__.formatDateToRu)(new Date(task.created_at)) : (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_4__.formatDateToUs)(new Date(task.created_at))}</i></p>\r\n          \r\n          </li>`;\r\n    })\r\n    .join(\"\");\r\n\r\n\r\n  console.log(\"It works!\");\r\n\r\n  // Код писать здесь\r\n\r\n  const ulElement = document.getElementById(\"list-comments\");\r\n\r\n  const setActiveButtonInput = () => {\r\n\r\n\r\n    nameInputElement.addEventListener(('input'),\r\n\r\n      () => { //привожу кнопку в порядок после инпута:\r\n        buttonElement.classList.remove('disabled-hover');//Делаю кнопку активной после ввода данных в инпут\r\n        buttonElement.removeAttribute('disabled', '');//Делаю кнопку активной после ввода данных в инпут\r\n        nameInputElement.classList.remove('err');\r\n\r\n      });\r\n  }\r\n\r\n  const setActiveButtonMessage = () => {\r\n\r\n    textareaInputElement.addEventListener(('input'), () => {\r\n      //привожу кнопку в порядок после текстареа:\r\n      buttonElement.classList.remove('disabled-hover');\r\n      //Делаю кнопку активной после ввода данных в текстареа\r\n\r\n      buttonElement.removeAttribute('disabled', '');\r\n\r\n      //Делаю кнопку активной после ввода данных в текстареа\r\n      textareaInputElement.classList.remove('err');\r\n\r\n    });\r\n\r\n\r\n  }\r\n\r\n  const disabledButton = () => {\r\n    // Делаю кнопку неактивной\r\n\r\n    buttonElement.setAttribute('disabled', '');\r\n    buttonElement.classList.add('disabled-hover');\r\n\r\n\r\n  }\r\n\r\n  const submitEnter = (event) => { // отправка сообщения по Enter\r\n    if (event.keyCode === 13) {\r\n      document.getElementById(\"add-button\").click();\r\n      nameInputElement.value = \"\";\r\n      textareaInputElement.value = \"\";\r\n    }\r\n  }\r\n  const buttonElement = document.getElementById(\"add-button\");\r\n  const buttonElementDel = document.getElementById(\"delete-button\");\r\n  \r\n  const nameInputElement = document.getElementById('name-input');\r\n  const textareaInputElement = document.getElementById('textarea-input');\r\n  const loaderElement = document.querySelector('.loader');\r\n  \r\n\r\n  let commentsArray = [];\r\n\r\n\r\n\r\n//цепочка промисов method: \"GET\"\r\n\r\n const fetchComments = () => {\r\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getTodos)().then((responseData) => {\r\n        const getApiComments = responseData.comments.map((comment) => {\r\n          return {\r\n            name: comment.author.name,\r\n            date: getDateNow(),\r\n            like: comment.likes,\r\n            userLike: false,\r\n            comment: comment.text,\r\n          };\r\n        });\r\n        commentsArray = getApiComments;\r\n        (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_2__.renderComments)({commentsArray,likes,commentClick});\r\n        loaderElement.classList.add(\"hidden\");\r\n      });\r\n  };\r\n\r\n  fetchComments();\r\n  \r\n\r\n  const getDateNow = () => {\r\n    const dateNow = new Date();\r\n    let day = dateNow.getDate();\r\n    let month = dateNow.getMonth() + 1;\r\n    let year = dateNow.getFullYear() % 1000;\r\n    let hour = dateNow.getHours();\r\n    let minute = dateNow.getMinutes();\r\n    if (day < 10) {\r\n      day = \"0\" + day;\r\n    }\r\n    if (month < 10) {\r\n      month = \"0\" + month;\r\n    }\r\n    if (hour < 10) {\r\n      hour = \"0\" + hour;\r\n    }\r\n    if (minute < 10) {\r\n      minute = \"0\" + minute;\r\n    }\r\n    return `${day}.${month}.${year} ${hour}:${minute}`\r\n  }\r\n\r\n\r\n  document.addEventListener(\"keyup\", submitEnter);\r\n\r\n\r\n\r\n  const likes = () => {\r\n    const likeButtons = document.querySelectorAll('.like-button');\r\n    for (const likeButton of likeButtons) {\r\n      likeButton.addEventListener('click', (event) => {\r\n        event.stopPropagation();\r\n        const index = likeButton.dataset.index;\r\n        if (commentsArray[index].userLike === false) {\r\n          commentsArray[index].paint = '-active-like';\r\n          commentsArray[index].like += 1;\r\n          commentsArray[index].userLike = true;\r\n        } else {\r\n          commentsArray[index].paint = '';\r\n          commentsArray[index].like -= 1;\r\n          commentsArray[index].userLike = false;\r\n        }\r\n        (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_2__.renderComments)({commentsArray,likes,commentClick});\r\n      });\r\n    };\r\n  };\r\n\r\n\r\n\r\n\r\n  const commentClick = () => {\r\n    const userComments = document.querySelectorAll(\".comment\");\r\n    for (const userComment of userComments) {\r\n      userComment.addEventListener(\"click\", () => {\r\n        textareaInputElement.value = `>${userComment.dataset.text}\\n ${userComment.dataset.username},\\n`;\r\n      });\r\n    }\r\n\r\n  }\r\n\r\n\r\n \r\n\r\n  ;(0,_renderComments_js__WEBPACK_IMPORTED_MODULE_2__.renderComments)({commentsArray,likes,commentClick});\r\n\r\n  const getToken = () => _api_js__WEBPACK_IMPORTED_MODULE_0__.token\r\n  getToken ();\r\n  if(_api_js__WEBPACK_IMPORTED_MODULE_0__.token){\r\n\r\n    setActiveButtonInput();//Делаем кнопку активной после ввода поля\r\n\r\n    setActiveButtonMessage();//Делаем кнопку активной после ввода поля\r\n\r\n  }\r\n\r\n  if (_api_js__WEBPACK_IMPORTED_MODULE_0__.token){\r\n    buttonElementDel.addEventListener(('click'), () => { //Удаляю последний элемент (комментарий);\r\n       document.getElementById('list-comments').lastElementChild.remove();\r\n      });\r\n     } \r\n\r\n   if (_api_js__WEBPACK_IMPORTED_MODULE_0__.token){\r\n\r\n    buttonElement.disabled = true;\r\n   nameInputElement.addEventListener('input', () => {\r\n    if ((nameInputElement.value === '') || (textareaInputElement.value === '')) {\r\n      buttonElement.disabled = true;\r\n      return;\r\n    }\r\n    else {\r\n      buttonElement.disabled = false;\r\n      return;\r\n    }\r\n  });\r\n\r\n  textareaInputElement.addEventListener('input', () => {\r\n    if ((textareaInputElement.value === '') || (nameInputElement.value === '')) {\r\n      buttonElement.disabled = true;\r\n      return;\r\n    }\r\n    else {\r\n      buttonElement.disabled = false;\r\n\r\n      return;\r\n    }\r\n  })\r\n\r\n\r\n  buttonElement.addEventListener('click', () => {\r\n    nameInputElement.classList.remove('error');\r\n    textareaInputElement.classList.remove('error');\r\n\r\n    if ((nameInputElement.value || textareaInputElement.value) === '') {\r\n      nameInputElement.classList.add('error');\r\n      textareaInputElement.classList.add('error');\r\n      return;\r\n    }\r\n    getDateNow();\r\n  }); \r\n\r\n   }   \r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n  \r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./renderComments.js":
/*!***************************!*\
  !*** ./renderComments.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderComments: () => (/* binding */ renderComments)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _loginPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginPage.js */ \"./loginPage.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\r\n\r\n\r\nconst listElement = document.getElementById('list-comments')\r\n\r\nconst renderComments = ({commentsArray,likes,commentClick}) => {\r\n  const appElement = document.getElementById(\"app\")\r\n  \r\n  const appHTML = commentsArray.map((item, index) =>  {\r\n    \r\n   return `<li class=\"comment\" data-username=\"${item.name}\" data-text=\"${item.comment}\">\r\n<div class=\"comment-header\">\r\n  <div>${item.name}</div>\r\n  <div>${item.date}</div>\r\n</div>\r\n<div class=\"comment-body\">\r\n  <div class=\"comment-text\">\r\n    ${item.comment}\r\n  </div>\r\n</div>\r\n<div class=\"comment-footer\">\r\n  <div class=\"likes\">\r\n    <span class=\"likes-counter\">${item.like}</span>\r\n    <button data-index='${index}' class=\"like-button ${item.paint}\"</button>\r\n  </div>\r\n</div>\r\n</li>`\r\n  })\r\n .join('');\r\n\r\n  appElement.innerHTML = `\r\n  <ul class=\"comments\" id=\"list-comments\">\r\n  ${appHTML}\r\n  </ul>\r\n  ${!_api_js__WEBPACK_IMPORTED_MODULE_0__.token ? `<div class=\"authorization\">\r\n  Чтобы добавить комментарий,  <span id=\"link-to-link\">авторизуйтесь</span> \r\n  </div>` : \"\"}\r\n\r\n  ${_api_js__WEBPACK_IMPORTED_MODULE_0__.token ? \r\n  ` <div class=\"add-form\" id=\"addForm\">\r\n  <input id=\"name-input\" type=\"text\" class=\"add-form-name\" value=${_api_js__WEBPACK_IMPORTED_MODULE_0__.nameUser} readonly\r\n  placeholder=\"Введите ваше имя\" />\r\n  <textarea id=\"textarea-input\" type=\"textarea\" class=\"add-form-text\" placeholder=\"Введите ваш коментарий\"\r\n    rows=\"4\"></textarea>\r\n  <div class=\"add-form-row\">\r\n    <button class=\"add-form-button\" id=\"add-button\">Написать</button>\r\n    <button class=\"add-form-button\" id=\"delete-button\">Удалить коментарий</button>\r\n\r\n  </div>` : \"\"\r\n  }\r\n\r\n\r\n  ` ;\r\n\r\n\r\n  if (!_api_js__WEBPACK_IMPORTED_MODULE_0__.token) {\r\n    const authorizationButton = document.getElementById(\"link-to-link\");\r\n    authorizationButton.addEventListener(\"click\",  _loginPage_js__WEBPACK_IMPORTED_MODULE_1__.renderLogin )\r\n  }\r\n\r\n\r\n    likes();\r\n    commentClick();\r\n   \r\n    const getToken = () => _api_js__WEBPACK_IMPORTED_MODULE_0__.token\r\n    getToken ();\r\n\r\n    if(_api_js__WEBPACK_IMPORTED_MODULE_0__.token){\r\n      const buttonElement = document.getElementById(\"add-button\");\r\n  \r\n      buttonElement.addEventListener(\"click\", () => {\r\n        \r\n        const buttonElementDel = document.getElementById(\"delete-button\");\r\n      \r\n        const nameInputElement = document.getElementById('name-input');\r\n        const textareaInputElement = document.getElementById('textarea-input');\r\n        const loaderElement = document.querySelector('.loader');\r\n        const loadingElement = document.querySelector('.loading');\r\n        const formElement = document.querySelector('.add-form');\r\n        const ulElement = document.getElementById(\"list-comments\");\r\n        buttonElement.disabled = true;\r\n        loadingElement.classList.add(\"loadingInvisible\")\r\n        formElement.classList.add(\"add-formInvisible\")\r\n        loaderElement.classList.add(\"hidden\");\r\n    \r\n        const postCommentsPromise = () => {\r\n          \r\n            (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postTodo)({name:nameInputElement.value}, {text: textareaInputElement.value}).then((responseData) => {\r\n                nameInputElement.value = '';\r\n                textareaInputElement.value = '';\r\n               return (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.fetchComments)()\r\n               \r\n    \r\n              })\r\n    \r\n    \r\n              \r\n              .catch((error) => {\r\n                if  (error.message === 'Failed to fetch') {\r\n                   alert(\"Проблемы с интернетом, проверьте подключение\")\r\n    \r\n                }\r\n    \r\n                 alert(error.message);\r\n    \r\n              })\r\n              .finally(() => {\r\n                console.log(\"click\");\r\n    \r\n                formElement.classList.remove(\"add-formInvisible\");\r\n                buttonElement.disabled = false;\r\n              })\r\n         \r\n    \r\n        };\r\n    \r\n    \r\n        postCommentsPromise();\r\n       \r\n    \r\n        \r\n      });\r\n\r\n    }\r\n\r\n\r\n\r\n  };\n\n//# sourceURL=webpack:///./renderComments.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;