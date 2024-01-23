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
import RewindContainer from "./RewindContainer";

const RewindAndBoost = ({ navigation }) => {
    const [isActive, setIsActive] = useState(0);

  return (
    <SafeAreaView style={appStyles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 20 }}>
          <CustomHeader
            //   isBack
            isRight
            navigation={navigation}
            text={"Rewind & Boost"}
          />

          <Spacer height={40} />
          <TopBar
          setIsActive={setIsActive}
          isActive={isActive}

            navHeight={1.5}
            nav1="Rewind"
            nav2={"Boost"}
            paddingHorizontal={40}
            navWidth={100}
            mainPadding={60}
          />
          <Spacer height={40} />
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 999,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.secondary,
              alignSelf: "center",
            }}>
                <Image style={{width:30,height:30}}
                source={isActive==0?  images.swap:images.starIcon}
                />

            </View>

          <Spacer height={40} />

          <View style={appStyles.justifyRow}>
            <RewindContainer />
            <RewindContainer month={"3"} amount="For $10" />
            <RewindContainer month={"1"} amount="For $3" />
          </View>

          <Spacer height={30} />

          <CustomText
            color={colors.black}
            text={"This is recurring subscription that you can cancel anytime."}
            size={17}
            lineHeight={27}
            style={{ marginVertical: 5, textAlign: "center" }}
            fontWeight={"400"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RewindAndBoost;

const styles = StyleSheet.create({});
