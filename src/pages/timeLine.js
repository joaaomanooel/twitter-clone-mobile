import React, { Component } from 'react';
import socket from 'socket.io-client';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tweet from '../components/tweet';
import api from '../services/api';


export default class TimeLine extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Início',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('New')} >
        <Icon
          style={styles.icon}
          name="add-circle-outline"
          size={24}
          color="#4BB0EE"
        />
      </TouchableOpacity>
    ),
  })

  state = {
    tweets: [],
  }

  async componentDidMount() {
    this.subscribeToEnvents();
    const res = await api.get('tweets');
    console.log('res', res);

    this.setState({ tweets: res.data });
  }

  subscribeToEnvents() {
    const io = socket('https://twitter-clone-backend.herokuapp.com');
    io.on('tweet', (data) => {
      this.setState({ tweets: [data, ...this.state.tweets] });
    });

    io.on('like', (data) => {
      this.setState({
        tweets: this.state.tweets.map(
          tweet => (tweet._id === data._id ? data : tweet),
        ),
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.tweets}
          keyExtractor={tweet => tweet._id}
          renderItem={({ item }) => <Tweet tweet={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  icon: {
    marginRight: 20,
  },
});
