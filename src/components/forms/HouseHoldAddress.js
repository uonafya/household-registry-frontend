import { Formik, Field, Form, ErrorMessage } from 'formik';

function HouseHoldAddress() {
  const initialValues = {
    household_address: {
      area_type_id: 1,
      area_name: 'Example Area',
      area_code: '123456',
      parent_area_id: null,
    },
  };

  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission logic here
  };

  const validateForm = (values) => {
    const errors = {};

    // Add validation logic if needed

    return errors;
  };

  return (
    <div>
      <fieldset style={{ width: '75%' }}>
        <legend>Household Address</legend>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-6 rounded shadow-lg">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
        <Form>
          <div>
            <label htmlFor="household_address.area_type_id">Area Type ID:</label>
            <Field type="number" id="household_address.area_type_id" name="household_address.area_type_id" />
            <ErrorMessage name="household_address.area_type_id" component="div" className="text-red-500" />
          </div>

          <div>
            <label htmlFor="household_address.area_name">Area Name:</label>
            <Field type="text" id="household_address.area_name" name="household_address.area_name" />
            <ErrorMessage name="household_address.area_name" component="div" className="text-red-500" />
          </div>

          <div>
            <label htmlFor="household_address.area_code">Area Code:</label>
            <Field type="text" id="household_address.area_code" name="household_address.area_code" />
            <ErrorMessage name="household_address.area_code" component="div" className="text-red-500" />
          </div>

          <div>
            <label htmlFor="household_address.parent_area_id">Parent Area ID:</label>
            <Field type="text" id="household_address.parent_area_id" name="household_address.parent_area_id" />
            <ErrorMessage name="household_address.parent_area_id" component="div" className="text-red-500" />
          </div>

        </Form>
      </Formik>
      </div>
        </div>
      </fieldset>
    </div>
  );
}

export default HouseHoldAddress;
