import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = () => (
    <View style={styles.container} > 
        <Icon name='ios-arrow-back' size={24} style={styles.icon} />
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity>
            <Icon name='ios-more' size={24} style={styles.icon} />
        </TouchableOpacity>
    </View>
);

export default Header;

