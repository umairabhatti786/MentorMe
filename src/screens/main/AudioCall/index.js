import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { appStyles } from "../../../utils/appStyles";
import CustomHeader from "../../../components/CustomHeader";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";

const AudioCall = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.secondary,
        paddingTop: Platform.OS == "ios" ? 50 : -50,
      }}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.white} />
      <View style={{ padding: 20, flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            style={{ width: 18, height: 18, tintColor: colors.white }}
            source={images.back}
          />
        </TouchableOpacity>
        {/* <CustomHeader isRight={true} text={"Chats"} /> */}
        <Spacer height={"25%"} />
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 999,
            overflow: "hidden",
            alignSelf: "center",
          }}>
          <Image
            source={images.user2}
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <Spacer height={20} />
        <CustomText
          color={colors.white}
          text={"Brian Chesky"}
          style={{ textAlign: "center" }}
          size={25}
          fontWeight={"700"}
        />
        <Spacer height={20} />
        <CustomText
          color={colors.white}
          text={"04:35 minutes"}
          style={{ textAlign: "center" }}
          size={18}
          fontWeight={"400"}
        />
      </View>
      <View style={{ ...appStyles.row, alignSelf: "center" }}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ ...styles.callContainer, backgroundColor: "#F0F0F035" }}>
          <Image
            source={images.volume}
            resizeMode="contain"
            style={{ width: 22, height: 22 }}
          />
        </TouchableOpacity>
        <Spacer width={20} />
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ ...styles.callContainer, backgroundColor: "#F0F0F035" }}>
          <Image
            source={images.voice}
            resizeMode="contain"
            style={{ width: 22, height: 22 }}
          />
        </TouchableOpacity>
        <Spacer width={20} />

        <TouchableOpacity
          activeOpacity={0.6}
          style={{ ...styles.callContainer, backgroundColor: "#F75555" }}>
          <Image
            source={images.callcancel}
            resizeMode="contain"
            style={{ width: 22, height: 22 }}
          />
        </TouchableOpacity>
        <Spacer height={150} />
      </View>
    </View>
  );
};

export default AudioCall;

const styles = StyleSheet.create({
  callContainer: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
});
