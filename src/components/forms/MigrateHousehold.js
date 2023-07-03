import React from 'react';
import { Typography} from '@mui/material';

const MigrateHousehold = () => {
  const [householdId, setHouseholdId] = React.useState('');
  const [householdName, setHouseholdName] = React.useState('');
  const [oldResidenceId, setOldResidenceId] = React.useState('');
  const [newAreaName, setNewAreaName] = React.useState('');
  const [newAreaCode, setNewAreaCode] = React.useState('');
  const [reasonForMigration, setReasonForMigration] = React.useState('');
  const [initiatedByChvId, setInitiatedByChvId] = React.useState('');
  const [dateOfMigration, setDateOfMigration] = React.useState('');

  const handleHouseholdIdChange = (event) => {
    setHouseholdId(event.target.value);
  };

  const handleHouseholdNameChange = (event) => {
    setHouseholdName(event.target.value);
  };

  const handleOldResidenceIdChange = (event) => {
    setOldResidenceId(event.target.value);
  };

  const handleNewAreaNameChange = (event) => {
    setNewAreaName(event.target.value);
  };

  const handleNewAreaCodeChange = (event) => {
    setNewAreaCode(event.target.value);
  };

  const handleReasonForMigrationChange = (event) => {
    setReasonForMigration(event.target.value);
  };

  const handleInitiatedByChvIdChange = (event) => {
    setInitiatedByChvId(event.target.value);
  };

  const handleDateOfMigrationChange = (event) => {
    setDateOfMigration(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
  Household Migration
</Typography>

<div class="form-container">
    <div className="form-row">
      <div className="input-group">
        <label>Household ID *</label>
        <input
          type="text"
          id="householdId"
          name="householdId"
          autoComplete="household ID"
          value={householdId}
          onChange={handleHouseholdIdChange}
        />
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
          value={householdName}
          onChange={handleHouseholdNameChange}
        />
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
          value={oldResidenceId}
          onChange={handleOldResidenceIdChange}
        />
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
          value={newAreaName}
          onChange={handleNewAreaNameChange}
        />
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
          value={newAreaCode}
          onChange={handleNewAreaCodeChange}
        />
      </div>
    </div>
  
  
    <div className="form-row">
      <div className="input-group">
        <label>Reason for Migration *</label>
        <select
          id="reasonForMigration"
          name="reasonForMigration"
          value={reasonForMigration}
          onChange={handleReasonForMigrationChange}
        >
          <option value="">Select a reason</option>
          <option value="Relocation test">Relocation test</option>
        </select>
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
          value={initiatedByChvId}
          onChange={handleInitiatedByChvIdChange}
        />
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
          value={dateOfMigration}
          onChange={handleDateOfMigrationChange}
        />
      </div>
    </div>
  
    </div>

    </React.Fragment>
  );
};

export default MigrateHousehold;
