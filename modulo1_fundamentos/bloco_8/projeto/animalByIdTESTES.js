const data = {
  animals: [
    {
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      name: 'lions',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12
        },
        {
          name: 'Maxwell',
          sex: 'male',
          age: 15
        },
        {
          name: 'Faustino',
          sex: 'male',
          age: 7
        },
        {
          name: 'Dee',
          sex: 'female',
          age: 14
        }
      ]
    },
    {
      id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Shu',
          sex: 'female',
          age: 19
        },
        {
          name: 'Esther',
          sex: 'female',
          age: 17
        }
      ]
    },
    {
      id: 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
      name: 'bears',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Hiram',
          sex: 'male',
          age: 4
        },
        {
          name: 'Edwardo',
          sex: 'male',
          age: 4
        },
        {
          name: 'Milan',
          sex: 'male',
          age: 4
        },
      ]
    },
    {
      id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
      name: 'penguins',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Joe',
          sex: 'male',
          age: 10
        },
        {
          name: 'Tad',
          sex: 'male',
          age: 12
        },
        {
          name: 'Keri',
          sex: 'female',
          age: 2
        },
        {
          name: 'Nicholas',
          sex: 'male',
          age: 2
        },
      ]
    },
    {
      id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
      name: 'otters',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Neville',
          sex: 'male',
          age: 9
        },
        {
          name: 'Lloyd',
          sex: 'male',
          age: 8
        },
        {
          name: 'Mercedes',
          sex: 'female',
          age: 9
        },
        {
          name: 'Margherita',
          sex: 'female',
          age: 10
        },
      ]
    },
    {
      id: '89be95b3-47e4-4c5b-b687-1fabf2afa274',
      name: 'frogs',
      popularity: 2,
      location: 'SW',
      residents: [
        {
          name: 'Cathey',
          sex: 'female',
          age: 3
        },
        {
          name: 'Annice',
          sex: 'female',
          age: 2
        }
      ]
    },
    {
      id: '78460a91-f4da-4dea-a469-86fd2b8ccc84',
      name: 'snakes',
      popularity: 3,
      location: 'SW',
      residents: [
        {
          name: 'Paulette',
          sex: 'female',
          age: 5
        },
        {
          name: 'Bill',
          sex: 'male',
          age: 6
        }
      ]
    },
    {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Ilana',
          sex: 'female',
          age: 11
        },
        {
          name: 'Orval',
          sex: 'male',
          age: 15
        },
        {
          name: 'Bea',
          sex: 'female',
          age: 12
        },
        {
          name: 'Jefferson',
          sex: 'male',
          age: 4
        },
      ]
    },
    {
      id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
      name: 'giraffes',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Gracia',
          sex: 'female',
          age: 11
        },
        {
          name: 'Antone',
          sex: 'male',
          age: 9
        },
        {
          name: 'Vicky',
          sex: 'female',
          age: 12
        },
        {
          name: 'Clay',
          sex: 'male',
          age: 4
        },
        {
          name: 'Arron',
          sex: 'male',
          age: 7
        },
        {
          name: 'Bernard',
          sex: 'male',
          age: 6
        }
      ]
    }
  ],
  employees: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
        'e8481c1d-42ea-4610-8e11-1752cfc05a46']
    },
    {
      id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
        'e8481c1d-42ea-4610-8e11-1752cfc05a46',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b']
    },
    {
      id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
      firstName: 'Ola',
      lastName: 'Orloff',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274',
        '78460a91-f4da-4dea-a469-86fd2b8ccc84',
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
    },
    {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      firstName: 'Wilburn',
      lastName: 'Wishart',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['78460a91-f4da-4dea-a469-86fd2b8ccc84',
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
    },
    {
      id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
      firstName: 'Stephanie',
      lastName: 'Strauss',
      managers: [],
      responsibleFor: [
        '01422318-ca2d-46b8-b66c-3e9e188244ed',
        '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'
      ]
    },
    {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      firstName: 'Sharonda',
      lastName: 'Spry',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274']
    },
    {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      firstName: 'Ardith',
      lastName: 'Azevado',
      managers: ['b0dc644a-5335-489b-8a2c-4e086c7819a2'],
      responsibleFor: ['e8481c1d-42ea-4610-8e11-1752cfc05a46',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d']
    },
    {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      firstName: 'Emery',
      lastName: 'Elser',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        '0938aa23-f153-4937-9f88-4858b24d6bce']
    }
  ],
  hours: {
    'Tuesday': { open: 8, close: 18 },
    'Wednesday': { open: 8, close: 18 },
    'Thursday': { open: 10, close: 20 },
    'Friday': { open: 10, close: 20 },
    'Saturday': { open: 8, close: 22 },
    'Sunday': { open: 8, close: 20 },
    'Monday': { open: 0, close: 0 }
  },
  prices: {
    'Adult': 49.99,
    'Senior': 24.99,
    'Child': 20.99
  }
};



