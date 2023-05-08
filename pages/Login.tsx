import {Button, Input} from '@rneui/base';
import React from 'react';
import {StatusBar, SafeAreaView, View, Text} from 'react-native';

export default function Login() {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>Welcome</Text>
        <View>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button title="Login" />
          <Text>Not a member? Register now</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
