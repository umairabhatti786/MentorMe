import {
    Pressable,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    Image
  } from "react-native";
  import { colors } from "../../utils/colors";
  import CustomText from "../CustomText";
  
  const AuthBotton = ({
    onPress,
    width,
    height,
    borderRadius,
    style,
    bgColor,
    disable,
    img
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disable}
        activeOpacity={0.9}
        style={{
          ...style,
          width: width || 90,
          height: height || 60,
          backgroundColor: bgColor || colors.white,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: borderRadius || 20,
          borderWidth: 1,
          borderColor:colors.halfWhite,
        
        }}
      >

<Image
            resizeMode="contain"
            style={{ width: 25, height: 25,  }}
            source={img}
          />
        
        
      </TouchableOpacity>
    );
  };
  export default AuthBotton;
  