import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchFormValues } from '../../stateManagement/actions/householdFormAction';


const initialValues = {
  householdName: '',
  householdType: '',
};

const HouseHoldDetails = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch an action to fetch the data from Redux store
  const formValues = dispatch(fetchFormValues());
  }, [dispatch]);

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
    console.log("Redux");
   
  };

  return (
    <div className="form-container">
        <section className="form-group">
          
          <div className="section-info">
            <h2 className="section-title">Household details</h2>
            <p className="section-description">
              Fill in the household details.
            </p>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Household Name *</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Household Type *</label>
              <select>
              <option value="">Select Household Type</option>
                <option value="">Single person household</option>
                <option value="">Family</option>
                <option value="">Child headed household</option>
              </select>
            </div>
          </div>
          
        </section> 
        </div>
  );
};

export default HouseHoldDetails;
