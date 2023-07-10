import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import AddIcon from '@mui/icons-material/Add';
import MigrateHousehold from './MigrateHousehold';
import MuteHousehold from './MuteHousehold';
import VoidHousehold from './VoidHousehold';
import CreatePersonStepper from '../navigation/CreatePersonStepper';


function HouseholdSummary(props) {
  const {
    id,
    household_name,
    household_identifier,
    household_type_id,
    household_address_id,
    created_at,
    updated_at,
    deleted_at,
    is_household_approved,
    is_muted,
    is_voided,
    household_approved_by_id,
    household_registered_by_id
  } = props.householdSummary;

  const [activeComponent, setActiveComponent] = useState('summary');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'summary':
        return (
          <div>
            <h2>Household Summary</h2>
            <p>ID: {id}</p>
            <p>Household Name: {household_name}</p>
            <p>Household Identifier: {household_identifier}</p>
            <p>Household Type ID: {household_type_id}</p>
            <p>Household Address ID: {household_address_id}</p>
            <p>Created At: {created_at}</p>
            <p>Updated At: {updated_at}</p>
            <p>Deleted At: {deleted_at}</p>
            <p>Is Household Approved: {is_household_approved}</p>
            <p>Is Muted: {is_muted}</p>
            <p>Is Voided: {is_voided}</p>
            <p>Household Approved By ID: {household_approved_by_id}</p>
            <p>Household Registered By ID: {household_registered_by_id}</p>
          </div>
        );
      case 'mute':
        return <MuteHousehold />;
      case 'migrate':
        return <MigrateHousehold />;
      case 'void':
        return <VoidHousehold />;
      case 'addMember':
        return <CreatePersonStepper />;
      default:
        return null;
    }
  };

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="form-container">
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <FadeMenu onButtonClick={handleButtonClick} />
      </div>
      {renderComponent()}
    </div>
  );
}

function FadeMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (component) => {
    props.onButtonClick(component);
    handleClose();
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="primary"
      >
        Manage household
        <AddIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleMenuItemClick('addMember')}>Add Member</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('void')}>Void Household</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('mute')}>Mute Household</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('migrate')}>Migrate Household</MenuItem>
      </Menu>
    </div>
  );
}




export default HouseholdSummary;
