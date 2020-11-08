import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {restaurantDetails} from '../styles';

export const RestaurantDetails = ({modalToggle, item, onPressBackdrop}) => {
  function showPrice(length) {
    const priceLabel = [];

    for (let i = 0; i < length; i++) {
      priceLabel.push(
        <Icon key={i} name="cash-usd-outline" size={25} color="#33691e" />,
      );
    }

    return priceLabel;
  }

  return (
    <Modal
      style={{justifyContent: 'flex-end'}}
      isVisible={modalToggle}
      swipeDirection="down"
      onSwipeComplete={() => {
        onPressBackdrop();
      }}
      onBackdropPress={() => {
        onPressBackdrop();
      }}>
      <View style={restaurantDetails.container}>
        <View style={restaurantDetails.line} />
        <Text style={restaurantDetails.heading}>{item.name}</Text>
        <Text>
          {item.address} {item.area}
        </Text>
        <View style={restaurantDetails.telAndPrice}>
          <View style={restaurantDetails.tel}>
            <Icon name="phone" size={20} />
            <Text style={restaurantDetails.telTxt}>+1 {item.phone}</Text>
          </View>
          <View style={restaurantDetails.price}>{showPrice(item.price)}</View>
        </View>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <TouchableOpacity
          style={restaurantDetails.reservation}
          onPress={() => Linking.openURL(item.reserve_url)}>
          <Text style={restaurantDetails.reservationTxt}>Reservation</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
