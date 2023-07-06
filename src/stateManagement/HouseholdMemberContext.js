import React, { createContext } from 'react';

// Step 1: Create a context object
const HouseholdMemberContext = createContext();

// Step 2: Create a component that wraps the context provider
export const HouseholdMemberProvider = ({ children }) => {
  const values = {
    firstName: 'John',
    middleName: 'Doe',
    lastName: 'Smith',
    nupi_number: '123456789',
    dateOfBirth: '1990-01-01',
    gender: 'Male',
    country: 'USA',
    countyOfBirth: 'Los Angeles',
    residence: {
      county: 'California',
      sub_county: 'XYZ',
      ward: 'ABC',
      village: 'PQR'
    },
    contact: {
      primary_phone: '+123456789',
      secondary_phone: '+987654321',
      email: 'john.doe@example.com'
    },
    next_of_kin: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      residence: 'Los Angeles',
      contact: {
        primary_phone: '+987654321',
        secondary_phone: '+123456789',
        email: 'jane.doe@example.com'
      }
    },
    identification: {
      identification_type: 'Passport',
      identification_number: 'ABC123XYZ'
    },
    household_member_type_id: 1,
    is_alive: true
  };

  return <HouseholdMemberContext.Provider value={values}>{children}</HouseholdMemberContext.Provider>;
};