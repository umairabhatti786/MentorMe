import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/appStyles";
import { SFCompact } from "../../utils/Fonts";

const MessageContainer = ({item}) => {
  return (
    <View style={item.from?styles.rightContainer:styles.leftContainer}>
        <View style={{width:"82%"}}>
        <Text 
        
        style={item.from? styles.rightText:styles.leftText} >

{item.message}

</Text>

        </View>
       
        <Text style={item.from? styles.rightTime:styles.leftTime} >

{item.time}

</Text>
     
            
    </View>
  );
};
export default MessageContainer;
const styles = StyleSheet.create({
    rightContainer:{
        backgroundColor:colors.secondary,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:10,
        // flexDirection:"row",
        // alignItems:"center",
        justifyContent:"space-between",
        minHeight:30,
        alignSelf:"flex-end",
        paddingHorizontal:20,
        paddingVertical:10,
        width:"90%"
    },
    leftContainer:{
        backgroundColor:"#F5F5F5",
        borderTopLeftRadius:10,

        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        justifyContent:"space-between",
        alignSelf:"flex-start",
          // alignItems:"center",
          minHeight:30,
          paddingHorizontal:20,
          paddingVertical:10,
          width:"90%"
    },
    rightText:{
        color:colors.white,
        fontFamily:SFCompact.bold,
        fontWeight:"500",
        fontSize:20,
        lineHeight:30
    },
    rightTime:{
        color:"#E0E0E0",
        fontFamily:SFCompact.medium,
        fontSize:13,
        textAlign:"right",
        marginTop:-10

    },
    leftTime:{
        color:"#9E9E9E",
        fontFamily:SFCompact.medium,
        fontSize:13,
        textAlign:"right",
        marginTop:-10

    },
    leftText:{
        color:colors.black,
        fontFamily:SFCompact.medium,
        fontSize:18,
        fontWeight:"400",
        fontSize:20,
        lineHeight:30
    }

    

});

