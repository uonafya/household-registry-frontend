import React from 'react';

function IdentityNumbers() {
  return (
    <div className="App">
      <fieldset id="identifiers">
        <legend className="text-lg font-bold">ID Numbers</legend>

        <table>
          <tbody>
            <tr>
              <td className="ke-field-label">Patient Clinic Number</td>
              <td>
                <input
                  id="fr1292"
                  type="text"
                  name="patientClinicNumber"
                  className="w-64 border p-2"
                  value=""
                  autoComplete="off"
                />
                <span id="fr1292-error" className="error hidden"></span>
              </td>
              <td className="ke-field-instructions">(if available)</td>
            </tr>
            <tr>
              <td className="ke-field-label">National ID Number</td>
              <td>
                <input
                  id="fr6204"
                  type="text"
                  name="nationalIdNumber"
                  className="w-64 border p-2"
                  value=""
                  autoComplete="off"
                />
                <span id="fr6204-error" className="error hidden"></span>
              </td>
              <td className="ke-field-instructions">(This is required for all Kenyans aged 18+)</td>
              <td>
                <div id="nationalID-msgBox" className="ke-warning hidden">
                  National Id or Birth Certificate Number is Required
                </div>
              </td>
            </tr>

            <tr id="birth-cert-no">
              <td className="ke-field-label">Birth Certificate Number</td>
              <td>
                <input
                  id="fr8612"
                  type="text"
                  name="birthCertificateNumber"
                  className="w-64 border p-2"
                  value=""
                  autoComplete="off"
                />
                <span id="fr8612-error" className="error hidden"></span>
              </td>
              <td className="ke-field-instructions">(if available or Birth Notification number)</td>
            </tr>
            <tr id="upi-no">
              <td className="ke-field-label">NUPI</td>
              <td>
                <input
                  id="fr1860"
                  type="text"
                  name="nationalUniquePatientNumber"
                  className="w-64 border p-2"
                  value=""
                  autoComplete="off"
                  readOnly
                />
                <span id="fr1860-error" className="error hidden"></span>
              </td>
              <td className="ke-field-instructions">This will be populated from MOH Client Registry</td>
            </tr>
            <tr></tr>
            <tr>
              <td>
                <input type="checkbox" name="other-identifiers" value="Y" id="other-identifiers" /> More identifiers
              </td>
            </tr>
            <tr></tr>
            <tr id="passport-no" className="hidden">
              <td className="ke-field-label">Passport Number</td>
              <td>
                <input
                  id="fr1552"
                  type="text"
                  name="passPortNumber"
                  className="w-64 border p-2"
                  value=""
                  autoComplete="off"
                />
                <span id="fr1552-error" className="error hidden"></span>
              </td>
              <td className="ke-field-instructions">(if available)</td>
            </tr>
            <tr id="huduma-no" className="hidden">
              <td className="ke-field-label">Huduma Number</td>
              <td>
                <input
                  id="fr1306"
                  type="text"
                  name="hudumaNumber"
                  className="w-64 border p-2"
                  value=""
                  autoComplete="off"
                />
                <span id="fr1306-error" className="error hidden"></span>
              </td>
              <td className="ke-field-instructions">(if available)</td>
            </tr>
            <tr id="alien-no" className="hidden">
              <td className="ke-field-label">Alien ID Number</td>
              <td>
                <input
                  id="fr6413"
                  type="text"
                  name="alienIdNumber"
                  className="w-64 border p-2"
                  value=""
                  autoComplete="off"
                />
                <span id="fr6413-error" className="error hidden"></span>
              </td>
              <td className="ke-field-instructions">(if available)</td>
            </tr>
            <tr id="driving-license" className="hidden">
              <td className="ke-field-label">Driving License Number</td>
              <td>
                <input
                  id="fr1090"
                  type="text"
                  name="drivingLicenseNumber"
                  className="w-64 border p-2"
                  value=""
                  autoComplete="off"
                />
                <span id="fr1090-error" className="error hidden"></span>
              </td>
              <td className="ke-field-instructions">(if available)</td>
            </tr>

            <tr id="kdod-service-no" className="hidden">
              <td className="ke-field-label">Service Number *</td>
              <td>
                <input
                  id="fr4806"
                  type="text"
                  name="kDoDServiceNumber"
                  className="w-64 border p-2"
                  value=""
                  autoComplete="off"
                />
                <span id="fr4806-error" className="error hidden"></span>
              </td>
              <td className="ke-field-instructions">
                (5-6 digits for service officer or 5-6 digits followed by / and 2 digits for dependant (eg.12345/01))
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  );
}

export default IdentityNumbers;