/* 
function animalsByIds(ids) {
  const arr = [];
  ids.forEach((id, index) => {
    arr[index] = data.animals.find((animal) => animal.id === id)
  });
  return arr
}

console.log(animalsByIds(['e8481c1d-42ea-4610-8e11-1752cfc05a46', 'ef3778eb-2844-4c7c-b66c-f432073e1c6b']));
 */

 /*
function animalsOlderThan(animal, age) {
  return data.animals.find((species) => species.name === animal).residents
  .every((resident) => resident.age >= age);
}

console.log(animalsOlderThan('penguins', 3));
*/

/*
function employeeByName(employeeName) {
  const newObj =  data.employees
    .find(employee => (employee.firstName === employeeName || employee.lastName === employeeName));
  if (newObj === undefined) return {}
  else return newObj; 
}

console.log(employeeByName('Emery'));
*/

/*
const personalInfo = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
};

const associatedWith = {
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992'
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
  ]
};

function createEmployee({...personalInfo}, {managers, responsibleFor}) {
  return {
    ...personalInfo,
    managers,
    responsibleFor
  };  
}

console.log(createEmployee(personalInfo, associatedWith));
*/

/*
function isManager(id) {
  return data.employees
  .some((employee) => employee.managers
  .find((manager) => manager === id));
}
 
console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
//console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
//console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
*/

/* 
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees = data.employees.concat({ id, firstName, lastName, managers, responsibleFor });
}

addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe');

console.log(data.employees);

 addEmployee('4141da1c-a6ed-4cf7-90c4-99c657ba4ef3', 'Jane', 'Doe',
[
  '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
  'a67a36ee-3765-4c74-8e0f-13f881f6588a',
],
[
  'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
  '210fcd23-aa7b-4975-91b7-0230ebb27b99',
]);

console.log(data.employees); 
*/

/*
function animalCount(species) {
  const newObj = {};
  if (!species) {
    data.animals.map(({name, residents}) => newObj[name] = residents.length);
    return newObj;
  }
  return data.animals.find((animal) => animal.name === species).residents.length;
}

console.log(animalCount());

console.log(animalCount('lions'));
*/

/*
function entryCalculator({Adult = 0, Senior = 0, Child = 0} = 0) {
  const arrArg = [Adult, Senior, Child];
  return Object.values(data.prices)
    .reduce((acc, curr, index) => (acc + (curr * arrArg[index])), 0);
}

console.log(entryCalculator()); //0
console.log(entryCalculator({ })); //0
console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 })); //187.94
console.log(entryCalculator({ 'Adult': 1 })); //49.99
console.log(entryCalculator({ 'Senior': 1 })); //24.99
console.log(entryCalculator({ 'Child': 1  })); //20.99
console.log(entryCalculator({ 'Child': 1, 'Senior': 1 })); //45.98
*/

