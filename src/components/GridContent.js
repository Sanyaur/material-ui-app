import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardDog from './CardDog';
import CardCat from './CardCat';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const marginTop = {
    marginTop: 25,
};

const maxHeight = {
    height: 100 + "%"
};

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div style={marginTop} className={classes.root}>
            <Grid maxWidth="sm" container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Box display="flex" justifyContent="center" >
                        <CardDog
                            header="Dog"
                            detailText="Dogs are cute, everybody love dogs"
                            learnURL="https://en.wikipedia.org/wiki/Dogs" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <Box style={maxHeight} alignItems="center" display="flex" justifyContent="center" >
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</div>
                    </Box> */}
                    <Box display="flex" justifyContent="center" >
                        <CardCat
                            header="Cat"
                            detailText="Cats are cute, everybody love cats"
                            learnURL="https://en.wikipedia.org/wiki/Dogs" />
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>Lorem ipsum </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>Lorem ipsum </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>Lorem ipsum </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>Lorem ipsum </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
