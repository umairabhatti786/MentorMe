import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { appStyles } from "../../../utils/appStyles";
  import CustomHeader from "../../../components/CustomHeader";
  import { Spacer } from "../../../components/Spacer";
  import { images } from "../../../assets/images";
  import CustomText from "../../../components/CustomText";
  import { colors } from "../../../utils/colors";

  
  const ActiveUser = ({navigation,img}) => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    
    return (
        <View style={{width:75,height:75,borderRadius:999,overflow:"hidden"}}>

            <Image
            source={img}
            style={{width:"100%",height:"100%"}}
            />

        </View>
    
    );
  };
  
  export default ActiveUser;
  
  const styles = StyleSheet.create({});
  