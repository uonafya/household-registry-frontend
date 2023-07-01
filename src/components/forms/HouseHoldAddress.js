import React from 'react';

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
    <React.Fragment>
      <section class="form-group">
                <div class="section-info">
                    <h2 class="section-title">Household address</h2>
                    <p class="section-description">
                        Enter the current address of the household.
                    </p>
                </div>
                <div class="form-row">
                    <div class="input-group">
                        <label>County *</label>
                        <select>
                            <option value="Nairobi">Nairobi</option>
                            <option value="Kiambu">Kiambu </option>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="input-group">
                        <label>County *</label>
                        <select>
                            <option value="Nairobi">Nairobi</option>
                            <option value="Kiambu">Kiambu </option>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="input-group">
                        <label>Sub County *</label>
                        <select>
                            <option value="Starehe">Starehe</option>
                            <option value="Kamukunji">Kamukunji </option>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="input-group">
                        <label>Constituency *</label>
                        <select>
                            <option value="Starehe">Starehe</option>
                            <option value="Kamukunji">Kamukunji </option>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="input-group">
                        <label>Ward *</label>
                        <select>
                            <option value="Ngara">Ngara</option>
                            <option value="Pangani">Pangani </option>
                        </select>
                    </div>
                </div>

            </section>
    </React.Fragment>
    
      
  );
}

export default HouseHoldAddress;


