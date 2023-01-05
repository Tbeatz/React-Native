import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

//formik
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
//icons
import { FontAwesome } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown'
import i18n from '../i18n';
import Loader from './../components/Loader';
import { Breadcrumbbigcontainer, Breadcrumbcontainer, Breadcrumb, BreadText1, BreadText2, BreadText3, BreadText4, BreadText5, Breadsubtext } from './../components/Breadcrumb';

import {
    StyledContainer,
    InnerContainer2,
    StyledFormArea,
    LeftIcon6,
    LeftIcon7,
    StyledInputLabel1,
    StyledTextInput1,
    Colors,
    StyledButton,
    ButtonText,
    Buttoncontainer11,
    Textcontainer1,
    RadioButtonContainer,
    RadioButtonText,
    Textinputview,
    Textinputview1,
    Textinputview2,
} from './../components/styles';

import { View, StyleSheet, Text, Keyboard, Alert, TouchableOpacity } from 'react-native';
//colors
const { red, darklight, green } = Colors;

const Profile = ({ navigation, route }) => {

    const [inputs, setInputs] = React.useState({
        name: '',
        phonenumber: '',
        company: '',
        address: '',
        position: '',
        email: '',
        gender: '',
    });

    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const validate = () => {
        Keyboard.dismiss();
        let valid = true;
        if (!inputs.email) {
            handleError(i18n.t('please_input_email'), 'email');
            valid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError(i18n.t('please_input_validemail'), 'email');
            valid = false;
        }

        if (!inputs.name) {
            handleError(i18n.t('please_input_name'), 'name');
            valid = false;
        }
        if (!inputs.phonenumber) {
            handleError(i18n.t('please_input_phonenumber'), 'phonenumber');
            valid = false;
        }
        if (!inputs.company) {
            handleError(i18n.t('please_input_company'), 'company');
            valid = false;
        }
        if (!inputs.address) {
            handleError(i18n.t('please_input_address'), 'address');
            valid = false;
        }
        if (!inputs.position) {
            handleError(i18n.t('please_input_position'), 'position');
            valid = false;
        }

        if (valid) {
            register();
        }
    };

    const handleOnChange = (text, input) => {
        //console.log(text, input)
        setInputs((prevState) => ({ ...prevState, [input]: text }));
    };

    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
    };


    const register = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            try {
                AsyncStorage.setItem('userpf', JSON.stringify(inputs));                
                navigation.push('Visit')
            } catch (error) {
                Alert.alert("Error", "Something went wrong");
            }

        }, 700);

    }
    const [UserDetails, setUserDetails] = React.useState();
    const [data, setData] = React.useState([]);
 
    React.useEffect(() => {
        getUserDetails();
        getApiDetails();

    }, []);
    

    const getUserDetails = async () => {
        const userData = await AsyncStorage.getItem('api');

        if (userData) {
            setUserDetails(JSON.parse(userData));

        }
    }
    const getApiDetails = async () => {
        const apidata = await AsyncStorage.getItem('pos');

        if (apidata) {
            setData(JSON.parse(apidata));

        }
    }

    const [checked, setChecked] = React.useState('Male');

    
     React.useEffect(() => {

        if (UserDetails) {
            const { phone: phonenumber, ...fulldetail } = UserDetails
            setInputs({ phonenumber, ...fulldetail })
            // console.log(UserDetails.position);
            setChecked(UserDetails.gender);
        }
    }, [UserDetails]);
   

    useEffect(() => {
        handleOnChange(checked, 'gender')
    }, [checked])

    // const pos = "https://unityitsolutionprovider.com/registration_dash/public/api/get_positions";
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(pos)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             // console.log(json)
    //             setData(json)
    //         })
    //     // .catch((error) => console.error(error))
    //     // .finally(() => setLoading1(false));
    // }, []);

    return (

        <StyledContainer>
            <Breadcrumbbigcontainer >
                <Breadcrumbcontainer elevation={5} style={styles.container}>
                    <Breadcrumb><BreadText1>1</BreadText1><Breadsubtext>IDcard</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText2>2</BreadText2><Breadsubtext>Profile</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText3>3</BreadText3><Breadsubtext>Visit</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText4>4</BreadText4><Breadsubtext>Photo</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText5>5</BreadText5><Breadsubtext>Verify</Breadsubtext></Breadcrumb>
                </Breadcrumbcontainer>
            </Breadcrumbbigcontainer>



            <StatusBar hidden />

            <Loader visible={loading} />

            <InnerContainer2>

                <Formik>


                    <StyledFormArea>

                        <Textinputview>
                            <MyTextInput

                                icon="id-badge"
                                label={i18n.t('name')}
                                placeholder={i18n.t('enter_your_name')}
                                placeholderTextColor={darklight}
                                onChangeText={(text) => handleOnChange(text, 'name')}
                                error={errors.name}
                                onFocus={() => {
                                    handleError(null, 'name');
                                }}
                                keyboardType="name"
                                input1={inputs.name}

                            />
                            <MyTextInput
                                icon="phone"
                                label={i18n.t('phonenumber')}
                                placeholder={i18n.t('enter_your_phonenumber')}
                                placeholderTextColor={darklight}
                                onChangeText={(text) => handleOnChange(text, 'phonenumber')}
                                error={errors.phonenumber}
                                onFocus={() => {
                                    handleError(null, 'phonenumber');
                                }}

                                keyboardType="numeric"
                                input1={inputs.phonenumber}


                            />
                        </Textinputview>
                        <Textinputview2>
                            <MyTextInput
                                icon="envelope"
                                label={i18n.t('email')}
                                placeholder={i18n.t('enter_your_email')}
                                placeholderTextColor={darklight}
                                onChangeText={(text) => handleOnChange(text, 'email')}
                                error={errors.email}
                                onFocus={() => {
                                    handleError(null, 'email');
                                }}
                                keyboardType="email"
                                input1={inputs.email}

                            />
                            <MyTextInput
                                icon="map-marker"
                                label={i18n.t('address')}
                                placeholder={i18n.t('enter_your_address')}
                                placeholderTextColor={darklight}
                                onChangeText={(text) => handleOnChange(text, 'address')}
                                error={errors.address}
                                onFocus={() => {
                                    handleError(null, 'address');
                                }}
                                input1={inputs.address}

                            />
                        </Textinputview2>
                        <Textinputview1>
                            <MySelectInput
                                data={data}
                                selected={inputs.position}
                                icon="info"
                                label={i18n.t('position')}
                                onSelect={(text, index) => {handleOnChange(text, 'position')
                            // console.log(data[index])
                                }}
                                

                                error={errors.position}
                                onFocus={() => {
                                    handleError(null, 'position');
                                }}

                            />

                            <MyTextInput
                                icon="building"
                                label={i18n.t('company')}
                                placeholder={i18n.t('enter_your_company')}
                                placeholderTextColor={darklight}
                                onChangeText={(text) => handleOnChange(text, 'company')}
                                error={errors.company}
                                onFocus={() => {
                                    handleError(null, 'company');
                                }}
                                input1={inputs.company}

                            />
                        </Textinputview1>
                        <Textcontainer1>

                            <RadioButtonContainer>
                                <TouchableOpacity style={styles.to} onPress={() => setChecked('Male')}>
                                    <RadioButton
                                        value="Male"
                                        status={checked === 'Male' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('Male')}
                                        uncheckedColor={green}
                                        color={green}
                                    />
                                    <RadioButtonText>{i18n.t('male')}</RadioButtonText>
                                </TouchableOpacity>
                            </RadioButtonContainer>


                            <RadioButtonContainer>
                                <TouchableOpacity style={styles.to} onPress={() => setChecked('Female')}>
                                    <RadioButton

                                        value="Female"
                                        status={checked === 'Female' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('Female')}
                                        uncheckedColor={green}
                                        color={green}
                                    />
                                    <RadioButtonText>{i18n.t('female')}</RadioButtonText>
                                </TouchableOpacity>
                            </RadioButtonContainer>

                        </Textcontainer1>

                        <Buttoncontainer11>
                            <StyledButton onPress={() => { navigation.navigate('IDcard'); }}>
                                <ButtonText>
                                    {i18n.t('back')}
                                </ButtonText>
                            </StyledButton>
                            <StyledButton onPress={validate}>
                                <ButtonText>
                                    {i18n.t('next')}
                                </ButtonText>
                            </StyledButton>
                        </Buttoncontainer11>
                    </StyledFormArea>

                </Formik>
            </InnerContainer2>
        </StyledContainer>
    );
};

