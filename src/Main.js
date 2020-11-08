import React, {useEffect, useState, useRef} from 'react';
import Axios from 'axios';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  View,
  Image,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {main, mapStyle} from './styles';
import {City, RestaurantDetails, RestaurantCard} from './components';
import {Marker} from 'react-native-maps';

let originalCityList = [];

const Main = () => {
  const [cityList, setCityList] = useState([]);
  const [input, setInput] = useState('');
  const [selectedCityRestaurants, setSelectedCityRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState({});
  const [modalFlag, setModalFlag] = useState(false);
  const mapRef = useRef(null);
  // const inputRef = useRef(null);

  const fitScreenToMarkers = () => {
    const restaurantsCoordinates = selectedCityRestaurants.map((restaurant) => {
      return {
        latitude: restaurant.lat,
        longitude: restaurant.lng,
      };
    });
    mapRef.current.ready(restaurantsCoordinates);
  };

  const onSelectCity = async (value) => {
    const {data} = await Axios.get(
      `https://opentable.herokuapp.com/api/restaurants`,
      {
        params: {city: value},
      },
    );
    setSelectedCityRestaurants(data.restaurants);
    fitScreenToMarkers();
    setInput('');
    // inputRef.current.clear();
  };

  const fetchData = () => {
    Axios.get('https://opentable.herokuapp.com/api/cities').then(({data}) => {
      setCityList(data.cities);
      originalCityList = data.cities;
    });
  };

  const filterCities = () => {
    setCityList(
      originalCityList.filter((city) => {
        let inputLower = input.toLowerCase();
        let cityLower = city.toLowerCase();
        return cityLower.indexOf(inputLower) != -1;
      }),
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterCities();
  }, [input]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        customMapStyle={mapStyle}
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={mapRef}>
        {selectedCityRestaurants
          ? selectedCityRestaurants.map((restaurant, index) => (
              <Marker
                key={index}
                title={restaurant.name}
                description={restaurant.address}
                onPress={() => {
                  setSelectedRestaurant(restaurant);
                  setModalFlag(true);
                }}
                coordinate={{
                  latitude: restaurant.lat,
                  longitude: restaurant.lng,
                }}>
                <Image
                  style={{width: 30, height: 30, tintColor: '#ff1744'}}
                  source={require('./assets/food-serving.png')}
                />
              </Marker>
            ))
          : null}
      </MapView>
      <View style={main.container}>
        <View style={main.inputWrap}>
          <Icon name="magnify" size={20} color="gray" />
          <TextInput
            style={main.input}
            value={input}
            // ref={inputRef}
            placeholder="Search a city"
            onChangeText={(value) => {
              setInput(value);
            }}
          />
        </View>
        <FlatList
          // horizontal
          // showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{borderWidth: 0.5, borderColor: 'gray'}} />
          )}
          style={{
            maxHeight: input == '' ? 0 : Dimensions.get('window').height * 0.3,
          }}
          keyExtractor={(_, index) => index.toString()}
          data={cityList}
          renderItem={({item}) => (
            <City cityItem={item} onSelectCity={onSelectCity} />
          )}
        />
        <RestaurantDetails
          modalToggle={modalFlag}
          item={selectedRestaurant}
          onPressBackdrop={() => {
            setModalFlag(false);
          }}
        />
      </View>
      <FlatList
        style={{position: 'absolute', bottom: 10, left: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        data={selectedCityRestaurants}
        renderItem={({item}) => (
          <RestaurantCard
            res={item}
            onSelectRestaurant={() => {
              setSelectedRestaurant(item)
              setModalFlag(true);
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Main;
