import { Text } from "react-native";
import { colors } from "../../utils/colors";

const CustomText = ({ color, size, text, style, fontWeight, lineHeight }) => {
  return (
    <Text
      style={[
        {
          color: color || colors.black,
          fontSize: size || 12,
          fontFamily:
            fontWeight && fontWeight <= "400"
              ? "Urbanist-Regular"
              : fontWeight == "500"
              ? "Urbanist-Medium"
              : "Urbanist-SemiBold",
          fontWeight: fontWeight || "400",
          lineHeight: lineHeight,
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
};
export default CustomText;
