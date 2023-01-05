import styled from 'styled-components';
import Constants from 'expo-constants';
const StatusBarHeight = Constants.statusBarHeight;
//colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#ESE7EB",
    tertiary: "#1F2937",
    darklight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#0baf4e",
    red: "#EF4444",
};
//have to structure them for easy use
const { primary, secondary, tertiary, darklight, brand, green, red } = Colors;

//welcome page, ID page, Profile page, Visit page, Photo page, Verify page
export const StyledContainer = styled.ScrollView` 
    flex: 1;
    padding: 5.5%;
    padding-top: 1%;
    background-color: $(primary);
`
//Welcome page, ID page, Visit page, Photo page, Verify page,
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

//Profile page, 
export const InnerContainer2 = styled.View`
    flex: 1;

    width: 100%;
    align-items: center;
`;
//Welcome page,
export const Pagelogo = styled.Image` 
    
    width : 250px;
    height: 200px;
`;
//Welcome page,
export const PageTitle = styled.Text`
    justify-content: center;
    margin-left: 25%;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    border-Radius: 50px;
    color: ${green};
    padding: 1%;
    width: 50%;
    border: 1px dashed ${green};
`;
//Welcome page,
export const Titlecontainer = styled.View`
   margin-top: 10%;
   display: flex;
`;
//Welcome page,
export const Titlecontainer1 = styled.View`
    margin-top: 20px;
    display: flex;
`;

//Welcome page, ID page, Profile page, Visit page, 
export const StyledFormArea = styled.View`
    
    margin-top: 10px;
    width: 100%;
    flex: 2;
`;
//Photo page,
export const StyledFormArea1 = styled.View`
    margin-top: 5%;
    border-Radius: 20px;
    width: 80%;
    flex: 1;
`;
//Verify page,
export const StyledFormArea3 = styled.View`
    margin-top: 1%;
    border-Radius: 20px;
    width: 100%;
    flex: 1;
`;

//ID page,
export const StyledTextInput0 = styled.TextInput`
    padding : 15px;
    padding-left: 62px;
    padding-right: 55px;
    font-size: 16px;
    height: 50px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
    border: 1px solid ${green};
    borderRadius: 10px;
`;

//Verify page
export const StyledTextView = styled.Text`
    font-size: 16px;
    height: 24px;
    width: 80%;
    margin-vertical: 3px;
    text-align: center;
    color: ${green}; 
`;
//Verify page
export const StyledTextView2 = styled.Text`
    font-size: 16px;
    height: 24px;
    width: 100%;
    margin-vertical: 3px;
    text-align: center;
    color: ${green};
`;
//Verify page
export const StyledTextView3 = styled.Text`
    font-weight: bold;
    font-size: 16px;
    height: 24px;
    width: 80%;
    margin-vertical: 3px;
    text-align: center;
    color: ${green};
`;
//Verify page
export const StyledTextView4 = styled.Text`
    
    font-size: 16px;
    height: 44px;
    width: 80%;
    margin-vertical: 3px;
    text-align: center;
    color: ${green};
`;
//Verify page
export const StyledTextView5 = styled.Text`
    
    font-size: 16px;
    height: 24px;
    width: 80%;
    margin-vertical: 3px;
    text-align: center;
    color: ${green};
`;
//Profile page,
export const StyledTextInput1 = styled.TextInput`
    padding : 15px;
    padding-left: 55px;
    padding-right: 55px;
    font-size: 16px;
    height: 50px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
    border: 1px solid;
    borderRadius: 10px;  
    
`;

//ID page, Profile page,
export const StyledInputLabel1 = styled.Text`
    color: ${green};
    font-size: 13px;
    text-align: left;
    font-weight: bold;
    margin-Bottom: 5px;
    
`;

//Visit page,
export const StyledInputLabel3 = styled.Text`
    color: ${green};
    font-size: 13px;
    text-align: left;
    padding-bottom: 2px;
    font-weight: bold;
    margin-Bottom: 5px;
    
`;
//Verify page
export const LeftIcon = styled.View`
    padding-left:15px;
    padding-top: 6px;
    position: absolute;
    z-index: 1;
`;
//ID page,
export const LeftIcon2 = styled.View`
    
    padding-left:20px;
    padding-top: 35px;
    position: absolute;
    z-index: 1;
`;
//Visit page,
export const LeftIcon3 = styled.View`
    
    padding-left:15px;
    padding-top: 40px;
    position: absolute;
    z-index: 1;
`;
//ID page,
export const LeftIcon4 = styled.View`
    
    padding-left:15px;
    padding-top: 37.5px;
    position: absolute;
    z-index: 1;
`;

