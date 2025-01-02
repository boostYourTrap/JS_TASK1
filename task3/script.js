const trafficLight1 = document.querySelector('#trafficLight1');
const trafficLight2 = document.querySelector('#trafficLight2');
const trafficLight3 = document.querySelector('#trafficLight3');

trafficLight1.addEventListener('click', handler);
trafficLight2.addEventListener('click', handler);
trafficLight3.addEventListener('click', handler);

function resetLight() {
    trafficLight1.style.backgroundColor = 'black'
    trafficLight2.style.backgroundColor = 'black'
    trafficLight3.style.backgroundColor = 'black'
}

function handler(e) {
    resetLight();

    if(e.target === trafficLight1){
        trafficLight1.style.backgroundColor = 'green'
    }else if(e.target === trafficLight2){
        trafficLight2.style.backgroundColor = 'yellow'
    }else if(e.target === trafficLight3){
        trafficLight3.style.backgroundColor = 'red'
        setTimeout(() => {
            alert('ПЕШЕХОД ОСТАНОВИСЬ !!!');
        }, 300)  //добавил функцию setTimeout что бы Alert срабатывал после переключения света
    }
}