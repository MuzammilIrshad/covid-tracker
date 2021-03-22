import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Chart from './Chart';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop:'2em'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
   
   
}));

export default function Info(props) {
    console.log(props.value);
    const classes = useStyles();
    const [apiData, setapiData] = useState('');
    let countryName = props.value;
   
    useEffect(() => {
        if (countryName != '') {
            const  getGlobalData = async() => {
                const data = await fetch(`https://disease.sh/v3/covid-19/countries/${countryName}`);
                let response = await data.json();
                // let country = response.filter((data) => data['country'] == props.value);
                //console.log(country);
                setapiData(response);
            }
            getGlobalData();
        } else {
           const getCountry = async() => {
                const dataCountry = await fetch("https://disease.sh/v3/covid-19/all");
                let response = await dataCountry.json();
                // let country = response.filter((data) => data['country'] == props.value);
                //console.log(country);
                setapiData(response);
            }
            getCountry();
        }
                

    }, [props.value])
    console.log(apiData);
    return (
       <div>
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} elevation={3}>
                    <Paper className={classes.paper} id='globalCases'>
                        <h3>Total Cases</h3>
                        <h3>{apiData['cases']}</h3>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} elevation={3}>
                    <Paper className={classes.paper} id='globalRecover'>
                        <h3>Total Recovered</h3>
                        <h3>{apiData['recovered']}</h3>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} elevation={3}>
                    <Paper className={classes.paper} id='globalDeaths'>
                        <h3>Total Deaths</h3>
                        <h3>{apiData['deaths']}</h3>
                    </Paper>
                </Grid>
            </Grid>
            </div>
            <Chart apiData={{ cases: apiData['cases'], recovered: apiData['recovered'], deaths: apiData['deaths'] }} />
       </div>
    );
}
