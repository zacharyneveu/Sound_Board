import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.togglePressed = this.togglePressed.bind(this);
    this.state = {pressed: false};
  }

  togglePressed() {
    this.setState({pressed: !this.state.pressed});
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title={this.state.pressed ? "Pressed" : "Not Pressed"} onPress ={this.togglePressed}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
