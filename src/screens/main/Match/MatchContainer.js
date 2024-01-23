import {
    Dimensions,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React, { useState } from "react";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { Spacer } from "../../../components/Spacer";


const windowWidth=Dimensions.get("window").width
  const MatchContainer = ({navigation,name,des,img}) => {
 
    
    return (
        <ImageBackground
    
         style={{width:windowWidth/1.7,height:300,borderRadius:40,overflow:"hidden",alignItems:"flex-end",justifyContent:"flex-end"}}
         source={img}
         >
             <View style={{width:"100%",height:"40%",justifyContent:"flex-end"}}>
                 <View style={{marginHorizontal:20,marginBottom:30}}>

                 <CustomText
                color={colors.white}
                text={name}
                size={22}
                fontWeight={"700"}
              />
              <Spacer height={5}/>
                        <CustomText
                color={colors.white}
                text={des}
                size={13}
                fontWeight={"400"}
              />

                 </View>

          


             </View>

            {/* <Image
            source={img}
            style={{width:"100%",height:"100%"}}
            /> */}

        </ImageBackground>
    
    );
  };
  
  export default MatchContainer;
  
  const styles = StyleSheet.create({});
  