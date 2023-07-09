import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const VoidHousehold = () => {
  const validationSchema = Yup.object().shape({
    householdId: Yup.string().required('Household ID is required'),
    reason_for_voiding: Yup.string().required('Reason for Voiding is required'),
  });

  const formik = useFormik({
    initialValues: {
      house_hold_id: '',
      reason_for_voiding: '',
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      console.log(values);
      sessionStorage.setItem('voidHouseholdSessionValues', JSON.stringify(values));
      
      // Add additional properties to values
      const updatedValues = {
        ...values,
        date_voided: "2023-06-13",
        voided_by_id: 1,
        is_voided_approval_status: false,
      };
    
      try {
        const response = await axios.post('/api/households/void', updatedValues);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return (
    <React.Fragment>
    
     
      <div className="form-container">
      <section className="form-group">
        <div className="section-info">
          
          <p className="section-description">Void Household</p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <label>Household ID *</label>
                <input
                  type="text"
                  id="house_hold_id"
                  name="house_hold_id"
                  autoComplete="household ID"
                  value={formik.values.house_hold_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.house_hold_id && formik.touched.house_hold_id && (
                  <div className="error">{formik.errors.house_hold_id}</div>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Reason for Voiding *</label>
                <select
                  id="reason_for_voiding"
                  name="reason_for_voiding"
                  value={formik.values.reason_for_voiding}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select a reason</option>
                  <option value="Duplicate records">
                  Duplicate records
                  </option>
                  <option value="Error">
                    Errors :omission and commission
                  </option>
                  <option value="Clerical errors">
                    Clerical errors
                  </option>
                </select>
                {formik.errors.reason_for_voiding && formik.touched.reason_for_voiding && (
                  <div className="error">{formik.errors.reason_for_voiding}</div>
                )}
              </div>
            </div>

          <button type="submit">Submit</button>
        </form>

        </section>
      </div>
    
    </React.Fragment>
  );
};

export default VoidHousehold;
