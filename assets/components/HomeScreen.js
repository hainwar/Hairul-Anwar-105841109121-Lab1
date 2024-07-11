import React from "react";
import { Text, View } from "react-native";
import useCustomFonts from "../fonts/Fonts";

const HomeScreen = () => {
    const [loaded] = useCustomFonts();
    if (!loaded) {
        return (
            <Text>Loading...</Text>
        )
}

return (
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }}>
        <Text style={{
            fontSize:16,
            padding:15,
            fontFamily:'MetroBold',
        }}>Home Screen</Text>
    </View>
);
}

export default HomeScreen;