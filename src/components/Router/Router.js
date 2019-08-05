import React from 'react';
import { Router as ReachRouter } from '@reach/router';
import DashboardPage from '../DashboardPage/DashboardPage';
import AboutPage from '../AboutPage/AboutPage';
import PrivacyPolicyPage from '../PrivacyPolicyPage/PrivacyPolicyPage';

function Router() {
  return (
    <ReachRouter>
      <DashboardPage path="/" />
      <AboutPage path="/about" />
      <PrivacyPolicyPage path="/policy" />
    </ReachRouter>
  );
}

export default Router;
