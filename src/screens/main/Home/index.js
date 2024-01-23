import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import strings from "../../../utils/strings";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import { imagesArray } from "../../../utils/DummyData";
import ToggleSwitch from "toggle-switch-react-native";
import { windowHeight, windowWidth } from "../../../utils/Commons";
import { Modalize } from "react-native-modalize";
import FilterModal from "./FilterModal";
import AccountApprovalModal from "./AccountApprovalModal";

const Home = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [hideFilterModal,setHideFilterModal]=useState(false)
  const [approvalModal,setApprovalModal]=useState(false)

  const onCloseModal = () => {
    setHideFilterModal(!hideFilterModal);
  };

  return (
    <>
     <SafeAreaView style={[styles.container, { paddingTop: 10 }]}>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
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
          <TouchableOpacity 
          onPress={()=>{
            setHideFilterModal(true)

          }}
          activeOpacity={0.6}>
            <Image source={images.filter} />
          </TouchableOpacity>
        </View>
        <Swiper
          paginationStyle={styles.pagination}
          showsButtons={false}
          dotStyle={styles.SwiperDotStyle}
          activeDotStyle={styles.SwiperActiveDot}
        >
          {imagesArray?.map((item, index) => {
            return (
              <View key={index} style={styles.swiper}>
                <View style={styles.switch}>
                  <View style={{ alignSelf: "flex-end" }}>
                    <ToggleSwitch
                      isOn={isEnabled}
                      onColor={colors.white}
                      offColor={colors.grey100}
                      thumbOnStyle={{ backgroundColor: colors.secondary }}
                      size="small"
                      onToggle={toggleSwitch}
                    />
                  </View>
                  <CustomText
                    color={colors.white}
                    size={16}
                    fontWeight={"600"}
                    text={strings.aimatch}
                  />
                </View>
                <View style={{ height: windowHeight / 1.46 }}>
                  <Image style={styles.image} source={item?.image} />
                </View>
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


    </SafeAreaView>
    <FilterModal
    modalVisible={hideFilterModal}
    onCloseModal={onCloseModal}

    />
    <AccountApprovalModal
    modalVisible={approvalModal}
    />
    </>
   
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    borderRadius: 40,
    width: "100%",
    height: "100%",
  },
  swiper: {
    alignSelf: "center",
    width: windowWidth / 1.1,
  },
  pagination: { position: "absolute", top: "-90%" },
  switch: { position: "absolute", zIndex: 1, right: 22, top: 12 },
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
    bottom: "-14%",
    alignSelf: "center",
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
