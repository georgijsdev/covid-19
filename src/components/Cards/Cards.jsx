import React from 'react'

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css'

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {
    if (!confirmed) {
        return 'Loading...'
    }

    return (
        <div>
            <div className={styles.container}>
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography varaint="h5">
                                <CountUp start={0} end={confirmed.value} durations={2} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography> 
                            <Typography variant="body2">Number of active cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography varaint="h5">
                                <CountUp start={0} end={recovered.value} durations={2} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of recoveries</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography varaint="h5">
                                <CountUp start={0} end={deaths.value} durations={2} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of death people</Typography>
                        </CardContent>
                    </Grid>
                </Grid>

            </div>  
        </div>
    )
}

export default Cards
