import React from 'react'
import {Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core'
import styles from './Cards.module.css'


const cards = (props) => {
    console.log(props);

    

    return (
        <div className={StylesProvider.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>     
                        <Typography variant="h5" color="textSecondary">REAL DATA</Typography>     
                        <Typography color="textSecondary">REAL DATE</Typography>     
                        <Typography variant="body2">Number of active cases</Typography>     
                    </CardContent>    
                </Grid>
            </Grid>
        </div>
    )
}

export default cards
