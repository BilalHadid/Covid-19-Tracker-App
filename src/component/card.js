import React,{Fragment} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import avator from '../icons/TotalCases.png'
import avators from '../icons/TotalDeath.png'
import avatory from '../icons/recovered.png'
import avamtor from '../icons/countries.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minWidth: '200',
    maxWidth: '20rem',
    margin: '3%',
    float: 'left',

    background: "#6900E2",
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
  OverAll:{
      display: "inline-block"
  }
}));


export const Cards = () => {
    const classes = useStyles();
    return(
        <Fragment >
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
        <Card className={classes.root} style={{background: '#FF2B74'}}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    Total Death
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    58,96023
                </Typography>
                </CardContent>
            
            </div>
            <CardMedia
                className={classes.cover}
                image={avators}
                title="Total Cases"
            />
        </Card>
        <Card className={classes.root} style={{background: '#00E1A2'}}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    Recovered
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    58,96023
                </Typography>
                </CardContent>
            
            </div>
            <CardMedia
                className={classes.cover}
                image={avatory}
                title="Total Cases"
            />
        </Card>
        <Card className={classes.root} style={{background: '#FFCA00'}}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    Countries
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    58,96023
                </Typography>
                </CardContent>
            
            </div>
            <CardMedia
                className={classes.cover}
                image={avamtor}
                title="Total Cases"
            />
        </Card>
       
    </Fragment>
    )

    
}