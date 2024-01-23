import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { appStyles } from "../../../utils/appStyles";
import { images } from "../../../assets/images";
import CustomHeader from "../../../components/CustomHeader";
import { Spacer } from "../../../components/Spacer";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import CustomView from "../../../components/CustomView";
import CustomInput from "../../../components/CustomInput";
import CustomLine from "../../../components/CustomLine";
import CustomButton from "../../../components/CustomButton";
import TopBar from "../../../components/TopBar";
import CustomSearch from "../../../components/CustomSearch";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const DeleteAccount = ({ navigation }) => {
  const [isActive, setIsActive] = useState(0);
  const [value, setValue] = useState("");

  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, padding: 20 }}>
        <CustomHeader
          isBack
          //   isRight
          navigation={navigation}
          text={"Account Deletion"}
        />

        <Spacer height={40} />
        <View style={{ paddingHorizontal: 20 }}>
          <CustomText
            color={colors.black}
            text={
              "Having issues with you account? Tap Support and let us asset your."
            }
            size={18}
            lineHeight={25}
            fontWeight={"400"}
          />

          <Spacer height={30} />

          <CustomText
            color={colors.black}
            text={
              "Want to take a break without losing all you data? Tap logout and Log back in whenever you’re ready."
            }
            size={18}
            lineHeight={25}
            fontWeight={"400"}
          />
        </View>

        <Spacer height={40} />

        <CustomButton
          notRequiredShadow
          onPress={()=>navigation.navigate("SurveyScreen")}
          text={"Support"}
          bgColor={colors.white}
          textColor={colors.secondary}
          fontSize={16}
          fontWeight={"600"}
          //   height={40}
        />
        <Spacer height={20} />

        <CustomButton
          notRequiredShadow
          text={"Logout"}
          bgColor={colors.white}
          textColor={colors.secondary}
          fontSize={16}
          fontWeight={"600"}
          //   height={40}
        />
      </View>

      <View style={{padding:20}}>
        <CustomButton
          notRequiredShadow
          onPress={()=>navigation.navigate("SurveyScreen")}
          text={"Delete Account"}
        //   bgColor={colors.white}
        //   textColor={colors.secondary}
          fontSize={16}
          fontWeight={"600"}
          //   height={40}
        />

        </View>
    </SafeAreaView>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  codeFieldRoot: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 80,
    gap: 10,
  },
  codeFieldCell: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 60,
    borderWidth: 1.5,
    borderRadius: 20,
    // borderRadius: 12,
  },
});
