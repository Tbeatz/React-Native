import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import { FontAwesome } from '@expo/vector-icons';
import i18n from '../i18n';
// import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import Loader from './../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Breadcrumbbigcontainer, Breadcrumbcontainer, Breadcrumb, BreadText11, BreadText12, BreadText13, BreadText14, BreadText15, Breadsubtext } from './../components/Breadcrumb';
//formik
import { Formik } from 'formik';

import {
    StyledContainer,
    InnerContainer,
    StyledFormArea,
    LeftIcon3,
    StyledInputLabel3,
    Colors,
    StyledButton,
    ButtonText,
    Buttoncontainer2,
    Textcontainer5,
} from './../components/styles';

import { View, StyleSheet, Text, Keyboard, Alert } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

//colors
const { red, darklight, green } = Colors;
// const purpose = ["Eat", "Sleep", "Play", "Work"]
// const visitingdepartment = ["Sale", "Marketing", "IT", "Engineering"]

const Visit = ({ navigation, route }) => {
    const [inputs, setInputs] = React.useState({
        purpose: '',
        visitingdepartment: '',
    });

    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const validate = () => {
        Keyboard.dismiss();
        let valid = true;
        if (!inputs.purpose) {
            handleError(i18n.t('please_input_purpose'), 'purpose');
            valid = false;
        }
        if (!inputs.visitingdepartment) {
            handleError(i18n.t('please_input_visitingdepartment'), 'visitingdepartment');
            valid = false;
        }
        if (valid) {
            register();
        }
    };

    const handleOnChange = (text, input) => {
        // console.log(text, input)
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
                AsyncStorage.setItem('uservisit', JSON.stringify(inputs));
                // console.log('uservisit', inputs)
                navigation.push('Photo')
            } catch (error) {
                Alert.alert("Error", "Something went wrong");
            }

        }, 700);

    }
   
    const [UserDetails, setUserDetails] = React.useState();
    const [data, setData] = useState([])
    const [data1, setData1] = useState([])


    React.useEffect(() => {
        getUserDetails();
        getApiDetails();
        getApiDetails1();

    }, []);
    const getUserDetails = async () => {
        const userData = await AsyncStorage.getItem('api');

        if (userData) {
            setUserDetails(JSON.parse(userData));

        }
    }
    const getApiDetails = async () => {
        const apidata = await AsyncStorage.getItem('ppose');

        if (apidata) {
            setData(JSON.parse(apidata));

        }
    }
    const getApiDetails1 = async () => {
        const apidata = await AsyncStorage.getItem('visitdp');

        if (apidata) {
            setData1(JSON.parse(apidata));

        }
    }
    
    
    // const [data, setData] = useState([])
    // // const [loading1, setLoading1] = useState(true)

    // const ppose = "https://unityitsolutionprovider.com/registration_dash/public/api/get_purpose";

    // useEffect(() => {
    //     fetch(ppose)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             // console.log(json)
    //             setData(json)
    //         })
    //         // .catch((error) => console.error(error))
    //         // .finally(() => setLoading1(false));
    // }, []);
    // const [data1, setData1] = useState([])
    // // const [loading1, setLoading1] = useState(true)

    // const visitdp = "https://unityitsolutionprovider.com/registration_dash/public/api/get_departments";

    // useEffect(() => {
    //     fetch(visitdp)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             // console.log(json)
    //             setData1(json)
    //         })
    //         // .catch((error) => console.error(error))
    //         // .finally(() => setLoading1(false));
    // }, []);
    
    React.useEffect(() => {

        if (UserDetails) {
            const { department: visitingdepartment, ...fulldetail } = UserDetails
            setInputs({ visitingdepartment, ...fulldetail })
            console.log(UserDetails.purpose);
            console.log(UserDetails.visitingdepartment);
        }
    }, [UserDetails]);

    return (

        <StyledContainer>
            <Breadcrumbbigcontainer>
                <Breadcrumbcontainer elevation={5} style={styles.container} >
                    <Breadcrumb><BreadText11>1</BreadText11><Breadsubtext>IDcard</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText12>2</BreadText12><Breadsubtext>Profile</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText13>3</BreadText13><Breadsubtext>Visit</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText14>4</BreadText14><Breadsubtext>Photo</Breadsubtext></Breadcrumb>
                    <Breadcrumb><BreadText15>5</BreadText15><Breadsubtext>Verify</Breadsubtext></Breadcrumb>
                </Breadcrumbcontainer>
            </Breadcrumbbigcontainer>

            <StatusBar hidden />
            <Loader visible={loading} />

            <InnerContainer>
                <Formik>
                    <StyledFormArea>

                        <Textcontainer5>
                            <MySelectInput
                                data={data}
                                selected={inputs.purpose}
                                icon="flag"
                                label={i18n.t('purpose')}
                                onSelect={(text, index) => handleOnChange(text,'purpose')}
                                error={errors.purpose}
                                onFocus={() => {
                                    handleError(null, 'purpose');
                                }}

                            />
                            <MySelectInput1
                                data1={data1}
                                selected={inputs.visitingdepartment}
                                icon="briefcase"
                                label={i18n.t('visiting_department')}
                                onSelect={(text, index) => handleOnChange(text, 'visitingdepartment')}
                                error={errors.visitingdepartment}
                                onFocus={() => {
                                    handleError(null, 'visitingdepartment');
                                }}


                            />
                        </Textcontainer5>


                        <Buttoncontainer2>
                            <StyledButton onPress={() => navigation.navigate('Profile')}>
                                <ButtonText>
                                    {i18n.t('back')}
                                </ButtonText>
                            </StyledButton>
                            <StyledButton onPress={validate}>
                                <ButtonText>
                                    {i18n.t('next')}
                                </ButtonText>
                            </StyledButton>
                        </Buttoncontainer2>
                    </StyledFormArea>

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};


