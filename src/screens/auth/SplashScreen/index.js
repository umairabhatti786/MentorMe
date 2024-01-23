import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import { appStyles } from "../../../utils/appStyles";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets/images";
import { colors } from "../../../utils/colors";
import LottieView from 'lottie-react-native';


const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Spacer height={Platform.OS == "ios" ? 20 : 10} />
      
        <Spacer height={"32%"} />
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 200, height: 110 }}
            source={images.logo}
            resizeMode="contain"
          />

          <Spacer height={"30%"} />

          <LottieView 
 style={{height: 120,width:120}}
 speed={1.2}
source={require('../../../assets/loader/loader.json')} autoPlay  />
          

       

         
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  line: {
    height: 1.5,
    backgroundColor: colors.halfWhite,
    width: "28%",
  },
});
