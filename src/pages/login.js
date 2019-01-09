import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

export default class Login extends Component {
  static navigationOptions = { header: null };

  state = {
    username: '',
  }

  handleInputChange = username => this.setState([username]);

  handleLogin = () => { }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} >
        <View style={styles.content}>
          <View>
            <Icon name="twitter" size={64} color={'#4BB0EE'} />
          </View>
          <TextInput
            style={styles.input}
            placeholder={'Nome de usuário'}
            value={this.state.username}
            onChangeText={this.handleInputChange}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleLogin}
          >
            <Text style={styles.buttonText} >Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: 'stretch',
    marginTop: 30,
  },

  button: {
    height: 44,
    alignSelf: 'stretch',
    marginTop: 10,
    backgroundColor: '#4BB0EE',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
