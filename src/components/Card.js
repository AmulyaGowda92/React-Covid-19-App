import React from 'react'
import { Card, Grid, CardContent, Box, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

const CardComponent = ({cardTitle,value,lastUpdate,desc}) => {
    return (
        <Grid component={Card} style={{margin:20, borderBottom: '10px solid yellow'}}>
            <Box className="card__heading">
                <Typography variant="h5" color="textSecondary">{cardTitle}</Typography>
            </Box>
            <CardContent>
            <Typography variant="h5">
                <CountUp start={0} end={value} duration={3} seperator="," />
                </Typography>
                <Typography color="textSecondary">{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
    )
}

export default CardComponent;
