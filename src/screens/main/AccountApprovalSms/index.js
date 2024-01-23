import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  import { appStyles } from "../../../utils/appStyles";
  import { images } from "../../../assets/images";
  import CustomHeader from "../../../components/CustomHeader";
  import { Spacer } from "../../../components/Spacer";
  import CustomText from "../../../components/CustomText";
  import { colors } from "../../../utils/colors";
  import CustomView from "../../../components/CustomView";
  import CustomInput from "../../../components/CustomInput";
  import CustomLine from "../../../components/CustomLine";
  import CustomButton from "../../../components/CustomButton";
  import TopBar from "../../../components/TopBar";
  import CustomSearch from "../../../components/CustomSearch";
  import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from "react-native-confirmation-code-field";
  
  const AccountApprovalSms = ({ navigation }) => {
    const [isActive, setIsActive] = useState(0);
    const [value, setValue] = useState("")

    const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
    return (
      <SafeAreaView style={appStyles.main}>

          <View style={{flex:1,padding:20}}>
          <CustomHeader
          isBack
        //   isRight
          navigation={navigation}
          text={"Account Approval"}
        />

<Spacer height={90}/>
        <View style={{...appStyles.row,alignSelf:"center"}}>
        <CustomText
            color={colors.black}
            text={
              "Code has been send to"
            }
            size={16}
            lineHeight={25}
            fontWeight={"400"}
          />
          <Spacer width={5}/>
            <CustomText
            color={colors.black}
            text={
              "+96 352 4672 984"
            }
            size={16}
            lineHeight={25}
            fontWeight={"700"}
          />

        </View>
        <Spacer height={50}/>


        <CodeField
            ref={ref}
            {...props}
            caretHidden={true}
            value={value}
            onChangeText={(value) => {
              setValue(value);
            //   if (value.length == 4) {
            //     onHandleOTP(value);
            //   }
            }}
            cellCount={4}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={{
                  ...styles.codeFieldCell,
                  borderColor: isFocused ?  colors.secondary:colors.halfWhite ,
                  backgroundColor:isFocused?colors.purple8:"#FAFAFA",
                }}
              >
                <CustomText
                size={25}
                fontFam="Montserrat-Medium"

                fontWeight={"500"}
                color={ colors.black}
                text={symbol || (isFocused ? <Cursor /> : "_")}
                />
              </View>
            )}
          />
          <Spacer height={40}/>

          <View style={{...appStyles.row,alignSelf:"center"}}>
        <CustomText
            color={colors.black}
            text={
              "Resend code in"
            }
            size={16}
            lineHeight={25}
            fontWeight={"400"}
          />
          <Spacer width={5}/>
            <CustomText
            color={colors.secondary}
            text={
              "55 s"
            }
            size={16}
            lineHeight={25}
            fontWeight={"400"}
          />

        </View>

        <Spacer height={70}/>



        <CustomButton
              notRequiredShadow
              text={"Verify"}
              onPress={()=>navigation.navigate("Tabs",{isVerified:true})}
   
              fontSize={16}
              fontWeight={"700"}
            //   height={40}
            />

        



          </View>
       
      </SafeAreaView>
    );
  };
  
  export default AccountApprovalSms;
  
  const styles = StyleSheet.create({
 

    codeFieldRoot: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 80,
        gap: 10,
      },
      codeFieldCell: {
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: 60,
        borderWidth: 1.5,
        borderRadius:20,
        // borderRadius: 12,
      },
  });
  