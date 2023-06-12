import React from 'react';
import CountryOptions from '../options/CountryOptions';

function ClientVerification() {
  return (
    <div>
      <fieldset id="clientVerificationSection">
        <legend>Client verification with Client Registry</legend>
        <table>
          <tbody>
            <tr>
              <td className="ke-field-label">Country *</td>
              <td className="px-2"></td>
              <td className="px-2"></td>
              <td className="px-2"></td>
              <td className="ke-field-label" style={{ whiteSpace: 'nowrap' }}>Identifier Type *</td>
              <td className="px-2"></td>
              <td className="px-2"></td>
            </tr>
            <tr>
              <td>
              <CountryOptions/>
              </td>
              <td className="whitespace-nowrap">
                <input
                  type="checkbox"
                  name="select-kenya-option-nupi-verification"
                  value="Y"
                  id="select-kenya-option-nupi-verification"
                />{' '}
                Select Kenya
              </td>
              <td>
                <div
                  id="nupi-verification-country-msgBox"
                  name="nupi-verification-country-msgBox"
                  className="ke-warning hidden"
                >
                  Country is Required
                </div>
              </td>
              <td></td>
              <td>
                <select id="idType" name="idtype" className="border rounded p-2">
                  <option value="">Select a valid identifier type</option>
                                
                  <option value="68449e5a-8829-44dd-bfef-c9c8cf2cb9b2">Birth Certificate Number</option>
                            
                   <option value="49af6cdc-7968-4abb-bf46-de10d7f4859f">National ID</option>
                          
                  <option value="be9beef6-aacc-4e1f-ac4e-5babeaa1e303">Passport Number</option>        
                      
                </select>
              </td>
              <td>
                <input type="text" id="idValue" name="idValue" autoComplete="off" className="border rounded p-2" />
              </td>
              <td className="ke-field-instructions">
                <div className="buttons-validate-identifiers">
                  <button type="button" className="ke-verify-button" id="validate-identifier">
                    Validate Identifier
                  </button>
                  <div className="wait-loading"></div>
                  <button type="button" className="ke-verify-button hidden" id="show-cr-info-dialog">
                    View Registry info
                  </button>
                  <div className="message-validate-identifiers">
                    <label id="msgBox"></label>
                  </div>
                </div>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  );
}

export default ClientVerification;
