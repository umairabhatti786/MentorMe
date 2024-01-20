import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React from "react";
  import { Spacer } from "../../../components/Spacer";
  import { images } from "../../../assets/images";
  import CustomText from "../../../components/CustomText";
  import { colors } from "../../../utils/colors";
  import CustomButton from "../../../components/CustomButton";
  
  const PremiumCard = () => {
    return (

        <ImageBackground
        style={{
          width: 400,
          height: 180,
          alignSelf: "center",
          paddingHorizontal: 50,
          paddingTop: 30,
        }}
        source={images.premiumback}
      >
        <View style={{ width: "65%" }}>
          <CustomText
            color={colors.white}
            text={"Enjoy All Benefits!"}
            size={22}
            fontWeight={"700"}
          />
          <Spacer height={10} />

          <CustomText
            color={colors.white}
            text={
              "Enjoy unlimited swiping, like, without restrictions, & without ads"
            }
            size={12}
            fontWeight={"400"}
          />
          <Spacer height={10} />

          <CustomButton
            text={"Get Premium"}
            width={110}
            height={35}
            fontSize={13}
            fontWeight={"500"}
            textColor={colors.secondary}
            bgColor={colors.white}
          />
        </View>
      </ImageBackground>
    
    );
  };
  
  export default PremiumCard;
  
  const styles = StyleSheet.create({});
  