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
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,];
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

function clickHoliday() {
  const buttonHoliday = document.querySelector('#btn-holiday');
  buttonHoliday.addEventListener('click', holidayEvent);
  function holidayEvent() {
    const holidaysTag = document.querySelectorAll('.holiday');
    for (const holiday of holidaysTag) {
      if (holiday.style.backgroundColor == 'rgb(15, 163, 107)') {
        holiday.style.backgroundColor = 'rgb(238, 238, 238)';
      } else
      holiday.style.backgroundColor = 'rgb(15, 163, 107)';
    }
  }
}

clickHoliday();

function fridayAd(string) {
  const buttonElement = document.createElement('button');
  const buttonTag = document.querySelector('.buttons-container');
  buttonElement.innerText = 'Sexta-feira';
  buttonElement.id = 'btn-friday';
  buttonTag.appendChild(buttonElement);
}

fridayAd("Friday");

function clickFriday() {
  const buttonFriday = document.querySelector('#btn-friday');
  buttonFriday.addEventListener('click', textFriday);
  function textFriday() {
    const fridayTag = document.querySelectorAll('.friday');
    let fridayArray = [4, 11, 18, 25];
    for(let i = 0; i < fridayTag.length; i += 1) {
      if(fridayTag[i].innerHTML == 'Sextou!')
        fridayTag[i].innerHTML = fridayArray[i];
      else  
        fridayTag[i].innerHTML = 'Sextou!';
    }
  }
}

clickFriday();

function textZoom() {
  const daysTag = document.querySelector('#days');
  daysTag.addEventListener('mouseover', increaseFont);
  daysTag.addEventListener('mouseout', decreaseFont);

  function increaseFont(dayOrigin) {
    dayOrigin.target.style.fontSize = '30px';
    dayOrigin.target.style.fontWeigth = 'bold';
  }

  function decreaseFont(dayOrigin) {
    const elementOrigin =  dayOrigin.target;
    dayOrigin.target.style.fontSize = '20px';
    dayOrigin.target.style.fontWeigth = 'normal';
  }
}

textZoom();

function insertTask(task) {
  const taskElement = document.createElement('span')
  taskElement.innerHTML = task;
  const taskTag = document.querySelector('.my-tasks');
  taskTag.appendChild(taskElement);
}

insertTask("cozinhar");

function labelColor(color) {
  const labelElement = document.createElement('div')
  labelElement.className = 'task';
  labelElement.style.backgroundColor = color;
  const labelsTag = document.querySelector('.my-tasks');
  labelsTag.appendChild(labelElement);
  function selectedLabel(eventLabel) {
    if (eventLabel.target.className == 'task selected')
      eventLabel.target.className = 'task';
    else
      eventLabel.target.className = 'task selected';
  }
  labelsTag.addEventListener('click', selectedLabel);
}

labelColor("lightblue");

function labelColorDay(eventLabelDay) {
  const taskColor = document.querySelector('.selected');
  console.log(taskColor);
  if (taskColor != null) {
    console.log(taskColor.style.backgroundColor);
    if (eventLabelDay.target.style.color == taskColor.style.backgroundColor)
    eventLabelDay.target.style.color = 'rgb(119,119,119)';
    else
      eventLabelDay.target.style.color = taskColor.style.backgroundColor;
  }
}

const taskDay = document.querySelector('#days');
taskDay.addEventListener('click', labelColorDay);
