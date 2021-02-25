const ADD_NAME = 'ADD_NAME';

const addName = ((name) => ({
  type: ADD_NAME,
  name,
}));

export default addName;
