'use strict';

const blockTimer = {
    months: document.querySelector('.months'),
    days: document.querySelector('.days'),
    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds'),
    hours: document.querySelector('.hours'),

    words: {
        months: ['месяц', 'месяца', 'месяцев'],
        days: ['день', 'дня', 'дней'],
        minutes: ['минута', 'минуты', 'минут'],
        hours: ['час', 'часа', 'часов'],
        seconds: ['секунда', 'секунды', 'секунд']
    }
}
const blockTimer2 = document.querySelector('.timer-ny2');
const info = document.querySelector('.info');

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
        const now = new Date(),
            deltaDates = finish - now.getTime(),

            monthNow = now.getMonth(),
            yearNow = now.getFullYear(),
            dayInMonth = (32 - new Date(now.getFullYear(), now.getMonth(), 32).getDate());

        const timeObj = {
            months: Math.abs(monthNow - monthNY + (11 * (yearNow - yearNY))),
            days: (Math.abs(monthNow - monthNY + (11 * (yearNow - yearNY))) === 0) ? Math.abs(dayNY - now.getDate()) : dayInMonth - now.getDate(),
            hours: Math.floor((deltaDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((deltaDates % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((deltaDates % (1000 * 60)) / 1000),
        }

        for (const [key] of Object.entries(blockTimer)) {
            if (key !== 'words') {
                blockTimer[key].innerText = `${timeObj[key]} ${foldingWord(timeObj[key], blockTimer.words[key])}`;
            }
        }

        blockTimer2.innerText = `${new Intl.DateTimeFormat('ru', {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        }).formatToParts(new Date(yearNow, timeObj.months - 1, timeObj.days, timeObj.hours, timeObj.minutes, timeObj.seconds))
            .map(({ type, value }) => {
                switch (type) {
                    case 'month': return `${value} ${foldingWord(value, blockTimer.words.months)}`;
                        break;
                    case 'day': return `${value} ${foldingWord(value, blockTimer.words.days)}`;
                        break;
                    case 'minute': return `${value} ${foldingWord(value, blockTimer.words.minutes)}`;
                        break
                    case 'hour': return `${value} ${foldingWord(value, blockTimer.words.hours)}`;
                        break;
                    case 'second': return `${value} ${foldingWord(value, blockTimer.words.seconds)}`;
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