/*
function animalMap(options) {
  const animalsNE = data.animals.filter((animalNE) => animalNE.location === 'NE').map((animal) => animal.name);
  const animalsNW = data.animals.filter((animalNW) => animalNW.location === 'NW').map((animal) => animal.name);
  const animalsSE = data.animals.filter((animalSE) => animalSE.location === 'SE').map((animal) => animal.name);
  const animalsSW = data.animals.filter((animalSW) => animalSW.location === 'SW').map((animal) => animal.name);
  return {
    NE: animalsNE,
    NW: animalsNW,
    SE: animalsSE,
    SW: animalsSW,
  }
}

console.log(animalMap());

const expected = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes']
};
*/

/*
function animalMap(options) {

  const filterLocation = ((location) => data.animals
    .filter((animal) => animal.location === location)
    .map((animal) => animal.name)
  );

  const filterResidents = ((name) => data.animals
    .find((animal) => animal.name === name).residents
    .map((resident) => resident.name)
  );

  const residentNames = ((location) => { 
    let arr = filterLocation(location);
    arr.forEach((name, index) => {
    arr[index] = {[name]: filterResidents(name)};
    });
    return arr;
  });

  if (options.includeNames) {
    return {
      NE: residentNames('NE'),
      NW: residentNames('NW'),
      SE: residentNames('SE'),
      SW: residentNames('SW'),
    }
  }

  return {
    NE: filterLocation('NE'),
    NW: filterLocation('NW'),
    SE: filterLocation('SE'),
    SW: filterLocation('SW'),
  }
}

const options = { includeNames: true };
console.log(animalMap(options));

const expected = {
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] }
  ],
  NW: [
    { tigers: ['Shu', 'Esther'] },
    { bears: ['Hiram', 'Edwardo', 'Milan'] },
    { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] }
  ],
  SE: [
    { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
    { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] }
  ],
  SW: [
    { frogs: ['Cathey', 'Annice'] },
    { snakes: ['Paulette', 'Bill'] }
  ]
};
*/

/*
function animalMap(options) {

  const filterLocation = ((location) => data.animals
    .filter((animal) => animal.location === location)
    .map((animal) => animal.name)
  );

  const filterResidents = ((name) => {
    if (options.sorted) {
      return data.animals
        .find((animal) => animal.name === name).residents
        .map((resident) => resident.name)
        .sort();
    }
    return data.animals
      .find((animal) => animal.name === name).residents
      .map((resident) => resident.name)
  });
  

  const residentNames = ((location) => { 
    let arr = filterLocation(location);
    arr.forEach((name, index) => {
    arr[index] = {[name]: filterResidents(name)};
    });
    return arr;
  });

  if (options.includeNames) {
    return {
      NE: residentNames('NE'),
      NW: residentNames('NW'),
      SE: residentNames('SE'),
      SW: residentNames('SW'),
    }
  }

  return {
    NE: filterLocation('NE'),
    NW: filterLocation('NW'),
    SE: filterLocation('SE'),
    SW: filterLocation('SW'),
  }
}

const options = { includeNames: true, sorted: true };
console.log(animalMap(options))

const expected = {
  NE: [
    { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
    { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] }
  ],
  NW: [
    { tigers: ['Esther', 'Shu'] },
    { bears: ['Edwardo', 'Hiram', 'Milan'] },
    { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] }
  ],
  SE: [
    { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
    { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] }
  ],
  SW: [
    { frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] }
  ]
};
*/

