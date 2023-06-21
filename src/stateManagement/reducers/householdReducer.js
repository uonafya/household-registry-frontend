// reducers.js
const initialState = {
    submittedData: {},
  };
  
  const householdFormReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_FORM':
        return {
          ...state,
          submittedData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default householdFormReducer;