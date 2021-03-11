const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  hasEntered: false,
  formErrors: {email: '', password: ''},
};

function dataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return { ...state, name: action.name };
    default:
      return state;
  }
}

export default dataReducer;