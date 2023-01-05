import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const resources = {
  en: {
    translation: {
      local: 'Local',
      foreigner: 'Foreigner',
      nrc: 'NRC',
      nrc: 'NRC',
      next: 'Next',
      back: 'Back',
      country: 'Country',
      enter_your_number: 'Enter your number',
      email: 'Email',
      enter_your_email: 'Enter your email',
      name: 'Name',
      enter_your_name: 'Enter your name',
      position: 'Position',
      phonenumber: 'Phone Number',
      enter_your_phonenumber: 'Enter your phone number',
      phonenumber: 'Phone Number',
      enter_your_phonenumber: 'Enter your phone number',
      address: 'Address',
      enter_your_address: 'Enter your address',
      company: 'Company',
      enter_your_company: 'Enter your company',
      male: 'Male',
      female:'Female',
      purpose: 'Purpose',
      passport: 'Passport',
      visiting_department:'Visiting Department',
      please_input_name: 'Please Input name',
      please_input_email:'Please Input email',
      please_input_phonenumber: 'Please Input phonenumber',
      please_input_address: 'Please Input address',
      please_input_company: 'Please Input company',
      please_input_position: 'Please Select your position',
      please_input_validemail: 'Please Input Valid email',
      please_input_passport:'Please Input passport',
      please_input_country:'Please Select your country',
      please_input_nrcno:'Please Input number',
      please_input_nrc1:'Please Select',
      please_input_nrc2:'Please Select',
      please_input_nrc3:'Please Select',
      please_input_purpose:'Please Select purpose',
      please_input_visitingdepartment:'Please Select visiting department',
      please_select_option:'Select an option.',
      please_take_pic:'Please take your picture!',
    }
  },
  mm: {
    translation: {
      local: 'နိုင်ငံသား',
      foreigner: 'နိုင်ငံခြားသား',
      nrc: 'မှတ်ပုံတင် -',
      next: 'ရှေ့သို့',
      back: 'နောက်သို့',
      country: 'နိုင်ငံများ',
      enter_your_number: 'သင့်နံပါတ်ကိုထည့်ပါ',
      email: 'အီးမေးလ်',
      enter_your_email: 'အီးမေးလ်လိပ်စာထည့်ပါ',
      name: 'နာမည်',
      enter_your_name: 'သင်၏အမည်ကိုထည့်ပါ',
      position: 'ရာထူး',
      phonenumber: 'ဖုန်းနံပါတ်',
      enter_your_phonenumber: 'သင့်ဖုန်းနံပါတ်ကိုထည့်ပါ',
      address: 'လိပ်စာ',
      enter_your_address: 'သင်၏လိပ်စာကိုထည့်ပါ',
      company: 'ကုမ္ပဏီ',
      enter_your_company: 'သင့်ကုမ္ပဏီအမည်ကိုထည့်သွင်းပါ',
      male: 'ယောက်ျား',
      female:'မိန်းမ',
      purpose:'ရည်ရွယ်ချက်',
      passport: 'နိုင်ငံကူးလက်မှတ်',
      visiting_department:'ဌာန',
      please_input_name: 'ကျေးဇူးပြု၍နာမည်ထည့်ပါ',
      please_input_email:'ကျေးဇူးပြု၍အီးမေးလ်ထည့်ပါ',
      please_input_phonenumber: 'ကျေးဇူးပြု၍ဖုန်းနံပါတ်ထည့်ပါ',
      please_input_address: 'ကျေးဇူးပြု၍လိပ်စာထည့်ပါ',
      please_input_company: 'ကျေးဇူးပြု၍ကုမ္ပဏီအမည်ထည့်ပါ',
      please_input_position: 'ကျေးဇူးပြု၍ရာထူးကိုရွေးချယ်ပါ',
      please_input_validemail: 'ကျေးဇူးပြု၍မှန်ကန်သောအီးမေးလ်ကိုထည့်သွင်းပါ',
      please_input_passport:'ကျေးဇူးပြု၍နိုင်ငံကူးလက်မှတ်နံပါတ်ထည့်ပါ',
      please_input_country:'ကျေးဇူးပြု၍သင့်နိုင်ငံကိုရွေးချယ်ပါ',
      please_input_nrcno:'နံပါတ်ထည့်ပါ',
      please_input_nrc1:'ရွေးချယ်ပါ',
      please_input_nrc2:'ရွေးချယ်ပါ',
      please_input_nrc3:'ရွေးချယ်ပါ',
      please_input_purpose:'ရည်ရွယ်ချက်ကိုရွေးချယ်ပါ',
      please_input_visitingdepartment:'ဌာနကိုရွေးချယ်ပါ',
      please_select_option: 'တစ်ခုကိုရွေးချယ်ပါ',
      please_take_pic:'ကျေးဇူးပြု၍ဓာတ်ပုံရိုက်ပါ',
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    debug: true,
    resources,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;