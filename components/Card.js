import React from 'react';
import { View, StyleSheet } from 'react-native';


//when using the spread operator, we can use the parent child relationship to combine styles from current object and this
const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        //elevation is only for android, the other is for iOS
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;