const MySelectInput = ({data, inputs, label, selected, icon, error, onFocus = () => { }, ...props }) => {
    const selectinput = React.useRef();
    const [isFocused, setIsFocused] = React.useState(false);
    const styles = StyleSheet.create({

        dropdown1BtnStyle: {
            width: '70%',
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
        dropdown1DropdownStyle: { backgroundColor: Colors.green, borderRadius: 10 },
        dropdown1RowStyle: { backgroundColor: Colors.green, borderBottomColor: Colors.green },
        dropdown1RowTxtStyle: { color: 'white', textAlign: 'left', fontSize: 16 },

    });
    
    useEffect(() => {
        console.log(data,selected)
        if(selected){
        const findindex = data.findIndex(n => n.id === selected.id)
        if (findindex !== -1){
            selectinput.current.selectIndex(findindex)
        }
        }
    }, [selected,data]);
    return (<View style={[{ marginTop: 10 }, { marginBottom: 10 }]}>
        <LeftIcon3>
            <FontAwesome name={icon} size={23} color={green} />
        </LeftIcon3>
        <StyledInputLabel3>{label}</StyledInputLabel3>
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
                    return selectedItem.purpose_mm
                } else if(i18n.language === 'en') {
                    return selectedItem.purpose
                }
            }}
            rowTextForSelection={(item, index) => {
                if (i18n.language === 'mm') {
                    return item.purpose_mm
                } else if(i18n.language === 'en') {
                    return item.purpose
                }
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            selectedRowStyle={{
                backgroundColor: "white",
            }}
            selectedRowTextStyle={{
                color: "black"
            }}
            buttonTextStyle={{...styles.dropdown1BtnTxtStyle, color: selected ? 'black': Colors.darklight}}
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
            <Text style={{ color: Colors.red }}>
                {error}
            </Text>
        )}
    </View>);
};
const MySelectInput1 = ({data1, inputs, label, selected, icon, error, onFocus = () => { }, ...props }) => {
    const selectinput1 = React.useRef();
    
    const [isFocused, setIsFocused] = React.useState(false);
    const styles = StyleSheet.create({


        dropdown1BtnStyle: {
            width: '70%',
            height: 50,
            backgroundColor: 'white',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: error ? red : isFocused ? green : green,

        },
        dropdown1BtnTxtStyle: {
            color: 'red', textAlign: 'left', paddingLeft: 36,
            paddingRight: 36, fontSize: 16
        },
        dropdown1DropdownStyle: { backgroundColor: Colors.green, borderRadius: 10 },
        dropdown1RowStyle: { backgroundColor: Colors.green, borderBottomColor: Colors.green },
        dropdown1RowTxtStyle: { color: 'white', textAlign: 'left', fontSize: 16 },

    });
   
    useEffect(() => {
        if(selected){
            console.log("selectedvalue",selected)
            console.log("datavalue",selected);
        const findindex = data1.findIndex(p => p.id === selected.id)
        if (findindex !== -1){
            selectinput1.current.selectIndex(findindex)
        }
        } 
    }, [selected,data1]);
    return (<View style={[{ marginTop: 10 }, { marginBottom: 10 }]}>
        <LeftIcon3>
            <FontAwesome name={icon} size={23} color={green} />
        </LeftIcon3>
        <StyledInputLabel3>{label}</StyledInputLabel3>
        <SelectDropdown
            ref={selectinput1}
            defaultButtonText={i18n.t('please_select_option')}
            defaultButtonStyle="black"
            onFocus={() => {
                onFocus();
                setIsFocused(true);
            }}
            onBlur={() => {

                setIsFocused(false);
            }}
            data={data1}
            buttonTextAfterSelection={(selectedItem, index) => {
                if (i18n.language === 'mm') {
                    return selectedItem.div_name 
                } else if(i18n.language === 'en') {
                    return selectedItem.div_name_eng
                }
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                if (i18n.language === 'mm') {
                    return item.div_name
                } else if(i18n.language === 'en') {
                    return item.div_name_eng
                }
                return item.div_name_eng
            }}
            buttonStyle={styles.dropdown1BtnStyle}
             selectedRowStyle={{
                backgroundColor: "white",
            }}
            selectedRowTextStyle={{
                color: "black"
            }}
            buttonTextStyle={{...styles.dropdown1BtnTxtStyle, color: selected ? 'black': Colors.darklight}}
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
            <Text style={{ color: Colors.red }}>
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

});

export default Visit;
