import React from 'react';

const Countries = React.createContext({
    data:[],
    current:[],
    isLoading:false,
    filter:() =>{},
    theme:false,
    toggleTheme:() => {},
    countryFilter:'',
    addCountryFilter:() =>{}
});

export default Countries;