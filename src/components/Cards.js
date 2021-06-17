import React from 'react'
import Card from './Card';
import './Cards.css';

import { Typography, Box, CircularProgress, Grid  } from "@material-ui/core";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    
    if(!confirmed){
        return <CircularProgress  />
    }

    return (
        <Box className="cards__container">
            <Typography className="heading" variant="h4" gutterBottom>Coronavirus Cases Globally</Typography>
            <Grid container spacing={3} justify="center">
                <Card
                cardTitle="Infected"
                value={confirmed.value}
                desc="Number of Infected Cases of Covid-19"
                lastUpdate={lastUpdate} />
                
                <Card
                cardTitle="Recovered"
                value={recovered.value}
                desc="Number of Recovered Cases from Covid-19"
                lastUpdate={lastUpdate} />
                
                <Card
                cardTitle="Deaths"
                value={deaths.value}
                desc="Number of Deaths Caused by Covid-19"
                lastUpdate={lastUpdate}/>
            </Grid>
        </Box>
    )
}

export default Cards
