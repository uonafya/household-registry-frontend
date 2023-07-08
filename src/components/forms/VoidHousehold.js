import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const VoidHousehold = () => {
  const validationSchema = Yup.object().shape({
    householdId: Yup.string().required('Household ID is required'),
    reasonForVoiding: Yup.string().required('Reason for Voiding is required'),
  });

  const formik = useFormik({
    initialValues: {
      householdId: '',
      reasonForVoiding: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      sessionStorage.setItem('voidHouseholdSessionValues', JSON.stringify(values));
      // Handle form submission logic here
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  const handleReasonForVoidingChange = (event) => {

    handleChange(event);

  };

  useEffect(() => {
    // Check if values exist in sessionStorage
    const storedValues = sessionStorage.getItem('voidHouseholdSessionValues');
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
    
     
      <div className="form-container">
      <section className="form-group">
        <div className="section-info">
          
          <p className="section-description">Void Household</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <label>Household ID *</label>
                <input
                  type="text"
                  id="householdId"
                  name="householdId"
                  autoComplete="household ID"
                  value={values.householdId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.householdId && touched.householdId && (
                  <div className="error">{errors.householdId}</div>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Reason for Voiding *</label>
                <select
                  id="reasonForVoiding"
                  name="reasonForVoiding"
                  value={values.reasonForVoiding}
                  onChange={handleReasonForVoidingChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select a reason</option>
                  <option value="Incase of a duplicate, Merging the records can be used as a corrective measure after validation.">
                    Incase of a duplicate, Merge the records as a corrective measure after validation.
                  </option>
                  <option value="Incase of errors of omission and commission, EDIT can be used to correct that.">
                    Errors :omission and commission, EDIT to correct that
                  </option>
                  <option value="Household registered with clerical errors to be validated as non-existing then VOID">
                    Household registered with clerical errors to be validated as non-existing then VOID
                  </option>
                </select>
                {errors.reasonForVoiding && touched.reasonForVoiding && (
                  <div className="error">{errors.reasonForVoiding}</div>
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
