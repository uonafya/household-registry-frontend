import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const HouseHoldAddress = () => {
  const initialValues = {
    county: '',
    subCounty: '',
    constituency: '',
    ward: '',
  };

  const validationSchema = Yup.object().shape({
    county: Yup.string().required('County is required'),
    subCounty: Yup.string().required('Sub County is required'),
    constituency: Yup.string().required('Constituency is required'),
    ward: Yup.string().required('Ward is required'),
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission logic here
    sessionStorage.setItem('householdAddressSessionValues', JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  
  useEffect(() => {
    // Check if there are values in session storage
    
    const savedFormValues = sessionStorage.getItem('householdAddressSessionValues');

    if (savedFormValues) {
        try {
          const parsedValues = JSON.parse(savedFormValues);
          formik.setValues(parsedValues);
        } catch (error) {
          console.error('Error parsing stored values:', error);
        }
      }
    }, [formik.setValues]); // Run the effect only once on the initial render

  return (
    <div className="form-container">
      <section className="form-group">
        <div className="section-info">
          <h2 className="section-title">Household address</h2>
          <p className="section-description">Enter the current address of the household.</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label>County *</label>
              <select
                name="county"
                value={formik.values.county}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select County</option>
                <option value="Nairobi">Nairobi</option>
                <option value="Kiambu">Kiambu</option>
              </select>
              {formik.touched.county && formik.errors.county && (
                <div className="error">{formik.errors.county}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Sub County *</label>
              <select
                name="subCounty"
                value={formik.values.subCounty}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Sub county</option>
                <option value="Starehe">Starehe</option>
                <option value="Kamukunji">Kamukunji</option>
              </select>
              {formik.touched.subCounty && formik.errors.subCounty && (
                <div className="error">{formik.errors.subCounty}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Constituency *</label>
              <select
                name="constituency"
                value={formik.values.constituency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Constituency</option>
                <option value="Starehe">Starehe</option>
                <option value="Kamukunji">Kamukunji</option>
              </select>
              {formik.touched.constituency && formik.errors.constituency && (
                <div className="error">{formik.errors.constituency}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Ward *</label>
              <select
                name="ward"
                value={formik.values.ward}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Ward</option>
                <option value="Ngara">Ngara</option>
                <option value="Pangani">Pangani</option>
              </select>
              {formik.touched.ward && formik.errors.ward && (
                <div className="error">{formik.errors.ward}</div>
              )}
            </div>
          </div>

          <div className="form-row buttons">
            <button type="submit" className="button-1">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default HouseHoldAddress;
