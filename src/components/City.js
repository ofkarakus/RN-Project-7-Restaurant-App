import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {city} from '../styles';

export const City = ({cityItem, onSelectCity}) => {
  return (
    <TouchableOpacity style={city.container} onPress={() => onSelectCity(cityItem)}>
      {/* <Icon name="home-city-outline" size={25} /> */}
      <Text style={city.text}>{cityItem}</Text>
    </TouchableOpacity>
  );
};
