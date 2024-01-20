import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { appStyles } from "../../../utils/appStyles";
import CustomHeader from "../../../components/CustomHeader";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import CustomButton from "../../../components/CustomButton";
import PremiumCard from "./PremiumCard";
import HorizontalContainer from "../../../components/HorizontalContainer";

const Profile = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  
  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, padding: 20 }}>
        <CustomHeader 
        isRight={true}
        text={"Profile"} />

        <Spacer height={20} />
        <Image
          style={{
            width: 180,
            height: 180,
            alignSelf: "center",
            borderRadius: 9999,
          }}
          source={images.avatar}
        />

        <Spacer height={10} />
        <PremiumCard />
        <HorizontalContainer
        onPress={()=>navigation.navigate("Setting")}
         text={"Settings"} leftImage={images.setting} />
        <Spacer height={30} />

        <HorizontalContainer
        isEnabled={isEnabled}
        toggleSwitch={toggleSwitch}
        isSwitch={true}
         text={"Dark Mode"} leftImage={images.darkmode} />
        <Spacer height={30} />

        <HorizontalContainer text={"Help Center"} leftImage={images.squreinfo} />
        <Spacer height={30} />

        <HorizontalContainer text={"Invite Friends"} leftImage={images.group} />
        <Spacer height={30} />

        <HorizontalContainer
        color={colors.red}
         text={"Logout"} leftImage={images.logout} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
