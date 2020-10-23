import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 18,
    },
})

export default function GeoCard({location}) {
const classes = useStyles()
    return (
        <div className="geoCards">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    </Typography>
                    <Typography variant="h6" component="h4">
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