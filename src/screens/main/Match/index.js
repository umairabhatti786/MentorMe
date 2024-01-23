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
import CustomLine from "../../../components/CustomLine";
import ChatUserList from "../../../components/ChatUserList";
import MatchContainer from "./MatchContainer";
import YourMatchContainer from "./YourMatchContainer";

const Match = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const yourMatchData = [
    { img: images.dummyuser1,name:"Tim Cook",des:"Mentor" },
    { img: images.dummyuser2,name:"Warren Buffett",des:"Mentor"  },
    { img: images.dummyuser3 ,name:"Riana",des:"Mentor" },
  ]

  const chatList=[
    {img: images.user9 ,name:"Brian Chesky",des:"Co-founder and CEO of Airbnb"},
    {img: images.user10 ,name:"Marry Barra",des:"CEO of General Motors."},



  ]

  const renderActiveUser = ({ item, index }) => {
    return (
      <>
        <View style={{ marginRight: 10 }}>
          <ActiveUser img={item.img}
          name={item.name}
          des={item.des}
           />
        </View>
      </>
    );
  };

  const renderNewMatch = ({ item, index }) => {
    return (
      <>
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=>navigation.navigate("ItsMatch",{data:item})}
        style={{ marginRight: 15 }}>
          <MatchContainer
          name={item?.name}
          img={item.img}
          des={item.des}
          />
        </TouchableOpacity>
      </>
    );
  };
  const renderYourMatch = ({ item, index }) => {
    return (
      <>
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=>navigation.navigate("ItsMatch",{data:item})}
        style={{ marginRight: 15 }}
        >
          <YourMatchContainer
          img={item.img}

name={item.name}
des={item.des}
          />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ padding: 20 }}>
        <CustomHeader isRight={true} text={"Match"} />

        <Spacer height={20} />
        <View style={{...appStyles.justifyRow,marginLeft:10}}>
          <CustomText
            color={colors.black}
            text={"New Match"}
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
      
      

      <View >

      <FlatList
          data={chatList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={{paddingLeft:30}}
          renderItem={renderNewMatch}
        />

<View style={{...appStyles.justifyRow,paddingLeft:30,paddingRight:20,marginVertical:20}}>
          <CustomText
            color={colors.black}
            text={"Your Match"}
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

        <FlatList
          data={yourMatchData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={{paddingLeft:30}}
          renderItem={renderYourMatch}
        />

      </View>
    </SafeAreaView>
  );
};

export default Match;

const styles = StyleSheet.create({});
