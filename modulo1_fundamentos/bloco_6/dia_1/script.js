states = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goías',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraíma',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
}

function fillCombobox() {
  const comboboxSelect = document.querySelector('#combobox-estados');
  for (let property in states) {
    const optionStates = document.createElement('option');
    optionStates.innerHTML = states[property];
    comboboxSelect.appendChild(optionStates);
  }
}

fillCombobox();

function dateFormatation() {
  const startDateSelect = document.querySelector('#texto-data');
  startDateSelect.addEventListener('keyup', function (event) {
    if (event.target.value.length <= 8) {
      event.target.value = event.target.value.replace(/\D/, "")
      if (event.target.value.length == 8) {
        const dia = event.target.value.slice(0, 2);
        const mes = event.target.value.slice(2, 4);
        const ano = event.target.value.slice(4, 8);
        event.target.value = `${dia}/${mes}/${ano}`;
      }
    }
  });
}

dateFormatation();

function dateValidation() {
  const dateInput = document.querySelector('#texto-data');
  const data = dateInput.value.split('/');
  let erro = '';
  if (data != '') {
    if (data[0] <= 0 || data[0] > 31) {
      dateInput.value = `xx/${data[1]}/${data[2]}`;
      erro += 'Dia inválido\n';
    }
    if (data[1] <= 0 || data[1] > 12) {
      dateInput.value = `${data[0]}/xx/${data[2]}`;
      erro += 'Mês inválido\n';
    }
    if (data[2] <= 0) {
      dateInput.value = `${data[0]}/${data[1]}/xxxx`;
      erro += 'Ano inválido\n';
    }
  }
  return erro;
}

function inputsVadation() {
  const inputsSelection = document.querySelectorAll('input[type=text], input[type=email], textarea, select');
  let erro = '';
  for (let index = 0; index < inputsSelection.length; index += 1) {
    let input = inputsSelection[index];
    if (input.required) {
      if (input.value === '') {
        erro += `Campo ${input.name} obrigatório\n`;
        input.className = 'error';
      }
    }
  }
  return erro;
}

const buttonSubmitSelection = document.querySelector('#submeter');
buttonSubmitSelection.addEventListener('click', function(event) {
  const inputsSelection = document.querySelectorAll('input[type=text], input[type=email], textarea, select');
  let errors = "";
  errors += inputsVadation();
  errors += dateValidation();
  if (errors !== '') {
    event.preventDefault();
    alert(errors);
  }
  else {
    for (let index = 0; index < inputsSelection.length; index += 1) {
      let input = inputsSelection[index];
      input.className = '';
    }
  }
});

function createButtonClearInputs() {
  const buttonContentSelection = document.querySelector('#submits');
  const buttonClear = document.createElement('button');
  buttonClear.className = 'button cleaner';
  buttonClear.innerHTML = 'Cancelar';
  buttonClear.id = 'cleaner' 
  buttonContentSelection.appendChild(buttonClear);
}

createButtonClearInputs();

const buttonClearSelection = document.querySelector('#cleaner');
buttonClearSelection.addEventListener('click', function () {
  const inputsSelection = document.querySelectorAll('input[type=text], input[type=email], textarea, select');
  for (let index = 0; index < inputsSelection.length; index += 1) {
    let input = inputsSelection[index];
    input.value = '';
  }
})

function createDivResume() {
  const formSelection = document.querySelector('form'); 
  const resumeContent = document.createElement('fieldset');
  resumeContent.id = 'resume';
  resumeContent.className = 'date-content';
  formSelection.appendChild(resumeContent);

  const resumeContentSelection = document.querySelector('#resume');
  const url = window.location.href.split('&');
  console.log(url);
  for (let index = 0; index < url.length; index += 1) {
    const resumeElement = document.createElement('div');
    let data = decodeURI(url[index]);
    if (index === 0) {
      let nome = data.slice(data.lastIndexOf('?')+1);
      nome = nome.replaceAll('=', ' - ');
      resumeElement.innerHTML = nome;
    } else if (index === 1) {
      let email = data.replaceAll('=', ' - ');
      email = email.replace('%40', '@');
      resumeElement.innerHTML = email;
    } else if (index === 10) {
      let email = data.replace('=', ' - ');
      email = email.replaceAll('%2F', '/');
      resumeElement.innerHTML = email;
    } else {
      data = data.replaceAll('+', ' ');
      data = data.replace('=', ' - ');
      resumeElement.innerHTML = data;
    }
    resumeContent.appendChild(resumeElement);
  }
}

createDivResume();

