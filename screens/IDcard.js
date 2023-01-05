import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState, useEffect, useMemo } from 'react';
import { Formik } from 'formik';
import SelectDropdown from 'react-native-select-dropdown'
import { RadioButton } from 'react-native-paper';
import { Breadcrumbbigcontainer, Breadcrumbcontainer, Breadcrumb, BreadText6, BreadText7, BreadText8, BreadText9, BreadText10, Breadsubtext } from './../components/Breadcrumb';
import {
    StyledContainer,
    InnerContainer,
    StyledFormArea,
    StyledInputLabel1,
    StyledTextInput0,
    LeftIcon4,
    Colors,
    StyledButton,
    ButtonText,
    Buttoncontainer5,
    Textcontainer6,
    Textcontainer7,
    RadioButtonText1,
    RadioButtonContainer1,
    Radiocardcontainer,
    LeftIcon5
} from './../components/styles';
import { View, Text, StyleSheet, Keyboard, Alert, TouchableOpacity } from 'react-native';
import i18n from '../i18n';
import Loader from './../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

import csv, { NRCRegionIDS, getNRCTownshipCodes, getNRC } from './NRCTownshipCode.js'
// console.log(NRCRegionIDS)
// console.log(getNRCTownshipCodes(NRCRegionIDS[0]))
const { red, darklight, green } = Colors;
const nrc1 = NRCRegionIDS
const nrc1label = v => v
const nrc3 = ["(နိုင်)", "(ပြု)", "(ဧည့်)", "(သ)", "(သီ)", "(စ)"]


