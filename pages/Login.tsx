import React from 'react';
import {Button, Input} from '@rneui/base';
// import {Icon} from '@rneui/themed';
import {StatusBar, View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined | any;
  Register: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({navigation}: Props) {
  function onRegisterHandler() {
    navigation.navigate('Register');
  }

  function onLoginHandler() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.login}>
        <Text style={styles.title}>Welcome Smith 👋</Text>
        <Text style={styles.description}>
          View details about your internet connectivity
        </Text>
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
            title="Login"
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainerStyle}
            onPress={onLoginHandler}
          />
          <View style={styles.registerView}>
            <Text style={styles.text}>Not a member?</Text>
            <Button
              title="Register now"
              buttonStyle={styles.registerButton}
              titleStyle={styles.registerButtonStyle}
              onPress={onRegisterHandler}
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
    fontSize: 30,
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
