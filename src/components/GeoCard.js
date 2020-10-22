import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 18,
    },
});

export default function GeoCard({location}) {
    const classes = useStyles();
    return (
    <div className="geoCards">
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                </Typography>
                <Typography variant="h5" component="h2">
                    {location.place_name}
                </Typography>
                <Typography className={classes.pos} component="h6" color="textSecondary">
                {location.center[1]}{', '}{location.center[0]}
                </Typography>
                <Typography variant="body2" component="h6">
                <br />
                </Typography>
            </CardContent>
        </Card>
    </div>
    )
}


// /* <h3 class="header">{this.props.location.place_name} </h3>
//                 <p class="header">{this.props.location.center[1]} </p>
//                 <p class="header">{this.props.location.center[0]} </p>