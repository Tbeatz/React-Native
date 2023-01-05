import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Formik } from 'formik';
import {
    StyledContainer,
    InnerContainer,
    Pagelogo,
    PageTitle,
    StyledFormArea,
    Colors,
    StyledButton,
    ButtonText,
    Buttoncontainer1,
    Titlecontainer,
    Titlecontainer1,

} from './../components/styles';
import { View } from 'react-native';
import i18n from '../i18n';
import Loader from './../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useMemo } from 'react';
//colors
const { brand, darklight } = Colors;

const Welcome = ({ navigation }) => {
    const [loading, setLoading] = React.useState(false);
    // const [data, setData] = useState([])
    // const [data1, setData1] = useState([])
    // const [data2, setData2] = useState([])
    // const [data3, setData3] = useState([])
    const register = () => {
        setLoading(true);
        const pos = "https://unityitsolutionprovider.com/registration_dash/public/api/get_positions";
        const nation = "https://unityitsolutionprovider.com/registration_dash/public/api/nationalities";
        const ppose = "https://unityitsolutionprovider.com/registration_dash/public/api/get_purpose";
        const visitdp = "https://unityitsolutionprovider.com/registration_dash/public/api/get_departments";
        console.log('loading data')
        
        const fetch0 = fetch(pos)
            .then((response) => response.json())

            .then((json) => {
                
                // console.log(Object.keys(json))
                // setData(json)
                console.log('loaded data')
                AsyncStorage.setItem('pos', JSON.stringify(json));
            })
        const fetch1 = fetch(nation)
            .then((response) => response.json())

            .then((json) => {
                // console.log(Object.keys(json))
                // setData1(json)
                console.log('loaded data1')
                AsyncStorage.setItem('nation', JSON.stringify(json));
            })
        const fetch2 = fetch(ppose)
            .then((response) => response.json())

            .then((json) => {
                // console.log(Object.keys(json))
                // setData2(json)
                console.log('loaded data2')
                AsyncStorage.setItem('ppose', JSON.stringify(json));
            })
        const fetch3 = fetch(visitdp)
            .then((response) => response.json())

            .then((json) => {
                // console.log(Object.keys(json))
                // setData3(json)
                console.log('loaded data3')
                AsyncStorage.setItem('visitdp', JSON.stringify(json));
            })
            
            Promise.all([fetch0, fetch1, fetch2, fetch3]).then(() => {setLoading(false); navigation.push('IDcard'); })       
    }
    return (
        
        
        <StyledContainer>
            
            <StatusBar hidden />
            <Loader visible={loading} />

            <InnerContainer>
                <Titlecontainer>
                    <Pagelogo resizeMode="cover" source={require('./../assets/img/img1.png')} />
                </Titlecontainer>

                <Formik>
                    <StyledFormArea>
                        <Titlecontainer1>
                            
                            
                            <PageTitle>- Welcome to DICA -</PageTitle>
                        </Titlecontainer1>

                        <Buttoncontainer1>

                            <StyledButton onPress={()=>{i18n.changeLanguage('en'); register(); } }>
                                <ButtonText>
                                    English
                                </ButtonText>
                            </StyledButton>
                            <StyledButton onPress={() => { i18n.changeLanguage('mm'); register(); }}>
                                <ButtonText>
                                    မြန်မာ
                                </ButtonText>
                            </StyledButton>
                        </Buttoncontainer1>
                    </StyledFormArea>

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};



export default Welcome;
