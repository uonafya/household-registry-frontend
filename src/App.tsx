import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import HouseHoldRegistration from './pages/Form/HouseHoldRegistration';
import HouseHoldMemberRegistration from './pages/Form/HouseHoldMemberRegistration';
import AllHouseHolds from './pages/Form/AllHouseHolds';
import MigrateHouseHold from './pages/Form/MigrateHouseHold';
import MuteHouseHold from './pages/Form/MuteHouseHold';
import VoidHouseHold from './pages/Form/VoidHouseHold';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<ECommerce />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forms/household-reg" element={<HouseHoldRegistration />} />
        <Route path="/forms/householdmember-reg" element={<HouseHoldMemberRegistration />} />
        <Route path="/forms/all-households" element={<AllHouseHolds />} />
        <Route path="/forms/migrate-household" element={<MigrateHouseHold />} />
        <Route path="/forms/mute-household" element={<MuteHouseHold />} />
        <Route path="/forms/void-household" element={<VoidHouseHold />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/ui/alerts" element={<Alerts />} />
        <Route path="/ui/buttons" element={<Buttons />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
