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



export const Header = () => {
    return(
        <Box component= "nav">
            <AppBar >
                <Toolbar>
                    <IconButton>
                        <ArrowBack/>
                    </IconButton>
                    <Typography variant="h5">Covid 19 </Typography>
                    <Typography variant="h6" style={{textAlign:"center"}}>{new Date().toDateString()}</Typography>
                </Toolbar>
            </AppBar>

        </Box>
        
    )
}