import '../style/style.css';
import React from 'react';
import MenuComp from "./MenuComp";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({

	root: {
		flexGrow: 0,
		backgroundColor: "#bc865c",
		textAlign: "left",
		'@media (max-width: 50em)': { 
      textAlign: "center",
    }
	},

	right: {
		textAlign: "right",
		'@media (max-width: 50em)': { 
      textAlign: "center",
    }
	}

		
}));

const Homepage = () => {

	const classes = useStyles();
	

	return (
    <div className={classes.root}>
      <div className="border">
        <Grid container spacing={10}>
          <Grid item>
            <MenuComp />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
				
						<div className="text">
              <h5>vásárlásról és  kiszállításról</h5>
              <h5>termékek listája</h5>
              <h5>szolgáltatások</h5>
              <h5>kapcsolat</h5>
            </div>
				
          </Grid>

					<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
				
					</Grid>
						<Grid item md={6} lg={6} xl={6}>
          
          </Grid>
					<Grid item md={6} lg={6} xl={6}>
        
          </Grid>
          <Grid className={classes.right}
            item xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="text">
						<h5>általános szerződési feltételek</h5>
            <h5>adatkezelési nyilatkozat</h5>
            <h5>impresszum</h5>
						</div>
          </Grid>
          <Grid className="bottom" item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1>morella</h1>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Homepage;
