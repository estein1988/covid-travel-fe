import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 275,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },  
    greenAvatar: {
        backgroundColor: green[500],
    },  
}))

export default function CountryCard({country, clickAction}) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <div className="country-cards">
            <Card className={classes.root}>
                <CardHeader
                avatar={
                    <Avatar aria-label="country-cards" className={country.current_status === 'open' ? classes.greenAvatar : classes.avatar}>
                        {country.country_name.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                    <MoreVertIcon />
                    </IconButton>
                }
                title={country.country_name}
                subheader={'Current Status: ' + country.current_status.charAt(0).toUpperCase() + country.current_status.slice(1)}
                />
                <CardMedia
                    className={classes.media}
                    image={country.country_flag}
                    title="Country Flag"
                />
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {'Days to Quarantine Upon Arrival: ' + country.days_to_quarantine}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon 
                            onClick={() => clickAction(country)}
                        />
                    </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="h6">Closed Exceptions:</Typography>
                        <Typography paragraph>
                            {country.closed_exceptions.join('; ')}
                        </Typography>
                        <Typography variant="h6">Travel Requirements:</Typography>
                        <Typography paragraph>
                            {country.international_travel_requirements.join('; ')}
                        </Typography>
                        <Typography variant="h6">Travel Notes:</Typography>
                        <Typography paragraph>
                            {country.international_travel_note.join('; ')}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}