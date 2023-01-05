import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ToastAndroid, TouchableHighlight } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import i18n from '../i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './../components/Loader';
import { Formik } from 'formik';
import { IconButton } from 'react-native-paper';
import { Breadcrumbbigcontainer, Breadcrumbcontainer, Breadcrumb, BreadText16, BreadText17, BreadText18, BreadText19, BreadText20, Breadsubtext } from './../components/Breadcrumb';
import {
    StyledContainer,
    InnerContainer,
    StyledFormArea1,
    Colors,
    StyledButton1,
    ButtonText,
    Buttoncontainer9,
    StyledTextInput0,
} from './../components/styles';

import { View, Text } from 'react-native';

//colors
const { brand, darklight, green } = Colors;


const Photo = ({ navigation, route }) => {
    const [errors, setErrors] = React.useState({});
    const [UserDetails4, setUserDetails4] = React.useState();
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        getUserDetails4();
    }, []);

    const getUserDetails4 = async () => {
        const userData4 = await AsyncStorage.getItem('userpic');
        if (userData4) {
            setUserDetails4(JSON.parse(userData4));
        }
    }

    const validate = () => {

        let valid = true;

        if (!UserDetails4) {
            handleError(i18n.t('please_take_pic'), 'pic');
            valid = false;
        }

        if (valid) {
            register();
        }
    };
    const [UserDetails, setUserDetails] = React.useState();


    React.useEffect(() => {
        getUserDetails();

    }, []);
    const getUserDetails = async () => {
        const userData = await AsyncStorage.getItem('api');

        if (userData) {
            setUserDetails(JSON.parse(userData));

        }
    }
    // const [galleryPermission, setGalleryPermission] = useState(null);

    // const [imageUri, setImageUri] = useState(null);


    // const setToastMsg = msg => {

    //     ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);

    // }


    // const permisionFunction = async () => {


    //     const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();

    //     console.log(imagePermission.status);


    //     setGalleryPermission(imagePermission.status === 'granted');


    //     if (imagePermission.status !== 'granted') {

    //         setToastMsg('Permission for media access needed.');

    //     }

    // }
    // useEffect(() => {

    //     permisionFunction();

    // }, []);


    // const pick = async () => {

    //     let result = await ImagePicker.launchImageLibraryAsync({

    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,

    //         quality: 1,

    //     });


    //     if (!result.canceled) {

    //         setImageUri(result.uri);

    //     }

    // }


    // const removeImage = () => {

    //     setUserDetails(null);

    //     setToastMsg('Image Removed');

    // }
    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
    };
    const register = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            try {
                navigation.navigate('Verify')
            } catch (error) {
                Alert.alert("Error", "Something went wrong");
            }

        }, 700);

    }


    useEffect(() => {
        if (UserDetails) {
            const image = { uri: UserDetails.avatar }
            const avatar = async () => {
                if (!await AsyncStorage.getItem('userpic')) {
                    AsyncStorage.setItem('userpic', JSON.stringify(image))
                     setUserDetails4(image)
                } 
            }

            avatar()
        }
    }, [UserDetails])
    return (
        <StyledContainer>
            <Loader visible={loading} />
            <Breadcrumbbigcontainer>
                <Breadcrumbcontainer elevation={5} style={styles.container}>
                    <Breadcrumb>
                        <BreadText16>1</BreadText16>
                        <Breadsubtext>IDcard</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText17>2</BreadText17><Breadsubtext>Profile</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText18>3</BreadText18><Breadsubtext>Visit</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText19>4</BreadText19><Breadsubtext>Photo</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText20>5</BreadText20><Breadsubtext>Verify</Breadsubtext></Breadcrumb>
                </Breadcrumbcontainer>
            </Breadcrumbbigcontainer>
            <View>

                <View style={styles.innerContainer}>


                    <Avatar.Image
                        size={250}
                        backgroundColor="#f7f1f0"
                        resizeMode="cover"
                        source={UserDetails4 || require('./../assets/img/default.png')}
                    >
                    </Avatar.Image>
                    <MyTextInput
                        error={errors.pic} />
                </View>

                <View style={[styles.innerContainer, { marginTop: 10, flexDirection: 'row' }]}>


                    <IconButton
                        icon="camera"
                        iconColor={green}
                        backgroundColor="#f7f1f0"
                        borderRadius={30}
                        size={27}
                        mode='contained'
                        onPress={() => {
                            setErrors({})
                            navigation.push('Photo1')
                        }}

                    />
                    {/* <IconButton
        icon="trash-can"
        iconColor={green}
        backgroundColor="#f7f1f0"
        size={30}
        mode='contained'
        onPress={removeImage}
        
        /> */}


                </View>

            </View>

            <StatusBar hidden />

            <InnerContainer>
                <Formik>

                    <StyledFormArea1>

                        <Buttoncontainer9>
                            <StyledButton1 onPress={() => navigation.navigate('Visit')}>
                                <ButtonText>

                                    {i18n.t('back')}
                                </ButtonText>
                            </StyledButton1>
                            <StyledButton1 onPress={validate}>
                                <ButtonText >
                                    {i18n.t('next')}
                                </ButtonText>
                            </StyledButton1>
                        </Buttoncontainer9>
                    </StyledFormArea1>

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};
const MyTextInput = ({ error, ...props }) => {
    return (<View style={[{ width: "100%" }, { alignItems: 'center' }]}>
        {error && (
            <Text style={{ color: Colors.red, fontSize: 16 }}>
                {error}
            </Text>
        )}
    </View>);
};


const styles = StyleSheet.create({

    innerContainer: {

        justifyContent: 'center',

        alignItems: 'center',
        marginTop: '5%',


    },
    container: {

        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
    },

});




export default Photo;
