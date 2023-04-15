'use strict';

const users = [
    { id: 1, name: 'Vasya' },
    { id: 2, name: 'Petya' },
    { id: 1, name: 'Vasya' }
];

function unifyById(list) {
    list.map((obj) => {
        return list.find(item => {
            if (item.id === obj.id) {
                return item;
            }
        })
    })
}

const uniqUsersSet = new Set(unifyById(users));
