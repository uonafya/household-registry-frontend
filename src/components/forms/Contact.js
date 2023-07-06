import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const validationSchema = Yup.object().shape({
  primary_phone: Yup.string().required('Primary Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required')
  });

  const formik = useFormik({
  initialValues: {
      primary_phone: '1234567890',
      secondary_phone: '9876543210',
      email: 'john@example.com'
  },
  validationSchema,
  onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
      sessionStorage.setItem('contactsSessionValues', JSON.stringify(values));
  }
  });

const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formik;


      useEffect(() => {
        // Check if there are values in session storage
        const savedFormValues = sessionStorage.getItem('contactsSessionValues');

        if (savedFormValues) {
          const parsedFormValues = JSON.parse(savedFormValues);

          // Set the form values from session storage
          formik.setValues(parsedFormValues);
        }
      }, []); // Run the effect only once on the initial render

return (
  <div className="form-container">
  <section className="form-group">
      <div className="section-info">
          <h2 className="section-title">Person contacts</h2>
          <p className="section-description">Enter person contacts.</p>
      </div>

    <form onSubmit={handleSubmit}>
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

      <button type="submit">Submit</button>
    </form>
  </section>
</div>
);
};

export default Contact;