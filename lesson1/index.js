const parseData = JSON.parse(data);
// console.log(parseData);
const tableEl = document.querySelector('.table');
const table = {
    id: '',
    name: 'название',
    time: 'время проведения',
    maxParticipants: 'максимальное количество участников',
    currentParticipants: 'текущее количество участников'
}
// console.log(table);

const idEl = document.createElement('ul');
idEl.textContent = table.id;
idEl.className = 'table-ul';
tableEl.append(idEl);
// console.log(idEl);

const nameEl = document.createElement('li');
nameEl.textContent = table.name;
nameEl.className = 'table-li';
idEl.append(nameEl)

const timeEl = document.createElement('li');
timeEl.textContent = table.time;
timeEl.className = 'table-li';
idEl.append(timeEl);

const maxParticipants = document.createElement('li');
maxParticipants.textContent = table.maxParticipants;
maxParticipants.className = 'table-li';
idEl.append(maxParticipants);

const currentParticipants = document.createElement('li');
currentParticipants.textContent = table.currentParticipants;
currentParticipants.className = 'table-li';
idEl.append(currentParticipants);


parseData.forEach(e => {
    const ulTable = document.createElement('ul');
    ulTable.className = 'table-ul';

    const nameTable = document.createElement('li');
    nameTable.className = 'table-li table-li-sign-up';
    nameTable.textContent = e.name;

    const buttonSignUp = document.createElement('button');
    buttonSignUp.className = 'btn-sign-up';
    buttonSignUp.textContent = 'Записаться';

    const timeTable = document.createElement('li')
    timeTable.className = 'table-li';
    timeTable.textContent = e.time;

    const maxParticipantsTable = document.createElement('li');
    maxParticipantsTable.className = 'table-li';
    maxParticipantsTable.textContent = e.maxParticipants;
    // console.log(maxParticipantsTable);

    const currentParticipantsTable = document.createElement('li');
    currentParticipantsTable.className = 'table-li';
    currentParticipantsTable.textContent = e.currentParticipants;

    // if (e.currentParticipants >= e.maxParticipants) {
    //     const buttonCancelEntry = document.createElement('button');
    //     buttonCancelEntry.className = 'btn-sign-up';
    //     buttonCancelEntry.textContent = 'Отменить запись';
    //     nameTable.append(buttonCancelEntry);
    // }
    tableEl.append(ulTable);
    ulTable.append(nameTable);
    nameTable.append(buttonSignUp);
    ulTable.append(timeTable);
    ulTable.append(maxParticipantsTable);
    ulTable.append(currentParticipantsTable);

   
    // let countMin = e.currentParticipants;
    // let countMax = e.maxParticipants;

    
    buttonSignUp.addEventListener('click', function (el) {
        if (e.currentParticipants >= e.maxParticipants) {
            buttonSignUp.classList.replace('btn-sign-up','disabled');
            const buttonCancelEntry = document.createElement('button');
            buttonCancelEntry.className = 'btn-sign-up';
            buttonCancelEntry.textContent = 'Отменить запись';
            nameTable.append(buttonCancelEntry);
            alert('Превышено максимальное количество участников');
        return;
        } 
        e.currentParticipants++;
        console.log(e.currentParticipants);
    });
    // buttonSignUp.addEventListener('click', function () {
    //     if (buttonSignUp.textContent = 'Отписаться') {
    //         ;
    //         return;
    //     }
    //     e.currentParticipants++;
    //     console.log(e.currentParticipants);
    // });
});
