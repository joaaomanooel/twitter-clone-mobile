import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import api from '../services/api';
import Tweet from '../components/tweet';

export default class TimeLine extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Início',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('New')} >
        <Icon
          style={{ marginRight: 20 }}
          name={'add-circle-outline'}
          size={24}
          color={'#4BB0EE'}
        />
      </TouchableOpacity>
    ),
  })

  state = {
    tweets: [],
  }

  async componentDidMount() {
    const res = await api.get('tweets');
    this.setState({ tweets: res.data });
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
});
