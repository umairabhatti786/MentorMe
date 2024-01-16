import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../utils/colors";
import Swiper from "react-native-swiper";
import { onboardingData } from "../../../utils/DummyData";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import { windowHeight, windowWidth } from "../../../utils/Commons";
import strings from "../../../utils/strings";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const next = () => {
    if (index <= 1) {
      setIndex((prevCount) => prevCount + 1);
    } else {
      navigation.replace(strings.tabs);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        loop={false}
        showsButtons={false}
        index={index}
        scrollEnabled
        dotStyle={styles.SwiperDotStyle}
        onIndexChanged={(index) => setIndex(index)}
        activeDotStyle={styles.SwiperActiveDot}
      >
        {onboardingData?.map((item, index) => {
          return (
            <View key={index} style={styles.contentContainer}>
              {windowHeight < 750 ? (
                <View style={styles.imageView}>
                  <Image style={styles.image} source={item?.image} />
                </View>
              ) : (
                <Image source={item?.image} />
              )}
              <CustomText
                size={25}
                fontWeight={"600"}
                style={styles.heading}
                text={item?.heading}
              />
              <CustomText
                color={colors.grey300}
                size={15}
                lineHeight={20}
                fontWeight={"400"}
                style={styles.desc}
                text={item?.desc}
              />
            </View>
          );
        })}
      </Swiper>
      <CustomButton
        onPress={next}
        text={strings.next}
        fontWeight={"700"}
        width={windowWidth / 1.1}
        style={styles.button}
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  SwiperDotStyle: {
    backgroundColor: colors.grey200,
  },
  SwiperActiveDot: {
    backgroundColor: colors.secondary,
    width: 30,
    height: 7,
  },
  heading: {
    textAlign: "center",
    marginTop: "15%",
  },
  desc: {
    textAlign: "center",
    marginTop: 7,
  },
  contentContainer: {
    alignItems: "center",
    marginTop: "20%",
    paddingHorizontal: 40,
  },
  button: {
    marginBottom: 20,
    marginTop: 10,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  imageView: { height: windowHeight / 3, width: windowWidth / 1.3 },
});
