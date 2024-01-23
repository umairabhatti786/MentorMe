import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/auth/Login";
import Home from "../../screens/main/Home";
import Tabs from "../BottomTabs/Tabs";
import Onboarding from "../../screens/auth/Onboarding/Onboarding";
import strings from "../../utils/strings";
import Signup from "../../screens/auth/Signup";
import Setting from "../../screens/main/Setting";
import Messages from "../../screens/main/Messages";
import AudioCall from "../../screens/main/AudioCall";
import VideoCall from "../../screens/main/VideoCall";
import HelpCenter from "../../screens/main/HelpCenter";
import AccountApproval from "../../screens/main/AccountApproval";
import AccountApprovalSms from "../../screens/main/AccountApprovalSms";
import DeleteAccount from "../../screens/main/DeleteAccount";
import SurveyScreen from "../../screens/main/SurveyScreen";
import ItsMatch from "../../screens/main/ItsMatch";
import RewindAndBoost from "../../screens/main/RewindAndBoost";
import SplashScreen from "../../screens/auth/SplashScreen";

const AppStack = () => {
  const Stack = createStackNavigator();
  const [splashState,setSplashState]=useState(true)

  useEffect(() => {
    let timeState = setTimeout(() => {
      // navigation.push('Onboarding01')
      setSplashState(false);
    }, 2000);
    return () => {
      clearTimeout(timeState);
    };
  }, []);
  

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {splashState&&<Stack.Screen name={strings.splashScreen} component={SplashScreen} />}
            

      <Stack.Screen name={strings.Onboarding_screen} component={Onboarding} />

      <Stack.Screen name={strings.tabs} component={Tabs} />
      <Stack.Screen name={strings.login} component={Login} />
      <Stack.Screen name={strings.signup} component={Signup} />
      <Stack.Screen name={strings.setting} component={Setting} />
      <Stack.Screen name={strings.messages} component={Messages} />
      <Stack.Screen name={strings.audioCall} component={AudioCall} />
      <Stack.Screen name={strings.videoCall} component={VideoCall} />
      <Stack.Screen name={strings.helpCenter} component={HelpCenter} />
      <Stack.Screen name={strings.accountApproval} component={AccountApproval} />
      <Stack.Screen name={strings.accountApprovalSms} component={AccountApprovalSms} />
      <Stack.Screen name={strings.deleteAccount} component={DeleteAccount} />
      <Stack.Screen name={strings.surveyScreen} component={SurveyScreen} />
      <Stack.Screen name={strings.itsMatch} component={ItsMatch} />
      <Stack.Screen name={strings.rewindAndBoost} component={RewindAndBoost} />



      
      




      



      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  );
};
export default AppStack;
