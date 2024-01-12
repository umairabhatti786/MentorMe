import { Text } from 'react-native'
import { colors } from '../../utils/colors'


const CustomText = ({ color, size, fontFam, text, style,fontWeight, lineHeight }) => {
    return (
        <Text
            style={[
                {
                    color: color || colors.black,
                    fontSize: size || 22,
                    fontFamily: fontFam || "Urbanist-Regular",
                    fontWeight: fontWeight ||'400'
                }, style
            ]}
        >
            {text}
        </Text >
    )
}
export default CustomText
