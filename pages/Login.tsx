import React from 'react';
import {Button, Input} from '@rneui/base';
// import {Icon} from '@rneui/themed';
import {StatusBar, SafeAreaView, View, Text, StyleSheet} from 'react-native';

export default function Login() {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.login}>
        <Text style={styles.title}>Welcome 👋</Text>
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
          />
          <View style={styles.registerView}>
            <Text style={styles.text}>Not a member?</Text>
            <Button
              title="Register now"
              buttonStyle={styles.registerButton}
              titleStyle={styles.registerButtonStyle}
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
    marginVertical: 30,
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
