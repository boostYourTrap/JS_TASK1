const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    let linkText = prompt('Как дела ?');
    link.textContent = linkText;
})