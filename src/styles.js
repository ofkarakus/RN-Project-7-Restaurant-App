import {StyleSheet, Dimensions} from 'react-native';

export const main = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  inputWrap: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.85,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    paddingLeft: 7
  },
  input: {
    padding: 5,
  }
})

export const city = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 15,
    // marginHorizontal: 10,
    // borderRadius: 10
  },
  text: {
    fontWeight: 'bold',
    marginLeft: 5
  }
})

export const restaurantDetails = StyleSheet.create({
  line: {
    borderWidth: 2,
    borderColor: 'lightgray',
    padding: 0.5,
    width: 100,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    padding: 10
  },
  heading:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5
  },
  telAndPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    marginVertical: 5,
    alignItems: 'center'
  },
  tel: {
    flexDirection: 'row',
  },
  telTxt: {
    marginLeft: 5
  },
  price: {
    flexDirection: 'row',
  },
  reservation:{
    padding: 5,
    backgroundColor: '#1565c0',
    borderRadius: 10,
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  reservationTxt: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export const resCard = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    marginRight: 10,
    flexDirection: 'row',
    padding: 10
  }, 
  imgWrap: {
    marginRight: 10
  },
  img: {
    resizeMode: 'stretch',
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 6
  },
  name: {
    fontWeight: 'bold'
  },
  telWrap: {
    flexDirection: 'row'
  },
  tel: {
    marginLeft: 5
  },
  price: {
    flexDirection: 'row'
  }
})

export const mapStyle = [
  {
    "stylers": [
      {
        "saturation": 40
      }
    ]
  }
]