import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MigrateHousehold = () => {
  const validationSchema = Yup.object().shape({
    householdId: Yup.string().required('Household ID is required'),
    householdName: Yup.string().required('Household Name is required'),
    oldResidenceId: Yup.string().required('Old Residence ID is required'),
    newAreaName: Yup.string().required('New Area Name is required'),
    newAreaCode: Yup.string().required('New Area Code is required'),
    reasonForMigration: Yup.string().required('Reason for Migration is required'),
    initiatedByChvId: Yup.string().required('Initiated by CHV ID is required'),
    dateOfMigration: Yup.string().required('Date of Migration is required'),
  });

  const formik = useFormik({
    initialValues: {
      householdId: '',
      householdName: '',
      oldResidenceId: '',
      newAreaName: '',
      newAreaCode: '',
      reasonForMigration: '',
      initiatedByChvId: '',
      dateOfMigration: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      sessionStorage.setItem('migrateHouseholdSessionValues', JSON.stringify(values));
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

  return (
    <React.Fragment>

      <div className="form-container">
      <section className="form-group">
        <div className="section-info">
          <h2 className="section-title">Migrate household</h2>
          <p className="section-description">Migrate household</p>
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
              <label>Household Name *</label>
              <input
                type="text"
                id="householdName"
                name="householdName"
                autoComplete="household name"
                value={values.householdName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.householdName && touched.householdName && (
                <div className="error">{errors.householdName}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Old Residence ID *</label>
              <input
                type="text"
                id="oldResidenceId"
                name="oldResidenceId"
                autoComplete="old residence ID"
                value={values.oldResidenceId}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.oldResidenceId && touched.oldResidenceId && (
                <div className="error">{errors.oldResidenceId}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>New Area Name *</label>
              <input
                type="text"
                id="newAreaName"
                name="newAreaName"
                autoComplete="new area name"
                value={values.newAreaName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.newAreaName && touched.newAreaName && (
                <div className="error">{errors.newAreaName}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>New Area Code *</label>
              <input
                type="text"
                id="newAreaCode"
                name="newAreaCode"
                autoComplete="new area code"
                value={values.newAreaCode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.newAreaCode && touched.newAreaCode && (
                <div className="error">{errors.newAreaCode}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Reason for Migration *</label>
              <select
                id="reasonForMigration"
                name="reasonForMigration"
                value={values.reasonForMigration}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select a reason</option>
                <option value="Relocation test">Relocation test</option>
              </select>
              {errors.reasonForMigration && touched.reasonForMigration && (
                <div className="error">{errors.reasonForMigration}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Initiated by CHV ID *</label>
              <input
                type="text"
                id="initiatedByChvId"
                name="initiatedByChvId"
                autoComplete="initiated by CHV ID"
                value={values.initiatedByChvId}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.initiatedByChvId && touched.initiatedByChvId && (
                <div className="error">{errors.initiatedByChvId}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Date of Migration *</label>
              <input
                type="text"
                id="dateOfMigration"
                name="dateOfMigration"
                autoComplete="date of migration"
                value={values.dateOfMigration}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.dateOfMigration && touched.dateOfMigration && (
                <div className="error">{errors.dateOfMigration}</div>
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

export default MigrateHousehold;
