import { View } from "react-native";
import React from "react";

export const Spacer = ({ height, width }) => (
    
  <View
    style={{
      width: width || 0,
      height:height || 0,
    }}
  />
);
