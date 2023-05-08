import React from 'react';
import {Button, Input} from '@rneui/base';
// import {Icon} from '@rneui/themed';
import {StatusBar, View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Register: undefined | any;
  Login: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function Register({navigation}: Props) {
  function onRegisterHandler() {
    navigation.navigate('Home');
  }

  function onLoginHandler() {
    navigation.navigate('Login');
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.login}>
        <Text style={styles.title}>Join the Earth Broadband</Text>
        <Text style={styles.description}>Enjoy fast speed internet </Text>
        <View>
          <Input
            placeholder="Email"
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.inputContainer}
            // leftIcon={<Icon nzame="envelope-o" size={20} type="font-awesome" />}
          />
          <Input
            placeholder="Password"
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.inputContainer}
          />
          <Button
            title="Register"
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainerStyle}
            onPress={onRegisterHandler}
          />
          <View style={styles.registerView}>
            <Text style={styles.text}>Have an account?</Text>
            <Button
              title="Login"
              buttonStyle={styles.registerButton}
              titleStyle={styles.registerButtonStyle}
              onPress={onLoginHandler}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  login: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 30,
  },
  description: {
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 5,
  },
  inputContainerStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 0,
    paddingHorizontal: 10,
  },
  inputContainer: {
    margin: 0,
    padding: 0,
  },
  buttonStyle: {
    backgroundColor: '#12C466',
    width: 200,
    height: 50,
  },
  buttonContainerStyle: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  text: {
    marginLeft: 12,
    fontSize: 14,
  },
  registerButton: {
    backgroundColor: 'transparent',
    margin: 0,
    padding: 0,
  },
  registerButtonStyle: {
    color: '#12C466',
    fontSize: 13,
  },
  registerView: {
    flexDirection: 'row',
  },
});
