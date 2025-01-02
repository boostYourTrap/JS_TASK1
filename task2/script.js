const console_log = document.querySelector('#consoleLog');

console_log.addEventListener('click', () => {
    alert("Метод console.log() используется для вывода информации в консоль браузера, обычно для отладки.")
})

const alert$ = document.querySelector('#alert');

alert$.addEventListener('click', () => {
    alert("Метод alert() используется для отображения всплывающего окна с сообщением пользователю.");

})

const prompt$ = document.querySelector('#prompt');

prompt$.addEventListener('click', () => {
   prompt('Метод prompt() используется для отображения модального окна с полем ввода, где пользователь может ввести текст.')
})


// "Если раскомментировать код, текстовое содержимое блоков Сode (с примерами использования) будет изменяться при клике на эти элементы."

// const exampleLog = document.querySelector('#exampleLog');

// exampleLog.addEventListener('click', (e) => {
//     if(exampleLog.textContent.trim() === 'Пример console.log'){
//         exampleLog.textContent = "console.log('текст выведенный в консоль')"
//     }
//     else if(exampleLog.textContent.trim() === "console.log('текст выведенный в консоль')"){
//         exampleLog.textContent = 'Пример console.log'
//     }
// })



// const exampleAlert = document.querySelector('#exampleAlert');

// exampleAlert.addEventListener('click', () => {
//     if(exampleAlert.textContent.trim() === 'Пример alert'){
//         exampleAlert.textContent = "alert('Привет мир!!!')"
//     }
//     else if(exampleAlert.textContent.trim() === "alert('Привет мир!!!')"){
//         exampleAlert.textContent = 'Пример alert'
//     }
// })



// const promptExample = document.querySelector('#promptExample');

// promptExample.addEventListener('click', () => {
//     if(promptExample.textContent.trim() === 'Пример prompt'){
//         promptExample.textContent = "prompt('сколько вам лет ?', ' ')"
//     }
//     else if(promptExample.textContent.trim() === "prompt('сколько вам лет ?', ' ')"){
//         promptExample.textContent = 'Пример prompt'
//     }
// })

