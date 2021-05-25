import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.text}>School Attendace App</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height:50,
    backgroundColor: 'gold'    
  },

  text: {
    color: 'black',
    fontFamily: 'times',
    fontWeight: 'bold',
    fontSize: 31,
    paddingLeft: 15,
    paddingTop:5
  },
});