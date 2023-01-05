import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';

import { StyleSheet, ToastAndroid, TouchableHighlight } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import i18n from '../i18n';
import { Avatar, Button } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './../components/Loader';
import { Breadcrumbbigcontainer, Breadcrumbcontainer, Breadline, Breadcrumb, BreadText21, BreadText22, BreadText23, BreadText24, BreadText25, Breadsubtext } from './../components/Breadcrumb';

//formik
import { Formik } from 'formik';
//icons
import { Card } from 'react-native-elements';

import {
    StyledContainer,
    InnerContainer,
    StyledFormArea3,
    Colors,
    StyledButton,
    ButtonText,
    StyledTextView,
    StyledTextView2,
    StyledTextView3,
    StyledTextView4,
    StyledTextView5,
    Buttoncontainer7,
    Cardcontainer,
    Cardbigcontainer,
    LeftIcon,
} from './../components/styles';

import { Text, Keyboard, Alert, View } from 'react-native';
import { AutoFocus } from 'expo-camera';
import { getNRC } from './NRCTownshipCode';

//colors
const { red, darklight, green } = Colors;

const Verify = ({ navigation, route }) => {

    const [UserDetails, setUserDetails] = React.useState();
    const [UserDetails1, setUserDetails1] = React.useState();
    const [UserDetails2, setUserDetails2] = React.useState();
    const [UserDetails3, setUserDetails3] = React.useState();
    const [UserDetails4, setUserDetails4] = React.useState();
    const [UserDetails5, setUserDetails5] = React.useState();
 


    React.useEffect(() => {
        getUserDetails();
        getUserDetails1();
        getuserDetails2();
        getuserDetails3();
        getUserDetails4();
        getUserDetails5();

    }, []);
    const getUserDetails = async () => {
        const userData = await AsyncStorage.getItem('userpf');

        if (userData) {
            setUserDetails(JSON.parse(userData));
        }
    }
    const getUserDetails1 = async () => {
        const userData1 = await AsyncStorage.getItem('uservisit');
        if (userData1) {
            setUserDetails1(JSON.parse(userData1));
        }
    }
    const getuserDetails2 = async () => {
        const userData2 = await AsyncStorage.getItem('userID');
        if (userData2) {
            setUserDetails2(JSON.parse(userData2));
        }
    }
    const getuserDetails3 = async () => {
        const userData3 = await AsyncStorage.getItem('userforeignID');
        if (userData3) {
            setUserDetails3(JSON.parse(userData3));
        }
    }

    const getUserDetails4 = async () => {
        const userData4 = await AsyncStorage.getItem('userpic');
        if (userData4) {
            setUserDetails4(JSON.parse(userData4));
        }
    }
    const getUserDetails5 = async () => {
        const userData5 = await AsyncStorage.getItem('api');
        if (userData5) {
            setUserDetails5(JSON.parse(userData5));
        }
    }    
   
    const name = () => {
        if (i18n.language === 'mm') {
            return UserDetails?.name
        } else if (i18n.language === 'en') {
            return UserDetails?.name
        }
    }
    const email = () => {
        if (i18n.language === 'mm') {
            return UserDetails?.email
        } else if (i18n.language === 'en') {
            return UserDetails?.email
        }
    }
    const passport = () => {
        if (i18n.language === 'mm') {
            return UserDetails3?.passport
        } else if (i18n.language === 'en') {
            return UserDetails3?.passport
        }
    }
    const avatar = () => {
        if (i18n.language === 'mm') {
            return UserDetails4
        } else if (i18n.language === 'en') {
            return UserDetails4
        }
    }
    const phone = () => {
        if (i18n.language === 'mm') {
            return UserDetails?.phonenumber
        } else if (i18n.language === 'en') {
            return UserDetails?.phonenumber
        }
    }
    const address = () => {
        if (i18n.language === 'mm') {
            return UserDetails?.address
        } else if (i18n.language === 'en') {
            return UserDetails?.address
        }
    }
    const company = () => {
        if (i18n.language === 'mm') {
            return UserDetails?.company
        } else if (i18n.language === 'en') {
            return UserDetails?.company
        }
    }
    const nationality = () => {
        if (i18n.language === 'en') {
            return (UserDetails2?.local??"") + (UserDetails3?.foreign??"");
        } else if (i18n.language === 'mm') {
            return (UserDetails2?.local??"") + (UserDetails3?.foreign??"");
           
        }
    }

    const country = () => {
        if (i18n.language === 'mm') {
            return UserDetails3?.country.id
        } else if (i18n.language === 'en') {
            return UserDetails3?.country.id
        }
    }
    const gender = () => {
        if (i18n.language === 'mm') {
            return UserDetails?.gender
        } else if (i18n.language === 'en') {
            return UserDetails?.gender
        }
    }
    const visiting_department = () => {
        if (i18n.language === 'mm') {
            return UserDetails1?.visitingdepartment.div_name.id || UserDetails1?.visitingdepartment.id
        } else if (i18n.language === 'en') {
            return UserDetails1?.visitingdepartment.div_name_eng.id || UserDetails1?.visitingdepartment.id
        }
    }
    const visiting_departmentview = () => {
        if (i18n.language === 'mm') {
            return UserDetails1?.visitingdepartment.div_name
        } else if (i18n.language === 'en') {
            return UserDetails1?.visitingdepartment.div_name_eng
        }
    }
    const positions = () => {
        if (i18n.language === 'mm') {
            return UserDetails?.position.position_mm.id || UserDetails?.position.id
        } else if (i18n.language === 'en') {
            return UserDetails?.position.position_eng.id || UserDetails?.position.id
        }
    }
    const purposes = () => {
        if (i18n.language === 'mm') {
            return UserDetails1?.purpose.purpose_mm.id || UserDetails1?.purpose.id
        } else if (i18n.language === 'en') {
            return UserDetails1?.purpose.purpose.id || UserDetails1?.purpose.id
        }
    }
    const purposesview = () => {
        if (i18n.language === 'mm') {
            return UserDetails1?.purpose.purpose_mm
        } else if (i18n.language === 'en') {
            return UserDetails1?.purpose.purpose
        }
    }
    const postExample = async () => {
        const body = JSON.stringify({
            name: name(),
            email: email(),
            passport: passport(),
            avatar: avatar().uri, 
            phone: phone(),
            address: address(),
            company: company(),
            position_id: positions(),
            purpose_id: purposes(),
            department_id: visiting_department(),
            nric: getNRC(UserDetails2),
            nationality_name: nationality(),
            nationality_id: country(),
            gender: gender(),
        })
       
        const requestOptions = {

            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body
        };
        try {
            await fetch(
                'https://unityitsolutionprovider.com/registration_dash/public/api/visitors', requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            // console.log(data)
                            //Alert.alert("Registered Successfully!");
                        });
                })
        }
        catch (error) {
            console.error(error);
        }
    }

    const register = () => {
        postExample();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            try {
                
                AsyncStorage.removeItem('userID');
                AsyncStorage.removeItem('userforeignID');
                AsyncStorage.removeItem('userpic');
                AsyncStorage.removeItem('userpf');
                AsyncStorage.removeItem('uservisit');
                AsyncStorage.removeItem('api');
                Alert.alert("Successfully", "Registered!")
                navigation.navigate('Welcome')

            } catch (error) {
                Alert.alert("Error", "Something went wrong");
        }

        }, 1000);
    }
    const [loading, setLoading] = React.useState(false);

    return (

        <StyledContainer>
            <StatusBar hidden />
            <Loader visible={loading} />
            <Breadcrumbbigcontainer>
                <Breadcrumbcontainer elevation={5} style={styles.container} >
                    <Breadcrumb>


                        <BreadText21>1</BreadText21>

                        <Breadsubtext>IDcard</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText22>2</BreadText22><Breadsubtext>Profile</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText23>3</BreadText23><Breadsubtext>Visit</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText24>4</BreadText24><Breadsubtext>Photo</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText25>5</BreadText25><Breadsubtext>Verify</Breadsubtext></Breadcrumb>
                </Breadcrumbcontainer>
            </Breadcrumbbigcontainer>

            <InnerContainer>
                <Formik onSubmit={Formik.handleSubmit}>

                    <StyledFormArea3>
                    <Cardbigcontainer>
                        <Cardcontainer>
                            <Card >

                                <View style={styles.innerContainer}>
                                    <View style= {styles.avatarcontainer}>
                                    <Avatar.Image

                                        size={110}
                                        backgroundColor="#f7f1f0"
                                        resizeMode="cover"
                                        source={UserDetails4}
                                        style={{ flex: 1, marginBottom: 120 }}
                                    >
                                    </Avatar.Image>
                                    </View>
                                </View>


                                <MyTextView2>{UserDetails?.name}</MyTextView2>
                                {/* <MyTextView >{UserDetails?.gender}</MyTextView> */}
                                {/* <MyTextView >{UserDetails?.address}</MyTextView> */}
                                {/* <MyTextView >{UserDetails?.email}</MyTextView> */}
                                <MyTextView >{UserDetails2?.local}{UserDetails3?.foreign}</MyTextView>
                                <MyTextView3 >{UserDetails2?.nrc1}{UserDetails2?.nrc2.NRCTownshipCode}{UserDetails2?.nrc3}{UserDetails2?.nrcno}{UserDetails3?.passport}</MyTextView3>
                                {/* <MyTextView >{positions()}</MyTextView> */}
                                {/* <MyTextView >{UserDetails?.company}</MyTextView> */}
                                <MyTextView icon="phone">{UserDetails?.phonenumber} </MyTextView>
                                <MyTextView3 >{UserDetails3?.country.NationalityName}</MyTextView3>

                            </Card>
                        </Cardcontainer>
                        </Cardbigcontainer>

                        <MyTextView1>{purposesview()}</MyTextView1>
                        <MyTextView1>{visiting_departmentview()}</MyTextView1>
                        <Buttoncontainer7>
                            <StyledButton onPress={() => navigation.navigate('Photo')}>
                                <ButtonText>
                                    {i18n.t('back')}
                                </ButtonText>
                            </StyledButton>
                            <StyledButton  onPress={register}>
                                <ButtonText>
                                    {i18n.t('next')}
                                </ButtonText>
                            </StyledButton>
                        </Buttoncontainer7>

                    </StyledFormArea3>
                </Formik>

                <View style={{ height: 50, width: 100 }}><Text></Text></View>
            </InnerContainer>
        </StyledContainer>
    );
};


