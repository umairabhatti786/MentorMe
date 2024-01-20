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
import CustomText from "../../../components/CustomText";
import CustomInput from "../../../components/CustomInput";
import Checkbox from "../../../components/CheckBox";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";
import AuthBotton from "../../../components/AuthBotton";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Spacer height={Platform.OS == "ios" ? 20 : 10} />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=>navigation.goBack()}

          style={{ width: 35, height: 35, justifyContent: "center" }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={images.back}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Spacer height={5} />
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 120, height: 80 }}
            source={images.logo}
            resizeMode="contain"
          />

          <Spacer height={40} />

          <CustomText
            text={"Create Your Account"}
            size={25}
            fontWeight={"700"}
          />
          <Spacer height={25} />

          <CustomInput
            leftImage={images.email}
            placeholder={"Email Address"}
            imgHeigth={18}
            imgWidth={18}
          />
          <CustomInput
            leftImage={images.lock}
            placeholder={"Password"}
            rightImage={images.eyeoff}
          />
          <View style={{ alignSelf: "flex-end",marginVertical:25 }}>
            <CustomText
              text={"Forgot the password?"}
              color={colors.secondary}
              size={13}
              fontWeight={"500"}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <Checkbox isChecked={true} />
            <Spacer width={4} />
            <CustomText text={"Remember me"} size={14} fontWeight={"500"} />
          </View>

          <CustomButton 
                    onPress={()=>navigation.navigate("Tabs")}

          fontWeight={"700"} text={"Sign in"} />

          <View
            style={{
              ...appStyles.row,
              justifyContent: "space-between",
              width: "100%",
              marginVertical: 20,
            }}
          >
            <View style={styles.line}></View>
            <CustomText
              text={"or continue with"}
              color={colors.lightGray}
              size={15}
              fontWeight={"600"}
            />

            <View style={styles.line}></View>
          </View>
          <Spacer height={10} />

          <View
            style={{
              ...appStyles.row,
              justifyContent: "center",
              width: "100%",
            }}
          >
            <AuthBotton img={images.facebook} />
            <Spacer width={15} />

            <AuthBotton img={images.google} />
            <Spacer width={15} />

            <AuthBotton img={images.apple} />
          </View>
          <Spacer height={20} />

          <View style={appStyles.row}>
            <CustomText
              text={"Already have an account?"}
              size={14}
              fontWeight={"400"}
              color={colors.grey300}
            />
            <Spacer width={5} />
            <TouchableOpacity
              activeOpacity={0.6}
              style={() => navigation.navigate("Signup")}
            >
              <CustomText
                text={"Sign up"}
                size={14}
                color={colors.secondary}
                fontWeight={"500"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  line: {
    height: 1.5,
    backgroundColor: colors.halfWhite,
    width: "28%",
  },
});
