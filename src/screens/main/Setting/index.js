import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { appStyles } from "../../../utils/appStyles";
import CustomHeader from "../../../components/CustomHeader";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets/images";
import { colors } from "../../../utils/colors";
import HorizontalContainer from "../../../components/HorizontalContainer";

const Setting = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView
    contentContainerStyle={appStyles.main}
    style={appStyles.main}

    >
        <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, padding: 20 }}>
        <CustomHeader
          isBack={true}
          onBack={() => navigation.goBack()}
          text={"Settings"}
        />

        <Spacer height={40} />

        <HorizontalContainer
          text={"Personal Information"}
          height={40}
          width={40}
          leftImage={images.personal}
        />
        <Spacer height={30} />

        <HorizontalContainer
          height={40}
          width={40}
          text={"Discovery Settings"}
          leftImage={images.discovery}
        />
        <Spacer height={30} />

        <HorizontalContainer
          height={40}
          width={40}
          text={"Privacy & Permissions"}
          leftImage={images.privacy}
        />
        <Spacer height={30} />

        <HorizontalContainer
          height={40}
          width={40}
          text={"Notification"}
          leftImage={images.notivication}
        />
        <Spacer height={30} />

        <HorizontalContainer
          height={40}
          width={40}
          text={"Security"}
          leftImage={images.security}
        />

        <Spacer height={30} />

        <HorizontalContainer
          height={40}
          width={40}
          text={"Data & Storage"}
          leftImage={images.datastorage}
        />

        <Spacer height={30} />

        <HorizontalContainer
          height={40}
          width={40}
          text={"Feedback"}
          leftImage={images.feebback}
        />

        <Spacer height={30} />

        <HorizontalContainer
          height={40}
          width={40}
          text={"Language"}
          leftImage={images.language}
        />
        <Spacer height={30} />

        <HorizontalContainer
          height={40}
          width={40}
          text={"About MentorConnect"}
          leftImage={images.about}
        />
      </View>
    </SafeAreaView>

    </ScrollView>
    
  );
};

export default Setting;

const styles = StyleSheet.create({});
