import React,{useState,useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { HouseholdContext } from '../../stateManagement/HouseholdContext';

function Demographics(props) {
  const initialValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  dateOfBirth: '',
  maritalStatus: '',
  gender: '',
  occupation: '',
  religion: '',
  educationLevel: '',
  country: '',
  countyOfBirth: '',
  county: '',
  subCounty: '',
  ward: '',
  village: '',
  landmark: '',
  address: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  dateOfBirth: Yup.date().required('Date of Birth is required'),
  maritalStatus: Yup.string().required('Marital Status is required'),
  gender: Yup.string().required('Gender is required'),
  occupation: Yup.string().required('Occupation is required'),
  religion: Yup.string().required('Religion is required'),
  educationLevel: Yup.string().required('Education Level is required'),
  country: Yup.string().required('Country is required'),
  countyOfBirth: Yup.string().required('County of Birth is required'),
  county: Yup.string().required('County is required'),
  subCounty: Yup.string().required('Sub County is required'),
  ward: Yup.string().required('Ward is required'),
  village: Yup.string().required('Village is required'),
});

  const formik = useFormik({
    initialValues,
    validationSchema,

  });

    useEffect(() => {
      // Check if there are values in session storage
      
      const savedFormValues = sessionStorage.getItem('Demographics');

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
      {console.log("rendered here")}
              <h2 className="section-title">Demographics</h2>
              <section className="form-group">
      <div className="section-info">
        <p className="section-description">Person basic Details</p>
      </div>

      <div className="form-row">
        <div className="input-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="error">{formik.errors.firstName}</div>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="input-group">
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.middleName}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="input-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="error">{formik.errors.lastName}</div>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="input-group">
          <label htmlFor="dateOfBirth">Date of Birth *</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
            <div className="error">{formik.errors.dateOfBirth}</div>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="input-group">
          <label htmlFor="maritalStatus">Marital Status *</label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.maritalStatus}
          >
            <option value=""> </option>
            <option value="Married Polygamous">Married Polygamous</option>
            <option value="Married Monogamous">Married Monogamous</option>
            <option value="Single">Single</option>
          </select>
          {formik.touched.maritalStatus && formik.errors.maritalStatus && (
            <div className="error">{formik.errors.maritalStatus}</div>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="input-group">
          <label htmlFor="gender">Gender *</label>
          <select
            id="gender"
            name="gender"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
          >
            <option value=""> </option>
            <option value="intersex">Intersex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {formik.touched.gender && formik.errors.gender && (
            <div className="error">{formik.errors.gender}</div>
          )}
        </div>
      </div>

  </section>


    <section className="form-group">
        <div className="section-info">
          <p className="section-description">Residence</p>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label htmlFor="county">County</label>
            <select
              id="county"
              name="county"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.county}
            >
              <option value=""> </option>
              <option value="001">Nairobi</option>
              <option value="002">Kiambu</option>
            </select>
            {formik.touched.county && formik.errors.county && (
              <div className="error">{formik.errors.county}</div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label htmlFor="subCounty">Sub County</label>
            <select
              id="subCounty"
              name="subCounty"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subCounty}
            >
              <option value=""> </option>
              <option value="001">Kamukunji</option>
              <option value="002">Ngara</option>
            </select>
            {formik.touched.subCounty && formik.errors.subCounty && (
              <div className="error">{formik.errors.subCounty}</div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label htmlFor="ward">Ward</label>
            <select
              id="ward"
              name="ward"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.ward}
            >
              <option value=""> </option>
              <option value="001">CBD</option>
              <option value="002">Shauri Moyo</option>
            </select>
            {formik.touched.ward && formik.errors.ward && (
              <div className="error">{formik.errors.ward}</div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label htmlFor="village">Village *</label>
            <input
              type="text"
              id="village"
              name="village"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.village}
            />
            {formik.touched.village && formik.errors.village && (
              <div className="error">{formik.errors.village}</div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label htmlFor="landmark">Landmark</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.landmark}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
          </div>
        </div>
      </section>
        </div>
  
  );
}

export default Demographics;
