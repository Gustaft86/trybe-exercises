const INITIAL_STATE = {
  isFetching: 'false',
  imagePath: '',
  error: '',
}

const dogReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default dogReducer;