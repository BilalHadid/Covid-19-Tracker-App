import React from 'react'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core"
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"
import avator from '../images/tenor.gif'



export const Header = () => {
    return(
        <Box component= "nav">
            <AppBar >
                <Toolbar>
                    <IconButton>
                        <ArrowBack/>
                    </IconButton>
                    <Typography variant="h5" align="right">Covid 19 </Typography>
                    <Typography  >{new Date().toDateString()}</Typography>
                    <Avatar src ={avator} alt="Rusel"/>
                </Toolbar>
            </AppBar>

        </Box>
        
    )
}