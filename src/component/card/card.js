import React  from 'react'
import Box from '@material-ui/core/Box';
import {Button} from "@material-ui/core"

export const Card = ({finalize, currentDate}) => {
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
            <Box component="span" m={1}>
                    <Button color="primary"/>
            </Box>
        </div>
    )
}   

