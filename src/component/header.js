import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    Avatar,
    Typography,
    Box
} from "@material-ui/core"

import avator from '../images/tenor.gif'

const useStyles = makeStyles({
    menuContainer:{
        color: 'white',
        align: 'center',
        display: 'center'
        
    }
})


export const Header = () => {
    const classes = useStyles();
    return(
        <Box component= "nav">
            <AppBar >
                <Toolbar >
                    
                    <Avatar src ={avator} alt="Rusel" className={classes.menuContainer}/>
                    <Typography variant="h5"  className={classes.menuContainer}>Covid 19 </Typography>
                    
                </Toolbar>
            </AppBar>

        </Box>
        
    )
}