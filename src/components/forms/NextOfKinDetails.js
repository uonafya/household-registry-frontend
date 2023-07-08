import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const NextOfKinDetails = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    nextOfKinRelationship: Yup.string().required('Relationship is required'),
    residence: Yup.string().required('Residence is required'),
    primaryPhone: Yup.string().required('Primary Phone is required'),
    secondaryPhone: Yup.string(),
    emailAddress: Yup.string().email('Invalid email address'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      nextOfKinRelationship: '',
      residence: '',
      primaryPhone: '',
      secondaryPhone: '',
      emailAddress: '',
    },
    validationSchema: validationSchema,
    
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
   } = formik;

  useEffect(() => {
    // Check if values exist in sessionStorage
    const storedValues = sessionStorage.getItem('Next of Kin');
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
          <h2 className="section-title">Next of Kin</h2>
          <p className="section-description">Household head Next of Kin details</p>
        </div>
        
        <form >
          <div className="form-row">
            <div className="input-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && <div className="error">{errors.name}</div>}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Relationship *</label>
              <select
                name="nextOfKinRelationship"
                value={values.nextOfKinRelationship}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select a relationship</option>
                <option value="Partner">Parent</option>
                <option value="Spouse">Spouse</option>
                <option value="Sibling">Sibling</option>
                <option value="Child">Child</option>
                <option value="Aunt">Grandparent</option>
                <option value="Guardian">Guardian</option>
                <option value="Friend">Friend</option>
                <option value="Co-worker">Co-worker</option>
              </select>
              {errors.nextOfKinRelationship && touched.nextOfKinRelationship && (
                <div className="error">{errors.nextOfKinRelationship}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Residence *</label>
              <input
                type="text"
                name="residence"
                value={values.residence}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.residence && touched.residence && <div className="error">{errors.residence}</div>}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Primary Phone *</label>
              <input
                type="text"
                name="primaryPhone"
                value={values.primaryPhone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.primaryPhone && touched.primaryPhone && (
                <div className="error">{errors.primaryPhone}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Secondary Phone</label>
              <input
                type="text"
                name="secondaryPhone"
                value={values.secondaryPhone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.secondaryPhone && touched.secondaryPhone && (
                <div className="error">{errors.secondaryPhone}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="emailAddress"
                value={values.emailAddress}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.emailAddress && touched.emailAddress && (
                <div className="error">{errors.emailAddress}</div>
              )}
            </div>
          </div>

          
        </form>
      </section>
    </div>
  );
};

export default NextOfKinDetails;
