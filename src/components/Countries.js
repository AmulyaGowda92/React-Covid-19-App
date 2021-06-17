import React, { useState, useEffect } from 'react';
import { Typography, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../services/api";

const Countries = ({handleChangeCountry}) => {

    const [countries, setCountries] = useState([]);


    useEffect(() => {

        const fetchCountriesData = async () => {
            
            const fetchAllCountries = await fetchCountries();
            setCountries(fetchAllCountries);

        }
        
        fetchCountriesData();
    },[])


    return (
       
        <div style={{paddingBottom:"3rem"}}>
            <Typography style={{marginBottom:20}} variant="h5" color="textSecondary">Reported Cases or Deaths by Country or Territory</Typography>
            <NativeSelect onChange={(e) => handleChangeCountry(e.target.value)} style={{ display: "flex" , width:"100%" , justifyContent:"center"}}>
                <option value="">United States</option>
                {countries.map((country,i)=>{
                    return (
                        <option key={i} value={country}>{country}</option>
                    )
                })}
            </NativeSelect>
        </div>
    )
}

export default Countries
