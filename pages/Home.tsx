import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.home}>
        <View style={styles.overview}>
          <Text style={styles.overviewText}>Welcome, Luke!</Text>
        </View>
        <View style={styles.projectView}>
          <Text style={styles.title}>Projects Funded</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    height: '100%',
    backgroundColor: '#12C466',
  },
  overview: {
    height: '250px',
    padding: 30,
    paddingVertical: 60,
  },
  overviewText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 32,
  },
  projectView: {
    backgroundColor: 'white',
    height: '80%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#12C466',
  },
});
