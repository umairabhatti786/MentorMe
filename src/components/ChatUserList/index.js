import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { appStyles } from "../../utils/appStyles";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { Spacer } from "../Spacer";

const ChatUserList = ({ navigation, item }) => {
  return (
    <View style={appStyles.justifyRow}>
      <View
        style={{ width: "70%", flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 999,
            overflow: "hidden",
          }}>
          <Image source={item.img} style={{ width: "100%", height: "100%" }} />
        </View>
        <Spacer width={15} />
        <View style={{ width: "80%" }}>
          <CustomText
            color={colors.black}
            text={item.name}
            size={17}
            fontWeight={"700"}
          />
          <Spacer height={7} />
          <CustomText
            color={colors.lightGray}
            text={item.lastMessage}
            size={14}
            fontWeight={"400"}
          />
        </View>
      </View>

      <View
        style={{
          justifyContent: "space-between",
          alignSelf: "flex-end",
          marginBottom: 5,
        }}>
        {item.messageCount && (
          <>
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.secondary,
                alignSelf: "flex-end",
                borderRadius: 999,
              }}>
              <CustomText
                color={colors.white}
                text={item.messageCount}
                size={12}
                fontWeight={"400"}
              />
            </View>

            <Spacer height={7} />
          </>
        )}

        <CustomText
          color={colors.lightGray}
          text={item.time}
          size={14}
          fontWeight={"400"}
        />
      </View>
    </View>
  );
};

export default ChatUserList;

const styles = StyleSheet.create({});
