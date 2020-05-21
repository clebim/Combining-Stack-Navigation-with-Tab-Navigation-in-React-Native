import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Dashboard from './pages/Dashboard/index';
import Cu from './pages/Cu/index';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createStackNavigator();
const SignStack = createStackNavigator()
const AppTab = createBottomTabNavigator();

function SignStackScreen (){
  return(
    <SignStack.Navigator headerMode="none" >
      <SignStack.Screen  name="SignIn" component={SignIn} />
      <SignStack.Screen  name="SignUp" component={SignUp} />
    </SignStack.Navigator>
  )
}

function AppTabScreen (){
  return(
    <AppTab.Navigator>
      <AppTab.Screen name="dashboard" component={Dashboard} />
      <AppTab.Screen name="cu" component={Cu} />
    </AppTab.Navigator>
  )
}

export default Routes = ({signed = false}) => {

  return(
    <Stack.Navigator  headerMode="none" initialRouteName={
      signed ? "App" : "Sign"
    } >  
      <Stack.Screen name="Sign" component={SignStackScreen} />
      <Stack.Screen  name="App" component={AppTabScreen} />
    </Stack.Navigator>
  )
}

