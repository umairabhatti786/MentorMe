import {  StyleSheet,  } from 'react-native';
import { colors } from './colors';

export const appStyles = StyleSheet.create({

    main:{
        flex:1,
        backgroundColor:colors.offWhite,


    },

    row:{
        flexDirection:"row",
        alignItems:"center",

    },
    justifyRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

    }



})