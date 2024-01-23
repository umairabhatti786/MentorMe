import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/appStyles";
import CustomText from "../CustomText";
import { images } from "../../assets/images";
import { Spacer } from "../Spacer";

const MessageSender = ({}) => {
  return (
    <View style={{ ...appStyles.justifyRow }}>
      <View
        style={{
          ...appStyles.row,
          height: 55,
          flex: 1,
          backgroundColor:"#FAFAFA",
          paddingHorizontal:15,
          borderRadius:15,
          marginRight:10

          
        }}>
             <TouchableOpacity
      activeOpacity={0.6}
        style={{
            width:17,height:17
        
        }}>
        <Image style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
         source={images.emoji} />
      </TouchableOpacity>
      <View style={{flex:1,paddingHorizontal:10}}>
          <TextInput
          style={{fontSize:15,fontFamily:"SF-Compact-Display-Medium"}}
          placeholder="Type a message ..."
          />

      </View>

      <TouchableOpacity
      activeOpacity={0.6}
        style={{
            width:17,height:17
        
        }}>
        <Image style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
         source={images.attach} />
      </TouchableOpacity>
      <Spacer width={15}/>

      <TouchableOpacity
      activeOpacity={0.6}
        style={{
            width:17,height:17
        
        }}>
        <Image style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
         source={images.camera} />
      </TouchableOpacity>

        </View>
      <TouchableOpacity
      activeOpacity={0.6}
        style={{
          width: 55,
          height: 55,
          borderRadius: 9999,
          backgroundColor: colors.secondary,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Image style={{ width: 20, height: 20 }}
        resizeMode="contain"
         source={images.voice} />
      </TouchableOpacity>
    </View>
  );
};
export default MessageSender;