/*
function animalMap({includeNames = false, sorted, sex} = {}) {

  const filterLocation = ((location) => data.animals
    .filter((animal) => animal.location === location)
    .map((animal) => animal.name)
  );

  const filterResidents = ((name) => {
    let animalByName = data.animals
      .find((animal) => animal.name === name).residents;

    if (sex === 'female' || sex === 'male') {
      animalByName = animalByName
        .filter((resident) => resident.sex === sex)
     }    
    
    if (sorted) {
      animalByName = animalByName
        .sort();
    }
    
    return animalByName
      .map((resident) => resident.name)
  });


  const residentNames = ((location) => { 
    let arr = filterLocation(location);
    arr.forEach((name, index) => {
    arr[index] = {[name]: filterResidents(name)};
    //console.log(arr[index])
    });
    //console.log(arr);
    return arr;

  });

  console.log(includeNames);

 if (includeNames) {
    return {
      NE: residentNames('NE'),
      NW: residentNames('NW'),
      SE: residentNames('SE'),
      SW: residentNames('SW'),
    }
  }

  return {
    NE: filterLocation('NE'),
    NW: filterLocation('NW'),
    SE: filterLocation('SE'),
    SW: filterLocation('SW'),
  }
}

const options = { includeNames: true, sex: 'female' };
console.log(animalMap(options));

const expected = {
  NE: [
    { lions: ['Zena', 'Dee'] },
    { giraffes: ['Gracia', 'Vicky'] }
  ],
  NW: [
    { tigers: ['Shu', 'Esther'] },
    { bears: [] },
    { elephants: ['Ilana', 'Bea'] }
  ],
  SE: [
    { penguins: ['Keri'] },
    { otters: ['Mercedes', 'Margherita'] }
  ],
  SW: [
    { frogs: ['Cathey', 'Annice'] },
    { snakes: ['Paulette'] }
  ]
};
*/

/* function animalMap({ includeNames = false, sorted = false, sex } = {}) {

  const filterResidents = ((name) => {
    let animalByName = data.animals
      .find(animal => animal.name === name).residents;
      console.log(animalByName);
    if (sex !== {}) {
      animalByName = animalByName
        .filter(resident => resident.sex === sex);
    }
    if (sorted) {
      animalByName = animalByName.map(resident => resident.name)
        .sort();
      return animalByName;
    }
    return animalByName.map(resident => resident.name);
  });

  const residentNames = ((location) => {
    const arr = data.animals
      .filter(animal => animal.location === location)
      .map(animal => animal.name);
    if (includeNames) {
      arr.forEach((name, index) => {
        arr[index] = { [name]: filterResidents(name) };
      });
    }
    return arr;
  });

  return {
    NE: residentNames('NE'),
    NW: residentNames('NW'),
    SE: residentNames('SE'),
    SW: residentNames('SW'),
  };
} */

/*
function animalMap({ includeNames = false, sorted = false, sex = '' } = {}) {
  const filterLocation = (location => data.animals
    .filter(animal => animal.location === location)
    .map(animal => animal.name)
  );
  const filterResidents = ((name) => {
    let animalByName = data.animals
      .find(animal => animal.name === name).residents;
    if (sex !== '') {
      animalByName = animalByName
        .filter(resident => resident.sex === sex);
    }
    if (sorted) {
      animalByName = animalByName
        .map(resident => resident.name)
        .sort();
      return animalByName;
    }
    return animalByName
      .map(resident => resident.name);
  });
  const residentNames = ((location) => {
    const arr = filterLocation(location);
    arr.forEach((name, index) => {
      arr[index] = { [name]: filterResidents(name) };
    });
    return arr;
  });
  if (includeNames) {
    return {
      NE: residentNames('NE'),
      NW: residentNames('NW'),
      SE: residentNames('SE'),
      SW: residentNames('SW'),
    };
  }
  return {
    NE: filterLocation('NE'),
    NW: filterLocation('NW'),
    SE: filterLocation('SE'),
    SW: filterLocation('SW'),
  };
}

const options = { includeNames: true, sex: 'female', sort: true };
console.log(animalMap(options));

const expected = {
  NE: [
    { lions: ['Dee', 'Zena'] },
    { giraffes: ['Gracia', 'Vicky'] }
  ],
  NW: [
    { tigers: ['Esther', 'Shu'] },
    { bears: [] },
    { elephants: ['Bea', 'Ilana'] }
  ],
  SE: [
    { penguins: ['Keri'] },
    { otters: ['Margherita', 'Mercedes'] }
  ],
  SW: [
    { frogs: ['Annice', 'Cathey'] },
    { snakes: ['Paulette'] }
  ]
};

let options = { sex: 'female' }
console.log(animalMap(options)['NE'][0]);

let expected = 'lions';



let options = { sex: 'female', sorted: true };
console.log(animalMap(options)['NE'][0]);

let expected = 'lions';
*/

