'use strict';

const blockTimer = {
    months: document.querySelector('.month'),
    days: document.querySelector('.day'),
    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds'),
    hours: document.querySelector('.hour'),
}
const blockTimer2 = document.querySelector('.timer-ny2');
const info = document.querySelector('.info');

const words = {
    month: ['месяц', 'месяца', 'месяцев'],
    day: ['день', 'дня', 'дней'],
    minute: ['минута', 'минуты', 'минут'],
    hour: ['час', 'часа', 'часов'],
    second: ['секунда', 'секунды', 'секунд']
}

function num_word(val, words) {
    const value = Math.abs(Number(val)) % 100;
    const num = value % 10;
    if (value > 10 && value < 20) { return words[2]; }
    if (num > 1 && num < 5) { return words[1]; }
    if (num === 1) { return words[0]; }
    return words[2];
}

function timerNewYear(dateNY) {
    const finish = new Date(dateNY).getTime(),
        monthNY = new Date(dateNY).getMonth(),
        yearNY = new Date(dateNY).getFullYear(),
        dayNY = new Date(dateNY).getDate();

    const interval = setInterval(() => {
        const monthNow = new Date().getMonth(),
            now = new Date().getTime(),
            deltaDates = finish - now,
            yearNow = new Date().getFullYear(),

            dayInMonth = (32 - new Date(new Date().getFullYear(), new Date().getMonth(), 32).getDate()),
            deltaMonth = Math.abs(monthNow - monthNY + (11 * (yearNow - yearNY))),
            deltaDays = (deltaMonth === 0) ? Math.abs(dayNY - new Date().getDate()) : dayInMonth - new Date().getDate(),

            hours = Math.floor((deltaDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((deltaDates % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((deltaDates % (1000 * 60)) / 1000);

        blockTimer.months.innerText = `${deltaMonth} ${num_word(deltaMonth, words.month)}`;
        blockTimer.days.innerText = `${deltaDays} ${num_word(deltaDays, words.day)}`;
        blockTimer.minutes.innerText = `${minutes} ${num_word(minutes, words.minute)}`;
        blockTimer.seconds.innerText = `${seconds} ${num_word(seconds, words.second)}`;
        blockTimer.hours.innerText = `${hours} ${num_word(hours, words.hour)}`;

        blockTimer2.innerText = `${new Intl.DateTimeFormat('en-US', {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            day: "numeric",
            month: "numeric",
        }).formatToParts(new Date(yearNow, deltaMonth - 1, deltaDays, hours, minutes, seconds)).map(({ type, value }) => {
            switch (type) {
                case 'month': return `${value} ${num_word(value, words.month)}`;
                    break;
                case 'day': return `${value} ${num_word(value, words.day)}`;
                    break;
                case 'minute': return `${value} ${num_word(value, words.minute)}`;
                    break
                case 'hour': return `${value} ${num_word(value, words.hour)}`;
                    break;
                case 'second': return `${value} ${num_word(value, words.second)}`;
                    break;
                default: return value;
            }
        }).reduce((string, part) => string + part)
            }`

        if (deltaDates <= 0) {
            clearInterval(interval);
            info.classList.remove('display--none');
        }
    }, 1000);

}

timerNewYear("Jan 01, 2024 00:00:00");
