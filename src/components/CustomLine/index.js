import { Text,View } from "react-native";
import { colors } from "../../utils/colors";

const CustomLine = ({height}) => {
  return (
      <View  style={{height:height || 1.5,width:"100%",backgroundColor:colors.halfWhite}}/>
    
  );
};
export default CustomLine;
