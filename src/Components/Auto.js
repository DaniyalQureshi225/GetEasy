import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Color, wp } from "../Color/Color";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GoogleMapKeyPersonal } from './Data';

const Auto = ({ onPlaceSelect, placeholder, onInputValueChange }) => {
    const [inputValue, setInputValue] = useState(''); 

    // Helper function to extract city from address components
    const getCityName = (addressComponents) => {
        let city = '';
        for (let component of addressComponents) {
            if (component.types.includes('locality')) {
                city = component.long_name;
                break;
            }
        }
        return city;
    };

    return (
        <GooglePlacesAutocomplete
            disableScroll={true}
            styles={styles.searchbar}
            placeholder={placeholder}
            textInputProps={{
                placeholderTextColor: Color.gray,
                returnKeyType: "search",
                onChangeText: (text) => {
                    setInputValue(text); // Update state with the new text value
                    if (onInputValueChange) {
                        onInputValueChange(text); // Notify parent component about input value change
                    }
                }
            }}
            query={{
                key: GoogleMapKeyPersonal,
                language: 'en',
            }}
            GooglePlacesDetailsQuery={{
                fields: 'address_components,geometry',
            }}
            fetchDetails={true}
            onPress={(data, details = null) => {
                if (details) {
                    const city = getCityName(details.address_components);
                    const { lat, lng } = details.geometry.location; // Extract latitude and longitude
                    console.log(`City: ${city}`);
                    console.log(`Latitude: ${lat}`);
                    console.log(`Longitude: ${lng}`);
                    // Call the callback function with the selected city name and other details
                    onPlaceSelect(city, { lat, lng, details });
                } else {
                    console.error("Details not available");
                }
            }}
            onFail={error => console.error(error)}
        />
    )
}

export default Auto;

const styles = StyleSheet.create({
    searchbar: {
        description: {
            fontWeight: 'bold',
        },
        textInputContainer: {
            backgroundColor: Color.textBox,
            width: wp('70%'),
            height: wp('10%'),
            marginTop: wp('0.8%'),
            color: Color.black,
            alignItems: 'center',
            zIndex: 9999,
            marginTop:-1
        },
        description: {
            color: Color.black,
            width: wp('50%'),
        },
        textInput: {
            marginLeft: wp('-2%'),
            marginRight: 0,
            height: wp('9.2%'),
            color: Color.black,
            fontSize: 16,
            backgroundColor: Color.textBox,
            width: wp('50%'),
        },
        listView: {
            backgroundColor: Color.white,
            top: 23,
            borderWidth: 1,
            position: 'absolute',
            width: wp('70%'),
            zIndex: 99999,  
            marginTop: 20,
        },
        row: {
            backgroundColor: Color.white,
        },
        separator: {
            height: 0.5,
            backgroundColor: Color.black,
        },
    },
});
