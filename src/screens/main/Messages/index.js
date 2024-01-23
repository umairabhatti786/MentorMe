import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { appStyles } from "../../../utils/appStyles";
import CustomHeader from "../../../components/CustomHeader";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import CustomLine from "../../../components/CustomLine";
import ChatUserList from "../../../components/ChatUserList";
import MessageSender from "../../../components/MessageSender";
import MessageContainer from "../../../components/MessageContainer";

const Messages = ({ navigation, route }) => {
  const data = route?.params?.data;

  const chatList = [
    {
      message: "Hi, good evening Brain Chesky ... 😁😁",
      time: "20.00",
      date: "Today",
      from: true,
    },
    {
      message: "Hey there! Excited to start this mentoring journey with you.",
      time: "20.00",
      from: true,
    },
    { message: "Hello, evening too Shandontoliver", time: "20.01" },
    {
      message: "Hi! Thanks for connecting. What are your primary goals? 🤗🤗",
      time: "20.01",
    },
  ];
  const renderChatList = ({ item, index }) => {
    return (
      <>
        <TouchableOpacity activeOpacity={0.6} style={{ marginBottom: 25 }}>
            {
                item.date&&(
                    <View
                    style={{
                      backgroundColor: "#75757512",
                      padding: 10,
                      width: 70,
                      height: 35,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 10,
                      alignSelf: "center",
                      marginBottom:20
                    }}>
                    <CustomText text={"Today"} fontWeight="500" size={14} />
                  </View>

                )
            }
         

          <MessageContainer item={item} />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ padding: 20 }}>
        <CustomHeader
          textSize={22}
          isBack
          isRight
          navigation={navigation}
          text={data?.name}
          isCalling
        />

        <Spacer height={10} />

        <View style={{ height: Platform.OS=="ios"? "89%":"88%" }}>
          <FlatList
            data={chatList}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            contentContainerStyle={{ marginTop: 20 }}
            renderItem={renderChatList}
          />
        </View>

        <MessageSender />

      </View>
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({});
