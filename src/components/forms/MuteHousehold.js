import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Typography } from '@mui/material';
import axios from 'axios'; 
import * as Yup from 'yup';

const MuteHousehold = () => {
  const initialValues = {
    house_hold_id: '',
    reason_for_muting: '',
  };

  const validationSchema = Yup.object().shape({
    house_hold_id: Yup.string().required('Household ID is required'),
    reason_for_muting: Yup.string().required('Reason for Muting is required'),
  });

  const handleFormSubmit = async (values) => {
    const updatedValues = {
      ...values,
      date_muted: "2023-06-14",
      muted_by_id: 1,
      is_muted_approval_status: false,
    };
  
    console.log(updatedValues);
    sessionStorage.setItem('muteHouseholdSessionValues', JSON.stringify(updatedValues));
  
    try {
      const response = await axios.post('/api/households/mute', updatedValues);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
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
  }, [formik.setValues]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Household Muting
      </Typography>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="house_hold_id">Household ID *</label>
              <input
                type="text"
                id="house_hold_id"
                name="house_hold_id"
                autoComplete="household ID"
                value={values.house_hold_id}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {formik.touched.house_hold_id && formik.errors.house_hold_id && (
                <div className="error">{formik.errors.house_hold_id}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="reason_for_muting">Reason for Muting *</label>
              <select
                id="reason_for_muting"
                name="reason_for_muting"
                value={values.reason_for_muting}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select a reason</option>
                <option value="Household moved">
                 Household Move
                </option>
                <option value="All members died.">All members died</option>
              </select>
              {formik.touched.reason_for_muting && formik.errors.reason_for_muting && (
                <div className="error">{formik.errors.reason_for_muting}</div>
              )}
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default MuteHousehold;
