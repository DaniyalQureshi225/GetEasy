import React, {useState} from "react";
import ImagePicker from 'react-native-image-crop-picker';


const useProfile = ({navigation}) =>{

    const [user, setUser] = useState('')
    const [emailId, setEmailId] = useState('')
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [imageUri, setImageUri] = useState(null);


  
    const openGallery = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        cropperCircleOverlay: true,
        freeStyleCropEnabled: true, // Enable free style crop
        cropperActiveWidgetColor: '#00FF00', // Change the active widget color
        cropperStatusBarColor: '#000000', // Change the status bar color
        cropperToolbarColor: '#0000FF', // Change the toolbar color
        cropperToolbarWidgetColor: '#FFFFFF', // Change the toolbar widget color
        cropperToolbarTitle: 'Edit Image', // Set a custom title for the toolbar
      })
        .then(image => {
          setImageUri(image.path);
          console.log(image);
        })
        .catch(error => {
          console.error('Error opening gallery:', error);
        });
    };

    const TermsAndCondition = () =>{
        navigation.navigate('TermsAndCondition')
    }

    return {
        user,
        phone,
        emailId,
        imageUri,
        password,
        confirmPassword,
        setConfirmPassword,
        TermsAndCondition,
        setPassword,   
        openGallery,
        setImageUri,
        setEmailId,
        setPhone,
        setUser,  
    }
}

export default useProfile;