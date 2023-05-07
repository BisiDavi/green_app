import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Image} from '@rneui/themed';

export default function SplashScreen() {
  return (
    <View style={styles.splashScreen}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/verrb-inc/image/upload/v1683493215/Earth_logo_dnpt6l.png',
        }}
        PlaceholderContent={<ActivityIndicator />}
        containerStyle={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    padding: 20,
    backgroundColor: '#12C466',
    flexDirection: 'column',
    height: '100%',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 300,
  },
});
