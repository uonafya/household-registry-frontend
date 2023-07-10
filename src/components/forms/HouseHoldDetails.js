import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const HouseHoldDetails = (props) => {
  const initialValues = {
    householdName: '',
    householdType: '',
  };

  const validationSchema = Yup.object({
    householdName: Yup.string().required('Household Name is required'),
    householdType: Yup.string().required('Household Type is required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
   
  });

  useEffect(() => {
    // Check if values exist in sessionStorage
    const storedValues = sessionStorage.getItem('Household Details');
    

    if (storedValues) {
      try {
        const parsedValues = JSON.parse(storedValues);
        formik.setValues(parsedValues);
      } catch (error) {
        console.error('Error parsing stored values:', error);
      }
    }
  }, [formik.setValues]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = { ...formik.values, [name]: value };
    formik.handleChange(e);
    props.setFormValues(newValues);
  };

  return (
  
    <div className="form-container">
      <section className="form-group">
        <div className="section-info">
          <h2 className="section-title">Household details</h2>
          <p className="section-description">
            Fill in the household details.
          </p>
        </div>

        <form >
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="householdName">Household Name *</label>
              <input
                type="text"
                id="householdName"
                name="householdName"
                onChange={handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.householdName}
              />
              {formik.touched.householdName && formik.errors.householdName && (
                <div className="error">{formik.errors.householdName}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="householdType">Household Type *</label>
              <select
                id="householdType"
                name="householdType"
                onChange={handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.householdType}
              >
                <option value="">Select Household Type</option>
                <option value="single">Single person household</option>
                <option value="family">Family</option>
                <option value="child">Child headed household</option>
              </select>
              {formik.touched.householdType && formik.errors.householdType && (
                <div className="error">{formik.errors.householdType}</div>
              )}
            </div>
          </div>

          
        </form>
      </section>
    </div>
  );
};

export default HouseHoldDetails;
