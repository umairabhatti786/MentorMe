import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
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

const SurveyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={appStyles.main}>
        <View style={{ flex: 1, padding: 20 }}>
          <CustomHeader
            isBack
            navigation={navigation}
            text={"Account Deletion"}
          />

          <Spacer height={40} />

          <CustomView borderWidth={-1}>
            <View style={appStyles.justifyRow}>
              <CustomText
                color={colors.black}
                text={"Why do you want to delete your account?"}
                size={18}
                fontWeight={"600"}
              />
            </View>
            <Spacer height={15} />

            <CustomLine height={1} />
            <Spacer height={15} />

            <View style={appStyles.row}>
              <TouchableOpacity style={styles.circle}></TouchableOpacity>
              <Spacer width={10} />
              <CustomText
                color={colors.black}
                text={"The app is not functioning properly."}
                size={15}
                fontWeight={"400"}
              />
            </View>

            <Spacer height={15} />

<View style={appStyles.row}>
  <TouchableOpacity style={styles.circle}></TouchableOpacity>
  <Spacer width={10} />
  <CustomText
    color={colors.black}
    text={"I am unhappy with my experience of this app."}
    size={15}
    fontWeight={"400"}
  />
</View>


<Spacer height={15} />

<View style={appStyles.row}>
  <TouchableOpacity style={styles.circle}></TouchableOpacity>
  <Spacer width={10} />
  <CustomText
    color={colors.black}
    text={"I want to start over a new account."}
    size={15}
    fontWeight={"400"}
  />
</View>


<Spacer height={15} />

<View style={appStyles.row}>
  <TouchableOpacity style={styles.circle}></TouchableOpacity>
  <Spacer width={10} />
  <CustomText
    color={colors.black}
    text={"My account was hacked."}
    size={15}
    fontWeight={"400"}
  />
</View>

<Spacer height={15} />

<View style={appStyles.row}>
  <TouchableOpacity style={styles.circle}></TouchableOpacity>
  <Spacer width={10} />
  <CustomText
    color={colors.black}
    text={"I prefer more privacy."}
    size={15}
    fontWeight={"400"}
  />
</View>

<Spacer height={15} />

<View style={appStyles.row}>
  <TouchableOpacity style={styles.circle}></TouchableOpacity>
  <Spacer width={10} />
  <CustomText
    color={colors.black}
    text={"I just want to take a break."}
    size={15}
    fontWeight={"400"}
  />
</View>


          </CustomView>

          <Spacer height={20} />

          <CustomView 
          height={150}
          borderWidth={-1} borderRadius={22}>
            <View style={appStyles.justifyRow}>
              <CustomText
                color={colors.black}
                text={"Write any message for us:"}
                size={18}
                fontWeight={"600"}
              />
            </View>

            <Spacer height={10} />
            <TextInput
            style={{borderBottomColor:colors.halfWhite,borderBottomWidth:1.5}}
            />


          </CustomView>

          <Spacer height={20} />


         
        </View>
        <View style={{padding:20}}>
        <CustomButton
          notRequiredShadow
          onPress={()=>navigation.navigate("SurveyScreen")}
          text={"Skip"}
          bgColor={colors.white}
          textColor={colors.secondary}
          fontSize={16}
          fontWeight={"600"}
          //   height={40}
        />

        </View>
        


        

<Spacer height={20} />

    </SafeAreaView>
  );
};

export default SurveyScreen;

const styles = StyleSheet.create({
  circle: {
    width: 22,
    height: 22,
    borderRadius: 9999,
    borderWidth: 2.5,
    borderColor: colors.secondary,
  },
});
