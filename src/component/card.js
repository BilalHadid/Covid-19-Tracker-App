import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import avator from '../icons/TotalCases.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: "#6900E2",
    minWidth: '200',
    maxWidth: '18rem'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 100,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));


export const Cards = () => {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    Total Cases
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    58,96023
                </Typography>
                </CardContent>
            
            </div>
            <CardMedia
                className={classes.cover}
                image={avator}
                title="Total Cases"
            />
    </Card>
    )

    
}