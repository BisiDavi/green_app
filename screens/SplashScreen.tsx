import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ButtonGroup, Image} from '@rneui/base';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  SplashScreenView: undefined | any;
  Login: undefined;
  Register: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreenView'>;

export default function SplashScreenView({navigation}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function onNavigateHandler(buttonIndex: number) {
    const navigationIndex = buttonIndex === 0 ? 'Register' : 'Login';
    navigation.navigate(navigationIndex);
    setSelectedIndex(buttonIndex);
  }

  return (
    <SafeAreaView>
      <View style={styles.splashScreen}>
        <View style={styles.logoWrapper}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/verrb-inc/image/upload/v1683493215/Earth_logo_dnpt6l.png',
            }}
            containerStyle={styles.logo}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.title}>Broadband that gives back</Text>
          <Text style={styles.description}>
            Fastest speeds, incredible customer service, trees planted monthly,
            and plastic removed from our oceans.
          </Text>
        </View>
        <ButtonGroup
          buttons={['Register', 'Login']}
          selectedIndex={selectedIndex}
          containerStyle={styles.buttonGroup}
          buttonStyle={styles.buttonStyle}
          selectedButtonStyle={styles.selectedButton}
          textStyle={styles.buttonGroupText}
          selectedTextStyle={styles.selectedButtonText}
          buttonContainerStyle={styles.buttonContainerStyle}
          innerBorderStyle={styles.innerBorderStyle}
          onPress={onNavigateHandler}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    backgroundColor: '#eceaf8',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingBottom: 40,
  },
  logoWrapper: {
    borderRadius: 20,
    backgroundColor: '#12C466',
    height: 250,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 300,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
  },
  description: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
  },
  textView: {
    paddingVertical: 20,
    flex: 2,
  },
  buttonGroup: {
    marginHorizontal: 30,
    height: 60,
    borderRadius: 15,
    borderColor: 'white',
  },
  buttonStyle: {
    borderRadius: 15,
    border: '1px solid red',
  },
  buttonContainerStyle: {
    backgroundColor: '#ECEAEF',
  },
  selectedButton: {
    backgroundColor: 'white',
  },
  selectedButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonGroupText: {
    color: 'black',
    fontSize: 20,
  },
  innerBorderStyle: {
    color: 'none',
    width: 0,
  },
});