//ID page,
export const LeftIcon5 = styled.View`
    
    padding-left:15px;
    padding-top: 40px;
    position: absolute;
    z-index: 1;
`;
//Profile page,
export const LeftIcon6 = styled.View`
    
    padding-left:15px;
    padding-top: 40px;
    position: absolute;
    z-index: 1;
`;
//Profile page,
export const LeftIcon7 = styled.View`
    
    padding-left:23px;
    padding-top: 38px;
    position: absolute;
    z-index: 1;
`;

//Welcome page, ID page, Profile page, Visit page, Verify page
export const StyledButton = styled.TouchableOpacity`
    
    background-color: ${green};
    justify-content: center;
    align-items: center;
    border-Radius: 15px;
    margin-vertical: 5px;
    height: 50px;
    width: 120px;
    padding-bottom: 1px;
`;
//Photo page,
export const StyledButton1 = styled.TouchableOpacity`
    
    background-color: ${green};
    justify-content: center;
    align-items: center;
    border-Radius: 15px;
    margin-vertical: 5px;
    height: 42px;
    width: 100px;
    padding-bottom: 1px;
`;

//Welcome page, ID page, Profile page, Visit page, Photo page, Verify page
export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 17px;
    justify-content: center;
    align-items: center;
`;
//Welcome page,
export const Buttoncontainer1 = styled.View`
    
    margin-top: 5%;
    flex: 1;
    width: 100%;
    padding-bottom: 5%
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

`;
//Visit page,
export const Buttoncontainer2 = styled.View`
    
    margin-top: 5%;
    flex: 1;
    width: 100%;
    padding-bottom: 5%
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

`;
//ID page,
export const Buttoncontainer5 = styled.View`
    
    margin-top: 50px;
    flex: 1;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 5%

`;
//Verify page
export const Buttoncontainer7 = styled.View`
    margin-top: 5px;
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

`;

//Photo page,
export const Buttoncontainer9 = styled.View`
    
    padding-bottom: 5%
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

`;
//Profile page,
export const Buttoncontainer11 = styled.View`
    
    margin-top: 30px;
    flex: 1;
    width: 100%;
    display: flex;
    padding-bottom: 5%
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

`;

//Profile page
export const Textcontainer1 = styled.View` 

    flex-direction: row;
    justify-content: space-evenly;

`;
//Visit page
export const Textcontainer5 = styled.View` 

    flex: 1;
    justify-Content: center;
    align-Items: center;
    width: 100%;
    margin-top: 5%;
    justify-content: center;
    

`;
//ID page,
export const Textcontainer6 = styled.View` 
    flex-direction: row;
    width: 100%;      
    justify-content: space-evenly;
    margin-top: 50px;
    margin-left: 15%;  

`;
//ID page,
export const Textcontainer7 = styled.View` 
    flex-direction: row;
    width: 100%;    
    justify-content: space-evenly;
    margin-top: 10%;
    margin-left: 9.5%

`;
//Verify page
export const Cardcontainer = styled.View` 
    display: flex;
    margin-left: 30%;
    width: 40%;
    height: 380px;
   
    backgroundColor: white;

`;
;
//Verify page
export const Cardbigcontainer = styled.View` 

    display: flex;
    width: 100%;
    height: 360px;
    backgroundColor: white;

`;
//Profile page
export const RadioButtonContainer = styled.View`
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
    border: 1px solid ${green};
    border-Radius : 15px;
    width: 120px;
    height: 42px;
    padding-top: 1px;   

`;
//ID page,
export const RadioButtonContainer1 = styled.View`
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
    border: 1px solid ${green};
    border-Radius : 10px;
    padding-top: 5px;
    width: 40%;
    height: 50px;

`;
//ID page
export const Radiocardcontainer = styled.View`
    width: 100%
    margin-top: 10%;
    flex-direction: row;
    display: flex;
    justify-content: space-evenly; 

`;
//Profile page,
export const RadioButtonText = styled.Text`

    padding-right: 13px;
    padding-top: 8px;
    font-size: 15px;
    color:black;

`;
//ID page,
export const RadioButtonText1 = styled.Text`
   
    margin-right: 55%;
    padding-top: 2.5%;
    font-size: 15px;
    color: black;

`;
//Profile page
export const Textinputview = styled.View`
    flex-direction: row;
    
    justify-content: space-evenly;
    margin-top: 10px;
`;
//Profile page
export const Textinputview1 = styled.View`
    flex-direction: row;
    margin-top: 5px;
    justify-content: space-evenly;
`;
//Profile page
export const Textinputview2 = styled.View`
    flex-direction: row;
    margin-top: 5px;
    justify-content: space-evenly;
  
    
`;














































