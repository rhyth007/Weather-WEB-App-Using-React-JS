import { Box, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Info from "./Info";
import { getData } from "../services/api";
const useStyles = makeStyles({
	input: {
		color: "#fff !important",
		marginRight: "5px !important",
	},
	components: {
		padding: 10,
		background: "#445A6f",
	},
});

function Form() {
	const classes = useStyles();
	const [data, setdata] = useState();
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [click, handleClick] = useState(false);


	const handleCityChange = (value) => {
		setCity(value);
	};
	const handleCountryChange = (value) => {
		setCountry(value);
	};
	
	useEffect(() => {

	const getW = async () => {
			await getData(city, country).then((response) => {
				setdata(response.data);
				console.log(response.data);
			});
		
		};
		getW();
		handleClick(false);
		// eslint-disable-next-line
	},[click]);


	return (
		<>
			<Box className={classes.components}>
				<TextField
					variant="standard"
					inputProps={{ className: classes.input }}
					onChange={(e) => handleCityChange(e.target.value)}
					label="City"
					className={classes.input}
				/>

				<TextField
					variant="standard"
					label="Country"
					onChange={(e) => handleCountryChange(e.target.value)}
					inputProps={{ className: classes.input }}
					className={classes.input}
				/>
				<Button
					variant="contained"
					sx={{
						width: 150,
						height: 40,
						background: "#e67e22",
						"&:hover": {
							background: "#e67e22",
							color: "white",
						},
						color: "white",
						marginTop: 1,
					}}
					onClick={() => handleClick(true)}
				>
					GET WEATHER
				</Button>
			</Box>
			<Info data={data}></Info>
		</>
	);
}

export default Form;