const MyTextInput = ({ label, input1, icon, error, onFocus = () => { }, ...props }) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (<View style={[{ marginTop: 5 }, { width: '40%' }]}>
        <LeftIcon6>
            <FontAwesome name={icon} size={23} color={green} />
        </LeftIcon6>
        <StyledInputLabel1>{label}</StyledInputLabel1>
        <StyledTextInput1 style={[{ borderColor: error ? red : isFocused ? green : green }]}
            autoCorrect={false}
            onFocus={() => {
                onFocus();
                setIsFocused(true);
            }}
            onBlur={() => {

                setIsFocused(false);
            }}

            {...props} >
            {input1}
        </StyledTextInput1>
        {error && (
            <Text style={{ color: Colors.red }}>
                {error}
            </Text>
        )}

    </View>

    );
};

const MySelectInput = ({ data, label, inputs, icon, selected, error, onFocus = () => { }, ...props }) => {
    const selectinput = React.useRef();
    // const [loading1, setLoading1] = useState(true)

    const [isFocused, setIsFocused] = React.useState(false);
    const styles = StyleSheet.create({

        dropdown1BtnStyle: {
            width: '100%',
            height: 49.5,
            backgroundColor: 'white',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: error ? red : isFocused ? green : green,

        },
        dropdown1BtnTxtStyle: {
            color: 'black', textAlign: 'left', paddingLeft: 36,
            paddingRight: 36, fontSize: 16
        },
        dropdown1DropdownStyle: { backgroundColor: Colors.green, borderRadius: 10 },
        dropdown1RowStyle: { backgroundColor: Colors.green, borderBottomColor: Colors.green },
        dropdown1RowTxtStyle: { color: 'white', textAlign: 'left', fontSize: 16 },

    });



    useEffect(() => {
        if(selected){
        const findindex = data.findIndex(n => n.id === selected.id)
        if (findindex !== -1){
            selectinput.current.selectIndex(findindex)
        }
        } 
    }, [selected,data]);


    return (<View style={[{ marginTop: 8 }, { marginBottom: 30 }, { width: '40%' }]}>
        <LeftIcon7>
            <FontAwesome name={icon} size={23} color={green} />
        </LeftIcon7>
        <StyledInputLabel1>{label}</StyledInputLabel1>
        <SelectDropdown
            ref={selectinput}
            defaultButtonText={i18n.t('please_select_option')}

            onFocus={() => {
                onFocus();
                setIsFocused(true);
            }}
            onBlur={() => {

                setIsFocused(false);
            }}

            data={data}
            buttonTextAfterSelection={(selectedItem, index) => {
                if (i18n.language === 'mm') {
                    return selectedItem.position_mm
                } else if (i18n.language === 'en') {
                    return selectedItem.position_eng
                }
            }}
            rowTextForSelection={(item, index) => {
                if (i18n.language === 'mm') {
                    return item.position_mm
                } else if (i18n.language === 'en') {
                    return item.position_eng
                }
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            selectedRowStyle={{
                backgroundColor: "white",
            }}
            selectedRowTextStyle={{
                color: "black"
            }}
            buttonTextStyle={{ ...styles.dropdown1BtnTxtStyle, color: selected ? 'black' : Colors.darklight }}
            renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={green} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            {...props}
        />
        {error && (
            <Text style={{ color: Colors.red, marginTop: 10 }}>
                {error}
            </Text>
        )}

    </View>
    );

};
const styles = StyleSheet.create({

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
    to: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    }

});

export default Profile;
