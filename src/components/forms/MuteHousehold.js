import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import { Typography } from '@mui/material';

const MuteHousehold = () => {
  const initialValues = {
    householdId: '',
    reasonForMuting: '',
  };

  const handleFormSubmit = (values) => {
    console.log(values);
    // Handle form submission logic here
    sessionStorage.setItem('muteHouseholdSessionValues', JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
  });

  const {
    householdId,
    reasonForMuting,
  } = formik.values;

  const {
    handleChange,
    handleSubmit: formikHandleSubmit,
  } = formik;

  useEffect(() => {
    // Check if values exist in sessionStorage
    const storedValues = sessionStorage.getItem('muteHouseholdSessionValues');
    if (storedValues) {
      try {
        const parsedValues = JSON.parse(storedValues);
        formik.setValues(parsedValues);
      } catch (error) {
        console.error('Error parsing stored values:', error);
      }
    }
  }, [formik.setValues]); // Run the effect only once on the initial render

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Household Muting
      </Typography>

      <div className="form-container">
        <form onSubmit={formikHandleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="householdId">Household ID *</label>
              <input
                type="text"
                id="householdId"
                name="householdId"
                autoComplete="household ID"
                value={householdId}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="reasonForMuting">Reason for Muting *</label>
              <select
                id="reasonForMuting"
                name="reasonForMuting"
                value={reasonForMuting}
                onChange={handleChange}
              >
                <option value="">Select a reason</option>
                <option value="An entire household moves to a new geographical area/locality.">
                  An entire household moves to a new geographical area/locality
                </option>
                <option value="All members die.">All members die</option>
              </select>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default MuteHousehold;
