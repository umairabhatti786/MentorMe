import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import { images } from "../../assets/images";




const Checkbox = ({ isChecked, setIsChecked }) => {
  return (
    <TouchableOpacity
      style={{ height: 30, width: 30, justifyContent: "center" }}
      activeOpacity={0.6}
      onPress={() => {
        setIsChecked(!isChecked);
      }}
    >
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius:8,
          backgroundColor: colors.secondary,
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
        }}
      >
        {isChecked && (
          <Image
            resizeMode="contain"
            style={{ width: 12, height: 12, tintColor: colors.white }}
            source={images.tick}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
export default Checkbox;
