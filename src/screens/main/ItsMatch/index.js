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

const ItsMatch = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ padding: 20, flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            style={{ width: 18, height: 18 }}
            source={images.back}
          />
        </TouchableOpacity>

        <Spacer height={"20%"} />
        <View
          style={{
            ...appStyles.row,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <View
            style={styles.imgContainer}>
            <Image
              style={{ width: "95%", height: "95%", borderRadius: 9999 }}
              source={images.user2}
            />
          </View>

          <View
            style={{...styles.imgContainer,        marginLeft: -50,
            }}>
            <Image
              style={{ width: "95%", height: "95%", borderRadius: 9999 }}
              source={images.avatar}
            />
          </View>
          <View
            style={{
              width: 55,
              height: 55,
              borderRadius: 999,
              backgroundColor: colors.secondary,
              position: "absolute",
              left: "37%",
              borderWidth: 2,
              borderColor: colors.white,
              alignItems:"center",
              justifyContent:"center"
            }}>
                  <CustomText
            color={colors.white}
            text={"M"}
            size={25}
            fontWeight={"800"}
          />

            </View>
        </View>
        <Spacer height={40} />

        <View style={{ alignSelf: "center", alignItems: "center" }}>
          <CustomText
            color={colors.secondary}
            text={"It’s a Match"}
            size={45}
            fontWeight={"900"}
          />
          <Spacer height={10} />

          <CustomText
            color={colors.black}
            text={"Don't keep her waiting, say hello now!"}
            size={17}
            fontWeight={"400"}
          />
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <CustomButton
          onPress={() => navigation.navigate("SurveyScreen")}
          text={"Say Hello"}
          //   bgColor={colors.white}
          //   textColor={colors.secondary}
          fontSize={17}
          fontWeight={"600"}
          //   height={40}
        />
        <Spacer height={20} />

        <CustomButton
          notRequiredShadow
          onPress={() => navigation.navigate("SurveyScreen")}
          text={"Keep Swiping"}
          bgColor={colors.grey400}
          borderWidth={-1}
          textColor={colors.secondary}
          fontSize={17}
          fontWeight={"600"}
          //   height={40}
        />
      </View>

      <Spacer height={20} />
    </SafeAreaView>
  );
};

export default ItsMatch;

const styles = StyleSheet.create({
    imgContainer:{
        width: 160,
        height: 160,
        borderRadius: 999,
        backgroundColor: colors.grey400,
        alignItems: "center",
        justifyContent: "center",
      }

});
