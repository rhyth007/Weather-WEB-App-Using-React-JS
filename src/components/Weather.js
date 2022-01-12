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
		'@media (max-width: 780px)' : {
			width : '75%',
		  },
		  '@media (max-width: 580px)' : {
			width: '100%',
		
		},
        margin : '0 auto'
     
        
	},
	leftContainer: {
		backgroundImage: `url(${logo})`,
		height: '80%',
		width: '35%',
        backgroundSize : 'cover',
        borderRadius : '20px 0 0 20px',
		'@media (max-width: 780px)' : {
			width: '45%',
			
		},
		'@media (max-width: 580px)' : {
			width: '50%',
		
		},
		'@media (max-height: 568px)' : {
			height : '100%',
			borderRadius : '0 0 0 0'
		
		},
		
      
	},
    rightContainer:{
        background: 'linear-gradient(to right,#e74c3c,#e67e22)',
        height : '80%',
        width  : '65%' ,
		'@media (max-width: 622px)' : {
			width: '70%',
		
		},
		'@media (max-width: 580px)' : {
			width: '50%',
		
		},
		'@media (max-height: 568px)' : {
			height : '100%',
		
		},
		'@media (max-width: 450px)' : {
			width: '58%',
		
		},

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
