import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";

const CustomView = ({borderWidth,paddingHorizontal,paddingVertical,children,borderRadius,borderColor,noShadow,onPress,height,width}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
    disabled={!onPress}
      style={{ paddingVertical: paddingVertical ||20,
        paddingHorizontal:paddingHorizontal || 20,
         width:width || "100%",
          backgroundColor: colors.white,
          height:height,

      borderRadius:borderRadius || 30,
      borderWidth:borderWidth ||2.5,
      borderColor:borderColor || colors.secondary,
      shadowColor:  colors.lightGray,
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity:noShadow?0:0.1,
      shadowRadius:   3,
    
      
     }}
    >
        {children}
        </TouchableOpacity>
  );
};
export default CustomView;
