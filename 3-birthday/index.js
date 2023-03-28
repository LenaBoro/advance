'use strict';

const userBirthday = '2022-01-01';

function isValidAge(dateStr) {
    const currentDate = new Date();
    const userDate = new Date(dateStr);

    if (userDate.getMonth() > 12) {
        return false;
    };

    const deltaAge = Number(currentDate.getFullYear()) - Number(userDate.getFullYear());

    return deltaAge > 14;
}
