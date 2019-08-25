import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
  
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductList';
import Tabs from './components/Tabs';
import { colors } from '../src/styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Header />
        <ScrollView>
          <SubHeader />
          <ProductList />
        </ScrollView>
        <Tabs />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.lighter,
  },  
});