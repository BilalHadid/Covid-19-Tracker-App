import React  from 'react'
import Box from '@material-ui/core/Box';
import {Button} from "@material-ui/core"

export const Card = ({finalize, currentDate}) => {
    return(
        <div>
            <div>
            <h1>Confirmed Cases</h1>
            <h3>{finalize.NewConfirmed}</h3>
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

