import React, { uses} from 'react';
import { View, ScrollView, KeyboardAvoidingView, StyleSheet, TextInput, Button } from 'react-native';

// import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth'

const AuthScreen = props => {
    return(

        <KeyboardAvoidingView style={styles.screen}>
            <ScrollView>
                <View style={styles.authContainer}>
                    <Text>User Name</Text>
                    <TextInput
                        id="email"
                        keyboardType="email-address"
                        onValueChange={() => {}}
                        />
                        <Text>Password</Text>
                    <TextInput
                        id="email"
                        keyboardType="email-address"
                        onValueChange={() => {}}
                        />
                        <Button title="Login" onPress={() => {}} />
                        <Button title="Switch to Signup" onPress={() => {}} />
                </View>

            </ScrollView>

        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1
    },
    authContainer:{
        width: '80%'
    }
});

export default AuthScreen;