import React from "react";
import { Box, Typography } from "@mui/material";
//import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import DehazeIcon from "@mui/icons-material/Dehaze";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";

const useStyles = makeStyles((theme) => ({
	component: {
		margin: 5,
	},
	value: {
		color: "#fff",
	},

	icons: {
		marginRight: "20px !important",
		position: "relative",
		top: 5,
		color: "darkred",
		'@media (max-width: 540px)' : {
			
			marginRight: "8px !important"
		
		},
	},
	cot: {
		padding: 1,
		fontSize: "16px !important",
		"@media(max-width : 480px)": {
			fontSize: "12px !important",

		},
		'@media (max-width: 390px)' : {
			fontSize: "11px !important",
			
		
		},
		'@media (max-width: 379px)' : {
			fontSize: "9px !important",
			
		
		},
		letterSpacing: "2px !important",
		textAlign: "left",
		fontWeight: "bolder !important",
	},
}));

function Info({ data }) {
	const classes = useStyles();

	return data ? (
		<Box className={classes.component}>
			<Typography className={classes.cot}>
				<LocationOnIcon className={classes.icons} />
				Location:{" "}
				<Box component="span" className={classes.value}>
					{" "}
					{data.name},{data.sys.country}
				</Box>
			</Typography>
			<Typography className={classes.cot}>
				<DeviceThermostatIcon className={classes.icons} />
				Temperature:{" "}
				<Box component="span" className={classes.value}>
					{data.main.temp}°C
				</Box>
			</Typography>
			<Typography className={classes.cot}>
				<OpacityIcon className={classes.icons} />
				Humidity:{" "}
				<Box component="span" className={classes.value}>
					{data.main.humidity}%
				</Box>
			</Typography>
			<Typography className={classes.cot}>
				<Brightness5Icon className={classes.icons} />
				Sunrise:{" "}
				<Box component="span" className={classes.value}>
					{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
				</Box>
			</Typography>
			<Typography className={classes.cot}>
				<Brightness6Icon className={classes.icons} />
				Sunset:{" "}
				<Box component="span" className={classes.value}>
					{new Date(data.sys.sunset * 1000).toLocaleTimeString()}
				</Box>
			</Typography>
			<Typography className={classes.cot}>
				<DehazeIcon className={classes.icons} />
				Conditions:{" "}
				<Box component="span" className={classes.value}>
					{data.weather[0].main}
				</Box>
			</Typography>
			<Typography className={classes.cot}>
				<WbCloudyIcon className={classes.icons} />
				Clouds:{" "}
				<Box component="span" className={classes.value}>
					{data.clouds.all}%
				</Box>
			</Typography>
		</Box>
	) : (
		""
	);
}

export default Info;
