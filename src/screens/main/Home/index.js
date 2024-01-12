import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import strings from "../../../utils/strings";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import { imagesArray } from "../../../utils/DummyData";
import { windowHeight, windowWidth } from "../../../utils/Commons";

const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={images.avatar} />
          <View style={styles.textContainer}>
            <CustomText
              color={colors.grey100}
              size={16}
              text={strings.morning}
            />
            <CustomText
              color={colors.black}
              fontWeight={"700"}
              size={20}
              text={strings.shandontolver}
            />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={images.filter} />
        </TouchableOpacity>
      </View>
      <Swiper
        paginationStyle={styles.pagination}
        showsButtons={false}
        dotStyle={styles.SwiperDotStyle}
        activeDotStyle={styles.SwiperActiveDot}
        style={styles.wrapper}
      >
        {imagesArray?.map((item) => {
          return (
            <View style={styles.swiper}>
              <View style={styles.switch}>
                <Switch
                  trackColor={{ false: colors.grey100, true: colors.white }}
                  thumbColor={isEnabled ? colors.secondary : colors.offWhite}
                  ios_backgroundColor={colors.grey}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                <CustomText
                  color={colors.white}
                  size={16}
                  fontWeight={"600"}
                  text={strings.aimatch}
                />
              </View>
              <Image style={styles.image} source={item?.image} />
              <View style={styles.innerText}>
                <View style={styles.workView}>
                  <CustomText
                    color={colors.white}
                    size={14}
                    fontWeight={"600"}
                    text={item?.work}
                  />
                </View>
                <CustomText
                  style={styles.name}
                  color={colors.white}
                  size={32}
                  fontWeight={"700"}
                  text={item?.name}
                />
                <CustomText
                  style={styles.post}
                  color={colors.white}
                  size={16}
                  fontWeight={"600"}
                  text={item?.post}
                />
                <View style={styles.flexContainer}>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Image source={images.change} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Image source={images.cross} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Image source={images.favorite} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Image source={images.star} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
    padding: 15,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },
  SwiperDotStyle: {
    backgroundColor: colors.white,
  },
  SwiperActiveDot: {
    backgroundColor: colors.secondary,
    width: 20,
    height: 7,
  },
  image: {
    borderRadius: 48,
    width: "100%",
    height: "100%",
  },
  swiper: {
    alignSelf: "center",
    width: windowWidth / 1.1,
    height: windowHeight / 1.42,
  },
  pagination: { position: "absolute", top: "-90%" },
  switch: { position: "absolute", zIndex: 1, right: 15, top: 8 },
  workView: {
    backgroundColor: colors.primaryblur,
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: "center",
  },
  name: {
    marginVertical: 8,
    textAlign: "center",
  },
  post: {
    textAlign: "center",
  },
  innerText: {
    zIndex: 1,
    position: "absolute",
    bottom: "-13%",
    alignSelf: "center",
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
});
