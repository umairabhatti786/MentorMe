import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";



const CustomInput = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  source,
  props,
  isCenter,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  color,
  maxLength,
  leftImage,
  rightImage,
  imgWidth,
  imgHeigth,
}) => {
  return (
    <View style={{ ...props,marginTop:20 }}>
      <View style={{ 
        flexDirection: "row" ,
        alignItems:"center",
         borderColor:colors.halfWhite,
         backgroundColor:colors.white,
         borderWidth: 1,
         justifyContent: "space-between",
         paddingHorizontal: 20,
         borderRadius:17,
         width:"100%",
         height:55,
    }}>
         {leftImage && (
            <View
              activeOpacity={0.6}
              style={{ justifyContent: "center", alignItems: "center"}}
            >
              <Image
                source={leftImage}
                resizeMode="contain"
                style={{
                  width: imgWidth||  22,
                  height: imgHeigth  ||22,
                  
                }}
              />
            </View>
          )}



          <View style={{ flex: 1,marginHorizontal:10 }}>
            <TextInput
              value={value}
              editable={editable}
              style={{
                fontSize: 14,
                height: 50,
                color: color || colors.black,
                fontFamily:"Urbanist-SemiBold",
                fontWeight:"500",
                ...(isCenter && { alignSelf: "center" }),
              }}
              placeholder={placeholder}
              placeholderTextColor={colors.black}
              keyboardType={keyboard}
              maxLength={maxLength}
              secureTextEntry={isPassword || false}
              onChangeText={onChangeText}
              onBlur={onBlur}
              autoCapitalize="none"
            />
          </View>
          {rightImage && (
            <TouchableOpacity
              onPress={onShowPassword}
              activeOpacity={0.6}
              disabled={!onShowPassword}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                source={rightImage}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          )}
    
      </View>
    
      {error && (
        <View
          style={{
            alignItems: "flex-end",
            marginTop:3
          }}
        >
          <CustomText
          size={11}
           text={error} color={"red"} />
        </View>
      )}
    </View>
  );
};
export default CustomInput;
