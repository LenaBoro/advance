'use strict';

const userBirthday = '2022-01-01';

function isValidAge(dateStr) {
    const currentDate = new Date();
    const userDate = new Date(dateStr);

    if (isNaN(userDate)) {
        console.error(userDate);
        return false;
    };
    const deltaMonth = Number(currentDate.getMonth()) - Number(userDate.getMonth());
    const deltaAge = Number(currentDate.getFullYear()) - Number(userDate.getFullYear());
    const deltaDate = Number(currentDate.getDate()) - Number(userDate.getDate());

    return deltaAge >= 14 && deltaMonth === 0 && deltaDate === 0;
}
