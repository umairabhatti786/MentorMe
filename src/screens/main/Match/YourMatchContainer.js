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
  const YourMatchContainer = ({navigation,img,name,des}) => {
 
    
    return (
        <View style={{alignItems:"center",justifyContent:"center"}}>
             <Image
    
        style={{width:windowWidth/2.8,height:180,overflow:"hidden",alignItems:"center"}}
        source={img}
       />

                <View style={{marginVertical:8,alignItems:"center"}}>

                <CustomText
               color={colors.black}
               text={name}
               size={18}
               fontWeight={"700"}
             />
             <Spacer height={5}/>
                       <CustomText
               color={"#C1C1C1"}
               text={des}
               size={13}
               fontWeight={"400"}
             />

                </View>

         




          

           {/* <Image
           source={img}
           style={{width:"100%",height:"100%"}}
           /> */}

  

        </View>
       
    
    );
  };
  
  export default YourMatchContainer;
  
  const styles = StyleSheet.create({});
  