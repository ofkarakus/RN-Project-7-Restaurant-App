import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {resCard} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const RestaurantCard = ({res, onSelectRestaurant}) => {
  const showPrice = (price) => {
    let priceList = [];
    for (let i = 0; i < price; i++) {
      priceList.push(<Icon key={i} name="currency-usd" size={20} color="green" />);
    }
    return priceList;
  };

  return (
    <TouchableOpacity style={resCard.container} onPress={() => onSelectRestaurant() }>
      <View style={resCard.imgWrap}>
        <Image style={resCard.img} source={{uri: res.image_url}} />
      </View>
      <View style={resCard.infoWrap}>
        <Text style={resCard.name}>{res.name} </Text>
        <Text style={resCard.address}>{res.address}</Text>
        <Text style={resCard.area}>{res.area}</Text>
        <View style={resCard.telWrap}>
          <Icon name="phone" size={20} />
          <Text style={resCard.tel}>+1 {res.phone}</Text>
        </View>
        <View style={resCard.price}>
        <Text>Price: </Text>
        {showPrice(res.price)}
        </View>
      </View>
    </TouchableOpacity>
  );
};
