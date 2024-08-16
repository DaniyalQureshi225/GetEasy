import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GoogleMapKey} from './Data'; // Ensure this path is correct
import {Color, wp, hp} from './../Color/Color'; // Ensure this path is correct
import {key} from '../assets/Images'; // Ensure this path is correct
import Icon from './Icon';

const ColorfulAutocomplete = () => {
  const [location, setLocation] = useState(null);

  const handlePress = (data, details) => {
    const newLocation = details.geometry.location;
    setLocation(newLocation);
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search for a place"
        textInputProps={{
          placeholderTextColor: Color.primaryColor,
        }}
        query={{
          key: GoogleMapKey,
          language: 'en',
        }}
        fetchDetails={true}
        onPress={handlePress}
        styles={{
          container: styles.autocompleteContainer,
          textInputContainer: styles.textInputContainer,
          textInput: styles.textInput,
          description: styles.description,
          predefinedPlacesDescription: styles.predefinedPlacesDescription,
          listView: styles.listView,
          row: styles.row,
          separator: styles.separator,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: Color.background,
    flexDirection: 'row',
  },
  autocompleteContainer: {
    flex: 1,
    zIndex: 1000,
    position: 'absolute',
  },
  textInputContainer: {
    backgroundColor: Color.white,
    borderColor: Color.primaryColor,
    paddingHorizontal: wp('2%'),
    zIndex: 1000,
  },
  textInput: {
    height: hp('5%'),
    color: Color.black,
    fontSize: 16,
    paddingHorizontal: wp('2%'),
    width: wp('60%'),
    marginTop:hp('-4%')
  },
  description: {
    fontWeight: 'bold',
    color: Color.primaryColor,
  },
  predefinedPlacesDescription: {
    color: Color.primaryColor,
  },
  listView: {
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.primaryColor,
    borderRadius: wp('2%'),

    maxHeight: hp('50%'),
    zIndex: 100,
  },
  row: {
    backgroundColor: Color.white,
    borderBottomWidth: 1,
    borderBottomColor: Color.gray,
  },
  separator: {
    height: 0.5,
    backgroundColor: Color.gray,
  },
});

export default ColorfulAutocomplete;
