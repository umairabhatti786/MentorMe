import { Image, Text,TouchableOpacity,View } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/appStyles";
import CustomText from "../CustomText";
import { images } from "../../assets/images";
import { Spacer } from "../Spacer";
import ToggleSwitch from "toggle-switch-react-native";

const HorizontalContainer = ({text,leftImage,color,isEnabled,toggleSwitch,isSwitch,onPress,width,height}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
     style={{...appStyles.justifyRow,}}>
        <View style={appStyles.row}>

        <Image
                style={{width:width|| 23,height:height || 23}}
                source={leftImage}
                resizeMode="contain"
                />
                <Spacer width={20}/>
        <CustomText
        color={ color|| colors.black}
        text={text}

        size={17}
        fontWeight={"500"}
        />

        </View>
        {
            isSwitch?(
                <ToggleSwitch
                isOn={isEnabled}
                onColor={colors.halfWhite}
                offColor={colors.halfWhite}
                thumbOnStyle={{ backgroundColor: colors.secondary }}
               
                onToggle={toggleSwitch}
              />
            ):(
                <View style={appStyles.row}>
                    {
                        text=="Language"&&(
                            <CustomText
                            color={ colors.black}
                            text={"English (US)"}
                    
                            size={17}
                            fontWeight={"500"}
                            />

                        )
                    }
         

           
                <Spacer width={20}/>
                <TouchableOpacity>
                    <Image
                    style={{width:20,height:20}}
                    source={images.next}
                    />
    
                </TouchableOpacity>
    
            </View>

            )
        }
       

    

    </TouchableOpacity>
  );
};
export default HorizontalContainer;
