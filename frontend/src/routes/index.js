import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/routes/Route';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import SignUp from '~/pages/SignUp';
import Users from '~/pages/Users';
import Provider from '~/pages/Dashboard/Provider';
import People from '~/pages/People';
import NewPeople from '~/pages/NewPeople';
import Schedules from '~/pages/Schedules';
import NewSchedule from '~/pages/NewSchedule';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/users" component={Users} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/providers" component={Provider} isPrivate />
      <Route path="/signup" component={SignUp} isPrivate />
      <Route path="/people" component={People} isPrivate />
      <Route path="/newpeople" component={NewPeople} isPrivate />
      <Route path="/schedules" component={Schedules} isPrivate />
      <Route path="/newschedule" component={NewSchedule} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
