import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { Spacer } from "../../../components/Spacer";
  import CustomText from "../../../components/CustomText";
  import { colors } from "../../../utils/colors";
  import CustomView from "../../../components/CustomView";
  import CustomLine from "../../../components/CustomLine";
  import CustomButton from "../../../components/CustomButton";

  
  const RewindContainer = ({ navigation,month,amount }) => {
    return (
        <CustomView width={"31%"} paddingVertical={10} borderRadius={20}>
        <View style={{ alignItems: "center" }}>
          <CustomText
            color={colors.black}
            text={month || "6"}
            size={27}
            fontWeight={"700"}
          />
          <CustomText
            color={colors.black}
            text={"Months"}
            size={17}
            style={{ marginVertical: 5 }}
            fontWeight={"600"}
          />
          <CustomLine height={1} />

          <CustomText
            color={colors.lightBlack}
            text={"Unlimited Rewinds"}
            lineHeight={22}
            size={15}
            style={{ marginVertical: 5, textAlign: "center" }}
            fontWeight={"400"}
          />

          <Spacer height={10} />

          <CustomButton
            notRequiredShadow
            text={amount || "For $05"}
            width={70}
            fontSize={12}
            fontWeight={"700"}
            height={32}
          />
          <Spacer height={5} />

          <CustomText
            color={colors.lightBlack}
            text={"per month"}
            size={13}
            style={{ marginVertical: 5, textAlign: "center" }}
            fontWeight={"400"}
          />
        </View>
      </CustomView>
   
    );
  };
  
  export default RewindContainer;
  
  const styles = StyleSheet.create({});
  