import React from 'react';
import { useWindowDimensions } from 'react-native';
import { View, StyleSheet,Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Colors } from './styles';
const Loader = ({ visible = false }) => {
    const { height, width } = useWindowDimensions();
    return (
        visible && (<View style={[style.container, { height, width }]}>
            <View style={style.loader}>
            <ActivityIndicator size="medium" color={Colors.green}/>
            
            </View>
        </View>
        )
    );
};
const style = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        backgroundcolor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        width: '100%',
        marginRight: '50%',
        marginLeft: '50%',
        
        
    },
    loader: {
       
        backgroundColor: Colors.primary,
        marginHorizontal: '35%',
        borderRadius: 20,
        marginRight: '50%',
        border: 'none',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '10%',
    },
});
export default Loader;