import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/auth/Login";
import Home from "../../screens/main/Home";
import Tabs from "../BottomTabs/Tabs";
import Onboarding from "../../screens/auth/Onboarding/Onboarding";
import strings from "../../utils/strings";
import Signup from "../../screens/auth/Signup";

const AppStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={strings.Onboarding_screen} component={Onboarding} />
      <Stack.Screen name={strings.tabs} component={Tabs} />
      <Stack.Screen name={strings.login} component={Login} />
      <Stack.Screen name={strings.signup} component={Signup} />

      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  );
};
export default AppStack;
