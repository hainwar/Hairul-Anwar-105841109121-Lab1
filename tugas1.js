import { StyleSheet, View } from "react-native";
import React from "react";

const app = () => {
    return (
        <View style={{flex : 1}}>
            <View style={{
                flex = 1,
                flexDirection : 'row',
                backgroundColor: 'white',
            }}>
                <View style={{
                    flex : 1,
                    backgroundColor : 'red'
                }}>
                </View>
                <View style={{
                    flex : 1,
                    backgroundColor : 'yellow'
                }}>
            </View>
        </View>
        <View style={{
            flex : 1,
            backgroundColor : 'green'
        }}>
        </View>
        <View style={{
            flex : 1,
            backgroundColor: 'yellow'
        }}>
            </View>
    </View>
    )
}
export default app;