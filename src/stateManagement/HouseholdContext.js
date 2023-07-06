import React, { createContext } from 'react';

// Step 1: Create a context object
export const HouseholdContext = createContext();

// Step 2: Create a component that wraps the context provider
const HouseholdProvider = ({ children }) => {
  const values = {
    household_registered_by_id: 3,
    household_approved_by_id: 3,
    household_name: 'Sample Household',
    household_identifier: '123456',
    household_type: {
      household_type_name: 'Type A'
    },
    household_address: {
      area_type_id: 1,
      area_name: 'Sample Area',
      area_code: '123',
      parent_area_id: null
    },
    household_persons: [
      {
        firstName: 'John',
        middleName: 'Doe',
        lastName: 'Smith',
        nupi_number: null,
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        country: 'Sample Country',
        countyOfBirth: 'Sample County',
        residence: {
          county: 'Sample County',
          sub_county: 'Sample Sub County',
          ward: 'Sample Ward',
          village: 'Sample Village'
        },
        contact: {
          primary_phone: '1234567890',
          secondary_phone: null,
          email: 'john@example.com'
        },
        next_of_kin: {
          name: 'Jane Doe',
          relationship: 'Spouse',
          residence: 'Sample Residence',
          contact: {
            primary_phone: '0987654321',
            secondary_phone: null,
            email: 'jane@example.com'
          }
        },
        identification: {
          identification_type: 'ID_TYPE',
          identification_number: '324245'
        },
        household_member_type_id: 1,
        is_alive: true
      }
    ]
  };

  return <HouseholdContext.Provider value={values}>{children}</HouseholdContext.Provider>;
};