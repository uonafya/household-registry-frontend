// actions.js
export const submitForm = (values) => {
    return {
      type: 'SUBMIT_FORM',
      payload: values,
    };
  };
  