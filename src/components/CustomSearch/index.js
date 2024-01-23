import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/appStyles";
import CustomText from "../CustomText";
import { images } from "../../assets/images";
import { Spacer } from "../Spacer";

const CustomSearch = ({}) => {
  return (

    <View
    style={{
      ...appStyles.row,
      height: 55,
      backgroundColor:colors.grey400,
      paddingHorizontal:15,
      borderRadius:15,

      
    }}>
         <TouchableOpacity
  activeOpacity={0.6}
    style={{
        width:20,height:20
    
    }}>
    <Image style={{ width: "100%", height: "100%",tintColor:colors.grey500 }}
    resizeMode="contain"
     source={images.search} />
  </TouchableOpacity>
  <View style={{flex:1,paddingHorizontal:10}}>
      <TextInput
      style={{fontSize:17,fontFamily:"SF-Compact-Display-Medium"}}
      placeholder="Search"
      />

  </View>



    </View>
   
  );
};
export default CustomSearch;
