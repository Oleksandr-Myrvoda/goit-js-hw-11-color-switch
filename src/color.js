const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
// =================================================================
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const switchColor = {  
    intervalId: null,
    isActive: false,
    start() {
        if(this.isActive) {
            return;
        }

        this.isActive = true;

        this.intervalId = setInterval(() => {
            const color = randomIntegerFromInterval(0, colors.length - 1);          
            document.body.style.backgroundColor = colors[color];
        }, 1000);
       startBtn.classList.add('disabled');
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        startBtn.classList.remove('disabled');
    }
}

startBtn.addEventListener('click', () => {
    switchColor.start();
});

stopBtn.addEventListener('click', () => {
    switchColor.stop();
});
//   =========================================================================
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. 
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.