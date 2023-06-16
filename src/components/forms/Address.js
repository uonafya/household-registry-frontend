import CountyToWardOptions from "../options/CountyToWardOptions";
import CountryOptions from "../options/CountryOptions";

function Address({householdRegistryData,sethouseholdRegistryData}) {
    return (
      <div>
        
        <fieldset>
<legend class="text-xl font-bold">Address</legend>

<table>
  <tbody>
    <tr>
      <td class="ke-field-label">Country *</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <CountryOptions/>
                    <span id="country-registration-error" class="error hidden"></span>
      </td>
      <td><input type="checkbox" name="select-kenya-option" value="Y" id="select-kenya-option"/> Select Kenya </td>
      <td>
        <div id="country-msgBox" class="ke-warning hidden">Country is Required</div>
      </td>
    </tr>
  </tbody>
</table>

<table>
          <tbody>
            <tr>
              <td className="ke-field-label">Telephone contact *</td>
              <td className="px-2"></td>
              <td className="px-2"></td>
              <td className="px-2"></td>
              <td className="ke-field-label">Alternate phone number</td>
              <td className="px-2"></td>
              <td className="px-2"></td>
            </tr>
            <tr>
              <td>
                <label htmlFor="fr4174" className="ke-field-label">
                  Telephone contact *
                </label>
                <span className="ke-field-content">
                  <input
                    id="fr4174"
                    type="text"
                    name="telephoneContact"
                    className="w-64"
                    value=""
                    autoComplete="off"
                  />
                  <span id="fr4174-error" className="error hidden"></span>
                </span>
              </td>
              <td className="px-2"></td>
              <td className="px-2"></td>
              <td className="px-2"></td>
              <td>
                <label htmlFor="fr3018" className="ke-field-label">
                  Alternate phone number
                </label>
                <span className="ke-field-content">
                  <input
                    id="fr3018"
                    type="text"
                    name="alternatePhoneContact"
                    className="w-64"
                    value=""
                    autoComplete="off"
                  />
                  <span id="fr3018-error" className="error hidden"></span>
                </span>
              </td>
              <td className="px-2"></td>
              <td className="px-2"></td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td>
                <div id="phone-msgBox" className="ke-warning hidden">
                  Phone number is Required
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td className="ke-field-label">Postal Address</td>
              <td className="ke-field-label">Email address</td>
            </tr>
            <tr>
              <td>
                <label htmlFor="fr5959" className="ke-field-label">
                  Postal Address
                </label>
                <span className="ke-field-content">
                  <input
                    id="fr5959"
                    type="text"
                    name="personAddress.address1"
                    className="w-64"
                    value=""
                    autoComplete="off"
                  />
                  <span id="fr5959-error" className="error hidden"></span>
                </span>
              </td>
              <td>
                <label htmlFor="fr1400" className="ke-field-label">
                  Email address
                </label>
                <span className="ke-field-content">
                  <input
                    id="fr1400"
                    type="text"
                    name="emailAddress"
                    className="w-64"
                    value=""
                    autoComplete="off"
                  />
                  <span id="fr1400-error" className="error hidden"></span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td className="ke-field-label w-64">County *</td>
              <td className="ke-field-label w-64">Sub-County *</td>
              <td className="ke-field-label w-64">Ward *</td>
            </tr>
            <tr>
              <td>
                <CountyToWardOptions/>
              </td>
              
            </tr>
            <tr>
              
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td valign="top">
                <label
                  htmlFor="field7734"
                  className="ke-field-label"
                >
                  Location
                </label>
                <span className="ke-field-content">
                  <input
                    id="fr4969"
                    type="text"
                    name="personAddress.address6"
                    className="w-64"
                    value=""
                    autoComplete="off"
                  />
                  <span
                    id="fr4969-error"
                    className="error hidden"
                  ></span>
                </span>
              </td>
              <td valign="top">
                <label
                  htmlFor="field8156"
                  className="ke-field-label"
                >
                  Sub-location
                </label>
                <span className="ke-field-content">
                  <input
                    id="fr2151"
                    type="text"
                    name="personAddress.address5"
                    className="w-64"
                    value=""
                    autoComplete="off"
                  />
                  <span
                    id="fr2151-error"
                    className="error hidden"
                  ></span>
                </span>
              </td>
              <td valign="top">
                <label
                  htmlFor="field525"
                  className="ke-field-label"
                >
                  Village *
                </label>
                <span className="ke-field-content">
                  <input
                    id="fr4840"
                    type="text"
                    name="personAddress.cityVillage"
                    className="w-64"
                    value=""
                    autoComplete="off"
                  />
                  <span
                    id="fr4840-error"
                    className="error hidden"
                  ></span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          id="village-msgBox"
          className="ke-warning hidden"
        >
          Village is Required
        </div>

        <table>
          <tbody>
            <tr>
              <td valign="top">
                <label
                  htmlFor="field1510"
                  className="ke-field-label"
                >
                  Landmark
                </label>
                <span className="ke-field-content">
                  <input
                    id="fr491"
                    type="text"
                    name="personAddress.address2"
                    className="w-64"
                    value=""
                    autoComplete="off"
                  />
                  <span
                    id="fr491-error"
                    className="error hidden"
                  ></span>
                </span>
              </td>
              <td valign="top">
                <label
                  htmlFor="field4869"
                  className="ke-field-label"
                >
                  GPS Coordinates
                </label>
                <span className="ke-field-content">
                  <input
                    id="fr8161"
                    type="text"
                    name="personAddress.address3"
                    className="w-64"
                    value=""
                    autoComplete="off"
                  />
                  <span
                    id="fr8161-error"
                    className="error hidden"
                  ></span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
     
</fieldset>

      </div>
    );
  }
  
  export default Address;