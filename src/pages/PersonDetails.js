import React from 'react';
import ClientVerification from '../components/forms/ClientVerification';
import IdentityNumbers from '../components/forms/IdentityNumbers';
import Demographics from '../components/forms/Demographics';
import Address from '../components/forms/Address';
import NextOfKinDetails from '../components/forms/NextOfKinDetails';
import PostToRegistry from '../components/forms/PostToRegistry';


function PersonDetails() {
  return (
    <div>
      <h1><b>Register Patient</b></h1>
      <ClientVerification/>
      <p/>
      <IdentityNumbers/>
      <p/>
      <Demographics/>
      <p/>
      <Address/>
      <p/>
      <NextOfKinDetails/>
      <p/>
      <PostToRegistry/>


    </div>
  );
}

export default PersonDetails;
