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
  import Modal from 'react-native-modal';
  import LottieView from 'lottie-react-native';

  
  const AccountApprovalModal = ({ modalVisible, handelModal }) => {
    const [isEnabled, setIsEnabled] = useState(true);
  
    return (

        <Modal isVisible={modalVisible} onBackdropPress={handelModal}
        style={{alignItems:"center"}}
        >
            <View style={{width:"85%",height:450,backgroundColor:colors.white,borderRadius:40,alignItems:"center",padding:20}}>
            <Spacer height={20}/>

                <Image
                source={images.protect}
                style={{width:200,height:150,}}
                resizeMode="contain"
                />
            <Spacer height={40}/>

<CustomText
                      color={colors.secondary}
                      size={22}
                      fontWeight={"700"}
                      text={"Congratulations!"}
                    />


<Spacer height={20}/>

<CustomText
                      color={colors.black}
                      size={15}
                      style={{textAlign:"center",marginHorizontal:10}}
                      lineHeight={25}
                      fontWeight={"400"}
                      text={"Your account is ready to use. You will be redirected to the Home page in a few seconds"}
                    />

<LottieView 
 style={{height: 120,width:120}}
 speed={1.2}
source={require('../../../assets/loader/loader.json')} autoPlay  />


            </View>
        
      </Modal>
   
    );
  };
  
  export default AccountApprovalModal;
  
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
  