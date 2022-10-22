import React from 'react';

const Countries = React.createContext({
    data:[],
    current:[],
    isLoading:false,
    filter:() =>{}
});

export default Countries;