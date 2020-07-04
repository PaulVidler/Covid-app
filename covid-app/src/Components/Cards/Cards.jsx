import React from 'react'
import {Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup';


const cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    //console.log(props);
    if(!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>     
                        <Typography variant="h5">
                            <CountUp
                                start={10049505}
                                end={confirmed.value}
                                duration={2.5}
                                separator="," />
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate}</Typography>     
                        <Typography variant="body2">Number of active cases</Typography>     
                    </CardContent>    
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>     
                        <Typography variant="h5" color="textSecondary">
                        <CountUp
                                start={5000000}
                                end={recovered.value}
                                duration={2.5}
                                separator="," />
                                </Typography>     
                        <Typography color="textSecondary">REAL DATE</Typography>     
                        <Typography variant="body2">Number of recovered cases</Typography>     
                    </CardContent>    
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>     
                        <Typography variant="h5" color="textSecondary">
                        <CountUp
                                start={100000}
                                end={deaths.value}
                                duration={2.5}
                                separator="," />
                            </Typography>     
                        <Typography color="textSecondary">REAL DATE</Typography>     
                        <Typography variant="body2">Number of deaths</Typography>     
                    </CardContent>    
                </Grid>
            </Grid>
        </div>
    )
}

export default cards
