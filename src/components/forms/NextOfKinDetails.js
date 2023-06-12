import React from 'react';
import NextOfKinOptions from '../options/NextOfKinOptions';

function NextOfKinDetails() {
  return (
    <div>
      <fieldset className="border p-4">
        <legend className="text-lg font-bold">Next of Kin Details</legend>
        <table>
          <tbody>
            <tr>
              <td className="w-64">Name</td>
              <td className="w-64">Relationship</td>
            </tr>
            <tr>
              <td className="w-64">
                <input
                  id="fr3353"
                  type="text"
                  name="nameOfNextOfKin"
                  className="w-64"
                  value=""
                  autoComplete="off"
                />
                <span id="fr3353-error" className="error hidden"></span>
              </td>
              <td className="w-64">
                <NextOfKinOptions/>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td className="align-top">
                <label htmlFor="field5724" className="ke-field-label">
                  Phone Number
                </label>
                <span className="ke-field-content">
                  <input
                    id="fr6559"
                    type="text"
                    name="nextOfKinContact"
                    className="w-64"
                    value=""
                    autoComplete="off"
                  />
                  <span id="fr6559-error" className="error hidden"></span>
                </span>
              </td>

              <td className="align-top">
                <label htmlFor="field6450" className="ke-field-label">
                  Postal Address
                </label>
                <span className="ke-field-content">
                  <input
                    id="fr9549"
                    type="text"
                    name="nextOfKinAddress"
                    className="w-64"
                    value=""
                    autoComplete="off"
                  />
                  <span id="fr9549-error" className="error hidden"></span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td className="align-top">
                <label htmlFor="field678" className="ke-field-label">
                  Verification Status
                </label>
                <span className="ke-field-content">
                  <input
                    id="fr2225"
                    type="text"
                    name="CRVerificationStatus"
                    className="w-64"
                    value=""
                    autoComplete="off"
                    readOnly
                  />
                  <span id="fr2225-error" className="error hidden"></span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <input type="hidden" id="CRVerificationMessage" name="CRVerificationMessage" />
      </fieldset>
    </div>
  );
}

export default NextOfKinDetails;
