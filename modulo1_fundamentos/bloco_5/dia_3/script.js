function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDays() {
  const dezDaysList = ['', 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');
  

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const dayElement = document.createElement('li');
    dayElement.innerHTML = day;

    dayElement.className = 'day';

    if(day == 24 || day == 25 || day == 31) {
      dayElement.className += ' holiday';
    }

    if(day == 4 || day == 11 || day == 18 || day == 25) {
      dayElement.className += ' friday';
    }

    daysList.appendChild(dayElement);
  };
};

createDays();

function holiday(string) {
  const buttonElement = document.createElement('button');
  const buttonTag = document.querySelector('.buttons-container');
  buttonElement.innerText = 'Feriados';
  buttonElement.id = 'btn-holiday';
  buttonTag.appendChild(buttonElement);
}

holiday("Feriados");

function holidayEvent() {
  const holidaysTag = document.querySelectorAll('.holiday');
  for (const holiday of holidaysTag) {
    if (holiday.style.backgroundColor == 'rgb(15, 163, 107)') {
      holiday.style.backgroundColor = 'rgb(238, 238, 238)';
    } else
    holiday.style.backgroundColor = 'rgb(15, 163, 107)';
  }
}

const buttonHoliday = document.querySelector('#btn-holiday');
buttonHoliday.addEventListener('click', holidayEvent)