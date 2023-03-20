'use strict';

const blockTimer = {
    month: document.querySelector('.timer[data-type="month"]'),
    day: document.querySelector('.timer[data-type= "day"]'),
    minute: document.querySelector('.timer[data-type="minute"]'),
    second: document.querySelector('.timer[data-type="second"]'),
    hour: document.querySelector('.timer[data-type="hour"]'),
}
const words = {
    month: ['месяц', 'месяца', 'месяцев'],
    day: ['день', 'дня', 'дней'],
    minute: ['минута', 'минуты', 'минут'],
    hour: ['час', 'часа', 'часов'],
    second: ['секунда', 'секунды', 'секунд']
}
const blockTimer1 = document.querySelector('.timer[data-type="timer_variant1"]');
const blockTimer2 = document.querySelector('.timer[data-type="timer_variant2"]');
const info = document.querySelector('.info');
const MILLISECONDS_IN_HOUR = 36000;
const MILLISECONDS_IN_MINUTE = 60000;
const MILLISECONDS_IN_SECOND = 1000;
const HOURS_PER_DAY = 24;
const NUMBER_OF_MONTH = 11;

function foldingWord(val, words) {
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
        let resutlStringDate = '';
        const now = new Date(),
            deltaDates = finish - now.getTime(),

            monthNow = now.getMonth(),
            yearNow = now.getFullYear(),
            dayInMonth = (32 - new Date(now.getFullYear(), now.getMonth(), 32).getDate());

        const timeObj = {
            month: Math.abs(monthNow - monthNY + (NUMBER_OF_MONTH * (yearNow - yearNY))),
            day: (Math.abs(monthNow - monthNY + (NUMBER_OF_MONTH * (yearNow - yearNY))) === 0) ? Math.abs(dayNY - now.getDate()) : dayInMonth - now.getDate(),
            hour: Math.floor((deltaDates % (MILLISECONDS_IN_HOUR * HOURS_PER_DAY)) / (MILLISECONDS_IN_HOUR)),
            minute: Math.floor((deltaDates % (MILLISECONDS_IN_HOUR)) / (MILLISECONDS_IN_MINUTE)),
            second: Math.floor((deltaDates % (MILLISECONDS_IN_HOUR)) / MILLISECONDS_IN_SECOND),
        }

        for (const [key] of Object.entries(blockTimer)) {
            resutlStringDate += `<p data-type="${key}" class="timer__item">${timeObj[key]} ${foldingWord(timeObj[key], words[key])}</p>`;
        }

        blockTimer1.innerHTML = resutlStringDate;

        blockTimer2.innerText = `${new Intl.DateTimeFormat('ru', {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        }).formatToParts(new Date(yearNow, timeObj.month - 1, timeObj.day, timeObj.hour, timeObj.minute, timeObj.second))
            .map(({ type, value }) => {
                if (type !== 'literal') {
                    return `${value} ${foldingWord(value, words[type])}`;
                } else {
                    return ' ';
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
