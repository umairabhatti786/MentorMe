import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
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

const HelpCenter = ({ navigation }) => {
  const [isActive, setIsActive] = useState(0);

  return (
       <SafeAreaView style={appStyles.main}>
             <ScrollView
             showsVerticalScrollIndicator={false}
             >

      <View style={{ flex: 1, padding: 20 }}>
        <CustomHeader
          isBack
          isRight
          navigation={navigation}
          text={"Help Center"}
        />

        <Spacer height={40} />
        <TopBar 
        isActive={isActive}
        setIsActive={setIsActive}
        />
        <Spacer height={25} />

        <CustomSearch />
        <Spacer height={30} />
        <CustomView borderWidth={-1}>
          <View style={appStyles.justifyRow}>
            <CustomText
              color={colors.black}
              text={"How to swipe & match?"}
              size={18}
              fontWeight={"600"}
            />
            <Image
              style={{ width: 14, height: 14 }}
              resizeMode="contain"
              source={images.heart}
            />
          </View>
          <Spacer height={15} />

          <CustomLine height={1} />
          <Spacer height={15} />

          <CustomText
            color={colors.black}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            size={15}
            lineHeight={25}
            fontWeight={"400"}
          />
        </CustomView>

        <Spacer height={20} />

        <CustomView borderWidth={-1} borderRadius={22}>
          <View style={appStyles.justifyRow}>
            <CustomText
              color={colors.black}
              text={"How do I edit my profile?"}
              size={18}
              fontWeight={"600"}
            />
            <Image
              style={{ width: 14, height: 14 }}
              resizeMode="contain"
              source={images.heart}
            />
          </View>
        </CustomView>

        <Spacer height={20} />

        <CustomView borderWidth={-1} borderRadius={22}>
          <View style={appStyles.justifyRow}>
            <CustomText
              color={colors.black}
              text={"How to get more likes?"}
              size={18}
              fontWeight={"600"}
            />
            <Image
              style={{ width: 14, height: 14 }}
              resizeMode="contain"
              source={images.heart}
            />
          </View>
        </CustomView>

        <Spacer height={20} />

        <CustomView borderWidth={-1} borderRadius={22}>
          <View style={appStyles.justifyRow}>
            <CustomText
              color={colors.black}
              text={"How to get more matches?"}
              size={18}
              fontWeight={"600"}
            />
            <Image
              style={{ width: 14, height: 14 }}
              resizeMode="contain"
              source={images.heart}
            />
          </View>
        </CustomView>

        <Spacer height={20} />

        <CustomView borderWidth={-1} borderRadius={22}>
          <View style={appStyles.justifyRow}>
            <CustomText
              color={colors.black}
              text={"I’m out of profiles to swipe through?"}
              size={18}
              fontWeight={"600"}
            />
            <Image
              style={{ width: 14, height: 14 }}
              resizeMode="contain"
              source={images.heart}
            />
          </View>
        </CustomView>

        <Spacer height={20} />

<CustomView
borderWidth={-1}
borderRadius={22}


>
  <View style={appStyles.justifyRow}>
  <CustomText
      color={colors.black}
      text={"How not to miss new message?"}
      size={18}
      fontWeight={"600"}
    />
    <Image style={{ width: 14, height: 14 }} 
    resizeMode="contain"
    source={images.heart} />
   
  </View>



 

</CustomView>
      </View>
      </ScrollView>

    </SafeAreaView>

   
  );
};

export default HelpCenter;

const styles = StyleSheet.create({});
