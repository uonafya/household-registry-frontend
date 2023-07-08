import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Contact = (props) => {
  
  const validationSchema = Yup.object().shape({
  primary_phone: Yup.string().required('Primary Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required')
  });

  const formik = useFormik({
  initialValues: {
      primary_phone: '',
      secondary_phone: '',
      email: ''
  },
  validationSchema,

  });

const { values, errors, touched, handleBlur } = formik;


      useEffect(() => {
        // Check if there are values in session storage
        const savedFormValues = sessionStorage.getItem('Contacts');
       

        if (savedFormValues) {
          try {
            const parsedValues = JSON.parse(savedFormValues);
            formik.setValues(parsedValues);
          } catch (error) {
            console.error('Error parsing stored values:', error);
          }
        }
      }, [formik.setValues]); // Run the effect only once on the initial render

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
              <h2 className="section-title">Person contacts</h2>
              <p className="section-description">Enter person contacts.</p>
          </div>

        <form >
          <div className="form-row">
            <div className="input-group">
              <label>Primary Phone *</label>
              <input
                type="text"
                id="primary_phone"
                name="primary_phone"
                value={values.primary_phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.primary_phone && touched.primary_phone && (
                <div className="error">{errors.primary_phone}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Secondary Phone</label>
              <input
                type="text"
                id="secondary_phone"
                name="secondary_phone"
                value={values.secondary_phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.secondary_phone && touched.secondary_phone && (
                <div className="error">{errors.secondary_phone}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && <div className="error">{errors.email}</div>}
            </div>
          </div>

         
        </form>
      </section>
    </div>
    );
};

export default Contact;