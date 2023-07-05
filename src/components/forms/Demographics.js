import React,{useState} from 'react';

function Demographics({householdRegistryData,setHouseholdRegistryData}) {
  const initialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    country: ' ',
    countyOfBirth: ' ',
    residence: {
      county: ' ',
      sub_county: '',
      ward: '',
      village: '',
    },
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = async (values) => {

    try {
       // Append form values to householdRegistryData object
          setHouseholdRegistryData(householdRegistryData => ({
            ...householdRegistryData,
            values
          }));

          console.log(values);

     
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    // Add validation logic if needed

    return errors;
  };

  return (
    <div class="form-container">
              <h2 class="section-title">Demographics</h2>
        <section className="form-group">
              <div class="section-info">
                <p class="section-description">Person basic Details</p>
              </div>
              <div className="form-row">
            <div className="input-group">
              <label>First Name *</label>
              <input type="text" />
            </div>
          </div>
        
        
          <div className="form-row">
            <div className="input-group">
              <label>Middle Name</label>
              <input type="text" />
            </div>
          </div>
        
        
          <div className="form-row">
            <div className="input-group">
              <label>Last Name *</label>
              <input type="text" />
            </div>
          </div>
        
        
          <div className="form-row">
            <div className="input-group">
              <label>Date of Birth *</label>
              <input type="date" />
            </div>
          </div>
        
        
          <div className="form-row">
            <div className="input-group">
              <label>Marital Status *</label>
              <select>
              <option value=" "> </option>
                <option value="Married Polygamous">Married Polygamous</option>
                <option value="Married Monogamous">Married Monogamous</option>
                <option value="Single">Single</option>
              </select>
            </div>
          </div>
        
        
          <div className="form-row">
            <div className="input-group">
              <label>Gender *</label>
              <select>
              <option value=" "> </option>
              <option value="intersex">Intersex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </section>


        <section className="form-group">
        <div class="section-info">
                <p class="section-description">Socio-economic</p>
        </div>
        <div className="form-row">
          <div className="input-group">
            <label>Occupation *</label>
            <select>
            <option value="">Select occupation</option>
              <option value="GOVERNMENT EMPLOYEE">1. GOVERNMENT EMPLOYEE</option>
              <option value="NGO EMPLOYEE">2. NGO EMPLOYEE</option>
              <option value="PRIVATE SECTOR EMPLOYEE">3. PRIVATE SECTOR EMPLOYEE</option>
              <option value="SELF EMPLOYED">4. SELF EMPLOYED</option>
              <option value="PRIVATE SECTOR EMPLOYEE">5. STUDENT</option>
            </select>
          </div>
        </div>
      
      
        <div className="form-row">
          <div className="input-group">
            <label>Religion *</label>
            <select>
              <option value=" ">Select Religion</option>
              <option value="Christian">Christian</option>
              <option value="Muslim">Muslim</option>
            </select>
          </div>
        </div>
      
      
        <div className="form-row">
          <div className="input-group">
            <label>Education Level *</label>
            <select>
            <option value="">Select education level</option>
            <option value="None">None</option>
              <option value="Secondary">Secondary</option>
              <option value="Tertiary">Tertiary</option>
              <option value="University">University</option>
            </select>
          </div>
        </div>
       
          <div className="form-row">
            <div className="input-group">
              <label>Country *</label>
              <select>
              <option value=""> </option>
                <option value="KE">Kenya</option>
                <option value="US">United States</option>
                <option value="UG">Uganda</option>
              </select>
            </div>
          </div>
        
       
          <div className="form-row">
            <div className="input-group">
              <label>County of Birth *</label>
              <select>
              <option value=""> </option>
                <option value="001">Mombasa</option>
                <option value="002">Kwale</option>
              </select>
            </div>
          </div>
        </section>


          <section className="form-group">
          <div class="section-info">
                <p class="section-description">Residence</p>
        </div>
             
                <div className="form-row">
                  <div className="input-group">
                    <label>County</label>
                    <select>
                    <option value="" > </option>
                      <option value="001">Nairobi</option>
                      <option value="002">Kiambu</option>
                    </select>
                  </div>
                </div>
              
             
                <div className="form-row">
                  <div className="input-group">
                    <label>Sub County</label>
                    <select>
                    <option value="" > </option>
                      <option value="001">Kamukunji</option>
                      <option value="002">Ngara</option>
                    </select>
                  </div>
                </div>
              
             
                <div className="form-row">
                  <div className="input-group">
                    <label>Ward</label>
                    <select>
                    <option value="" > </option>
                      <option value="001">CBD</option>
                      <option value="002">Shauri Moyo</option>
                    </select>
                  </div>
                </div>
              
             
                <div className="form-row">
                  <div className="input-group">
                    <label>Village *</label>
                    <input type="text" />
                  </div>
                </div>
              
             
                <div className="form-row">
                  <div className="input-group">
                    <label>Landmark</label>
                    <input type="text" />
                  </div>
                </div>
              
             
                <div className="form-row">
                  <div className="input-group">
                    <label>Address</label>
                    <input type="text" />
                  </div>
                </div>
                       
        </section>
        </div>
  
  );
}

export default Demographics;
