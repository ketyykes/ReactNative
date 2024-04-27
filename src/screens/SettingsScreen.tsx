import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>這是設定頁面</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default SettingsScreen;
