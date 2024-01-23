import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { appStyles } from "../../../utils/appStyles";
import CustomHeader from "../../../components/CustomHeader";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import CustomButton from "../../../components/CustomButton";
import { BottomSheet } from "react-native-btr";
import CustomLine from "../../../components/CustomLine";
import CustomInput from "../../../components/CustomInput";

const FilterModal = ({ modalVisible, onCloseModal }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <BottomSheet
      visible={modalVisible}
      onBackButtonPress={onCloseModal}
      onBackdropPress={onCloseModal}>
      <View
        flexDirection={"column"}
        backgroundColor={colors.offWhite}
        alignSelf="center"
        paddingHorizontal={20}
        height={"75%"}
        width={"100%"}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        overflow="hidden">
        <Spacer height={10} />

        <View
          style={{
            width: 50,
            height: 3.5,
            backgroundColor: "#dee2e6",
            alignSelf: "center",
            borderRadius: 10,
          }}
        />

        <CustomText
          color={colors.black}
          size={23}
          style={{ textAlign: "center", marginVertical: 20 }}
          fontWeight={"600"}
          text={"Filter"}
        />
        <CustomLine />

        <CustomText
          color={colors.black}
          size={20}
          style={{ marginVertical: 20 }}
          fontWeight={"600"}
          text={"Gender"}
        />
        <View style={appStyles.justifyRow}>
          <CustomButton
            notRequiredShadow
            width={110}
            height={45}
            fontWeight={"600"}
            text={"Male"}
          />
          <CustomButton
            notRequiredShadow
            width={110}
            bgColor={colors.white}
            textColor={colors.secondary}
            height={45}
            fontWeight={"600"}
            text={"Female"}
          />
          <CustomButton
            notRequiredShadow
            width={110}
            bgColor={colors.white}
            textColor={colors.secondary}
            height={45}
            fontWeight={"600"}
            text={"Random"}
          />
        </View>

        {/* <Spacer height={10}/> */}
        <CustomText
          color={colors.black}
          size={20}
          style={{ marginVertical: 15 }}
          fontWeight={"600"}
          text={"Role"}
        />

        <View style={appStyles.justifyRow}>
          <CustomButton
            notRequiredShadow
            width={110}
            bgColor={colors.white}
            textColor={colors.secondary}
            height={45}
            fontWeight={"600"}
            text={"Mentor"}
          />
          <CustomButton
            notRequiredShadow
            width={110}
            height={45}
            fontWeight={"600"}
            text={"Mentee"}
          />

          <CustomButton
            notRequiredShadow
            width={110}
            bgColor={colors.white}
            textColor={colors.secondary}
            height={45}
            fontWeight={"600"}
            text={"Random"}
          />
        </View>
        <CustomText
          color={colors.black}
          size={20}
          style={{ marginVertical: 15 }}
          fontWeight={"600"}
          text={"Age"}
        />

        <Spacer height={30} />

        <CustomText
          color={colors.black}
          size={20}
        //   style={{ marginVertical: 5 }}
          fontWeight={"600"}
          text={"Location"}
        />

        <CustomInput
          placeholder={"United States"}
          rightImage={images.location}
   
        />

<Spacer height={15} />

<CustomLine />
<Spacer height={15} />


<View style={appStyles.justifyRow}>


<CustomButton
            notRequiredShadow
            width={"45%"}
            bgColor={colors.white}
            textColor={colors.secondary}
            height={55}
            borderColor={colors.grey400}
            fontWeight={"600"}
            text={"Reset"}
          />

<CustomButton
            // notRequiredShadow
            width={"45%"}
            // bgColor={colors.}
            // textColor={colors.secondary}
            height={50}
            fontWeight={"600"}
            text={"Apply"}
          />

</View>

      </View>
    </BottomSheet>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  imgContainer: {
    width: 160,
    height: 160,
    borderRadius: 999,
    backgroundColor: colors.grey400,
    alignItems: "center",
    justifyContent: "center",
  },
});
