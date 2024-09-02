import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useState, useRef } from "react";
import { Color, hp, wp } from "../Color/Color";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GoogleMapKeyPersonal } from './Data';
import Icon from "./Icon";

const Auto = ({ onPlaceSelect, placeholder, onInputValueChange }) => {
    const [inputValue, setInputValue] = useState('');
    const autocompleteRef = useRef(null); // Create a ref for the GooglePlacesAutocomplete component

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
            ref={autocompleteRef} // Attach ref to GooglePlacesAutocomplete component
            styles={styles.searchbar}
            placeholder={placeholder}
            textInputProps={{
                value: inputValue,
                placeholderTextColor: Color.gray,
                returnKeyType: "search",
                onChangeText: (text) => {
                    setInputValue(text); 
                    if (onInputValueChange) {
                        onInputValueChange(text); 
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
            renderRightButton={() => (
                <TouchableOpacity
                    style={styles.clearButton}
                    onPress={() => {
                        autocompleteRef.current.setAddressText(''); // Clear the text input
                        setInputValue(''); // Reset the state
                        if (onInputValueChange) {
                            onInputValueChange(''); // Notify parent component that the input is cleared
                        }
                    }}
                >
                    {
                        inputValue === '' ? null : (
                            <Icon
                                type={'Ionicons'}
                                name={'close-circle'}
                                size={wp('5%')}
                                color={Color.gray}
                            />
                        )
                    }
                </TouchableOpacity>
            )}
        />
    );
};

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
            marginTop: wp('-0.8%'),
            alignItems: 'center',
            zIndex: 100, // Set a lower zIndex for the input container
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
            zIndex: 1000, // Set a higher zIndex for the suggestion list
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
    clearButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('1%'),
    },
});