const styles = StyleSheet.create({

    innerContainer: {
        width: '100%',
     
        justifyContent: 'center',
    },
    avatarcontainer:{
        
        alignItems: 'center',
        display: 'flex',
        
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

const MyTextView = ({ label, icon, ...props }) => {
    return (<View style={[{ marginLeft: '10%' },{width: '100%'}]}>
        <LeftIcon>
            <FontAwesome name={icon} size={16} color={green} />
        </LeftIcon>
        <StyledTextView {...props} />
    </View>);
};
const MyTextView1 = ({ label, icon, ...props }) => {
    return (<View style={[{width: '100%'}]}>
        <StyledTextView2 {...props} />
    </View>);
};
const MyTextView2 = ({ label, icon, ...props }) => {
    return (<View style={[{ marginLeft: '10%' },{width: '100%'}]}>
        <StyledTextView3 {...props} />
    </View>);
};
const MyTextView3 = ({ label, icon, ...props }) => {
    return (<View style={[{ marginLeft: '10%' },{width: '100%'}]}>
        <LeftIcon>
            <FontAwesome name={icon} size={16} color={green} />
        </LeftIcon>
        <StyledTextView4 {...props} />
    </View>);
};
const MyTextView4 = ({ label, icon, ...props }) => {
    return (<View style={[{ marginLeft: '10%' },{width: '100%'}]}>
        <LeftIcon>
            <FontAwesome name={icon} size={16} color={green} />
        </LeftIcon>
        <StyledTextView5 {...props} />
    </View>);
};

export default Verify;
