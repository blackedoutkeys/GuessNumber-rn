import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard,
    Alert
 } from 'react-native';

import Colors from '../constants/colors';
import Input from '../components/Input';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';


const StartGameScreen = props => {
    
        const [enteredValue, setEneteredValue] = useState('');
        const [confirmed, setConfirmed] = useState(false)
        const [selectedNumber, setSelectedNumber] = useState();

        const numberInputHandler = inputText => {
            setEneteredValue(inputText.replace(/[^0-9]/g, ''));
        };

        const resetInputHandler = () => {
            setEneteredValue('');
            setConfirmed(false);
        }

        const confirmInputHandler = () => {
                const chosenNumber = parseInt(enteredValue);
                    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
                        Alert.alert('Invalid Entry!', 'Number must be between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
                        return;
                    }
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setEneteredValue('');
            Keyboard.dismiss();
        };
    
    let confirmedOutput;

        if (confirmed) {
            confirmedOutput = (
                <Card style={styles.summaryContainer}>
                    <Text>You selected</Text>
                    <NumberContainer>{selectedNumber}</NumberContainer>
                    <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
                </Card>
        )}

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title} >Start a New Game!</Text>
            <Card>
                <View style={styles.inputContainer} >
                    <Text>Select a Number</Text>
                    <Input style=
                    {styles.input}
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    keyboardType="number-pad" 
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                        </View>                  

                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
       width: 300,
       maxWidth: '80%',
       alignItems: 'center'
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    summaryContainer: {
        marginTop: 20,
        alignItems:'center'
    }

});

export default StartGameScreen;