/*
function schedule(dayName = '') {
  const { hours } = data;
  const arrWeek = Object.entries(hours)
    .filter((day) => dayName === '' ? true : day[0] === dayName);
  const sch = {};
  arrWeek.forEach(weekday => {
    const {open, close} = weekday[1];
    if (open === 0 && close === 0) {
      sch[weekday[0]] = `CLOSED`;
    } else {
    sch[weekday[0]] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  return sch;
}

const actual = schedule();
console.log('7', actual);

const expected = {
  'Tuesday': 'Open from 8am until 6pm',
  'Wednesday': 'Open from 8am until 6pm',
  'Thursday': 'Open from 10am until 8pm',
  'Friday': 'Open from 10am until 8pm',
  'Saturday': 'Open from 8am until 10pm',
  'Sunday': 'Open from 8am until 8pm',
  'Monday': 'CLOSED'
};
*/

/*
function oldestFromFirstSpecies(id) {
  const { animals, employees } = data;
  const { responsibleFor } = employees.find(employee => employee.id === id);
  const { name, sex, age } = animals
    .find(animal => animal.id === responsibleFor[0]).residents
    .reduce((oldest, curr) => {
      return oldest.age > curr.age ? oldest : curr;
    });
  return [name, sex, age];  
}

let actual = oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');
let expected = ['Vicky', 'female', 12];
console.log(actual);
//actual = zoo.oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
//expected = ['Margherita', 'female', 10];
*/

/*
function increasePrices(percentage) {
  const plusPercent = (percentage * 0.01) + 1;
  const arrPrices = Object.entries(data.prices);
  arrPrices.forEach(price => {
    const value = Math.round(price[1] * plusPercent * 100);
    data.prices[price[0]] = value/100;
  });
}

increasePrices(50);
console.log(data.prices);
let expected = {
  'Adult': 74.99,
  'Senior': 37.49,
  'Child': 31.49
};
*/

function employeeCoverage(idOrName = '') {
  const { animals, employees } = data;
  //console.log('INICIO', arrEmployee.responsibleFor);
  const arrEmployee = employees.filter((employee) => {
    //console.log('x', employee);
    //console.log('0', Object.values(employee));
    //console.log(idOrName !== [] ? true : Object.values(employee)
    //.some((info) => info === idOrName) );
    if (idOrName === '') {
      return true;
    }
    return Object.values(employee)
      .some(info => info === idOrName);
  });
  //console.log('0', arrEmployee);
  
  const arr = {}
  arrEmployee.map((employee, idx) => {
    const arrName = []
    employee.responsibleFor
      .forEach((animalId, index) => {
      const animalName = animals.find(animal => { 
        //console.log('1', animalId)
        //console.log('2', animal.id)
        return animal.id === animalId;
       });
      
      //console.log('3', animalName.name);
      arrName[index] = animalName.name
      //console.log('3B', arrName[idx]);
    });
    //console.log('4', arrEmployee);
    //console.log('5', arrName);
    const { firstName, lastName  } = arrEmployee[idx];
    arr[`${firstName} ${lastName}`] = arrName;
  });
  return arr;
}

//console.log('4', employeeCoverage());
/*
const expected = {
  'Nigel Nelson': ['lions', 'tigers'],
  'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
  'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
  'Wilburn Wishart': ['snakes', 'elephants'],
  'Stephanie Strauss': ['giraffes', 'otters'],
  'Sharonda Spry': ['otters', 'frogs'],
  'Ardith Azevado': ['tigers', 'bears'],
  'Emery Elser': ['elephants', 'bears', 'lions']
};
*/

console.log('4', employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
//const expected = { 'Sharonda Spry': ['otters', 'frogs'] };

//console.log('5', employeeCoverage('Stephanie'));
//const expected = { 'Stephanie Strauss': ['giraffes', 'otters'] };

//console.log('6', employeeCoverage('Azevado'));
//const expected = { 'Ardith Azevado': ['tigers', 'bears'] };



















