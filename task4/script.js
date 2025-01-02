const link = document.querySelector('a');
const initialText = link.textContent;

link.addEventListener('click', (e) => {
    e.preventDefault();
    let linkText = prompt('Как дела ?');

    if(linkText === null || linkText.trim() === ''){
        link.textContent = 'Вы ничего не ввели'
        setTimeout(() => {
            link.textContent = initialText;
        }, 1000)
    }else{
        link.textContent = linkText;
    }
})