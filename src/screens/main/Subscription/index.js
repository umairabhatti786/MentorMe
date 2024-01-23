import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
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

const Subscription = () => {
  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, padding: 20 }}>
        <CustomHeader isRight={true} text={"Subscription"} />

        <Spacer height={40} />
        <CustomText
          color={colors.secondary}
          text={"MentorMe"}
          style={{ textAlign: "center" }}
          size={40}
          fontWeight={"700"}
        />

        <Spacer height={10} />
        <CustomText
          color={colors.lightBlack}
          lineHeight={25}
          text={
            "MentoEnjoy unlimited swiping & like, without restrictions, & without adsrMe"
          }
          style={{ textAlign: "center" }}
          size={17}
          fontWeight={"400"}
        />
        <Spacer height={30} />
        <CustomView>
          <View style={appStyles.row}>
            <Image style={{ width: 25, height: 25 }} source={images.smile} />
            <Spacer width={10} />
            <CustomText
              color={colors.black}
              text={"Free"}
              size={25}
              fontWeight={"600"}
            />
          </View>
          <Spacer height={10} />

          <CustomLine />

          <View style={{ ...appStyles.row, marginVertical: 10 }}>
            <Image
              style={{ width: 20, height: 20 }}
              source={images.check}
              resizeMode="contain"
            />
            <Spacer width={20} />

            <CustomText
              color={colors.lightBlack}
              text={"limited Swiping & Likes"}
              size={18}
              fontWeight={"400"}
            />
          </View>
          <View style={{ ...appStyles.row, marginVertical: 10 }}>
            <Image
              style={{ width: 20, height: 20 }}
              source={images.check}
              resizeMode="contain"
            />
            <Spacer width={20} />

            <CustomText
              color={colors.lightBlack}
              text={"Zero Super Likes a Day"}
              size={18}
              fontWeight={"400"}
            />
          </View>
          <View style={{ ...appStyles.row, marginVertical: 10 }}>
            <Image
              style={{ width: 20, height: 20 }}
              source={images.check}
              resizeMode="contain"
            />
            <Spacer width={20} />

            <CustomText
              color={colors.lightBlack}
              text={"No Rewinds, No AI Matching"}
              size={18}
              fontWeight={"400"}
            />
          </View>
          <View style={{ ...appStyles.row, marginVertical: 10 }}>
            <Image
              style={{ width: 20, height: 20 }}
              source={images.check}
              resizeMode="contain"
            />
            <Spacer width={20} />

            <CustomText
              color={colors.lightBlack}
              text={"Restrictions & Ads"}
              size={18}
              fontWeight={"400"}
            />
          </View>
        </CustomView>

        <Spacer height={20} />
        <CustomView>
          <View style={appStyles.justifyRow}>
            <View style={appStyles.row}>
              <Image style={{ width: 25, height: 25 }} source={images.crown} />
              <Spacer width={10} />
              <CustomText
                color={colors.black}
                text={"Standard"}
                size={25}
                fontWeight={"600"}
              />
            </View>
            <CustomButton
              notRequiredShadow
              text={"Upgrade in $25"}
              width={130}
              fontSize={14}
              fontWeight={"700"}
              height={40}
            />
          </View>
        </CustomView>


        <Spacer height={20} />
        <CustomView>
          <View style={appStyles.justifyRow}>
            <View style={appStyles.row}>
              <Image style={{ width: 30, height: 30 }} source={images.premium} />
              <Spacer width={10} />
              <CustomText
                color={colors.black}
                text={"Premium"}
                size={25}
                fontWeight={"600"}
              />
            </View>
            <CustomButton
              notRequiredShadow
              text={"Upgrade in $45"}
              width={130}
              fontSize={14}
              fontWeight={"700"}
              height={40}
            />
          </View>
        </CustomView>

      </View>
    </SafeAreaView>
  );
};

export default Subscription;

const styles = StyleSheet.create({});
