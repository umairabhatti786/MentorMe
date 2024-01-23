import {
  FlatList,
  Image,
  ImageBackground,
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
import CustomButton from "../../../components/CustomButton";
import HorizontalContainer from "../../../components/HorizontalContainer";
import ActiveUser from "./ActiveUser";
import CustomLine from "../../../components/CustomLine";
import ChatUserList from "../../../components/ChatUserList";

const Chats = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const activeUserData = [
    { img: images.user1 },
    { img: images.user2 },
    { img: images.user3 },
    { img: images.user4 },
    { img: images.user5 },
    { img: images.user6 },
    { img: images.user7 },
  ];

  const chatList=[
    {img: images.user1 ,name:"Brian Chesky",lastMessage:"What are your primary goals?",time:"20.00",messageCount:"2"},
    {img: images.user2 ,name:"Warren Buffett",lastMessage:"Wow, this is really epic 👍",time:"18:39",messageCount:"3"},
    {img: images.user3 ,name:"Mary Barra",lastMessage:"Thank you so much andrew 🔥",time:"12:26",},
    {img: images.user4 ,name:"Sanjuanita Ordonez",lastMessage:"Hi! Thanks for connecting.",time:"09:48",},
    {img: images.user5 ,name:"Tim Cook",lastMessage:"I know... I’m trying to get the ...",time:"Dec 20, 2023",},
    {img: images.user6 ,name:"Maryland Winkles",lastMessage:"I appreciate your guidance.",time:"Yesterday",messageCount:"2"},

  ]

  const renderActiveUser = ({ item, index }) => {
    return (
      <>
        <View style={{ marginRight: 10 }}>
          <ActiveUser img={item.img} />
        </View>
      </>
    );
  };

  const renderChatList = ({ item, index }) => {
    return (
      <>
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=>navigation.navigate("Messages",{data:item})}
        style={{ marginBottom: 20 }}>
          <ChatUserList item={item} />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ padding: 20 }}>
        <CustomHeader 
        
        isRight={true} text={"Chats"} />

        <Spacer height={30} />
        <View style={appStyles.justifyRow}>
          <CustomText
            color={colors.black}
            text={"Now Active"}
            size={20}
            fontWeight={"700"}
          />

          <CustomText
            color={colors.secondary}
            text={"See All"}
            size={15}
            fontWeight={"700"}
          />
        </View>
      </View>
      <View style={{ height: 90 }}>
        <FlatList
          horizontal
          data={activeUserData}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginLeft: 20 }}
          keyExtractor={(item) => item}
          renderItem={renderActiveUser}
        />
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        <CustomLine />
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20,}}>

      <FlatList
          data={chatList}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={{marginTop:20}}
          renderItem={renderChatList}
        />

      </View>
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({});
