import {
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";

const CustomButton = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  elevation,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  notRequiredShadow,
  disable,
  isLoading,
  fontWeight,
  shadowColor
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.9}
      style={{
        ...style,
        width: width || "100%",
        height: height || 55,
        backgroundColor: bgColor || colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: borderRadius || 40,
        elevation: elevation,
        borderWidth: 2,
        borderColor: borderColor || colors.secondary,
        shadowColor:shadowColor ||  colors.secondary,
        shadowOffset: { width: 3, height: 7 },
        shadowOpacity: notRequiredShadow ? 0 : 0.2,
        shadowRadius: 5,
      }}
    >
      {isLoading ? (
        <>
          <ActivityIndicator size={"large"} color={colors.white} />
        </>
      ) : (
        <CustomText
          text={text}
          color={textColor || colors.white}
          size={17}
          fontFam={fontFam || "Urbanist-Regular"}
          fontWeight={fontWeight}
        />
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;
