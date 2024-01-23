import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { appStyles } from "../../utils/appStyles";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { Spacer } from "../Spacer";

const TopBar = ({
  borderWidth,
  paddingHorizontal,
  paddingVertical,
  children,
  nav1,
  nav2,
  navHeight,
  navWidth,
  mainPadding,
  setIsActive,
  isActive
}) => {
  return (
    <View>
      <View style={{ ...appStyles.justifyRow, paddingHorizontal:mainPadding ||50 }}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => setIsActive(0)}>
          <CustomText
            color={isActive==0?  colors.secondary:colors.grey300}
            text={ nav1 || "FAQ"}
            size={18}
            fontWeight={"500"}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} onPress={() => setIsActive(1)}>
          <CustomText
            color={isActive==1?  colors.secondary:colors.grey300}
            text={ nav2|| "Support"}
            size={18}
            fontWeight={"500"}
          />
        </TouchableOpacity>
      </View>

      <Spacer height={15} />
      <View
        style={{
          width: "100%",
          height:navHeight || 2,
          backgroundColor: colors.halfWhite,
          borderRadius: 30,
          paddingHorizontal:paddingHorizontal 

        }}>
            {isActive==0?(
                <View
                style={{
                  width: navWidth ||"50%",
                  height: navHeight ||3,
                  backgroundColor: colors.secondary,
                  borderRadius: 30,
                }}>
      
                </View>

            ):(
                <View
          style={{
            width: navWidth ||"50%",
            height:navHeight || 3,
            backgroundColor: colors.secondary,
            borderRadius: 30,
            alignSelf:"flex-end"
          }}>

          </View>

            )
        }
        
      </View>
    </View>
  );
};
export default TopBar;
