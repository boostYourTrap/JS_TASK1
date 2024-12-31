const input = document.querySelector('#input');
const duplicateField = document.querySelector('#duplicateField');
const button = document.querySelector('#button');

input.addEventListener('input', () => {
    duplicateField.textContent = input.value;
})

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(input.value);
    duplicateField.textContent = '';
    input.value = '';
    
})
