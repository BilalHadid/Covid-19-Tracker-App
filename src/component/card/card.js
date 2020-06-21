import React  from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Cards from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      background: "#4D26B7"
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    }
  });

export const Card = ({finalize, currentDate}) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return(
        
        <div>
            <div>
            <h1>New Confirmed</h1>
            <h2>{finalize.NewConfirmed}</h2>
            <h1>New Death</h1>
            <h2>{finalize.NewDeaths}</h2>
            <h1>New Recovered</h1>
            <h2>{finalize.NewRecovered}</h2>
            <h1>Total Confirmed</h1>
            <h2>{finalize.TotalConfirmed}</h2>
            <h1>Total Deaths</h1>
            <h2>{finalize.TotalDeaths}</h2>
            <h1>Total Recovered</h1>
            <h2>{finalize.TotalRecovered}</h2>
            </div>
            <div>
                <h1>Current Date</h1>
                <h2>{new Date(currentDate).toDateString()}</h2>
            </div>
            
        </div>
    )
}   

