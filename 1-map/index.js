'use strict';

const arrayObjPeople = [
    { id: 1, name: 'Vasya' },
    { id: 2, name: 'Petya' },
    { id: 1, name: 'Vasya' }
];

const setObjPeople = new Set(arrayObjPeople.map((obj) => {
    return arrayObjPeople.find(people => {
        if (people.id === obj.id) {
            return people;
        }
    })
}));
