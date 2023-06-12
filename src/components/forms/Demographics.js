import calculate from '../../images/calculate.png';

function Demographics() {
    return (
        <div >
            <fieldset>
                <legend>Demographics</legend>

                <table>
        <tbody>
          <tr>
            <td className="align-top">
              <label htmlFor="field3150" className="ke-field-label">
                Surname *
              </label>
              <span className="ke-field-content">
                <input
                  id="fr1902"
                  type="text"
                  name="personName.familyName"
                  className="w-64"
                  value=""
                  autoComplete="off"
                />
                <span id="fr1902-error" className="error hidden"></span>
              </span>
            </td>
            <td className="align-top">
              <label htmlFor="field1737" className="ke-field-label">
                First name *
              </label>
              <span className="ke-field-content">
                <input
                  id="fr1951"
                  type="text"
                  name="personName.givenName"
                  className="w-64"
                  value=""
                  autoComplete="off"
                />
                <span id="fr1951-error" className="error hidden"></span>
              </span>
            </td>
            <td className="align-top">
              <label htmlFor="field7639" className="ke-field-label">
                Other name(s)
              </label>
              <span className="ke-field-content">
                <input
                  id="fr9531"
                  type="text"
                  name="personName.middleName"
                  className="w-64"
                  value=""
                  autoComplete="off"
                />
                <span id="fr9531-error" className="error hidden"></span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>
              <div id="surname-msgBox" className="ke-warning hidden">
                Surname is Required
              </div>
            </td>
            <td>
              <div id="firstname-msgBox" className="ke-warning hidden">
                First name is Required
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td className="align-top">
              <label className="ke-field-label">Sex *</label>
              <span className="ke-field-content">
                <input type="radio" name="gender" value="F" id="gender-F" />
                <span className="ml-1">Female</span>
                <input type="radio" name="gender" value="M" id="gender-M" />
                <span className="ml-1">Male</span>
                <span id="gender-F-error" className="error hidden"></span>
                <span id="gender-M-error" className="error hidden"></span>
              </span>
            </td>
            <td>
              <div id="gender-msgBox" className="ke-warning hidden">
                Age is Required
              </div>
            </td>
            <td className="align-top"></td>
            <td className="align-top">
              <label className="ke-field-label">Date of Birth *</label>
              <span className="ke-field-content">
                <input
                  id="patient-birthdate"
                  type="hidden"
                  name="birthdate"
                />
                <input
                  id="patient-birthdate_date"
                  type="text"
                  autoComplete="off"
                  className="hasDatepicker"
                  size="11"
                />
                <span id="patient-birthdate-error" className="error hidden"></span>
                <span id="patient-birthdate-estimated">
                  <input
                    type="radio"
                    name="birthdateEstimated"
                    value="true"
                  />
                  <span className="ml-1">Estimated</span>
                  <input
                    type="radio"
                    name="birthdateEstimated"
                    value="false"
                    defaultChecked
                  />
                  <span className="ml-1">Exact</span>
                </span>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span id="from-age-button-placeholder">
                  <button id="from-age-button" type="button">
                    <img src={calculate} />
                    <span className="ml-1">from age</span>
                  </button>
                </span>
              </span>
            </td>
            <td>
              <div id="age-msgBox" className="ke-warning hidden">
                Age is Required
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td className="align-top">
              <label htmlFor="field4126" className="ke-field-label">
                Marital status *
              </label>
              <span className="ke-field-content">
                <select id="fr4149" name="maritalStatus">
                  <option value=""></option>
                  <option value="159715">Married polygamous</option>
                  <option value="5555">Married monogamous</option>
                  <option value="1058">Divorced</option>
                  <option value="1059">Widowed</option>
                  <option value="1060">Cohabiting</option>
                  <option value="1057">Single</option>
                </select>
                <span id="fr4149-error" className="error hidden"></span>
              </span>
            </td>
            <td className="align-top">
              <label htmlFor="field1140" className="ke-field-label">
                Occupation *
              </label>
              <span className="ke-field-content">
                <select id="fr6345" name="occupation">
                  <option value=""></option>
                  <option value="1538">Farmer</option>
                  <option value="1539">Trader</option>
                  <option value="1540">Employee</option>
                  <option value="159465">Student</option>
                  <option value="159466">Driver</option>
                  <option value="1107">None</option>
                  <option value="5622">Other</option>
                </select>
                <span id="fr6345-error" className="error hidden"></span>
              </span>
            </td>
            <td className="align-top">
              <label htmlFor="field9919" className="ke-field-label">
                Education *
              </label>
              <span className="ke-field-content">
                <select id="fr391" name="education">
                  <option value=""></option>
                  <option value="1107">None</option>
                  <option value="1713">Primary school education</option>
                  <option value="1714">Secondary school education</option>
                  <option value="159785">
                    College, university or polytechnic
                  </option>
                </select>
                <span id="fr391-error" className="error hidden"></span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>



      <table id="kdod-struct" className="hidden">
        <tbody>
          <tr>
            <td className="ke-field-label w-70">Cadre *</td>
            <td className="ke-field-label w-70">Rank *</td>
          </tr>
          <tr>
            <td className="w-70">
              <select name="kDoDCadre" className="w-full">
                <option value=""></option>
                <option value="Troop">Troop</option>
                <option value="Civilian">Civilian</option>
              </select>
            </td>
            <td className="w-70">
              <select name="kDoDRank" className="kDoDRank w-full">
                <option value=""></option>
                <option value="General(Gen)">General(Gen)</option>
                <option value="Lieutenant General (Lt Gen)">Lieutenant General (Lt Gen)</option>
                <option value="Major General (Maj Gen)">Major General (Maj Gen)</option>
                <option value="Brigadier (Brig)">Brigadier (Brig)</option>
                <option value="Colonel (Col)">Colonel (Col)</option>
                <option value="Lieutenant Colonel (Lt Col)">Lieutenant Colonel (Lt Col)</option>
                <option value="Major (Maj)">Major (Maj)</option>
                <option value="Captain (Capt)">Captain (Capt)</option>
                <option value="Lieutenant (Lt)">Lieutenant (Lt)</option>
                <option value="2nd Lieutenant (2lt)">2nd Lieutenant (2lt)</option>
                <option value="Warrant officer 1 (WO1)">Warrant officer 1 (WO1)</option>
                <option value="Warrant officer 2 (WO2)">Warrant officer 2 (WO2)</option>
                <option value="Senior Sergeant (Ssgt)">Senior Sergeant (Ssgt)</option>
                <option value="Sergeant (Sgt)">Sergeant (Sgt)</option>
                <option value="Corporal (Cpl)">Corporal (Cpl)</option>
                <option value="Private (Spte)">Private (Spte)</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="ke-field-label w-70">Unit *</td>
          </tr>
          <tr>
            <td className="w-200" id="kdod-unit">
              <input name="kDoDUnit" className="kDoDUnit" />
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td valign="top">
              <label htmlFor="field1460" className="ke-field-label">
                Deceased
              </label>
              <span className="ke-field-content">
                <input type="radio" name="dead" value="true" id="fr8816-true" />
                <label htmlFor="fr8816-true">Yes</label>
                &nbsp;
                <input
                  type="radio"
                  name="dead"
                  value="false"
                  id="fr8816-false"
                  defaultChecked
                />
                <label htmlFor="fr8816-false">No</label>
                <span id="fr8816-error" className="error hidden"></span>
              </span>
            </td>
            <td valign="top">
              <label htmlFor="field9890" className="ke-field-label">
                Date of death
              </label>
              <span className="ke-field-content">
                <script
                  type="text/javascript"
                  dangerouslySetInnerHTML={{
                    __html: `
                      jq(function() {
                        jq('#fr3775_date').datepicker({
                          dateFormat: 'dd-M-yy',
                          changeMonth: true,
                          changeYear: true,
                          showButtonPanel: true,
                          yearRange: '-120:+5',
                          autoSize: true
                        });
                        jq('#fr3775_date, #fr3775_hour, #fr3775_minute').change(function() {
                          kenyaui.updateDateTimeFromDisplay('fr3775', false);
                        });
                      });
                    `
                  }}
                ></script>
                <input
                  id="fr3775"
                  type="hidden"
                  name="deathDate"
                />
                <input
                  id="fr3775_date"
                  type="text"
                  autoComplete="off"
                  className="hasDatepicker"
                  size="11"
                />
                <span id="fr3775-error" className="error hidden"></span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      </fieldset>

 </div>
);
  }

export default Demographics;