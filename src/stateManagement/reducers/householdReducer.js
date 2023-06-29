const initialState = {
  household_registered_by_id: null,
  household_approved_by_id: null,
  household_name: '',
  household_identifier: '',
  household_type: {
    household_type_name: ''
  },
  household_address: {
    area_type_id: 1,
    area_name: '',
    area_code: '',
    parent_area_id: null
  },
  household_persons: [
    {
      firstName: '',
      middleName: '',
      lastName: '',
      nupi_number: null,
      dateOfBirth: null,
      gender: 'Male',
      country: '',
      countyOfBirth: '',
      residence: {
        county: '',
        sub_county: '',
        ward: '',
        village: ''
      },
      contact: {
        primary_phone: '',
        secondary_phone: null,
        email: ''
      },
      next_of_kin: {
        name: '',
        relationship: '',
        residence: '',
        contact: {
          primary_phone: '',
          secondary_phone: null,
          email: ''
        }
      },
      identification: {
        identification_type: '',
        identification_number: ''
      },
      household_member_type_id: null,
      is_alive: true
    }
  ]
};


  
  const householdFormReducer = (state = initialState, action) => {
    switch (action.type) {

      case 'UPDATE_HOUSEHOLD':
        return {
          ...state,
          [action.payload.parentField]: {
            ...state[action.payload.parentField],
            [action.payload.name]: action.payload.value,
          },
        };
      case 'SUBMIT_HOUSEHOLD_SUCCESS':
      return {
        ...state,
        submittedData: action.payload,
        error: null,
      };
    case 'SUBMIT_HOUSEHOLD_ERROR':
      return {
        ...state,
        error: action.payload,
      };
      default:
        return state;
    }
  };
  
  export default householdFormReducer;