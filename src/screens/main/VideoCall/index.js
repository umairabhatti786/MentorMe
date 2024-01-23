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

const VideoCall = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: colors.primary,
      }}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.black} />
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={images.userback}>
        <View
          style={{
            padding: 20,
            flex: 1,
            paddingTop: Platform.OS == "ios" ? 60 : -60,
          }}>
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
        </View>
        <ImageBackground
          style={{
            width: 105,
            height: 160,
            alignSelf: "flex-end",
            marginRight: 20,
            borderRadius: 20,
            marginBottom: -20,
            padding:10,
            alignItems:"flex-end",justifyContent:"flex-end",flexDirection:"row"
          }}
          source={images.usersquare}>
          <TouchableOpacity
            activeOpacity={0.6}
            // style={{ alignItems:"flex-end",justifyContent:"flex-end",flexDirection:"row" }}
          >
            <Image
              source={images.cameraleftright}
              resizeMode="contain"
              style={{ width: 22, height: 22 }}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={{ ...appStyles.row, alignSelf: "center" }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ ...styles.callContainer, backgroundColor: "#F0F0F032" }}>
            <Image
              source={images.volume}
              resizeMode="contain"
              style={{ width: 22, height: 22 }}
            />
          </TouchableOpacity>
          <Spacer width={20} />
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ ...styles.callContainer, backgroundColor: "#F0F0F032" }}>
            <Image
              source={images.videowhite}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <Spacer width={20} />

          <TouchableOpacity
            activeOpacity={0.6}
            style={{ ...styles.callContainer, backgroundColor: "#F0F0F032" }}>
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
      </ImageBackground>
    </View>
  );
};

export default VideoCall;

const styles = StyleSheet.create({
  callContainer: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
});
