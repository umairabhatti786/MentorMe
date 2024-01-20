import { Image, Text,TouchableOpacity,View } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/appStyles";
import CustomText from "../CustomText";
import { images } from "../../assets/images";
import { Spacer } from "../Spacer";

const CustomHeader = ({text,isRight,isBack,onBack}) => {
  return (
    <View style={{...appStyles.justifyRow,}}>

        <View style={appStyles.row}>
            {
                isBack&&(
                    <>
                      <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={onBack}
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
        size={20}
        fontWeight={"700"}
        />

        </View>
       
        {
            isRight&&(
                <View style={appStyles.row}>

                <TouchableOpacity>
                    <Image
                    style={{width:22,height:22}}
                    source={images.search}
                    />
    
                </TouchableOpacity>
                <Spacer width={20}/>
                <TouchableOpacity>
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
