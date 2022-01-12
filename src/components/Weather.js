import React from "react";
import logo from "../images/bg.jpg";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Form from "./Form";

const useStyles = makeStyles({
	component: {
		height: '100vh',  
        display : 'flex',
        alignItems: 'center',
        width : '65%',
        margin : '0 auto'
     
        
	},
	leftContainer: {
		backgroundImage: `url(${logo})`,
		height: '80%',
		width: '35%',
        backgroundSize : 'cover',
        borderRadius : '20px 0 0 20px'
      
	},
    rightContainer:{
        background: 'linear-gradient(to right,#e74c3c,#e67e22)',
        height : '80%',
        width  : '60%' 

    }
});

function Weather() {
	const classes = useStyles();
	return (
		<Box className={classes.component}>
			<Box className={classes.leftContainer}></Box>
			<Box className={classes.rightContainer}>
                <Form/>
            </Box>
		</Box>
	);
}

export default Weather;
