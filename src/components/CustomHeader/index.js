import { Image, Text,TouchableOpacity,View } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/appStyles";
import CustomText from "../CustomText";
import { images } from "../../assets/images";
import { Spacer } from "../Spacer";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({text,isRight,isBack,onBack,isCalling,textSize}) => {
    const navigation=useNavigation()
  return (
    <View style={{...appStyles.justifyRow,}}>

        <View style={appStyles.row}>
            {
                isBack&&(
                    <>
                      <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={()=>navigation.goBack()}
                      >
                    <Image
                    resizeMode="contain"
                    style={{width:18,height:18}}
                    source={images.back}
                    />
    
                </TouchableOpacity>
                <Spacer width={15}/>
                    </>
                )
            }
      
        <CustomText
        color={colors.black}
        text={text}
        size={ textSize || 25}
        fontWeight={"700"}
        />

        </View>
       
        {
            isRight&&(
                <View style={appStyles.row}>
                    {
                        isCalling?(
                            <View style={appStyles.row}>
                                 <TouchableOpacity
                                 onPress={()=>navigation.navigate("AudioCall")}
                                 >
                            <Image
                            style={{width:22,height:22}}
                            source={images.call}
                            
                            />
            
                        </TouchableOpacity>
                        <Spacer width={20}/>

                        <TouchableOpacity
                                                         onPress={()=>navigation.navigate("VideoCall")}

                        >
                            <Image
                            style={{width:27,height:27}}
                            source={images.videocall}
                            />
            
                        </TouchableOpacity>
                        {/* <Spacer width={5}/> */}


                            </View>

                        ):(
                            <TouchableOpacity
                            >
                            <Image
                            style={{width:22,height:22}}
                            source={images.search}
                            />
            
                        </TouchableOpacity>

                        )
                    }

              
                <Spacer width={20}/>
                <TouchableOpacity
                activeOpacity={0.6}
                onPress={()=>navigation.navigate("RewindAndBoost")}
                >
                    <Image
                    style={{width:22,height:22}}
                    source={images.info}
                    />
    
                </TouchableOpacity>
    
            </View>

            )
        }

      

    </View>
  );
};
export default CustomHeader;