const IDcard = ({ navigation, route }) => {
    const [inputs, setInputs] = React.useState({
        nrcno: '',
        nrc1: '',
        nrc2: '',
        nrc3: '',
        local: '',
    });
    const [finputs, setfInputs] = React.useState({
        passport: '',
        country: '',
        foreign: '',
    });

    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);


    const validate = () => {

        Keyboard.dismiss();
        let valid = true;
        if (checked == 'local') {

            if (!inputs.nrcno) {
                handleError(i18n.t('please_input_nrcno'), 'nrcno');
                valid = false;
            }
            if (!inputs.nrc1) {
                handleError(i18n.t('please_input_nrc1'), 'nrc1');
                valid = false;
            }
            if (!inputs.nrc2) {
                handleError(i18n.t('please_input_nrc2'), 'nrc2');
                valid = false;
            }
            if (!inputs.nrc3) {
                handleError(i18n.t('please_input_nrc3'), 'nrc3');
                valid = false;
            }
        }
        if (checked == 'foreign') {

            if (!finputs.passport) {
                handleError(i18n.t('please_input_passport'), 'passport');
                valid = false;
            }
            if (!finputs.country) {
                handleError(i18n.t('please_input_country'), 'country');
                valid = false;
            }
        }
        if (valid) {
            register();
        }
    };
    const handleOnChange = (text, input) => {
        // console.log(text, input)
        setInputs((prevState) => ({ ...prevState, [input]: text }));
        setfInputs((prevState) => ({ ...prevState, [input]: text }));
    };
    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
    };


    // const [data, setData] = useState([])
    // const visitordata = 'https://unityitsolutionprovider.com/registration_dash/public/api/get_visitors_nrcandpassport?LF='+finputs.foreign+'&passport='+finputs.passport;
    // useEffect(() => {
    //     if(inputs.nrcno?.length==6 || finputs.passport?.length==5){
    //         console.log('loading data')
    //         fetch(visitordata)
    //             .then((response) => response.json())
    //             .then((json) => {
    //                 console.log(json)
    //                 console.log('loaded data')
    //                 setData(json)
    //             })
    //     } 
    //     // .catch((error) => console.error(error))
    //     // .finally(() => setLoading1(false));
    // }, [inputs,finputs]);


    // useEffect(() => {
    //     AsyncStorage.removeItem('api_local');
    //     AsyncStorage.removeItem('api_foreign');
    //     if (checked == 'local' && inputs.nrc1 && inputs.nrc2 && inputs.nrc3 && inputs.nrcno) {
    //         const visitor = data.find(n => n.nrc === getNRC(inputs));
    //         if (visitor) {
    //             // console.log('visitor', Object.keys(visitor))
    //             AsyncStorage.setItem('api_local', JSON.stringify(visitor))
    //             // AsyncStorage.getItem('api_local').then(v => console.log('api_local', v))
    //         }
    //     } else if (checked == 'foreign' && finputs.passport) {
    //         const findpp = data.find(p => p.passport === finputs.passport);
    //         if (findpp) {
    //             // console.log('findpp', Object.keys(findpp))
    //             AsyncStorage.setItem('api_foreign', JSON.stringify(findpp))
    //             // AsyncStorage.getItem('api_foreign').then(v => console.log('api_foreign', v))
    //         }
    //     }
    // }, [finputs, inputs, data])
    // const [data, setData] = useState([])


    // useEffect(() => {
    //     AsyncStorage.removeItem('api');

    //     if (data) {

    //         AsyncStorage.setItem('api', JSON.stringify(data))

    //     }


    // }, [finputs, inputs, data])



    const register = () => {
        setLoading(true);
        let visitordata = 'https://unityitsolutionprovider.com/registration_dash/public/api/get_visitors_nrcandpassport?LF='
        if (checked=='local') {
            // console.log(inputs.nrc2);
            visitordata += inputs.local + '&nric=' + inputs.nrc1 + inputs.nrc2.NRCTownshipCode + inputs.nrc3 + inputs.nrcno;
        } else if(checked=='foreign') {
            visitordata += finputs.foreign + '&passport=' + finputs.passport + '&country=' + finputs.country.id;
        }
        
        console.log(visitordata);



        // console.log('loading data')
        fetch(visitordata)
            .then((response) => response.json())

            .then((json) => {
                setLoading(false);
                console.log(Object.keys(json))
                console.log('loaded data')
                if (json.name) {
                    console.log('Run or not');
                    
                    AsyncStorage.removeItem('userpic');
                    AsyncStorage.removeItem('userpf');
                    AsyncStorage.removeItem('uservisit');
                    AsyncStorage.removeItem('api');
                    AsyncStorage.setItem('api', JSON.stringify(json));
                    AsyncStorage.removeItem('userID');
                    AsyncStorage.removeItem('userforeignID');
                    checked == 'local' && AsyncStorage.setItem('userID', JSON.stringify(inputs));
                    checked == 'foreign' && AsyncStorage.setItem('userforeignID', JSON.stringify(finputs));
                    navigation.push('Profile')

                }
                else {
                    console.log('Run1 or not');
                    AsyncStorage.removeItem('userpic');
                    AsyncStorage.removeItem('userpf');
                    AsyncStorage.removeItem('uservisit');
                    AsyncStorage.removeItem('api');
                    AsyncStorage.removeItem('userID');
                    AsyncStorage.removeItem('userforeignID');
                    checked == 'local' && AsyncStorage.setItem('userID', JSON.stringify(inputs));
                    checked == 'foreign' && AsyncStorage.setItem('userforeignID', JSON.stringify(finputs));
                    navigation.push('Profile')
                }


            })
        // .catch((error) => console.error(error))
    }
    const settoLocal = () => { setChecked('local'); }
    const settoForeigner = () => { setChecked('foreign'); }
    const [checked, setChecked] = React.useState('local');

    useEffect(() => {
        setInputs({})
        setfInputs({})
        setErrors({})
        handleOnChange(checked, 'local')
        handleOnChange(checked, 'foreign')
        AsyncStorage.removeItem('userID');
        AsyncStorage.removeItem('userforeignID');
    }, [checked])

    return (

        <StyledContainer>

            <Breadcrumbbigcontainer>
                <Breadcrumbcontainer elevation={5} style={styles.container}>
                    <Breadcrumb><BreadText6>1</BreadText6><Breadsubtext>IDcard</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText7>2</BreadText7><Breadsubtext>Profile</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText8>3</BreadText8><Breadsubtext>Visit</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText9>4</BreadText9><Breadsubtext>Photo</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText10>5</BreadText10><Breadsubtext>Verify</Breadsubtext></Breadcrumb>
                </Breadcrumbcontainer>
            </Breadcrumbbigcontainer>
            <StatusBar hidden />
            <Loader visible={loading} />

            <InnerContainer>

                <Formik>
                    <StyledFormArea>

                        <Radiocardcontainer >

                            <RadioButtonContainer1>
                                <TouchableOpacity style={styles.to} onPress={settoLocal}>

                                    <RadioButton
                                        value="local"
                                        status={checked === 'local' ? 'checked' : 'unchecked'}
                                        onPress={settoLocal}
                                        uncheckedColor={green}
                                        color={green}
                                    />
                                    <RadioButtonText1>{i18n.t('local')}</RadioButtonText1>
                                </TouchableOpacity>
                            </RadioButtonContainer1>


                            <RadioButtonContainer1>
                                <TouchableOpacity style={styles.to} onPress={settoForeigner}>
                                    <RadioButton
                                        value="foreign"
                                        status={checked === 'foreign' ? 'checked' : 'unchecked'}
                                        onPress={settoForeigner}
                                        uncheckedColor={green}
                                        color={green}
                                    />
                                    <RadioButtonText1  >{i18n.t('foreigner')}</RadioButtonText1>
                                </TouchableOpacity>
                            </RadioButtonContainer1>

                        </Radiocardcontainer>

                        {
                            checked == 'foreign' ? (
                                <Textcontainer6>
                                    <MySelectInput
                                        selected={finputs.country}
                                        icon="globe"
                                        label={i18n.t('country')}
                                        onSelect={(text, index) => handleOnChange(text, 'country')}
                                        error={errors.country}
                                        onFocus={() => {
                                            handleError(null, 'country');
                                        }}

                                    />

                                    <MyTextInput2
                                        icon="id-card"
                                        label={i18n.t('passport')}
                                        placeholder={i18n.t('enter_your_number')}
                                        placeholderTextColor={darklight}
                                        onChangeText={(text) => handleOnChange(text, 'passport')}
                                        error={errors.passport}
                                        onFocus={() => {
                                            handleError(null, 'passport');
                                        }}
                                        keyboardType=""
                                    />
                                </Textcontainer6>
                            ) : null
                        }

                        {
                            checked == 'local' ? (


                                <Textcontainer7>
                                    <MySelectInput1
                                        selected={inputs.nrc1}
                                        label={i18n.t('nrc')}
                                        onSelect={(text, index) => handleOnChange(text, 'nrc1')}
                                        error={errors.nrc1}
                                        onFocus={() => {
                                            handleError(null, 'nrc1');
                                        }}

                                    />
                                    <MySelectInput2
                                        selected={inputs.nrc2}
                                        placeholderTextColor={darklight}
                                        onSelect={(text, index) => {
                                            console.log('hhhh',text);
                                            handleOnChange(text, 'nrc2')}}
                                        error={errors.nrc2}
                                        nrc1={inputs.nrc1}
                                        onFocus={() => {
                                            handleError(null, 'nrc2');
                                        }}
                                    />
                                    <MySelectInput3

                                        selected={inputs.nrc3}
                                        placeholderTextColor={darklight}
                                        onSelect={(text, index) => handleOnChange(text, 'nrc3')}
                                        error={errors.nrc3}
                                        onFocus={() => {
                                            handleError(null, 'nrc3');
                                        }}
                                    />
                                    <MyTextInput

                                        placeholderTextColor={darklight}
                                        onChangeText={(text) => handleOnChange(text, 'nrcno')}
                                        error={errors.nrcno}
                                        onFocus={() => {
                                            handleError(null, 'nrcno');
                                        }}
                                        keyboardType="numeric"
                                    />

                                </Textcontainer7>
                            ) : null}

                    </StyledFormArea>

                </Formik>
                <Buttoncontainer5>
                    <StyledButton onPress={() => {
                        validate();

                    }}>
                        <ButtonText>
                            {i18n.t('next')}
                        </ButtonText>
                    </StyledButton>
                </Buttoncontainer5>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({ label, icon, error, onFocus = () => { }, ...props }) => {
    const [isFocused, setIsFocused] = React.useState(false);
    return (<View style={[{ width: "29%" }, { marginRight: '22%' }]}>
        <StyledInputLabel1>{label}</StyledInputLabel1>
        <StyledTextInput0 style={[{ borderColor: error ? red : isFocused ? green : green }]}
            autoCorrect={false}
            onFocus={() => {
                onFocus();
                setIsFocused(true);
            }}
            onBlur={() => {

                setIsFocused(false);
            }}

            {...props} />
        {error && (
            <Text style={{ color: Colors.red }}>
                {error}
            </Text>
        )}
    </View>);
};
const MyTextInput2 = ({ label, icon, error, onFocus = () => { }, ...props }) => {
    const [isFocused, setIsFocused] = React.useState(false);
    return (<View style={[{ width: '40%' }, { marginRight: '55%' }]}>
        <LeftIcon5>
            <FontAwesome name={icon} size={23} color={green} />
        </LeftIcon5>
        <StyledInputLabel1>{label}</StyledInputLabel1>
        <StyledTextInput0 style={[{ borderColor: error ? red : isFocused ? green : green }]}
            autoCorrect={false}
            onFocus={() => {
                onFocus();
                setIsFocused(true);
            }}
            onBlur={() => {

                setIsFocused(false);
            }}

            {...props} />
        {error && (
            <Text style={{ color: Colors.red }}>
                {error}
            </Text>
        )}
    </View>);
};

const MySelectInput = ({ label, icon, error, selected, onFocus = () => { }, ...props }) => {
    // const [data, setData] = useState([])
    // // const [loading1, setLoading1] = useState(true)

    // const nation = "https://unityitsolutionprovider.com/registration_dash/public/api/nationalities";

    // useEffect(() => {
    //     fetch(nation)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             // console.log(json)
    //             setData(json)
    //         })
    //     // .catch((error) => console.error(error))
    //     // .finally(() => setLoading1(false));
    // }, []);
    const [data, setData] = useState([])
    React.useEffect(() => {
        getApiDetails();

    }, []);
    const getApiDetails = async () => {
        const apidata = await AsyncStorage.getItem('nation');
        // console.log(apidata);

        if (apidata) {
            setData(JSON.parse(apidata));

        }
    }

    const [isFocused, setIsFocused] = React.useState(false);
    const styles = StyleSheet.create({


        dropdown1BtnStyle: {
            width: '50%',
            height: 50,
            backgroundColor: 'white',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: error ? red : isFocused ? green : green,

        },
        dropdown1BtnTxtStyle: {
            color: 'black', textAlign: 'left', paddingLeft: 36,
            paddingRight: 36, fontSize: 16
        },
        dropdown1BtnTxtStyle1: {
            color: 'black', textAlign: 'left', paddingLeft: 5,
            paddingRight: 36, fontSize: 16
        },
        dropdown1DropdownStyle: { backgroundColor: Colors.green, borderRadius: 10 },
        dropdown1RowStyle: { backgroundColor: Colors.green, borderBottomColor: Colors.green },
        dropdown1RowTxtStyle: { color: 'white', textAlign: 'left', fontSize: 16 },


    });


    return (<View style={[{ marginTop: 2.8 }, { width: '80%' }, { marginLeft: '25%' }]}>
        <LeftIcon4>
            <FontAwesome name={icon} size={23} color={green} />
        </LeftIcon4>
        <StyledInputLabel1>{label}</StyledInputLabel1>

        {/* {loading1 ? ( <Text></Text>) : ( */}
        <SelectDropdown
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

                return selectedItem.NationalityName
            }}
            rowTextForSelection={(item, index) => {

                return item.NationalityName
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
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={green} size={15} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            {...props}
        />
        {/* )}            */}

        {error && (
            <Text style={{ color: Colors.red, marginTop: 9 }}>
                {error}
            </Text>

        )}

    </View>);
};

const selectStyles = StyleSheet.create({


    dropdown1BtnStyle: {
        width: '60%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
    },
    dropdown1BtnTxtStyle: {
        color: 'black', textAlign: 'left', paddingLeft: 36,
        paddingRight: 36, fontSize: 16
    },
    dropdown1BtnTxtStyle1: {
        color: 'black', textAlign: 'left', paddingLeft: 1,
        paddingRight: 36, fontSize: 16
    },
    dropdown1DropdownStyle: { backgroundColor: Colors.green, borderRadius: 10 },
    dropdown1RowStyle: { backgroundColor: Colors.green, borderBottomColor: Colors.green },
    dropdown1RowTxtStyle: { color: 'white', textAlign: 'left', fontSize: 16 },


});

const MySelectInput1 = ({ label, icon, error, onFocus = () => { }, selected, ...props }) => {

    const [isFocused, setIsFocused] = React.useState(false);

    return (<View style={[{ marginTop: 3.7 }, { marginLeft: '3%' }, { width: 200 }]}>

        <StyledInputLabel1>{label}</StyledInputLabel1>
        <SelectDropdown
            defaultButtonText={i18n.t('please_select_option')}
            onFocus={() => {
                onFocus();
                setIsFocused(true);
            }}
            onBlur={() => {

                setIsFocused(false);
            }}
            data={nrc1}

            buttonTextAfterSelection={(selectedItem, index) => {

                return selectedItem
            }}
            rowTextForSelection={nrc1label}
            buttonStyle={{ ...selectStyles.dropdown1BtnStyle, borderColor: error ? red : isFocused ? green : green }}
            selectedRowStyle={{
                backgroundColor: "white",
            }}
            selectedRowTextStyle={{
                color: "black",
            }}
            buttonTextStyle={{ ...selectStyles.dropdown1BtnTxtStyle1, color: selected ? 'black' : Colors.darklight }}
            renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={green} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={selectStyles.dropdown1DropdownStyle}
            rowStyle={selectStyles.dropdown1RowStyle}
            rowTextStyle={selectStyles.dropdown1RowTxtStyle}
            {...props}
        />
        {error && (
            <Text style={{ color: Colors.red, marginTop: 9 }}>
                {error}
            </Text>
        )}
    </View>);
};
const MySelectInput2 = ({ nrc1, label, icon, error, selected, onFocus = () => { }, ...props }) => {
    const data = useMemo(() => nrc1 ? getNRCTownshipCodes(nrc1) : [], [nrc1])

    useEffect(() => {
        // console.log(nrc1, data.length)
    }, [nrc1, data])

    const [isFocused, setIsFocused] = React.useState(false);
    const styles = StyleSheet.create({


        dropdown1BtnStyle: {
            width: '73.5%',
            height: 50,
            backgroundColor: 'white',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: error ? red : isFocused ? green : green,

        },
        dropdown1BtnTxtStyle: {
            color: 'black', textAlign: 'left', paddingLeft: 1,
            paddingRight: 36, fontSize: 16
        },
        dropdown1BtnTxtStyle1: {
            color: 'black', textAlign: 'left', paddingLeft: 1,
            paddingRight: 36, fontSize: 16
        },
        dropdown1DropdownStyle: { backgroundColor: Colors.green, borderRadius: 10 },
        dropdown1RowStyle: { backgroundColor: Colors.green, borderBottomColor: Colors.green },
        dropdown1RowTxtStyle: { color: 'white', textAlign: 'left', fontSize: 16 },


    });
    return (<View style={[{ marginTop: 3.7 }, { marginRight: '4%' }, { width: 200 }]}>

        <StyledInputLabel1>{label}</StyledInputLabel1>
        <SelectDropdown
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

                return selectedItem.NRCTownshipCode
            }}
            rowTextForSelection={(item, index) => {

                return item.NRCTownshipCode
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            selectedRowStyle={{
                backgroundColor: "white",
            }}
            selectedRowTextStyle={{
                color: "black"
            }}
            buttonTextStyle={{ ...styles.dropdown1BtnTxtStyle1, color: selected ? 'black' : Colors.darklight }}
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
            <Text style={{ color: Colors.red, marginTop: 9 }}>
                {error}
            </Text>
        )}
    </View>);
};
const MySelectInput3 = ({ label, icon, error, selected, onFocus = () => { }, ...props }) => {

    const [isFocused, setIsFocused] = React.useState(false);
    const styles = StyleSheet.create({


        dropdown1BtnStyle: {
            width: '66%',
            height: 50,
            backgroundColor: 'white',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: error ? red : isFocused ? green : green,

        },
        dropdown1BtnTxtStyle: {
            color: 'black', textAlign: 'left', paddingLeft: 36,
            paddingRight: 36, fontSize: 16
        },
        dropdown1BtnTxtStyle1: {
            color: 'black', textAlign: 'left', paddingLeft: 1,
            paddingRight: 36, fontSize: 16
        },
        dropdown1DropdownStyle: { backgroundColor: Colors.green, borderRadius: 10 },
        dropdown1RowStyle: { backgroundColor: Colors.green, borderBottomColor: Colors.green },
        dropdown1RowTxtStyle: { color: 'white', textAlign: 'left', fontSize: 16 },


    });
    return (<View style={[{ marginTop: 3.7 }, { marginRight: '1%' }, { width: 200 }]}>
        <StyledInputLabel1>{label}</StyledInputLabel1>
        <SelectDropdown
            defaultButtonText={i18n.t('please_select_option')}
            onFocus={() => {
                onFocus();
                setIsFocused(true);
            }}
            onBlur={() => {

                setIsFocused(false);
            }}
            data={nrc3}

            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            selectedRowStyle={{
                backgroundColor: "white",
            }}
            selectedRowTextStyle={{
                color: "black"
            }}
            buttonTextStyle={{ ...selectStyles.dropdown1BtnTxtStyle1, color: selected ? 'black' : Colors.darklight }}
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
            <Text style={{ color: Colors.red, marginTop: 9 }}>
                {error}
            </Text>
        )}
    </View>);
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
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    }


});


export default IDcard;