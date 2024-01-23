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

const AccountApproval = ({ navigation }) => {
  const [isActive, setIsActive] = useState(0);
  return (
    <SafeAreaView style={appStyles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 20 }}>
          <Spacer height={10} />

          <Image
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
            source={images.security}
          />

          <Spacer height={40} />

          <CustomText
            color={colors.black}
            text={
              "Select which contact details should we use to verify you account"
            }
            size={16}
            lineHeight={25}
            style={{ textAlign: "center" }}
            fontWeight={"400"}
          />

          <Spacer height={20} />

          <CustomView
            onPress={() => setIsActive(0)}
            borderRadius={35}
            borderWidth={ isActive==0? 2.5:1}
            borderColor={isActive==0?colors.secondary :colors.halfWhite}
            noShadow>
            <View style={appStyles.row}>
              <View style={styles.smsContainer}>
                <Image
                  style={{ width: 25, height: 25 }}
                  resizeMode="contain"
                  source={images.sms}
                />
              </View>
              <View style={{ marginLeft: 15 }}>
                <CustomText
                  color={colors.grey100}
                  text={"via SMS:"}
                  size={14}
                  fontWeight={"400"}
                />
                <Spacer height={12} />
                <CustomText
                  color={colors.black}
                  text={"+96 352 4672 984"}
                  size={15}
                  fontWeight={"600"}
                />
              </View>
            </View>
          </CustomView>

          <Spacer height={20} />

          <CustomView
           onPress={() => setIsActive(1)}
           borderRadius={35}
           borderWidth={ isActive==1? 2.5:1}
           borderColor={isActive==1?colors.secondary :colors.halfWhite}
            noShadow>
            <View style={appStyles.row}>
              <View style={styles.smsContainer}>
                <Image
                  style={{ width: 25, height: 25, tintColor: colors.secondary }}
                  resizeMode="contain"
                  source={images.email}
                />
              </View>
              <View style={{ marginLeft: 15 }}>
                <CustomText
                  color={colors.grey100}
                  text={"via Email:"}
                  size={14}
                  fontWeight={"400"}
                />
                <Spacer height={12} />
                <CustomText
                  color={colors.black}
                  text={"Shandontoliver@gmail.com"}
                  size={15}
                  fontWeight={"600"}
                />
              </View>
            </View>
          </CustomView>

          <Spacer height={30} />

          <CustomButton
          onPress={()=>navigation.navigate("AccountApprovalSms")}
           fontWeight={"600"} text={"Continue"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountApproval;

const styles = StyleSheet.create({
  smsContainer: {
    width: 75,
    height: 75,
    borderRadius: 999,
    backgroundColor: colors.purple8,
    alignItems: "center",
    justifyContent: "center",
  },
});
